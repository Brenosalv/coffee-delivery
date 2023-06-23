import styled from 'styled-components';

export const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`

export const LocationAndCart = styled.div`
  display: flex;
  gap: 12px;
`

export const LocationContainer = styled.div`
  background: ${(props) => props.theme.purpleLight};
  padding: 10px;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 6px;
`

export const UserLocation = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.purpleDark};
`

export const CartContainer = styled.div`
  position: relative;

  background: ${(props) => props.theme.yellowLight};
  padding: 8px;
  border-radius: 6px;
  
  display: flex;
  align-items: center;

  &:hover {
    opacity: .85;
    transition: ease-in-out 50ms;
    cursor: pointer;
  }
`

export const BadgeContainer = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  width: auto;
  min-width: 20px;
  padding: 4px;
  text-align: center;
  border-radius:50%;
  background: ${(props) => props.theme.yellowDark};
  color: ${(props) => props.theme.white};
  font-size: 0.75rem;
`