import { useFormContext } from "react-hook-form";
import { CepInput, CityInput, ComplementInput, Container, NeighborhoodInput, NumberInput, StateInput, StreetInput } from "./styles";

export function DeliveryAddressInputs() {
  const form = useFormContext();

  return (
    <Container>
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
    </Container>
  )
}