import styled from "styled-components";

export const Title = styled.h4`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 2rem;
  line-height: 42px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.title};
`

export const CoffeesListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 54px;
  grid-column-gap: 32px;
  margin: 54px 0;

  @media (max-width: 1220px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`