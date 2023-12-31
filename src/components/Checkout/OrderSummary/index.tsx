import { useContext, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../contexts/CartContext";
import { CheckoutFormData } from "../../../types/checkoutForm";
import { defaultCurrency } from "../../../utils/currency";
import { Title } from "../styles";
import { OrderItem } from "./OrderItem";
import { ConfirmOrder, Container, OrderDetailsContainer, OrderItemContainer, OrderSummaryDetailContainer, OrderSummaryDetailsContainer, OrderTotalContainer } from "./styles";

export function OrderSummary() {
  const cart = useContext(CartContext);
  const form = useFormContext<CheckoutFormData>();
  const navigate = useNavigate();

  function handleOrderItemRemove(coffeeId: string) {
    cart?.removeCoffeeFromCart(coffeeId);
  }

  function handleOrderItemRemoveUnit(coffeeId: string) {
    cart?.updateCoffeeUnitFromCart(coffeeId, "remove");
  }

  function handleOrderItemAddUnit(coffeeId: string) {
    cart?.updateCoffeeUnitFromCart(coffeeId, "add");
  }

  function handleFormSubmit(formData: CheckoutFormData) {
    navigate("/success", { state: formData });
  }

  useEffect(() => {
    form.setValue("cartItems", cart?.cartItems ?? []);
  }, [cart]);

  return (
    <Container>
      <Title>
        Selected coffees
      </Title>

      <OrderDetailsContainer>
        {cart?.cartItems?.map((orderItem) => (
          <OrderItemContainer key={orderItem.id}>
            <OrderItem
              {...orderItem}
              onRemoveOrderItem={handleOrderItemRemove}
              onRemoveOrderItemUnit={handleOrderItemRemoveUnit}
              onAddOrderItemUnit={handleOrderItemAddUnit}
            />

            <hr />
          </OrderItemContainer>
        ))}

        <OrderSummaryDetailsContainer>
          <OrderSummaryDetailContainer>
            <span>
              Total items
            </span>
            <span>
              {defaultCurrency} {cart?.subtotalPrice}
            </span>
          </OrderSummaryDetailContainer>

          <OrderSummaryDetailContainer>
            <span>
              Delivery
            </span>
            <span>
              {defaultCurrency} {cart?.deliveryPrice}
            </span>
          </OrderSummaryDetailContainer>

          <OrderTotalContainer>
            <span>
              Total
            </span>
            <span>
              {defaultCurrency} {cart?.totalPrice}
            </span>
          </OrderTotalContainer>
        </OrderSummaryDetailsContainer>

        <ConfirmOrder
          type="submit"
          onClick={form.handleSubmit(handleFormSubmit)}
        >
          Confirm order
        </ConfirmOrder>
      </OrderDetailsContainer>
    </Container>
  );
}