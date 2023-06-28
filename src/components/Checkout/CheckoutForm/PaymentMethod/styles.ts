import styled from "styled-components";

export const RadioButton = styled.input`
  display: none;  
`

export const RadioButtonLabel = styled.label`
  display: flex;
  gap: 8px;
  border-radius: 6px;
  background: ${(props) => props.theme.button};
  padding: 16px;
  color: ${(props) => props.theme.button};

  &:hover {
    cursor: pointer;
  }
`

export const RadioButtonCheckedLabel = styled(RadioButtonLabel)`
  background: ${(props) => props.theme.purpleLight};
  border: 1px solid ${(props) => props.theme.purpleDark};
`

export const Title = styled.p`
  color: ${(props) => props.theme.title};
  font-size: 0.875rem;
`
