import CoffeDeliveryIntroImage from "../../assets/CoffeDeliveryIntro.png";
import Cart from "../../assets/IntroItems/Cart.svg";
import Clock from "../../assets/IntroItems/Clock.svg";
import Cup from "../../assets/IntroItems/Cup.svg";
import Packet from "../../assets/IntroItems/Packet.svg";
import {
  IntroContainer,
  ItemContainer,
  ItemText,
  ItemsContainer,
  Subtitle,
  TextContainer,
  Title
} from "./styles";

export function Intro() {
  return (
    <IntroContainer>
      <TextContainer>
        <Title>
          Find the perfect coffee for any time of the day
        </Title>

        <Subtitle>
          With Coffee Delivery you receive your cofee where you are, anytime
        </Subtitle>

        <ItemsContainer>
          <ItemContainer>
            <img src={Cart} alt="" />
            <ItemText>
              Simples and safe purchase
            </ItemText>
          </ItemContainer>
          <ItemContainer>
            <img src={Packet} alt="" />
            <ItemText>
              Packaging keeps the coffee intact
            </ItemText>
          </ItemContainer>
          <ItemContainer>
            <img src={Clock} alt="" />
            <ItemText>
              Fast and tracked delivery
            </ItemText>
          </ItemContainer>
          <ItemContainer>
            <img src={Cup} alt="" />
            <ItemText>
              Coffee arrives fresh to you
            </ItemText>
          </ItemContainer>
        </ItemsContainer>
      </TextContainer>

      <img src={CoffeDeliveryIntroImage} alt="" />
    </IntroContainer>
  )
}