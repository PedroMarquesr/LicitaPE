"use client";

import { Flex, Button, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function DesktopMenu() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <Flex>
        <Link color={"gray.500"} _hover={{ color: "black" }} px={"2"}>
          Recursos
        </Link>
        <Link color={"gray.500"} _hover={{ color: "black" }} px={"2"}>
          Sobre
        </Link>
      </Flex>
      <RouterLink to={currentPath === "/login" ? "/" : "/login"}>
        <Button
          fontWeight={"bold"}
          transition="all 0.2s ease-in-out"
          _hover={{
            transform: "translateY(-2px)",
            textDecoration: "none",
            bgColor: "primary.500",
          }}
        >
          {currentPath === "/login" ? "Voltar" : "Login"}
        </Button>
      </RouterLink>
    </>
  );
}
