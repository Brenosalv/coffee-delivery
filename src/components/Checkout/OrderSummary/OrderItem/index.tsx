import { useState } from "react";
import TrashIcon from "../../../../assets/trash.svg";
import { CoffeeCartDetails } from "../../../../types/coffees";
import { SelectorCounter } from "../../../SelectorCounter";
import { CoffeeName, Container, Price, RemoveButton } from "./styles";

export function OrderItem({ name, imageName, units, price }: CoffeeCartDetails) {
  const [coffeeUnits, setCoffeeUnits] = useState(0);

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
      <img
        src={imageName}
        alt="Coffee image"
        width={64}
        height={64}
      />

      <div>
        <CoffeeName>
          {name}
        </CoffeeName>

        <div>
          <SelectorCounter
            coffeeUnits={Number(units)}
            onCounterAdd={handleCounterAdd}
            onCounterSubstract={handleCounterSubtract}
          />

          <RemoveButton>
            <img src={TrashIcon} alt="Trash Icon" />
            <span>
              REMOVE
            </span>
          </RemoveButton>
        </div>
      </div>

      <Price>
        US$ {price}
      </Price>
    </Container>
  )
}