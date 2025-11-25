"use client"

import {
  Box,
  VStack,
  Text,
  Heading,
  Icon,
  Button,
  Card,
  CardBody,
} from "@chakra-ui/react"
import { FiTool, FiHome } from "react-icons/fi"
import { Link } from "react-router-dom"

export default function AddTenderForm() {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" minH="60vh">
      <Card maxW="500px" textAlign="center" shadow="lg">
        <CardBody p={8}>
          <VStack spacing={6}>
            <Box
              w="80px"
              h="80px"
              borderRadius="full"
              bg="blue.50"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={FiTool} boxSize={10} color="blue.500" />
            </Box>

            <VStack spacing={3}>
              <Heading size="lg" color="gray.700">
                🚧 Em Desenvolvimento
              </Heading>

              <Text color="gray.500" fontSize="md">
                Em breve você poderá cadastrar suas licitações de forma prática
                e eficiente.
              </Text>
            </VStack>

            <Link to="/dashboard" style={{ width: "100%" }}>
              <Button
                colorScheme="blue"
                size="lg"
                w="100%"
                leftIcon={<FiHome />}
              >
                Voltar para o Dashboard
              </Button>
            </Link>

            <Text fontSize="sm" color="gray.400" mt={4}>
              Obrigado pela paciência!
            </Text>
          </VStack>
        </CardBody>
      </Card>
    </Box>
  )
}
