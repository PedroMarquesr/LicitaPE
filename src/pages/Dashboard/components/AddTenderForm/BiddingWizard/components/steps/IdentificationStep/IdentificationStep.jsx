"use client";

import { Flex, Text, Grid, GridItem } from "@chakra-ui/react";
import InputDefaultForm from "../components/InputDefaultForm/InputDefaultForm";
import CustomSelect from "./components/CustomSelect/CustomSelect";

export default function IdentificationStep({ biddingData, setBiddingData }) {
  const modalityOptions = [
    { label: "Aberto", value: "Aberto" },
    { label: "Aberto/Fechado", value: "Aberto/Fechado" },
    { label: "Fechado/Aberto", value: "Fechado/Aberto" },
    { label: "Fechado", value: "Fechado" },
  ];
  const judgmentCriteriaOptions = [
    { label: "Menor preço", value: "Menor preço" },
    { label: "Maior desconto", value: "Maior desconto" },
    { label: "Técnica e preço", value: "Técnica e preço" },
    { label: "Maior lance", value: "Maior lance" },
    { label: "Melhor técnica", value: "Melhor técnica" },
  ];
  const biddingTypeOptions = [
    { label: "Dispensa de Licitação", value: "Dispensa de Licitação" },
    { label: "Pregão eletrônico", value: "Pregão eletrônico" },
    { label: "Convite eletrônico", value: "Convite eletrônico" },
    { label: "Concorrência", value: "Concorrência" },
    { label: "Tomada de Preços", value: "Tomada de Preços" },
    { label: "Inexigibilidade", value: "Inexigibilidade" },
  ];

  return (
    <Flex direction="column" w="100%" align="center" gap={6}>
      <Text
        display={{ base: "flex", md: "none" }}
        color={"blue.800"}
        fontWeight={"bold"}
        textShadow={"2px 2px 4px rgba(0,0,0,0.2)"}
        fontSize={"2xl"}
        textAlign="center"
      >
        Identificação
      </Text>

      {/* 🏢 Grid para organização */}
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} w="100%">
        {/* 📝 Informações do Órgão */}
        <GridItem>
          <Text fontSize="lg" fontWeight="semibold" color="gray.700" mb={3}>
            Órgão Responsável
          </Text>
          <Flex gap={3} direction="column">
            <InputDefaultForm
              legend={"Nome do Órgão*"}
              placeholder={"Digite o nome do Órgão responsável"}
              inputValue={biddingData.responsibleAgency}
              onChange={(e) =>
                setBiddingData({
                  ...biddingData,
                  responsibleAgency: e.target.value,
                })
              }
            />
            <InputDefaultForm
              legend={"Código do Órgão"}
              placeholder={"Código do Órgão no portal"}
              inputValue={biddingData.portalAgencyCode}
              onChange={(e) =>
                setBiddingData({
                  ...biddingData,
                  portalAgencyCode: e.target.value,
                })
              }
            />
          </Flex>
        </GridItem>

        {/* 🔢 Números de Identificação */}
        <GridItem>
          <Text fontSize="lg" fontWeight="semibold" color="gray.700" mb={3}>
            Identificação
          </Text>
          <Flex gap={3} direction="column">
            <InputDefaultForm
              legend={"Número da Licitação*"}
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
              legend={"Número do Processo*"}
              placeholder={"Número do processo administrativo"}
              inputValue={biddingData.processNumber}
              onChange={(e) =>
                setBiddingData({
                  ...biddingData,
                  processNumber: e.target.value,
                })
              }
            />
          </Flex>
        </GridItem>

        {/* ⚖️ Configurações da Licitação */}
        <GridItem colSpan={{ base: 1, md: 2 }}>
          <Text fontSize="lg" fontWeight="semibold" color="gray.700" mb={3}>
            Configurações da Licitação
          </Text>
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap={4}>
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
          </Grid>
        </GridItem>

        {/* 📄 Objeto da Licitação */}
        <GridItem colSpan={{ base: 1, md: 2 }}>
          <Text fontSize="lg" fontWeight="semibold" color="gray.700" mb={3}>
            Objeto
          </Text>
          <InputDefaultForm
            legend={"Descrição do Objeto*"}
            placeholder={"Descreva o objeto da licitação"}
            inputValue={biddingData.biddingObject}
            onChange={(e) =>
              setBiddingData({
                ...biddingData,
                biddingObject: e.target.value,
              })
            }
          />
        </GridItem>
      </Grid>
    </Flex>
  );
}
