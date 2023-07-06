import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.yellowDark};
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    -webkit-font-smoothing: antialiased;
    margin: 0 32px;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
    border: none;

    &:hover {
    opacity: .85;
    transition: ease-in-out 50ms;
    cursor: pointer;
  }
  }
`
