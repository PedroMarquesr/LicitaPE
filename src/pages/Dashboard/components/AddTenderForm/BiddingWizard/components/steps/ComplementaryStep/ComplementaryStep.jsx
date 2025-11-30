"use client";

import {
  Flex,
  Text,
  Badge,
  Grid,
  GridItem,
  Tag,
  Input,
  Button,
  Wrap,
  WrapItem,
  IconButton,
} from "@chakra-ui/react";
import { IoCloseCircle } from "react-icons/io5";
import { useState } from "react";
import InputDefaultForm from "../components/InputDefaultForm/InputDefaultForm";

export default function ComplementaryStep({ biddingData, setBiddingData }) {
  const [newTag, setNewTag] = useState("");

  const handleAddTag = () => {
    if (newTag.trim() && !biddingData.tags?.includes(newTag.trim())) {
      setBiddingData({
        ...biddingData,
        tags: [...(biddingData.tags || []), newTag.trim()],
      });
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setBiddingData({
      ...biddingData,
      tags: biddingData.tags?.filter((tag) => tag !== tagToRemove) || [],
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  const predefinedTags = ["Acompanhamento", "Alta Prioridade"];

  return (
    <Flex direction="column" w="100%" align="center" gap={6}>
      <Text
        display={{ base: "flex", md: "none" }}
        color={"blue.800"}
        fontWeight={"bold"}
        textShadow={"2px 2px 4px rgba(0,0,0,0.2)"}
        fontSize={"2xl"}
        textAlign="center"
      >
        Informações Complementares
      </Text>

      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} w="100%">
        <GridItem colSpan={{ base: 1, md: 2 }}>
          <Text fontSize="lg" fontWeight="semibold" color="gray.700" mb={3}>
            Tags de Destaque
          </Text>
          <Flex gap={3} direction="column">
            <Wrap spacing={2} mb={3}>
              {biddingData.tags?.map((tag, index) => (
                <WrapItem key={index}>
                  <Badge
                    align="center"
                    colorPalette={
                      tag === "Acompanhamento"
                        ? "purple"
                        : tag === "Alta Prioridade"
                        ? "red"
                        : "green.500"
                    }
                    px={3}
                    py={1}
                    fontSize="sm"
                    fontWeight="medium"
                  >
                    {tag}
                    <IconButton
                      icon={<IoCloseCircle />}
                      size="sm"
                      ml={2}
                      variant="ghost"
                      color={tag === "Acompanhamento" ? "purple.500" : tag === "Alta Prioridade" ? "red.500" : "green.500"}
                      _hover={{ bg: "rgba(255,255,255,0.2)" }}
                      onClick={() => handleRemoveTag(tag)}
                      aria-label={`Remover tag ${tag}`}
                    />
                  </Badge>
                </WrapItem>
              ))}
            </Wrap>

            <Flex gap={2} align="center">
              <Input
                placeholder="Digite uma tag ou selecione abaixo"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyUp={handleKeyPress}
                flex={1}
              />
              <Button onClick={handleAddTag} colorScheme="blue" size="sm">
                Adicionar
              </Button>
            </Flex>

            <Text fontSize="sm" color="gray.600" mt={2}>
              Tags sugeridas:
            </Text>
            <Wrap spacing={2}>
              {predefinedTags.map((tag) => (
                <WrapItem key={tag}>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      if (!biddingData.tags?.includes(tag)) {
                        setBiddingData({
                          ...biddingData,
                          tags: [...(biddingData.tags || []), tag],
                        });
                      }
                    }}
                    isDisabled={biddingData.tags?.includes(tag)}
                  >
                    {tag}
                  </Button>
                </WrapItem>
              ))}
            </Wrap>
          </Flex>
        </GridItem>

        {/* 📞 Contatos */}
        <GridItem>
          <Text fontSize="lg" fontWeight="semibold" color="gray.700" mb={3}>
            Contatos
          </Text>
          <Flex gap={3} direction="column">
            <InputDefaultForm
              legend={"Telefone para Contato"}
              placeholder={"(00) 00000-0000"}
              inputValue={biddingData.contactPhone}
              onChange={(e) =>
                setBiddingData({
                  ...biddingData,
                  contactPhone: e.target.value,
                })
              }
            />
            <InputDefaultForm
              legend={"E-mail para Contato"}
              placeholder={"contato@orgao.gov.br"}
              inputValue={biddingData.contactEmail}
              onChange={(e) =>
                setBiddingData({
                  ...biddingData,
                  contactEmail: e.target.value,
                })
              }
            />
          </Flex>
        </GridItem>

        {/* 📄 Documentação */}
        <GridItem>
          <Text fontSize="lg" fontWeight="semibold" color="gray.700" mb={3}>
            Documentação
          </Text>
          <Flex gap={3} direction="column">
            <InputDefaultForm
              legend={"Link do Edital"}
              placeholder={"https://exemplo.com/edital.pdf"}
              inputValue={biddingData.biddingNoticeUrl}
              onChange={(e) =>
                setBiddingData({
                  ...biddingData,
                  biddingNoticeUrl: e.target.value,
                })
              }
            />
            <InputDefaultForm
              legend={"Link dos Anexos"}
              placeholder={"https://exemplo.com/anexos.zip"}
              inputValue={biddingData.attachmentsUrl}
              onChange={(e) =>
                setBiddingData({
                  ...biddingData,
                  attachmentsUrl: e.target.value,
                })
              }
            />
          </Flex>
        </GridItem>

        {/* 📝 Observações */}
        <GridItem colSpan={{ base: 1, md: 2 }}>
          <Text fontSize="lg" fontWeight="semibold" color="gray.700" mb={3}>
            Observações
          </Text>
          <InputDefaultForm
            legend={"Observações Gerais"}
            placeholder={"Informações adicionais relevantes..."}
            inputValue={biddingData.observations}
            onChange={(e) =>
              setBiddingData({
                ...biddingData,
                observations: e.target.value,
              })
            }
          />
        </GridItem>
      </Grid>
    </Flex>
  );
}
