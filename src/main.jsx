import { ChakraProvider } from "@chakra-ui/react"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"

import App from "./App.jsx"
import system from "./styles"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <Router>
        <App />
      </Router>
    </ChakraProvider>
  </StrictMode>
)
