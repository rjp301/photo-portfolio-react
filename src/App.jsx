import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "./utils/theme";

// Pages
import Album from "./pages/Album";
import Albums from "./pages/Albums";
import About from "./pages/About";

// Components
import Header from "./components/Header";
import { Helmet } from "react-helmet";
import { useState } from "react";
import Footer from "./components/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div``;

const Main = styled.div`
  padding: 20px;
`;

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <style>{`body {
          background-color: ${theme.bgLighter};
          color: ${theme.text};
          }`}</style>
      </Helmet>
      <BrowserRouter>
        <Header />
        <Main>
          <Routes>
            <Route path="/">
              <Route index element={<Albums />} />
              <Route path="albums">
                <Route index element={<Albums />} />
                <Route path=":albumId" element={<Album />} />
              </Route>
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </Main>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
