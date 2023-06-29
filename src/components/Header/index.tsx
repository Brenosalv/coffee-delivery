import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartIcon from "../../assets/generalIcons/Cart.svg";
import LocationIcon from "../../assets/generalIcons/Location.svg";
import LogoImg from "../../assets/generalIcons/Logo.svg";
import { CartContext } from "../../contexts/CartContext";
import {
  BadgeContainer,
  CartButton,
  HeaderContainer,
  LocationAndCart,
  LocationContainer,
  Logo,
  UserLocation
} from "./styles";

export function Header() {
  const cart = useContext(CartContext);

  const navigate = useNavigate();

  function handleCartButtonClick() {
    navigate("/checkout");
  }

  function handleLogoClick() {
    navigate("/");
  }

  return (
    <HeaderContainer>
      <Logo src={LogoImg} alt="Coffee Delivery" onClick={handleLogoClick} />

      <LocationAndCart>
        <LocationContainer>
          <img src={LocationIcon} alt="Location icon" />

          <UserLocation>
            Campina Grande, PB
          </UserLocation>
        </LocationContainer>

        <CartButton onClick={handleCartButtonClick}>
          {cart?.totalUnits && cart.totalUnits > 0 ? (
            <BadgeContainer>
              <span>
                {cart?.totalUnits}
              </span>
            </BadgeContainer>
          ) : ""}
          <img src={CartIcon} alt="Cart" />
        </CartButton>
      </LocationAndCart>
    </HeaderContainer>
  )
}