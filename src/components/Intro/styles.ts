import styled from 'styled-components';

export const IntroContainer = styled.div`
  display: flex;
  gap: 56px;
  margin: 94px 0;

  @media (max-width: 1220px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Title = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 62px;
  color: ${(props) => props.theme.title};
`

export const Subtitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 26px;
  color: ${(props) => props.theme.subtitle};
  font-stretch: 100;
`

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 24px;
  column-gap: 16px;
  margin-top: 72px;
`

export const ItemText = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 21px;
  color: #574F4D;
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const CoffeeIllustrationImage = styled.img`
  width: 70%;
  height: auto;

  @media (max-width: 800px) {
    width: 90%;
  }
`