"use client"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { Button, Icon, Text, Flex, Box } from "@chakra-ui/react"
import { FcGoogle } from "react-icons/fc"
import { useNavigate } from "react-router-dom" // ← MUDANÇA AQUI

import { app, db } from "../libs/firebaseinit"
import useStore from "@/components/globalStates/store"
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore"

export default function BtnGoogle() {
  // ← Corrigi o nome para BtnGoogle
  const auth = getAuth(app)
  const navigate = useNavigate() // ← MUDANÇA AQUI
  const getUser = useStore((state) => state.getUser)

  async function loginGoogle() {
    const provider = new GoogleAuthProvider()
    console.log(`Clicou no botão`)
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        const user = result.user
        console.log(result)
        console.log(`Objeto recebido no login`, user)
        getUser()
        navigate("/") // ← MUDANÇA AQUI
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.customData.email
        const credential = GoogleAuthProvider.credentialFromError(error)
        console.error("Erro no login:", error)
      })
  }

  return (
    <>
      <Button
        onClick={loginGoogle}
        w={{ base: "100%", md: "300px" }}
        bgColor="gray.50"
        _hover={{
          backgroundColor: "gray.200",
          borderColor: "gray.500",
        }}
        p={{ base: "4", md: "7" }}
        border={"1px solid"}
        borderColor="gray.200"
      >
        <Icon size={{ base: "xl", md: "2xl" }}>
          <FcGoogle />
        </Icon>
        <Text color="gray.800" fontSize={{ base: "sm", md: "md" }} ml={2}>
          Continue com Google
        </Text>
      </Button>
    </>
  )
}
