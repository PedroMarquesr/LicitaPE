import { ChakraProvider } from "@chakra-ui/react"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import App from "./App.jsx"
import Login from "./pages/Login.jsx"
import system from "./styles"
import Dashboard from "./pages/Dashboard"
import AddTenderForm from "./pages/Dashboard/components/AddTenderForm/AddTenderForm.jsx"
import Overview from "./pages/Dashboard/components/Overview/Overview.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Overview />} />{" "}
            <Route path="AddTenderForm" element={<AddTenderForm />} />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  </StrictMode>
)
