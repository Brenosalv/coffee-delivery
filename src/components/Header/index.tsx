import { useContext } from "react";
import CartIcon from "../../assets/Cart.svg";
import LocationIcon from "../../assets/Location.svg";
import LogoImg from "../../assets/Logo.svg";
import { CartContext } from "../../contexts/CartContext";
import {
  BadgeContainer,
  CartContainer,
  HeaderContainer,
  LocationAndCart,
  LocationContainer,
  UserLocation
} from "./styles";

export function Header() {
  const cart = useContext(CartContext);

  return (
    <HeaderContainer>
      <img src={LogoImg} alt="Coffee Delivery" />

      <LocationAndCart>
        <LocationContainer>
          <img src={LocationIcon} alt="Location icon" />

          <UserLocation>
            Campina Grande, PB
          </UserLocation>
        </LocationContainer>

        <CartContainer>
          {cart?.totalUnits && cart.totalUnits > 0 && (
            <BadgeContainer>
              <span>
                {cart?.totalUnits}
              </span>
            </BadgeContainer>
          )}
          <img src={CartIcon} alt="Cart" />
        </CartContainer>
      </LocationAndCart>
    </HeaderContainer>
  )
}