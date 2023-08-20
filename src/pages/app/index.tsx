import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalStyles from "../../theme/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Header from "../../components/header";
import * as Styled from "./index.styled";
import Theme from "../../theme/Theme";

export default function App() {
  const queryClient = new QueryClient();
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
}
