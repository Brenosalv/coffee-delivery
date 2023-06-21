import CartIcon from "../../assets/Cart.svg";
import LocationIcon from "../../assets/Location.svg";
import LogoImg from "../../assets/Logo.svg";
import {
  CartContainer,
  HeaderContainer,
  LocationAndCart,
  LocationContainer,
  UserLocation
} from "./styles";

export function Header() {
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
          <img src={CartIcon} alt="Cart" />
        </CartContainer>
      </LocationAndCart>
    </HeaderContainer>
  )
}