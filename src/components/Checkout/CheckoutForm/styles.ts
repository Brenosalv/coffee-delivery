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

export const PaymentMethodsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;

  @media(max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`

export const Error = styled.span`
  color: ${(props) => props.theme.error};
  font-size: 0.75rem;
`
