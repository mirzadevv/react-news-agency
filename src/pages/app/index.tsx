import React from "react";
import * as Styled from "./index.styled";
import { QueryClient, QueryClientProvider } from "react-query"; // Import React Query modules
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../theme/GlobalStyles";
import Theme from "../../theme/Theme";
import Header from "../../components/header";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Styled.Container>
          <Header />
        </Styled.Container>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
