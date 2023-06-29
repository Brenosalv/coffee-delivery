import styled from "styled-components";

export const Container = styled.div`
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
  
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.purple};
    box-shadow: none;
  }
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
