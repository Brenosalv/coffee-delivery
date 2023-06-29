import styled from "styled-components";

export const OrderForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const FormContainer = styled.div`
  background: ${(props) => props.theme.card};
  padding: 40px;
`

export const DeliveryAddressHeaderContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  margin-bottom: 32px;
`

export const AddressInputsContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 16px;

  div:nth-of-type(1) {
    display: flex;
    gap: 12px;
  }

  div:nth-of-type(2) {
    display: flex;
    gap: 12px;
  }
`

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.button};
  background: ${(props) => props.theme.input};
  padding: 12px;

  color: ${(props) => props.theme.text};

  font-size: 0.875rem;
`

export const CepInput = styled(Input)`
  width: 200px;
`

export const StreetInput = styled(Input)`
  width: 100%;
`

export const NumberInput = styled(Input)`
  width: 200px;
`

export const ComplementInput = styled(Input)`
  width: 100%;
  flex: 1;
`

export const NeighborhoodInput = styled(Input)`
  width: 200px;
`

export const CityInput = styled(Input)`
  flex: 1;
`

export const StateInput = styled(Input)`
  width: 60px;
`

export const PaymentMethodsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
`
