"use client"

import { Flex, Field, Text, Fieldset, Stack } from "@chakra-ui/react"

export default function IdentificationStep() {
  return (
    <>
      <Flex justifyContent={"center"} w={"100vw"} border={"1px solid red"}>
        <Text
          display={{ base: "flex", md: "none" }}
          color={"blue.800"}
          fontWeight={"bold"}
          textShadow={"2px 2px 4px rgba(0,0,0,0.4)"}
          fontSize={"2xl"}
        >
          Identificação
        </Text>
      </Flex>
      <Fieldset.Root></Fieldset.Root>
    </>
  )
}
