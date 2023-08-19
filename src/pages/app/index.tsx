import React from "react";
import * as Styled from "./index.styled";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../theme/GlobalStyles";
import Theme from "../../theme/Theme";

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Styled.Container></Styled.Container>
      </ThemeProvider>
    </>
  );
};

export default App;
