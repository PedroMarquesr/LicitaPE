"use client"

import HeroHeader from "./components/HeroHeader/HeroHeader"
import NavBar from "./components/NavBar/NavBar"
import FeatureSection from "./components/FeaturesSection/FeaturesSection"

import { Text, Box } from "@chakra-ui/react"

import useStore from "./components/globalStates/store"

function App() {
  const { user } = useStore()
  return (
    <>
      <NavBar />
      {user?.uid && (
        <Box bg="green.50" p={3} textAlign="center">
          <Text fontWeight="bold" color="green.800">
            ✅ Usuário logado: {user.displayName || user.email}
          </Text>
          <Text fontSize="sm" color="gray.600">
            ID: {user.uid}
          </Text>
        </Box>
      )}
      <HeroHeader /> <FeatureSection />
    </>
  )
}

export default App
