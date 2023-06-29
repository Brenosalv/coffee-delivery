import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const OrderDetailsContainer = styled.div`
  border-radius: 6px 44px;
  background: ${(props) => props.theme.card};
  padding: 40px;
`

export const OrderItemContainer = styled.div`
  hr {
    margin: 32px 0;
    border: 1px solid ${(props) => props.theme.button};
  }
`

export const OrderSummaryDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const OrderSummaryDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const OrderTotalContainer = styled(OrderSummaryDetailContainer)`
  color: ${(props) => props.theme.subtitle};
  font-size: 1.25rem;
  font-weight: 700;
`

export const ConfirmOrder = styled.button`
  display: flex;
  padding: 12px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  width: 100%;
  margin-top: 24px;
`
