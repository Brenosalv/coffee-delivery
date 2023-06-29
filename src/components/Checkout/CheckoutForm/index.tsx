import { FormProvider, useForm } from "react-hook-form";
import Location from "../../../assets/generalIcons/Location2.svg";
import Money from "../../../assets/generalIcons/Money.svg";
import { paymentMethods } from "../../../assets/paymentMethods/paymentMethodsArray";
import { Title } from "../styles";
import { FormHeader } from "./FormHeader";
import { PaymentMethod } from "./PaymentMethod";
import { AddressInputsContainer, CepInput, CityInput, ComplementInput, FormContainer, NeighborhoodInput, NumberInput, OrderForm, PaymentMethodsContainer, StateInput, StreetInput } from "./styles";

export function CheckoutForm() {
  const form = useForm();

  function handleFormSubmit(data: any) { // TODO: Add right type for data
    console.log(data)
  }

  return (
    <FormProvider {...form}>
      <OrderForm onSubmit={form.handleSubmit(handleFormSubmit)}>
        <Title>
          Complete your profile
        </Title>

        <FormContainer>
          <FormHeader
            src={Location}
            title="Delivery Address"
            description="Inform the address where you wish to receive your coffee"
          />

          <AddressInputsContainer>
            <CepInput
              placeholder="CEP"
              {...form.register("cep")}
            />

            <StreetInput
              placeholder="Street"
              {...form.register("street")}
            />

            <div>
              <NumberInput
                placeholder="Number"
                {...form.register("number")}
              />

              <ComplementInput
                placeholder="Complement"
                {...form.register("complement")}
              />
            </div>


            <div>
              <NeighborhoodInput
                placeholder="Neighborhood"
                {...form.register("neighborhood")}
              />

              <CityInput
                placeholder="City"
                {...form.register("city")}
              />

              <StateInput
                placeholder="State"
                {...form.register("state")}
              />
            </div>
          </AddressInputsContainer>
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
          </PaymentMethodsContainer>
        </FormContainer>
      </OrderForm>
    </FormProvider>
  );
}