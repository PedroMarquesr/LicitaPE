"use client"

import { Flex } from "@chakra-ui/react"
import HeaderPage from "../HeaderPage/HeaderPage"
import BiddingWizard from "./BiddingWizard/BiddingWizard"

export default function AddTenderFormFixed() {
  return (
    <Flex
      flexDir="column"
      w="100%"
      h="100%"
      align="center"
      px={{ base: "2", md: "4" }}
      maxW="100%"
      overflow="hidden"
    >
      <HeaderPage
        titleHeader={"Nova Licitação"}
        subTitleHeader={"Preencha os dados para cadastrar uma nova licitação"}
      />
      <Flex w="100%" justify="center">
        <BiddingWizard />
      </Flex>
    </Flex>
  )
}
