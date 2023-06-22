import { useState } from "react";
import ShoppingCart from "../../../assets/ShoppingCart.svg";
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

export function CoffeeCard({ name, description, imageName, tags, price }: Coffee) {
  const [selectorCount, setSelectorCount] = useState<number>(1);

  const minCoffeeOrder = 2;
  const maxCoffeeOrder = 25;

  function handleCounterSubtract() {
    if (selectorCount >= minCoffeeOrder)
      setSelectorCount(prev => prev - 1);
  }

  function handleCounterAdd() {
    if (selectorCount < maxCoffeeOrder)
      setSelectorCount(prev => prev + 1);
  }

  function handleAddCoffeeToCart() {

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
              {selectorCount}
            </SelectorCount>

            <button onClick={handleCounterAdd}>
              <Signal>
                +
              </Signal>
            </button>
          </SelectorContainer>

          <button onClick={handleAddCoffeeToCart}>
            <ShoppingCartIcon src={ShoppingCart} alt="" />
          </button>
        </ButtonsContainer>
      </FooterContainer>
    </Container>
  )
}
