import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 16px;
`

export const Row1 = styled.div`
  display: grid;
  gap: 12px;
  width: 200px;
`

export const Row2 = styled.div`
  display: grid;
  gap: 12px;
`

export const Row3 = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: 200px auto;
`

export const Row4 = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: 200px auto 60px;
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

  &::placeholder {
    color: ${(props) => props.theme.label};
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
`

export const NeighborhoodInput = styled(Input)`
  width: 200px;
`

export const CityInput = styled(Input)`
  width: 100%;
`

export const StateInput = styled(Input)`
  width: 60px;
`

export const Error = styled.span`
  color: ${(props) => props.theme.error};
  font-size: 0.75rem;
`
