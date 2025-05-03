import { inter } from '@/constants/fonts/inter/inter.constants';
import ImageModal from '@/shared/global/ImageModal/ImageModal';
import { stripHtmlTags } from '@/shared/tools/stripHtmlTags';
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
                       <Box borderRadius="2xl" overflow="hidden" w="full">
                          {article.ShortImage ? (
                             <Box
                                borderRadius="2xl"
                                overflow="hidden"
                                w="full"
                                h="auto"
                                maxH="9.375rem"
                             >
                                <ImageModal
                                   imageUrl={article.ShortImage.URL}
                                   alt={article.ShortImage.ObjectName || ''}
                                   maxW="100%"
                                   maxH="auto"
                                   width={350}
                                   height={150}
                                />
                             </Box>
                          ) : (
                             <Box w="full" h="9.375rem" borderRadius="1.25rem" bg="blue.200" />
                          )}
                       </Box>

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
                             truncate
                             className={`${inter.className}`}
                          >
                             {article.Description ? stripHtmlTags(article.Description) : ''}
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
