import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { Title } from "../styles";
import { OrderItem } from "./OrderItem";
import { Container, OrderDetailsContainer, OrderItemContainer, OrderSummaryDetailContainer, OrderSummaryDetailsContainer, OrderTotalContainer } from "./styles";

export function OrderSummary() {
  const cart = useContext(CartContext);

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
              US$ {cart?.subtotalPrice}
            </span>
          </OrderSummaryDetailContainer>

          <OrderSummaryDetailContainer>
            <span>
              Delivery
            </span>
            <span>
              US$ {cart?.deliveryPrice}
            </span>
          </OrderSummaryDetailContainer>

          <OrderTotalContainer>
            <span>
              Total
            </span>
            <span>
              US$ {cart?.totalPrice}
            </span>
          </OrderTotalContainer>
        </OrderSummaryDetailsContainer>
      </OrderDetailsContainer>
    </Container>
  );
}