import { useState } from "react";
import TrashIcon from "../../../../assets/generalIcons/Trash.svg";
import { CoffeeCartDetails } from "../../../../types/coffees";
import { CartUnitsLimit } from "../../../../utils/cartUnitsLimit";
import { defaultCurrency } from "../../../../utils/currency";
import { SelectorCounter } from "../../../SelectorCounter";
import { CoffeeName, Container, Price, RemoveButton } from "./styles";

interface OrderItemProps extends CoffeeCartDetails {
  onRemoveOrderItem: (coffeeId: string) => void;
  onRemoveOrderItemUnit: (coffeeId: string) => void;
  onAddOrderItemUnit: (coffeeId: string) => void;
}

export function OrderItem({
  name,
  imageName,
  units,
  price,
  id,
  onRemoveOrderItem,
  onRemoveOrderItemUnit,
  onAddOrderItemUnit
}: OrderItemProps) {
  const [coffeeUnits, setCoffeeUnits] = useState<number>(Number(units));

  const itemTotalPrice = (Number(price) * Number(units)).toFixed(2);

  function handleCounterSubtract() {
    if (coffeeUnits >= CartUnitsLimit.MIN) {
      setCoffeeUnits(prev => prev - 1);
      onRemoveOrderItemUnit(id);
    }
  }

  function handleCounterAdd() {
    if (coffeeUnits < CartUnitsLimit.MAX) {
      setCoffeeUnits(prev => prev + 1);
      onAddOrderItemUnit(id);
    }
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
            coffeeUnits={coffeeUnits}
            onCounterAdd={handleCounterAdd}
            onCounterSubstract={handleCounterSubtract}
          />

          <RemoveButton onClick={() => onRemoveOrderItem(id)}>
            <img src={TrashIcon} alt="Trash Icon" />
            <span>
              REMOVE
            </span>
          </RemoveButton>
        </div>
      </div>

      <Price>
        {defaultCurrency} {itemTotalPrice}
      </Price>
    </Container>
  )
}