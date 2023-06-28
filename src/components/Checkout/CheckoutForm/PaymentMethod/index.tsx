import { useFormContext } from "react-hook-form";
import { PaymentMethodType } from "../../../../types/paymentMethods";
import { RadioButton, RadioButtonCheckedLabel, RadioButtonLabel, Title } from "./styles";

export function PaymentMethod({ id, src, name }: PaymentMethodType) {
  const form = useFormContext();

  if (form.watch("paymentMethod") === name) {
    return (
      <RadioButtonCheckedLabel htmlFor={id} >
        <RadioButton
          id={id}
          type="radio"
          value={name}
          {...form.register("paymentMethod")}
        />
        <img src={src} alt="" />
        <Title>{name}</Title>
      </RadioButtonCheckedLabel >
    )
  }

  return (
    <RadioButtonLabel htmlFor={id} >
      <RadioButton
        id={id}
        type="radio"
        value={name}
        {...form.register("paymentMethod")}
      />
      <img src={src} alt="" />
      <Title>{name}</Title>
    </RadioButtonLabel >
  )
}