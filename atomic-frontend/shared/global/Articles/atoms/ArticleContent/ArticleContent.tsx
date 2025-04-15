import { inter } from '@/constants/fonts/inter/inter.constants';
import { handleGetArticlesList } from '@/service/api/articles.api';
import { Box, GridItem, Heading, VStack, Text, Flex, Button } from '@chakra-ui/react';
import Image from 'next/image';

export async function ArticleContent() {
   const getArticlesList = await handleGetArticlesList();
   return (
      <>
         {Array.isArray(getArticlesList) && getArticlesList.length > 0
            ? getArticlesList.map((articleItem, _) => {
                 return (
                    <GridItem key={articleItem.id}>
                       <VStack
                          bg="#F4F4F4"
                          borderRadius="1.875rem"
                          p={5}
                          spaceY={4}
                          align="stretch"
                       >
                          <Box w="full" h="9.375rem" borderRadius="1.25rem">
                             <Image
                                src={articleItem.mainImages?.[0].url}
                                alt={articleItem.mainImages?.[0].objectName}
                             />
                          </Box>
                          <VStack align="start">
                             <Heading
                                size="md"
                                fontWeight="semibold"
                                color="black"
                                className={`${inter.className}`}
                             >
                                {articleItem.title}
                             </Heading>
                             <Text
                                fontSize="sm"
                                color="black"
                                maxW="xs"
                                className={`${inter.className}`}
                             >
                                {articleItem.description}
                             </Text>
                             <Text
                                fontSize="sm"
                                fontStyle="italic"
                                fontWeight="light"
                                color="black"
                                alignSelf="end"
                                className={`${inter.className}`}
                             >
                                {articleItem.createdAt}
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
                 );
              })
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
      </>
   );
}
