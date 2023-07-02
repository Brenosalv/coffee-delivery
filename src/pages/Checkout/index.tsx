import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { CheckoutForm } from "../../components/Checkout/CheckoutForm";
import { OrderSummary } from "../../components/Checkout/OrderSummary";
import { checkoutFormInitialValue, newOrderSchema } from "../../schemas/checkoutForm";
import { CheckoutFormData } from "../../types/checkoutForm";
import { Container } from "./styles";

export function Checkout() {
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(newOrderSchema),
    defaultValues: checkoutFormInitialValue
  });

  document.title = "Coffee Delivery - Checkout";

  return (
    <FormProvider {...checkoutForm}>
      <Container>
        <CheckoutForm />
        <OrderSummary />
      </Container>
    </FormProvider>
  )
}