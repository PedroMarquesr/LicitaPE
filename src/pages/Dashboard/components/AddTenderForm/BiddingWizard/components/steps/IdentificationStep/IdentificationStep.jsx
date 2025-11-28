"use client"

import { Flex, Field, Text, Fieldset, Stack } from "@chakra-ui/react"

export default function IdentificationStep() {
  return (
    <Flex direction="column" w="100%" align="center">
      <Text
        display={{ base: "flex", md: "none" }}
        color={"blue.800"}
        fontWeight={"bold"}
        textShadow={"2px 2px 4px rgba(0,0,0,0.4)"}
        fontSize={"2xl"}
        mb={4}
        textAlign="center"
      >
        Identificação
      </Text>

      <Text>Formulário de identificação...</Text>
    </Flex>
  )
}
