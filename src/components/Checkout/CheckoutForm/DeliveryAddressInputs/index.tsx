import { useFormContext } from "react-hook-form";
import { Error } from "../styles";
import { CepInput, CityInput, ComplementInput, Container, NeighborhoodInput, NumberInput, Row1, Row2, Row3, Row4, StateInput, StreetInput } from "./styles";

export function DeliveryAddressInputs() {
  const form = useFormContext();

  return (
    <Container>
      <Row1>
        <CepInput
          placeholder="CEP"
          required
          {...form.register("cep")}
        />
        {form.formState.errors.cep &&
          <Error>
            {form.formState.errors.cep.message as string}
          </Error>
        }
      </Row1>

      <Row2>
        <StreetInput
          placeholder="Street"
          required
          {...form.register("street")}
        />
        {form.formState.errors.street &&
          <Error>
            {form.formState.errors.street.message as string}
          </Error>
        }
      </Row2>

      <Row3>
        <div>
          <NumberInput
            placeholder="Number"
            required
            type="number"
            min={0}
            {...form.register("number")}
          />
          {form.formState.errors.number &&
            <Error>
              {form.formState.errors.number.message as string}
            </Error>
          }
        </div>

        <div>
          <ComplementInput
            placeholder="Complement"
            {...form.register("complement")}
          />
          {form.formState.errors.complement &&
            <Error>
              {form.formState.errors.complement.message as string}
            </Error>
          }
        </div>
      </Row3>

      <Row4>
        <div>
          <NeighborhoodInput
            placeholder="Neighborhood"
            required
            {...form.register("neighborhood")}
          />
          {form.formState.errors.neighborhood &&
            <Error>
              {form.formState.errors.neighborhood.message as string}
            </Error>
          }
        </div>

        <div>
          <CityInput
            placeholder="City"
            required
            {...form.register("city")}
          />
          {form.formState.errors.city &&
            <Error>
              {form.formState.errors.city.message as string}
            </Error>
          }
        </div>

        <div>
          <StateInput
            placeholder="State"
            required
            {...form.register("state")}
          />
          {form.formState.errors.state &&
            <Error>
              {form.formState.errors.state.message as string}
            </Error>
          }
        </div>
      </Row4>
    </Container>
  )
}