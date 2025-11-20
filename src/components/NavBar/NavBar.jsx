import { Text, Image, Link, Flex, Show, Button } from "@chakra-ui/react";
import DesktopMenu from "./components/DesktopMenu.jsx/DesktopMenu";
import { ImMenu } from "react-icons/im";
import MobileMenu from "./components/MobileMenu/MobileMenu";

export default function NavBar() {
  return (
    <Flex
      bg="primary.50"
      py={{ base: 3, sm: 4, md: 6, lg: 8 }}
      px={{ base: 3, sm: 4, md: 6, lg: 10 }}
      h={{ base: "12", md: "14", lg: "16" }}
      align="center"
      justify="space-between"
      borderBottom={"1px solid"}
      borderColor="primary.50"
    >
      <Link
        href="/"
        display="flex"
        alignItems="center"
        gap={{ base: 1, sm: 2, md: 3, lg: 4 }}
        transition="all 0.2s ease-in-out"
        _hover={{ transform: "translateY(-2px)", textDecoration: "none" }}
      >
        <Image
          src="./icon-licitape.png"
          w={{ base: 6, sm: 7, md: 8, lg: 10 }}
          alt="Licita.PE"
        />{" "}
        <Text
          fontSize={{ md: "lg", lg: "xl", xl: "2xl" }}
          fontWeight="bold"
          color="primary.700"
        >
          Licita.PE
        </Text>
      </Link>
      <Flex display={{ base: "none", md: "flex" }}>
        <DesktopMenu />
        <MobileMenu />
      </Flex>

      <Flex display={{ base: "flex", md: "none" }}>
        <MobileMenu />
      </Flex>
    </Flex>
  );
}
