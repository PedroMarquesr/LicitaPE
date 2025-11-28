"use client"

import {
  Flex,
  Button,
  Text,
  Portal,
  Icon,
  Drawer,
  CloseButton,
  Separator,
  VStack,
} from "@chakra-ui/react"
import { useState } from "react"
import { Link as RouterLink } from "react-router-dom"

import { useLocation } from "react-router-dom"

import { MdDashboard } from "react-icons/md"
import { FaPlus } from "react-icons/fa"
import { ImMenu } from "react-icons/im"

export default function MenuDashboardMb() {
  const location = useLocation()

  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    {
      icon: MdDashboard,
      label: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: FaPlus,
      label: "Cadastro de licitação",
      link: "/dashboard/AddTenderForm",
    },
  ]

  return (
    <>
      <Flex w={"100%"} justify={"right"}>
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
                    {menuItems.map((item, index) => (
                      <RouterLink
                        key={index}
                        to={item.link}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          padding: "12px",
                          textDecoration: "none",
                          color: "inherit",
                        }}
                      >
                        <Icon as={item.icon} boxSize="5" mr="5" />
                        <Text whiteSpace="nowrap">{item.label}</Text>
                      </RouterLink>
                    ))}
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
