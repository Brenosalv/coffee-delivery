import { useState } from "react";
import ShoppingCart from "../../../assets/ShoppingCart.svg";
import { Coffee } from "../../../types/coffees";
import { Tag } from "./Tag";
import { Container, Description, FooterContainer, Image, Name, Price, SelectorContainer, SelectorCount, ShoppingCartIcon, Signal, TagsContainer } from "./styles";

export function CoffeeCard({ name, description, imageName, tags, price }: Coffee) {
  const [selectorCount, setSelectorCount] = useState<number>(1);

  function handleCounterSubtract() {
    setSelectorCount(prev => prev - 1);
  }

  function handleCounterAdd() {
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

        <SelectorContainer>
          <Signal onClick={handleCounterSubtract}>
            -
          </Signal>

          <SelectorCount>
            {selectorCount}
          </SelectorCount>

          <Signal onClick={handleCounterAdd}>
            +
          </Signal>
        </SelectorContainer>

        <button onClick={handleAddCoffeeToCart}>
          <ShoppingCartIcon src={ShoppingCart} alt="" />
        </button>
      </FooterContainer>
    </Container>
  )
}
