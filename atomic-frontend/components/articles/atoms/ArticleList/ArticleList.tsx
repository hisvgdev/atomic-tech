import { inter } from '@/constants/fonts/inter/inter.constants';
import { ArticlesProps } from '@/types/frontend/articles.types';
import { Box, Button, Flex, Grid, GridItem, Heading, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export const ArticleList = ({ articles }: { articles: ArticlesProps[] }) => {
   return (
      <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={10} w="full">
         {Array.isArray(articles) && articles.length > 0
            ? articles.map((article, idx) => (
                 <GridItem key={idx}>
                    <VStack
                       bg="#F4F4F4"
                       borderRadius="3xl"
                       p={5}
                       spaceY={4}
                       align="stretch"
                       maxW="96"
                    >
                       <Box w="full" h="10rem" borderRadius="2xl" bg="blue.200" />
                       <VStack align="start">
                          <Heading
                             size="md"
                             fontWeight="semibold"
                             color="black"
                             className={`${inter.className}`}
                             maxW="xs"
                             truncate
                          >
                             {article.Title || ''}
                          </Heading>
                          <Text
                             fontSize="sm"
                             color="black"
                             maxW="xs"
                             className={`${inter.className}`}
                          >
                             {article.Description || ''}
                          </Text>
                          <Text
                             fontSize="sm"
                             fontStyle="italic"
                             fontWeight="light"
                             color="black"
                             alignSelf="end"
                             className={`${inter.className}`}
                          >
                             {new Date(article.CreatedAt).toLocaleDateString()}
                          </Text>
                       </VStack>
                       <Flex justify="end">
                          <Link
                             href={`/articles/${article.ID}`}
                             className={`${inter.className} underline uppercase text-base font-semibold`}
                             style={{
                                color: 'black',
                             }}
                          >
                             Читать полностью
                          </Link>
                       </Flex>
                    </VStack>
                 </GridItem>
              ))
            : Array.from({ length: 6 }).map((_, idx) => (
                 <GridItem key={idx}>
                    <VStack bg="#F4F4F4" borderRadius="1.875rem" p={5} spaceY={4} align="stretch">
                       <Box w="full" h="9.375rem" borderRadius="1.25rem" bg="blue.200" />
                       <VStack align="start">
                          <Heading
                             size="md"
                             fontWeight="semibold"
                             color="black"
                             className={`${inter.className}`}
                          >
                             Заголовок
                          </Heading>
                          <Text
                             fontSize="sm"
                             color="black"
                             maxW="xs"
                             className={`${inter.className}`}
                          >
                             Идейные соображения высшего порядка, а также сложившаяся структура
                             организации требуют определения и уточнения систем массового участия.
                          </Text>
                          <Text
                             fontSize="sm"
                             fontStyle="italic"
                             fontWeight="light"
                             color="black"
                             alignSelf="end"
                             className={`${inter.className}`}
                          >
                             01.01.2025
                          </Text>
                       </VStack>
                       <Flex justify="end">
                          <Button
                             color="black"
                             fontWeight="semibold"
                             fontSize="base"
                             className={`${inter.className} underline uppercase`}
                          >
                             Читать полностью
                          </Button>
                       </Flex>
                    </VStack>
                 </GridItem>
              ))}
      </Grid>
   );
};
