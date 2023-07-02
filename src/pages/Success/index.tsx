import { useLocation } from "react-router-dom";

export function Success() {
  const { state } = useLocation();
  const orderDetails = state;

  return <h1>Success</h1>
}