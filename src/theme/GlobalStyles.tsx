import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
  * {
    font-size: 50px;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${(props) => props.theme.colors.pageBackground};
    font-family: ${(props) => props.theme.fonts.sora};
  }
`;

export default globalStyles;
