import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import EmptyCart from "../../assets/emptyCart.png";
import { CheckoutForm } from "../../components/Checkout/CheckoutForm";
import { OrderSummary } from "../../components/Checkout/OrderSummary";
import { CartContext } from "../../contexts/CartContext";
import { checkoutFormInitialValue, newOrderSchema } from "../../schemas/checkoutForm";
import { CheckoutFormData } from "../../types/checkoutForm";
import { Container, EmptyCartContainer } from "./styles";

export function Checkout() {
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(newOrderSchema),
    defaultValues: checkoutFormInitialValue
  });

  const cart = useContext(CartContext);

  useEffect(() => {
    document.title = "Coffee Delivery - Checkout";
  }, []);

  return (
    <FormProvider {...checkoutForm}>
      {cart?.totalUnits as number === 0 ? (
        <EmptyCartContainer>
          <img src={EmptyCart} alt="Empty Cart Image" width={64} height={64} />
          <p>Your cart does not have any coffee yet.</p>
        </EmptyCartContainer>
      ) : (
        <Container>
          <CheckoutForm />
          <OrderSummary />
        </Container>
      )}
    </FormProvider >
  )
}