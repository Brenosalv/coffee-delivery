import styled from "styled-components";

export const HeaderContainer = styled.div`
  margin-top: 72px;

  h1 {
    color: ${(props) => props.theme.yellowDark};
    font-size: 2rem;
    font-family: "Baloo 2", sans-serif;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }

  h2 {
    color: ${(props) => props.theme.subtitle};
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`

export const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: 45% auto;
  gap: 32px;
  margin-top: 40px;
  align-items: center;

  img {
    margin-left: auto;
  }
`

export const OrderDetailsContainerBorderWrapper = styled.div`
  background: linear-gradient(to right, #DBAC2C, #8047F8);
  border-radius: 6px 36px;
  padding: 1px;
`

export const OrderDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  position: relative;
  background-color: white;
  border-radius: 6px 36px;
  padding: 40px;

  span {
    font-weight: 700;
  }

  div {
    display: flex;
    gap: 12px;
    color: ${(props) => props.theme.text};
    
    div {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
  }
`
