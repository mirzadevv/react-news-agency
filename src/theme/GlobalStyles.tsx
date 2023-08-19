import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${(props) => props.theme.colors.pageBackground};
    font-family: ${(props) => props.theme.fonts.sora};
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    user-select: none;
    cursor: pointer;
  }
`;

export default globalStyles;
