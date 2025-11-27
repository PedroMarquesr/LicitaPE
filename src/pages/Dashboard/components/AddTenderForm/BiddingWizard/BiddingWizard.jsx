"use client";

import { Flex, Text } from "@chakra-ui/react";
import { Children } from "react";
import MenuForm from "./components/MenuForm/MenuForm";

export default function BiddingWizard({ Children }) {
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
    >
      <MenuForm />
      {Children}
    </Flex>
  );
}
