import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/globalStyle";
import SignIn from "./pages/SignIn";
import Astrodle from "./pages/Astrodle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/astrodle" element={<Astrodle />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
