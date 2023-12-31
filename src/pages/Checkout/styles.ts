import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 55% auto;
  gap: 32px;
  margin-top: 72px;

  @media(max-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    justify-content: center;
    margin-bottom: 32px;
  }
`

export const EmptyCartContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 128px;
`