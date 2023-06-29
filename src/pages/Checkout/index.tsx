import { FormProvider, useForm } from "react-hook-form";
import { CheckoutForm } from "../../components/Checkout/CheckoutForm";
import { OrderSummary } from "../../components/Checkout/OrderSummary";
import { Container } from "./styles";

export function Checkout() {
  const checkoutForm = useForm();

  return (
    <FormProvider {...checkoutForm}>
      <Container>
        <CheckoutForm />
        <OrderSummary />
      </Container>
    </FormProvider>
  )
}