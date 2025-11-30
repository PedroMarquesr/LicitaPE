"use client";

import { Flex, Box, Tag, Text } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/components/libs/firebaseinit";
import { useState, useEffect } from "react";

export default function BiddingCalendar() {
  const [biddings, setBiddings] = useState([]);
  useEffect(() => {
    const fetchBiddings = async () => {
      const querySnapshot = await getDocs(collection(db, "biddings"));
      const biddingsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBiddings(biddingsData);
    };
    fetchBiddings();
  }, []);

  const groupBiddingsByDate = () => {
    const grouped = {};

    biddings.forEach((bidding) => {
      const dateKey = formatDate(bidding.disputeDate);

      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }

      grouped[dateKey].push(bidding);
    });

    return grouped;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR");
  };

  const groupedBiddings = groupBiddingsByDate();

  return (
    <Flex direction="column" gap={6} p={4}>
      {/* 🎯 PRIMEIRO: Vamos ver se tem dados */}
      {biddings.length === 0 ? (
        <Text>Carregando licitações...</Text>
      ) : (
        // 🎯 SEGUNDO: Mostrar os dados agrupados
        Object.entries(groupedBiddings).map(([date, biddingsForDate]) => (
          <Box key={date}>
            {/* CABEÇALHO COM A DATA */}
            <Text
              fontSize="lg"
              fontWeight="bold"
              color="blue.700"
              bg="blue.50"
              p={2}
              borderRadius="md"
              mb={2}
            >
              {date}
            </Text>

            {/* LISTA DE LICITAÇÕES DESTA DATA */}
            <Flex direction="column" gap={2}>
              {biddingsForDate.map((bidding) => (
                <Flex
                  key={bidding.id}
                  p={3}
                  border="1px solid"
                  borderColor="gray.200"
                  borderRadius="md"
                  bg="white"
                  gap={3}
                  align="center"
                >
                  {/* INFORMAÇÕES DA LICITAÇÃO */}
                  <Flex direction="column" flex={1}>
                    <Flex gap={2} align="center">
                      <Text fontWeight="bold" color="gray.800">
                        {bidding.identificationNumber}
                      </Text>
                      <Text color="gray.600">-</Text>
                      <Text color="gray.700" fontSize="sm">
                        {bidding.responsibleAgency}
                      </Text>
                    </Flex>

                    {/* TAGS - se existirem */}
                    {bidding.tags && bidding.tags.length > 0 && (
                      <Flex gap={1} mt={1} wrap="wrap">
                        {bidding.tags.map((tag, index) => (
                          <Tag
                            key={index}
                            size="sm"
                            colorScheme="blue"
                            variant="subtle"
                          >
                            <TagLabel>{tag}</TagLabel>
                          </Tag>
                        ))}
                      </Flex>
                    )}
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </Box>
        ))
      )}
    </Flex>
  );
}
