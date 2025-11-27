"use client"

import { Flex, Button, Text, Icon } from "@chakra-ui/react"

import { GrCircleInformation } from "react-icons/gr"
import { CiCalendarDate, CiCirclePlus } from "react-icons/ci"
import { ImHammer2 } from "react-icons/im"
import { RiGlobalFill } from "react-icons/ri"
import { IoDocumentTextOutline } from "react-icons/io5"

import { useState } from "react"

export default function MenuForm({ activeStep, onStepChange }) {
  const steps = [
    { id: 1, title: "Identificação", icon: GrCircleInformation },
    { id: 2, title: "Datas e Prazos", icon: CiCalendarDate },
    { id: 3, title: "Julgamento", icon: ImHammer2 },
    { id: 4, title: "Local e Plataforma", icon: RiGlobalFill },
    { id: 5, title: "Documentação", icon: IoDocumentTextOutline },
    { id: 6, title: "Complementar", icon: CiCirclePlus },
  ]

  const handleStepClick = (stepId) => {
    console.log("Clicou no step:", stepId)
    onStepChange(stepId)
  }

  return (
    <>
      <Flex
        justify={"center"}
        w={"100%"}
        display={{ base: "none", md: "flex" }}
      >
        {steps.map((step) => (
          <Button
            key={step.id}
            mr={"2"}
            // 🎨 Muda cor conforme step ativo
            bgColor={activeStep === step.id ? "blue.500" : "gray.200"}
            color={activeStep === step.id ? "white" : "blackAlpha.700"}
            gap={"1"}
            h={"7"}
            onClick={() => handleStepClick(step.id)}
          >
            <Flex align="center">
              <Icon as={step.icon} pr={"1"} />
              <Text color="blackAlpha.700">{step.title}</Text>
            </Flex>
          </Button>
        ))}
      </Flex>

      <Flex
        direction="column"
        align="center"
        w={"100%"}
        display={{ base: "flex", md: "none" }}
        gap={2}
      >
        <Flex justify="center" gap={2}>
          {steps.slice(0, 3).map((step) => (
            <Button
              key={step.id}
              bgColor={activeStep === step.id ? "blue.500" : "gray.200"}
              color={activeStep === step.id ? "white" : "blackAlpha.700"}
              gap={"1"}
              // h={"8"}
              size="xl"
            >
              <Flex align="center">
                <Icon color="blackAlpha.700" as={step.icon} />
              </Flex>
            </Button>
          ))}
        </Flex>

        <Flex justify="center" gap={2}>
          {steps.slice(3, 6).map((step) => (
            <Button
              key={step.id}
              bgColor={activeStep === step.id ? "blue.500" : "gray.200"}
              color={activeStep === step.id ? "white" : "blackAlpha.700"}
              gap={"1"}
              size="xl"
              onClick={() => handleStepClick(step.id)}
            >
              <Flex align="center">
                <Icon color="blackAlpha.700" as={step.icon} />
              </Flex>
            </Button>
          ))}
        </Flex>
      </Flex>
    </>
  )
}
