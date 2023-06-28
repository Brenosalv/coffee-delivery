import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  margin-bottom: 32px;
`

export const Title = styled.p`
  color: ${(props) => props.theme.title};
  font-size: 1rem;
  line-height: 130%; 
  padding-top: 2px;
`

export const Description = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 0.875rem;
  line-height: 130%;
  padding-top: 2px;
`
