"use client"
import { Flex, Text, Button } from "@chakra-ui/react"
import { FaChevronLeft } from "react-icons/fa"

export default function HeaderPage({
  titleHeader,
  subTitleHeader,
  headerButton,
  onClick,
}) {
  return (
    <Flex>
      <Flex>
        <Button>
          <FaChevronLeft />
        </Button>
        <Flex>
          <Text>{titleHeader}</Text>
          <Text>{subTitleHeader}</Text>
        </Flex>
      </Flex>
      <Flex>
        <Button onClick={onClick}>
          <Text>{headerButton}</Text>
        </Button>
      </Flex>
    </Flex>
  )
}
