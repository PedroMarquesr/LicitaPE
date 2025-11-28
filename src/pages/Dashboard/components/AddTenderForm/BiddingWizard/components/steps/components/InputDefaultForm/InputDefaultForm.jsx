"use client"

import { Flex, Field, Text, Fieldset, Stack, Input } from "@chakra-ui/react"

export default function InputDefaultForm({
  biddingData,
  setBiddingData,
  inputValue,
  onChange,
  placeholder,
  legend,
}) {
  return (
    <Fieldset.Root>
      <Flex>
        <Fieldset.Legend fontWeight={"semibold"}>{legend} </Fieldset.Legend>
        <Input
          type="text"
          value={inputValue}
          borderColor="gray.300"
          _hover={{ borderColor: "gray.500" }}
          _focus={{ borderColor: "primary.500", boxShadow: "outline" }}
          onChange={onChange}
          placeholder={placeholder}
        />
      </Flex>
    </Fieldset.Root>
  )
}
