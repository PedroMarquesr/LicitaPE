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
      <Flex justify="center" align="center" h="100vh">
        <Text>Carregando...</Text>
      </Flex>
    )
  }

  return (
    <>
      <Flex display={{ base: "none", lg: "flex" }}>
        <Sidebar />
      </Flex>
      <Flex display={{ base: "flex", lg: "none" }}>
        <MenuDashboardMb />
      </Flex>
      <Flex pl={{ base: "1", md: "45px" }}>
        <Outlet />
      </Flex>
    </>
  )
}
