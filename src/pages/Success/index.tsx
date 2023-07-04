import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

export function Success() {
  const { state } = useLocation();
  const cart = useContext(CartContext);
  const orderDetails = state;

  useEffect(() => {
    document.title = "Coffee Delivery - Confirmation";
    cart?.clearCartInLocalStorage();
  }, [cart]);

  return (
    <>

    </>
  )
}