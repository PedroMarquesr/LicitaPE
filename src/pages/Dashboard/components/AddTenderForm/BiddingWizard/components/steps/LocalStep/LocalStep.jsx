"use client";

import { Flex, Field, Text, Fieldset, Stack, Input } from "@chakra-ui/react";
import InputDefaultForm from "../components/InputDefaultForm/InputDefaultForm";

export default function LocalStep({ biddingData, setBiddingData }) {
  return (
    <Flex direction="column" w="100%" align="center">
      <Text
        display={{ base: "flex", md: "none" }}
        color={"blue.800"}
        fontWeight={"bold"}
        textShadow={"2px 2px 4px rgba(0,0,0,0.2)"}
        fontSize={"2xl"}
        mb={4}
        textAlign="center"
      >
        Local e Plataforma
      </Text>

      <Flex
        justifyContent={"space-between"}
        gap={4}
        w={"100%"}
        flexDir={"column"}
      >
        <Flex flex={1} gap={6} flexDir={{ base: "column", md: "row" }}>
          <InputDefaultForm
            biddingData={biddingData}
            setBiddingData={setBiddingData}
            legend={"Órgão Responsável*"}
            placeholder={"Digite o nome do Órgão responsável"}
            inputValue={biddingData.responsibleAgency}
            onChange={(e) =>
              setBiddingData({
                ...biddingData,
                responsibleAgency: e.target.value,
              })
            }
          />
        </Flex>
        <Flex
          flex={1}
          gap={6}
          flexDir={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
        >
          <InputDefaultForm
            biddingData={biddingData}
            setBiddingData={setBiddingData}
            legend={"Número de identificação*"}
            placeholder={"Ex: PE XXX/2026"}
            inputValue={biddingData.identificationNumber}
            onChange={(e) =>
              setBiddingData({
                ...biddingData,
                identificationNumber: e.target.value,
              })
            }
          />
          <InputDefaultForm
            biddingData={biddingData}
            setBiddingData={setBiddingData}
            legend={"Número do Processo*"}
            placeholder={"Informe o número do Processo"}
            inputValue={biddingData.processNumber}
            onChange={(e) =>
              setBiddingData({
                ...biddingData,
                processNumber: e.target.value,
              })
            }
          />
        </Flex>
        <Flex
          flex={1}
          gap={6}
          flexDir={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
        ></Flex>
        <Flex flex={1} gap={6} flexDir={{ base: "column", md: "row" }}>
          <InputDefaultForm
            biddingData={biddingData}
            setBiddingData={setBiddingData}
            legend={"Objeto*"}
            placeholder={"Informe o objeto do Processo"}
            inputValue={biddingData.biddingObject}
            onChange={(e) =>
              setBiddingData({
                ...biddingData,
                biddingObject: e.target.value,
              })
            }
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
