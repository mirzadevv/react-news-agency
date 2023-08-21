// import react-query related modules
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// import theme related modules
import GlobalStyles from "../../theme/GlobalStyles";
import Theme from "../../theme/Theme";

// import styled-component related modules
import { ThemeProvider } from "styled-components";
import * as Styled from "./index.styled";

// import react-router-dom related modules
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

// import components
import Navbar from "../../components/common/navbar";

// import pages
import CategoryPage from "../categoryPage";
import HomePage from "../homePage";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Styled.Container>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/category/world"
                element={<CategoryPage columns={3} categoryTitle="world" />}
              />
              <Route
                path="/category/business"
                element={<CategoryPage columns={3} categoryTitle="business" />}
              />
              <Route
                path="/category/tech"
                element={<CategoryPage columns={3} categoryTitle="tech" />}
              />
              <Route
                path="/category/science"
                element={<CategoryPage columns={3} categoryTitle="science" />}
              />
              <Route
                path="/category/lifestyle"
                element={<CategoryPage columns={3} categoryTitle="lifestyle" />}
              />
              <Route
                path="/category/politics"
                element={<CategoryPage columns={3} categoryTitle="politics" />}
              />
            </Routes>
          </Router>
        </Styled.Container>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
