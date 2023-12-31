import { useFormContext } from "react-hook-form";
import Location from "../../../assets/generalIcons/Location2.svg";
import Money from "../../../assets/generalIcons/Money.svg";
import { paymentMethods } from "../../../assets/paymentMethods/paymentMethodsArray";
import { Title } from "../styles";
import { DeliveryAddressInputs } from "./DeliveryAddressInputs";
import { FormHeader } from "./FormHeader";
import { PaymentMethod } from "./PaymentMethod";
import { Error, FormContainer, OrderForm, PaymentMethodsContainer } from "./styles";

export function CheckoutForm() {
  const form = useFormContext();

  return (
    <OrderForm>
      <Title>
        Complete your profile
      </Title>

      <FormContainer>
        <FormHeader
          src={Location}
          title="Delivery Address"
          description="Inform the address where you wish to receive your coffee"
        />

        <DeliveryAddressInputs />
      </FormContainer>

      <FormContainer>
        <FormHeader
          src={Money}
          title="Payment"
          description="The payment is made on delivery. Choose a payment method"
        />

        <PaymentMethodsContainer>
          {paymentMethods.map((paymentMethod) => (
            <PaymentMethod
              key={paymentMethod.id}
              {...paymentMethod}
            />
          ))}
          {form.formState.errors.cep &&
            <Error>
              {form.formState.errors.paymentMethod?.message as string}
            </Error>
          }
        </PaymentMethodsContainer>
      </FormContainer>
    </OrderForm>
  );
}