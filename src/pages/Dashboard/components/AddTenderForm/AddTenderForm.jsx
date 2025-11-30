"use client";

import { Flex } from "@chakra-ui/react";
import HeaderPage from "../HeaderPage/HeaderPage";
import BiddingWizard from "./BiddingWizard/BiddingWizard";

import { useState } from "react";

export default function AddTenderFormFixed() {
  const [biddingData, setBiddingData] = useState({
    responsibleAgency: "",
    portalAgencyCode: "",
    biddingObject: "",
    identificationNumber: "",
    processNumber: "",
    modality: "", // Valores: "Aberto", "Aberto/Fechado", "Fechado/Aberto", "Fechado"
    judgmentCriteria: "", // Valores: "Menor preço, Maior desconto, Técnica e preço, Maior lance, Melhor técnica"
    biddingType: "", // "Dispensa de Licitação, Pregão eletronico, Convite eletrônico, Concorrência, Tomada de Preços, Inexigibilidade"

    disputeDate: "",
    disputeTime: "",
    proposalDeadlineDate: "",
    proposalDeadlineTime: "",
    proposalOpeningDate: "",
    proposalOpeningTime: "",
    closingDate: "",

    disputePortal: "",
    executionLocation: "",

    tags: [],

    contactPhone: "",
    contactEmail: "",
    technicalResponsible: "",
    biddingNoticeUrl: "",
    attachmentsUrl: "",
    estimatedValue: "",
    maximumValue: "",
    observations: "",
  });
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
        <BiddingWizard
          biddingData={biddingData}
          setBiddingData={setBiddingData}
        />
      </Flex>
      <Flex>{JSON.stringify(biddingData, null, 2)}</Flex>
    </Flex>
  );
}
