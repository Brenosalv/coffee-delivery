import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { CheckoutForm } from "../../components/Checkout/CheckoutForm";
import { OrderSummary } from "../../components/Checkout/OrderSummary";
import { Container } from "./styles";

const newOrderSchema = zod.object({
  cep: zod.string().nonempty("Add your CEP"),
  street: zod.string().nonempty("Add your street"),
  number: zod.string().nonempty("Type a number"),
  complement: zod.string().optional(),
  neighborhood: zod.string().nonempty("Add your neighborhood"),
  city: zod.string().nonempty("Add your city"),
  state: zod.string().nonempty("Add your state (Ex.: PB)"),
  paymentMethod: zod.string().nonempty("Select a payment method"),
  cartItems: zod.array(zod.object({
    id: zod.string().nonempty("Required product id"),
    name: zod.string().nonempty("Required product name"),
    price: zod.string().nonempty("Should be more than zero"),
    units: zod.number().min(1, "Required at least 1 unit"),
  })),
});

export function Checkout() {
  const checkoutForm = useForm({
    resolver: zodResolver(newOrderSchema)
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