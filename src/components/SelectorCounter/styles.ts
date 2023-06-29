import styled from "styled-components"

export const SelectorContainer = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 18px;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.button};
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;

  min-height: 38px;

  button {
    background: transparent;
  }
`

export const SelectorCount = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 21px;
  text-align: center;
  color: ${(props) => props.theme.title};
`

export const Signal = styled.span`
  font-style: normal;
  font-size: 1.5rem;
  line-height: 18px;
  color: ${(props) => props.theme.purple};
`
