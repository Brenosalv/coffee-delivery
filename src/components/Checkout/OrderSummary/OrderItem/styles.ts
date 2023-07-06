import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 8px;
    
    div:nth-child(2) {
      display: flex;
      flex-direction: row;
      gap: 8px;

      @media(max-width: 470px) {
        flex-direction: column;
      }
    }
  }
`

export const CoffeeName = styled.h2`
  color: ${(props) => props.theme.subtitle};
  font-size: 1rem;
  font-weight: 400;
`

export const OrderItemInfoContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export const CoffeeInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Price = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: auto;
  margin-left: auto;
  color: ${(props) => props.theme.text};
  font-weight: 700;

  @media(max-width: 400px) {
    display: none;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  background: ${(props) => props.theme.button};
  padding: 8px;
  font-size: 0.875rem;
  span {
    color: ${(props) => props.theme.text};
  }
`