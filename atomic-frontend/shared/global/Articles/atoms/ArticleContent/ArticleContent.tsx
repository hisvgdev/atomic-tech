import { Box, GridItem, Heading, VStack, Text, Flex, Button } from '@chakra-ui/react';
import React from 'react';

export const ArticleContent = () => {
   return Array.from({ length: 6 }).map((_, idx) => (
      <GridItem key={idx}>
         <VStack bg="#F4F4F4" borderRadius="1.875rem" p={5} spaceY={4} align="stretch">
            <Box w="full" h="9.375rem" borderRadius="1.25rem" bg="blue.200" />
            <VStack align="start">
               <Heading size="md" fontWeight="semibold" color="black">
                  Заголовок
               </Heading>
               <Text fontSize="sm" color="black" maxW="xs">
                  Идейные соображения высшего порядка, а также сложившаяся структура организации
                  требуют определения и уточнения систем массового участия.
               </Text>
               <Text
                  fontSize="sm"
                  fontStyle="italic"
                  fontWeight="light"
                  color="black"
                  alignSelf="end"
               >
                  01.01.2025
               </Text>
            </VStack>
            <Flex justify="end">
               <Button
                  color="black"
                  fontWeight="semibold"
                  fontSize="base"
                  className="underline uppercase"
               >
                  Читать полностью
               </Button>
            </Flex>
         </VStack>
      </GridItem>
   ));
};
