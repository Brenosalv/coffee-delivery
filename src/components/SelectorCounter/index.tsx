import { SelectorContainer, SelectorCount, Signal } from "./styles";

interface SelectorCounterProps {
  coffeeUnits: number;
  onCounterSubstract: () => void;
  onCounterAdd: () => void;
}

export function SelectorCounter({ coffeeUnits, onCounterSubstract, onCounterAdd }: SelectorCounterProps) {
  return (
    <SelectorContainer>
      <button onClick={onCounterSubstract}>
        <Signal>
          −
        </Signal>
      </button>

      <SelectorCount>
        {coffeeUnits}
      </SelectorCount>

      <button onClick={onCounterAdd}>
        <Signal>
          +
        </Signal>
      </button>
    </SelectorContainer>
  )
}