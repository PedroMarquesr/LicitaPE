"use client"

import { Flex, Text } from "@chakra-ui/react"
import { Children } from "react"
import MenuForm from "./components/MenuForm/MenuForm"

import { useState } from "react"

export default function BiddingWizard({ Children }) {
  const [activeStep, setActiveStep] = useState(1)

  const handleStepChange = (stepId) => {
    console.log("Mudando para step:", stepId)
    setActiveStep(stepId)
  }

  return (
    <Flex
      border={"1px solid "}
      borderRadius="20px"
      borderColor="gray.300"
      h={"100%"}
      w={"100%"}
      p={"3%"}
      mt={"3%"}
      boxShadow={"2xl"}
      flexDirection="column"
      gap={4}
    >
      <MenuForm activeStep={activeStep} onStepChange={handleStepChange} />
      <Flex flex={1}>{Children}</Flex>{" "}
    </Flex>
  )
}
