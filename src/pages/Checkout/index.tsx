import { CheckoutForm } from "../../components/Checkout/CheckoutForm";
import { OrderSummary } from "../../components/Checkout/OrderSummary";
import { Container } from "./styles";

export function Checkout() {
  return (
    <Container>
      <CheckoutForm />
      <OrderSummary />
    </Container>
  )
}