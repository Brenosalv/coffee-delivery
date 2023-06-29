import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { defaultCurrency } from "../../../utils/currency";
import { Title } from "../styles";
import { OrderItem } from "./OrderItem";
import { Container, OrderDetailsContainer, OrderItemContainer, OrderSummaryDetailContainer, OrderSummaryDetailsContainer, OrderTotalContainer } from "./styles";

export function OrderSummary() {
  const cart = useContext(CartContext);

  function handleOrderItemRemove(coffeeId: string) {
    cart?.removeCoffeeFromCart(coffeeId);
  }

  function handleOrderItemRemoveUnit(coffeeId: string) {
    cart?.updateCoffeeUnitFromCart(coffeeId, "remove");
  }

  function handleOrderItemAddUnit(coffeeId: string) {
    cart?.updateCoffeeUnitFromCart(coffeeId, "add");
  }

  return (
    <Container>
      <Title>
        Selected coffees
      </Title>

      <OrderDetailsContainer>
        {cart?.cartItems?.map((orderItem) => (
          <OrderItemContainer>
            <OrderItem
              key={orderItem.id}
              onRemoveOrderItem={handleOrderItemRemove}
              onRemoveOrderItemUnit={handleOrderItemRemoveUnit}
              onAddOrderItemUnit={handleOrderItemAddUnit}
              {...orderItem}
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
      </OrderDetailsContainer>
    </Container>
  );
}