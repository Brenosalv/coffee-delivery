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
`
