import { useContext, useState } from "react";
import ShoppingCart from "../../../assets/ShoppingCart.svg";
import { CartContext } from "../../../contexts/CartContext";
import { Coffee } from "../../../types/coffees";
import { Tag } from "./Tag";
import {
  ButtonsContainer,
  Container,
  Description,
  FooterContainer,
  Image,
  Name,
  Price,
  SelectorContainer,
  SelectorCount,
  ShoppingCartIcon,
  Signal,
  TagsContainer
} from "./styles";

export function CoffeeCard({ id, name, description, imageName, tags, price }: Coffee) {
  const [coffeeUnits, setCoffeeUnits] = useState<number>(1);

  const cart = useContext(CartContext);

  const minCoffeeOrder = 2;
  const maxCoffeeOrder = 25;

  function handleCounterSubtract() {
    if (coffeeUnits >= minCoffeeOrder)
      setCoffeeUnits(prev => prev - 1);
  }

  function handleCounterAdd() {
    if (coffeeUnits < maxCoffeeOrder)
      setCoffeeUnits(prev => prev + 1);
  }

  return (
    <Container>
      <Image src={imageName} width={120} height={120} alt="" />

      <TagsContainer>
        {tags.map((tag) => (
          <Tag label={tag} />
        ))}
      </TagsContainer>

      <Name>
        {name}
      </Name>

      <Description>
        {description}
      </Description>

      <FooterContainer>
        <Price>
          <span>US$</span>
          {price}
        </Price>

        <ButtonsContainer>
          <SelectorContainer>
            <button onClick={handleCounterSubtract}>
              <Signal>
                −
              </Signal>
            </button>

            <SelectorCount>
              {coffeeUnits}
            </SelectorCount>

            <button onClick={handleCounterAdd}>
              <Signal>
                +
              </Signal>
            </button>
          </SelectorContainer>

          <button
            onClick={
              () => cart?.addCoffeeToCart({
                id,
                name,
                imageName,
                price,
                units: coffeeUnits.toString()
              })}
          >
            <ShoppingCartIcon src={ShoppingCart} alt="" />
          </button>
        </ButtonsContainer>
      </FooterContainer>
    </Container>
  )
}
