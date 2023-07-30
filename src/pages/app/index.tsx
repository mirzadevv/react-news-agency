import React from "react";
import * as Styled from "./index.styled";
import GlobalStyles from "../../theme/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Theme from "../../theme/Theme";

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Styled.Container>App </Styled.Container>
      </ThemeProvider>
    </>
  );
};

export default App;
