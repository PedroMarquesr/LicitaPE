"use client"

import { Flex, Field, Text, Fieldset, Stack, Input } from "@chakra-ui/react"
import InputDefaultForm from "../components/InputDefaultForm/InputDefaultForm"
import CustomSelect from "./components/CustomSelect/CustomSelect"

export default function IdentificationStep({ biddingData, setBiddingData }) {
  const modalityOptions = [
    { label: "Aberto", value: "Aberto" },
    { label: "Aberto/Fechado", value: "Aberto/Fechado" },
    { label: "Fechado/Aberto", value: "Fechado/Aberto" },
    { label: "Fechado", value: "Fechado" },
  ]
  const judgmentCriteriaOptions = [
    { label: "Menor preço", value: "Menor preço" },
    { label: "Maior desconto", value: "Maior desconto" },
    { label: "Técnica e preço", value: "Técnica e preço" },
    { label: "Maior lance", value: "Maior lance" },
    { label: "Melhor técnica", value: "Melhor técnica" },
  ]
  const biddingTypeOptions = [
    { label: "Dispensa de Licitação", value: "Dispensa de Licitação" },
    { label: "Pregão eletrônico", value: "Pregão eletrônico" },
    { label: "Convite eletrônico", value: "Convite eletrônico" },
    { label: "Concorrência", value: "Concorrência" },
    { label: "Tomada de Preços", value: "Tomada de Preços" },
    { label: "Inexigibilidade", value: "Inexigibilidade" },
  ]
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
        Identificação
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
        >
          <CustomSelect
            legend="Critério de Julgamento"
            placeholder="Selecione"
            options={judgmentCriteriaOptions}
            value={biddingData.judgmentCriteria}
            onValueChange={(value) =>
              setBiddingData({
                ...biddingData,
                judgmentCriteria: value,
              })
            }
          />
          <CustomSelect
            legend="Modalidade"
            placeholder="Selecione"
            options={modalityOptions}
            value={biddingData.modality}
            onValueChange={(value) =>
              setBiddingData({
                ...biddingData,
                modality: value,
              })
            }
          />
          <CustomSelect
            legend="Tipo de Licitação"
            placeholder="Selecione"
            options={biddingTypeOptions}
            value={biddingData.biddingType}
            onValueChange={(value) =>
              setBiddingData({
                ...biddingData,
                biddingType: value,
              })
            }
          />
        </Flex>
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
  )
}
