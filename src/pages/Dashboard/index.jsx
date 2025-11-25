"use client"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { Flex, Text } from "@chakra-ui/react"

import Sidebar from "./components/Sidebar/Sidebar"

import useStore from "@/components/globalStates/store"

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
      <Sidebar />

      <Flex pl={"45px"}>
        <Text>teste</Text>
        <Outlet />
      </Flex>
    </>
  )
}
