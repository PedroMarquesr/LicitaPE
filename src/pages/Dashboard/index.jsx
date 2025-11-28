"use client"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { Flex, Text } from "@chakra-ui/react"

import Sidebar from "./components/Sidebar/Sidebar"
import useStore from "@/components/globalStates/store"
import MenuDashboardMb from "./components/MenuDashboardMb/MenuDashboardMb"

export default function Dashboard() {
  const { user } = useStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user?.uid) {
      navigate("/login")
    }
  }, [user, navigate])

  if (!user?.uid) {
    return (
      <Flex justify="center" align="center" h="100%">
        <Text>Carregando...</Text>
      </Flex>
    )
  }

  return (
    <>
      <Flex w={"100%"} position="relative">
        {" "}
        <Flex display={{ base: "none", lg: "flex" }}>
          <Sidebar />
        </Flex>
        <Flex flex={1} pl={{ base: "0", md: "45px" }} position="relative">
          <Outlet />

          <Flex
            display={{ base: "flex", lg: "none" }}
            position="absolute"
            right={0}
            top={0}
            zIndex={10}
          >
            <MenuDashboardMb />
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
