import styled from "styled-components";

export const Container = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 13px;
  text-transform: uppercase;
  color: ${(props) => props.theme.yellowDark};
  background: ${(props) => props.theme.yellowLight};
  padding: 4px 8px;
  border-radius: 100px;
  margin-top: 12px;
`
