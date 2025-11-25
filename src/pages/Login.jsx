"use client";

import { Flex, Box, Text, Image, Button, Separator } from "@chakra-ui/react";
import NavBar from "@/components/NavBar/NavBar";

import { NavLink } from "react-router";

export default function Login() {
  return (
    <>
      {" "}
      <NavBar />
      <Flex
        bgColor="gray.100"
        flexDir={"column"}
        border={"1px solid"}
        borderColor="gray.200"
        w={{ base: "100%", md: "50%" }}
        mx={{ base: "auto", md: "auto" }}
        my={"5"}
        borderRadius={"20px"}
        justifyContent={"center"}
        alignContent={"center"}
        alignItems={"center"}
        boxShadow={"2xl"}
        boxShadowColor={"black"}
      >
        <Flex justify={"center"}>
          <Image
            // boxSize={{ base: "35vw", md: "10vw" }}
            my={"5"}
            width={{ base: "35vw", md: "10vw" }}
            height={{ base: "5vh", md: "5vh" }}
            src="/logo-licitape.png"
          />
        </Flex>
        <Flex flexDir={"column"} align={"center"} mb={"5"}>
          <Text fontSize={"2xl"} fontWeight={"bold"} color="primary.800">
            Bem vindo!
          </Text>
          <Text fontStyle={"italic"}>Faça o Login para continuar</Text>
        </Flex>
        <Separator
          label="OU"
          colorPalette="primary"
          variant="solid"
          size="md"
          my={4}
          borderColor={"red.200"}
        />
        <Text>Teste</Text>

        {/* <Button></Button> */}
      </Flex>
    </>
  );
}
