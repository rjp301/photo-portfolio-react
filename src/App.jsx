import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { lightTheme } from "./utils/theme";

import Album from "./pages/Album";
import Albums from "./pages/Albums";
import About from "./pages/About";

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
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
      </BrowserRouter>
    </ThemeProvider>
  );
}
