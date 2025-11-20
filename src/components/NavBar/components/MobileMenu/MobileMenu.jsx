"use client";

import {
  Flex,
  Button,
  Presence,
  Text,
  Link,
  Portal,
  Drawer,
  CloseButton,
  VStack,
} from "@chakra-ui/react";
import { ImMenu } from "react-icons/im";

import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Flex>
        <Drawer.Root open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
          <Drawer.Trigger asChild>
            <Button
              onClick={() => setIsOpen((prev) => !prev)}
              bg={"transparent"}
            >
              <Text color="primary.500" fontSize={"x-large"}>
                <ImMenu />
              </Text>{" "}
            </Button>
          </Drawer.Trigger>
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content w={"20%"}>
                <Drawer.Header>
                  <Drawer.Title>Menu</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                  <Flex flexDir={"column"}>
                    <Link>Login</Link>
                    <Link>Recursos</Link>
                    <Link>Sobre</Link>
                  </Flex>
                </Drawer.Body>

                <Drawer.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Drawer.CloseTrigger>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
      </Flex>
    </>
  );
}
