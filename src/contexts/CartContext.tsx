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
  clearCartInLocalStorage: () => void;
  updateCart: () => void;
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
    const currentCartItems = localStorage.getItem("@coffee-delivery:cart-1.0.0");

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
    } else {
      setTotalUnits(0);
    }
  }, [wasCartUpdated]);

  function updateCart() {
    setWasCartUpdated(prev => !prev);
  }

  function addCoffeeToCart(coffeeCartDetails: CoffeeCartDetails) {
    const currentCartItems = localStorage.getItem("@coffee-delivery:cart-1.0.0");

    if (currentCartItems) {
      const parsedCurrentCartItems: CoffeeCartDetails[] = JSON.parse(currentCartItems);

      const coffeeAlreadyInCart = parsedCurrentCartItems.find(item => item.id === coffeeCartDetails.id);

      if (coffeeAlreadyInCart?.id) {
        const parsedCurrentCartItemsWithoutCoffeeAlreadyInCart = parsedCurrentCartItems.filter(item => item.id !== coffeeAlreadyInCart.id);

        localStorage.removeItem("@coffee-delivery:cart-1.0.0");

        localStorage.setItem(
          "@coffee-delivery:cart-1.0.0",
          JSON.stringify(
            [
              ...parsedCurrentCartItemsWithoutCoffeeAlreadyInCart, {
                ...coffeeCartDetails, units: (Number(coffeeAlreadyInCart.units) + Number(coffeeCartDetails.units)).toString()
              }
            ]
          )
        );
      } else {
        localStorage.setItem("@coffee-delivery:cart-1.0.0", JSON.stringify([...parsedCurrentCartItems, coffeeCartDetails]));
      }
    } else {
      localStorage.setItem("@coffee-delivery:cart-1.0.0", JSON.stringify([coffeeCartDetails]));
    }

    updateCart();
  }

  function removeCoffeeFromCart(coffeeId: string) {
    const currentCartItems = localStorage.getItem("@coffee-delivery:cart-1.0.0");

    if (currentCartItems) {
      const parsedCurrentCartItems: CoffeeCartDetails[] = JSON.parse(currentCartItems);
      const updatedCartItems = parsedCurrentCartItems?.filter(cartItem => cartItem.id !== coffeeId)
      localStorage.setItem("@coffee-delivery:cart-1.0.0", JSON.stringify(updatedCartItems));
    }

    updateCart();
  }

  function updateCoffeeUnitFromCart(coffeeId: string, signal: "add" | "remove") {
    const currentCartItems = localStorage.getItem("@coffee-delivery:cart-1.0.0");

    if (currentCartItems) {
      const parsedCurrentCartItems: CoffeeCartDetails[] = JSON.parse(currentCartItems);
      const cartItemToUpdate = parsedCurrentCartItems.find((item) => item.id === coffeeId);
      const indexOfCartItemToUpdate = parsedCurrentCartItems.indexOf(cartItemToUpdate ?? {} as CoffeeCartDetails);
      const cartItemUpdated = { ...cartItemToUpdate, units: signal === "add" ? (Number(cartItemToUpdate?.units) + 1).toString() : (Number(cartItemToUpdate?.units) - 1).toString() };
      const cartItemsWithoutItemToUpdate = parsedCurrentCartItems?.filter(cartItem => cartItem.id !== coffeeId)
      localStorage.setItem("@coffee-delivery:cart-1.0.0", JSON.stringify([...cartItemsWithoutItemToUpdate.slice(0, indexOfCartItemToUpdate), cartItemUpdated, ...cartItemsWithoutItemToUpdate.slice(indexOfCartItemToUpdate)]));
    }

    updateCart();
  }

  function clearCartInLocalStorage() {
    localStorage.removeItem("@coffee-delivery:cart-1.0.0");
    updateCart();
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
        clearCartInLocalStorage,
        updateCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}