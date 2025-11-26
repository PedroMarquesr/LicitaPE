"use client"

import {
  Flex,
  Button,
  Text,
  Portal,
  Drawer,
  CloseButton,
  Separator,
  VStack,
} from "@chakra-ui/react"
import { useState } from "react"
import { Link as RouterLink } from "react-router-dom"

import { useLocation } from "react-router-dom"

export default function MenuDashboardMb() {
  const location = useLocation()
  const currentName = location.pathname

  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    {
      icon: "",
      lavel: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: "",
      label: "Cadastro de licitação",
      link: "/dashboard/AddTenderForm",
    },
  ]

  return (
    <>
      <Flex>
        <Drawer.Root open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
          <Drawer.Trigger asChild>
            <Button
              onClick={() => setIsOpen((prev) => !prev)}
              bg="transparent"
              p={2}
              minH="44px"
              minW="44px"
              _hover={{ bg: "primary.100" }}
              _active={{ bg: "primary.200" }}
            >
              <Text color="primary.500" fontSize="2xl">
                <ImMenu />
              </Text>
            </Button>
          </Drawer.Trigger>
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content
                w={{ base: "85%", sm: "70%" }}
                bg="white"
                shadow="xl"
              >
                <Drawer.Header
                  bg="primary.500"
                  color="white"
                  py={4}
                  borderBottom="1px solid"
                  borderColor="primary.300"
                >
                  <Drawer.Title fontSize="xl" fontWeight="bold">
                    Menu
                  </Drawer.Title>
                </Drawer.Header>
                <Drawer.Body py={6}>
                  <VStack spacing={6} align="stretch">
                    <RouterLink to={currentName === "/login" ? "/" : "/login"}>
                      {menuItems.map((item, index) => (
                        <Flex
                          key={index}
                          as="a"
                          href={item.link}
                          align="center"
                          p="3"
                          _hover={{ bg: "gray.700" }}
                        >
                          <Icon
                            as={item.icon}
                            boxSize="5"
                            mr="5"
                            alignItems={"center"}
                          />
                          <Text whiteSpace="nowrap">{item.label}</Text>
                        </Flex>
                      ))}
                      {/* <Link
                        fontSize="lg"
                        p={3}
                        color="gray.700"
                        _hover={{
                          bg: "primary.50",
                          color: "primary.600",
                          textDecoration: "none",
                        }}
                        transition="all 0.2s"
                      >
                        {currentName === "/login" ? "Voltar" : "Login"}
                      </Link> */}
                    </RouterLink>
                    <Link
                      fontSize="lg"
                      p={3}
                      color="gray.700"
                      _hover={{
                        bg: "primary.50",
                        color: "primary.600",
                        textDecoration: "none",
                      }}
                      transition="all 0.2s"
                    >
                      Recursos
                    </Link>
                    <Separator />
                    <Link
                      fontSize="lg"
                      p={3}
                      color="gray.700"
                      _hover={{
                        bg: "primary.50",
                        color: "primary.600",
                        textDecoration: "none",
                      }}
                      transition="all 0.2s"
                    >
                      Sobre
                    </Link>
                    <Separator />
                  </VStack>
                </Drawer.Body>
                <Drawer.CloseTrigger asChild>
                  <CloseButton
                    size="md"
                    position="absolute"
                    top={3}
                    right={3}
                    color="white"
                    _hover={{ bg: "primary.600" }}
                  />
                </Drawer.CloseTrigger>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
      </Flex>
    </>
  )
}
