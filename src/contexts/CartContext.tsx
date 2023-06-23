import { ReactNode, createContext, useEffect, useState } from "react";
import { CoffeeCartDetails } from "../types/coffees";

interface CartContextData {
  totalUnits: number | null;
  addCoffeeToCart: (coffeeCartDetails: CoffeeCartDetails) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartContextData | null>(null);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [totalUnits, setTotalUnits] = useState<number | null>(null);
  const [wasCartUpdated, setWasCartUpdated] = useState(false);

  useEffect(() => {
    const currentCartItems = localStorage.getItem("@cart");

    if (currentCartItems) {
      const parsedCurrentCartItems: CoffeeCartDetails[] = JSON.parse(currentCartItems);

      setTotalUnits(
        parsedCurrentCartItems.map(cartItem =>
          cartItem.units).reduce((partialSum, a) => partialSum + Number(a), 0)
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

  return (
    <CartContext.Provider
      value={{
        totalUnits,
        addCoffeeToCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}