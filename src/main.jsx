import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import system from "./styles";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          {/* <App /> */}
        </Routes>
      </Router>
    </ChakraProvider>
  </StrictMode>
);
