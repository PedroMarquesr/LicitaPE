"use client"

import { Flex, Text } from "@chakra-ui/react"

export default function FeatureCard({ cardTitle, cardSubTitle, cardIcon }) {
  return (
    <>
      <Flex
        m="2"
        flexDir="column"
        flex="1"
        border="1px solid"
        borderColor="gray.300"
        borderRadius="25px"
        boxShadow="xl"
        bg="gray.200"
        transition="transform 0.2s ease-in-out"
        _hover={{
          transform: "scale(1.05)",
          backgroundColor: "#dbeafe",
        }}
      >
        <Flex p={"3"}>
          <Text
            bg="linear-gradient(135deg, #0b3d5e 0%, #016dc3 50%, #349e70 100%)"
            color="white"
            p={3}
            borderRadius="xl"
            fontSize="2xl"
            align="center"
            justify="center"
          >
            {cardIcon}
          </Text>
        </Flex>
        <Text p={"2"} color={"#0b3c5d"} fontWeight={"bold"}>
          {cardTitle}
        </Text>
        <Text p={"2"} color="gray.700" fontStyle={"italic"}>
          {cardSubTitle}
        </Text>
      </Flex>
    </>
  )
}
