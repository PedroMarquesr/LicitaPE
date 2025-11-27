"use client";

import { Flex } from "@chakra-ui/react";

import HeaderPage from "../HeaderPage/HeaderPage";
import BiddingWizard from "./BiddingWizard/BiddingWizard";

export default function AddTenderFormFixed() {
  return (
    <Flex flexDir={"column"} m={"2"} w={"100%"} h={"100%"}>
      <HeaderPage
        titleHeader={"Nova Licitação"}
        subTitleHeader={"Preencha os dados para cadastrar uma nova licitação"}
      />
      <BiddingWizard />
    </Flex>
  );
}
