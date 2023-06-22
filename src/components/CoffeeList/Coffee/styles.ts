import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.card};
  border-radius: 6px 36px;
  width: 256px;
  height: 310px;
  padding: 20px;
`

export const Image = styled.img`
  margin-top: -40px;
`

export const TagsContainer = styled.div`
  display: flex;
  gap: 4px;
`

export const Name = styled.h5`
  font-family: 'Baloo 2', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 26px;
  text-align: center;
  color: ${(props) => props.theme.subtitle};
  margin-top: 16px;
`

export const Description = styled.h6`
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 18px;
  text-align: center;
  color: ${(props) => props.theme.label};
  margin-top: 8px;
  margin-bottom: auto;
`

export const FooterContainer = styled.div`
  display: flex;
  margin-top: 32px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: auto;

  button {
    border: none;
  }
`

export const Price = styled.div`
  font-family: 'Baloo 2', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 18px;
  color: ${(props) => props.theme.text};

  span {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 18px;
    color: ${(props) => props.theme.text};
    margin-right: 4px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
`

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

export const ShoppingCartIcon = styled.img`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.purpleDark};
  border-radius: 6px;
  padding: 8px;

  &:hover {
    opacity: 0.85;
    transition: ease-in-out 50ms;
  }
`

export const Signal = styled.span`
  font-style: normal;
  font-size: 1.5rem;
  line-height: 18px;
  color: ${(props) => props.theme.purple};
`
