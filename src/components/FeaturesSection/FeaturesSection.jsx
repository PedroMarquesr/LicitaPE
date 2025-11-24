"use client"

import { Flex, Text, Tag, Box } from "@chakra-ui/react"

import FeatureCard from "./components/FeatureCard/FeatureCard"

import { AiFillThunderbolt } from "react-icons/ai"

import { FiFilePlus } from "react-icons/fi"
import { FaRegFolderOpen } from "react-icons/fa"
import { LuListChecks } from "react-icons/lu"
import { FaFileSignature } from "react-icons/fa"
import { HiOutlineBellAlert } from "react-icons/hi2"
import { LuClipboardList } from "react-icons/lu"

export default function FeatureSection() {
  return (
    <>
      <Box
        mx={{ base: "0", md: "5%", lg: "10%" }}
        my={"5"}
        pt={"3"}
        borderRadius={{ base: "none", lg: "xl" }}
        boxShadow="xl"
        position="relative"
        overflow="hidden"
      >
        <Flex justifyContent={"center"} borderRadius={"25px"} my={"5"}>
          <Flex
            px={"6"}
            py={"2"}
            bgColor="#dbeafe"
            borderRadius={"25px"}
            justifyContent={"center"}
            alignItems={"center"}
            color="#2e58da"
          >
            <AiFillThunderbolt />

            <Text pl={"1"} fontWeight={"bold"} color={"#2e58da"}>
              RECURSOS
            </Text>
          </Flex>
        </Flex>

        <Flex flexDir={"column"} alignItems={"center"}>
          <Flex>
            <Text
              color={"#0b3c5d"}
              fontWeight={"bold"}
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            >
              {" "}
              Tudo que você precisa em uma única plataforma
            </Text>
          </Flex>
          <Flex pb={"3"}>
            <Text color="gray.700">
              {" "}
              Ferramentas poderosas para otimizar cada etapa do processo
              licitatório
            </Text>
          </Flex>
          <Flex flexDir={"column"} gap={"1"}>
            <Flex flexDir={{ base: "column", md: "row" }} align={"center"}>
              <FeatureCard
                cardIcon={<FiFilePlus />}
                cardTitle={"Cadastro de Licitações"}
                cardSubTitle={
                  "Gerencie todas as licitações em um único lugar, com criação rápida, organização por categorias e informações essenciais centralizadas."
                }
              />
              <FeatureCard
                cardIcon={<FaRegFolderOpen />}
                cardTitle={"Gestão Documental"}
                cardSubTitle={
                  "Armazene, organize e acesse documentos com facilidade, garantindo versionamento, controle e segurança em todos os processos."
                }
              />
              <FeatureCard
                cardIcon={<LuListChecks />}
                cardTitle={"Acompanhamento de Etapas"}
                cardSubTitle={
                  "Visualize o progresso completo da licitação, acompanhe cada fase e reduza falhas com monitoramento em tempo real."
                }
              />
            </Flex>
            <Flex flexDir={{ base: "column", md: "row" }} align={"center"}>
              {" "}
              <FeatureCard
                cardIcon={<FaFileSignature />}
                cardTitle={"Gerador de Propostas"}
                cardSubTitle={
                  "Crie propostas automaticamente a partir de modelos inteligentes, reduzindo tempo e padronizando o envio de documentos."
                }
              />
              <FeatureCard
                cardIcon={<HiOutlineBellAlert />}
                cardTitle={"Alertas Automáticos de Prazos"}
                cardSubTitle={
                  "Receba notificações de prazos importantes, evitando atrasos, retrabalho e garantindo conformidade em cada etapa."
                }
              />
              <FeatureCard
                cardIcon={<LuClipboardList />}
                cardTitle={"Auditoria e Histórico de Alterações"}
                cardSubTitle={
                  "Acompanhe todas as ações realizadas no sistema, com trilha completa de auditoria para transparência e segurança jurídica."
                }
              />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
