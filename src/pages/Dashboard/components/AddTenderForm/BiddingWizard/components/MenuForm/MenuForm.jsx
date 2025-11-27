"use client";

import { Flex, Button, Text, Icon } from "@chakra-ui/react";

import { GrCircleInformation } from "react-icons/gr";
import { CiCalendarDate, CiCirclePlus } from "react-icons/ci";
import { ImHammer2 } from "react-icons/im";
import { RiGlobalFill } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function MenuForm() {
  const detailsButton = [
    { title: "Identificação", icon: GrCircleInformation },
    { title: "Datas e Prazos", icon: CiCalendarDate },
    { title: "Julgamento", icon: ImHammer2 },
    { title: "Local e Plataforma", icon: RiGlobalFill },
    { title: "Documentação", icon: IoDocumentTextOutline },
    { title: "Complementar", icon: CiCirclePlus },
  ];

  // Divide o array em duas partes: primeiros 3 e últimos 3
  const firstThree = detailsButton.slice(0, 3);
  const lastThree = detailsButton.slice(3, 6);

  return (
    <>
      {/* Desktop */}
      <Flex
        justify={"center"}
        w={"100%"}
        display={{ base: "none", md: "flex" }}
      >
        {detailsButton.map((item) => (
          <Button
            key={item.title}
            mr={"2"}
            bgColor="gray.200"
            gap={"1"}
            h={"7"}
          >
            <Flex align="center">
              <Icon color="blackAlpha.700" as={item.icon} pr={"1"} />
              <Text color="blackAlpha.700">{item.title}</Text>
            </Flex>
          </Button>
        ))}
      </Flex>

      {/* Mobile */}
      <Flex
        direction="column"
        align="center"
        w={"100%"}
        display={{ base: "flex", md: "none" }}
        gap={2}
      >
        {/* Primeira linha - 3 primeiros itens */}
        <Flex justify="center" gap={2}>
          {firstThree.map((item) => (
            <Button
              key={item.title}
              bgColor="gray.200"
              gap={"1"}
              // h={"8"}
              size="xl"
            >
              <Flex align="center">
                <Icon color="blackAlpha.700" as={item.icon} />
                {/* <Text
                  display={{ base: "none", sm: "block" }}
                  color="blackAlpha.700"
                  fontSize="xs"
                >
                  {item.title}
                </Text> */}
              </Flex>
            </Button>
          ))}
        </Flex>

        {/* Segunda linha - 3 últimos itens */}
        <Flex justify="center" gap={2}>
          {lastThree.map((item) => (
            <Button
              key={item.title}
              bgColor="gray.200"
              gap={"1"}
              // h={"8"}
              size="xl"
            >
              <Flex align="center">
                <Icon color="blackAlpha.700" as={item.icon} />
                {/* <Text
                  display={{ base: "none", sm: "block" }}
                  color="blackAlpha.700"
                  fontSize="xs"
                >
                  {item.title}
                </Text> */}
              </Flex>
            </Button>
          ))}
        </Flex>
      </Flex>
    </>
  );
}
