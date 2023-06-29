import { ReactNode, createContext, useEffect, useState } from "react";
import { CoffeeCartDetails } from "../types/coffees";

interface CartContextData {
  totalUnits: number | null;
  subtotalPrice: string | null;
  totalPrice: string | null;
  deliveryPrice: string;
  cartItems: CoffeeCartDetails[];
  addCoffeeToCart: (coffeeCartDetails: CoffeeCartDetails) => void;
  removeCoffeeFromCart: (coffeeId: string) => void;
  updateCoffeeUnitFromCart: (coffeeId: string, signal: "add" | "remove") => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartContextData | null>(null);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [totalUnits, setTotalUnits] = useState<number | null>(null);
  const [subtotalPrice, setSubtotalPrice] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CoffeeCartDetails[]>([]);
  const [wasCartUpdated, setWasCartUpdated] = useState(false);

  const deliveryPrice = (4.5).toFixed(2);
  const totalPrice = (Number(subtotalPrice ?? 0) + Number(deliveryPrice)).toFixed(2);

  useEffect(() => {
    const currentCartItems = localStorage.getItem("@cart");

    if (currentCartItems) {
      const parsedCurrentCartItems: CoffeeCartDetails[] = JSON.parse(currentCartItems);

      setCartItems(parsedCurrentCartItems);

      setTotalUnits(
        parsedCurrentCartItems
          .map(cartItem =>
            cartItem.units)
          .reduce((partialSum, a) => partialSum + Number(a), 0)
      );

      setSubtotalPrice(
        (parsedCurrentCartItems
          .map(cartItem =>
            Number(cartItem.price) * Number(cartItem.units))
          .reduce((partialSum, a) => partialSum + Number(a), 0))
          .toFixed(2)
      );
    }
  }, [wasCartUpdated]);

  function addCoffeeToCart(coffeeCartDetails: CoffeeCartDetails) {
    const currentCartItems = localStorage.getItem("@cart");

    if (currentCartItems) {
      const parsedCurrentCartItems = JSON.parse(currentCartItems);
      localStorage.setItem("@cart", JSON.stringify([...parsedCurrentCartItems, coffeeCartDetails]));
    } else {
      localStorage.setItem("@cart", JSON.stringify([coffeeCartDetails]));
    }

    setWasCartUpdated(prev => !prev);
  }

  function removeCoffeeFromCart(coffeeId: string) {
    const currentCartItems = localStorage.getItem("@cart");

    if (currentCartItems) {
      const parsedCurrentCartItems: CoffeeCartDetails[] = JSON.parse(currentCartItems);
      const updatedCartItems = parsedCurrentCartItems?.filter(cartItem => cartItem.id !== coffeeId)
      localStorage.setItem("@cart", JSON.stringify(updatedCartItems));
    }

    setWasCartUpdated(prev => !prev);
  }

  function updateCoffeeUnitFromCart(coffeeId: string, signal: "add" | "remove") {
    const currentCartItems = localStorage.getItem("@cart");

    if (currentCartItems) {
      const parsedCurrentCartItems: CoffeeCartDetails[] = JSON.parse(currentCartItems);
      const cartItemToUpdate = parsedCurrentCartItems.find((item) => item.id === coffeeId);
      const indexOfCartItemToUpdate = parsedCurrentCartItems.indexOf(cartItemToUpdate ?? {} as CoffeeCartDetails);
      const cartItemUpdated = { ...cartItemToUpdate, units: signal === "add" ? Number(cartItemToUpdate?.units) + 1 : Number(cartItemToUpdate?.units) - 1 };
      const cartItemsWithoutItemToUpdate = parsedCurrentCartItems?.filter(cartItem => cartItem.id !== coffeeId)
      localStorage.setItem("@cart", JSON.stringify([...cartItemsWithoutItemToUpdate.slice(0, indexOfCartItemToUpdate), cartItemUpdated, ...cartItemsWithoutItemToUpdate.slice(indexOfCartItemToUpdate)]));
    }

    setWasCartUpdated(prev => !prev);
  }

  return (
    <CartContext.Provider
      value={{
        totalUnits,
        subtotalPrice,
        totalPrice,
        deliveryPrice,
        cartItems,
        addCoffeeToCart,
        removeCoffeeFromCart,
        updateCoffeeUnitFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}