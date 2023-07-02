import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function Success() {
  const { state } = useLocation();
  const orderDetails = state;

  useEffect(() => {
    document.title = "Coffee Delivery - Confirmation";
  }, []);

  return <h1>Success</h1>
}