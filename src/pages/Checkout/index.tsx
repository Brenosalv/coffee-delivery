import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { CheckoutForm } from "../../components/Checkout/CheckoutForm";
import { OrderSummary } from "../../components/Checkout/OrderSummary";
import { newOrderSchema } from "../../schemas/checkoutForm";
import { CheckoutFormData } from "../../types/checkoutForm";
import { Container } from "./styles";

export function Checkout() {
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(newOrderSchema),
    defaultValues: {
      cep: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
      paymentMethod: "",
      cartItems: [{
        id: "",
        name: "",
        price: "",
        units: 0,
      }],
    }
  });

  return (
    <FormProvider {...checkoutForm}>
      <Container>
        <CheckoutForm />
        <OrderSummary />
      </Container>
    </FormProvider>
  )
}