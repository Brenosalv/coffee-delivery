import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MotoboyDelivering from "../../assets/MotoboyDelivering.png";
import ClockIcon from "../../assets/generalIcons/Clock.svg";
import LocationIcon from "../../assets/generalIcons/Location3.svg";
import MoneyIcon from "../../assets/generalIcons/Money2.svg";
import { CartContext } from "../../contexts/CartContext";
import { CheckoutFormData } from "../../types/checkoutForm";
import { BodyContainer, HeaderContainer, MotoboyImage, OrderDetailsContainer, OrderDetailsContainerBorderWrapper } from "./styles";

export function Success() {
  const { state } = useLocation();
  const cart = useContext(CartContext);
  const orderDetails: CheckoutFormData = state;

  useEffect(() => {
    document.title = "Coffee Delivery - Confirmation";
    cart?.clearCartInLocalStorage();
  }, []);

  return (
    <>
      <HeaderContainer>
        <h1>
          Uhu! Order confirmed
        </h1>

        <h2>
          Now just wait and the coffee will arrive to you
        </h2>
      </HeaderContainer>

      <BodyContainer>
        <OrderDetailsContainerBorderWrapper>
          <OrderDetailsContainer>
            <div>
              <img src={LocationIcon} alt="" />

              <div>
                <p>
                  Delivery to <span>{orderDetails.street}</span>
                </p>

                <p>
                  {orderDetails.neighborhood} - {orderDetails.city}, {orderDetails.state}
                </p>
              </div>
            </div>

            <div>
              <img src={ClockIcon} alt="" />

              <div>
                <p>
                  Delivery in
                </p>

                <span>
                  20 min - 30 min
                </span>
              </div>
            </div>

            <div>
              <img src={MoneyIcon} alt="" />

              <div>
                <p>
                  Payment on-site
                </p>

                <span>
                  {orderDetails.paymentMethod}
                </span>
              </div>
            </div>
          </OrderDetailsContainer>
        </OrderDetailsContainerBorderWrapper>

        <MotoboyImage src={MotoboyDelivering} alt="Motoboy delivering" />
      </BodyContainer>
    </>
  )
}