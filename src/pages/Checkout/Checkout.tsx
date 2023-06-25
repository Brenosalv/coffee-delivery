import { OrderSummary } from "../../components/Checkout/OrderSummary";
import { UserProfileForm } from "../../components/Checkout/UserProfileForm";
import { Container } from "./styles";

export function Checkout() {
  return (
    <Container>
      <UserProfileForm />
      <OrderSummary />
    </Container>
  )
}