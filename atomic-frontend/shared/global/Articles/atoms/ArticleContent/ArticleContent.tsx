import { inter } from '@/constants/fonts/inter/inter.constants';

import { Box, GridItem, Heading, VStack, Text, Flex, Button } from '@chakra-ui/react';
import Image from 'next/image';
import { ArticleContentProps } from './ArticleContent.types';
import Link from 'next/link';

export function ArticleContent(props: ArticleContentProps) {
   const { articles } = props;
   return (
      <>
         {Array.isArray(articles) && articles.length > 0
            ? articles.map((articleItem, _) => {
                 return (
                    <GridItem key={articleItem.ID}>
                       <VStack
                          bg="#F4F4F4"
                          borderRadius="1.875rem"
                          p={5}
                          spaceY={4}
                          align="stretch"
                       >
                          <Box borderRadius="2xl" overflow="hidden" w="80" h="36">
                             {articleItem.MainImages?.[0]?.URL ? (
                                <Box borderRadius="2xl" overflow="hidden" w="80" h="36">
                                   <Image
                                      src={articleItem.MainImages[0].URL}
                                      alt={articleItem.MainImages[0].ObjectName ?? 'Image'}
                                      width={320}
                                      height={150}
                                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
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
                                {articleItem.Title}
                             </Heading>
                             <Text
                                fontSize="sm"
                                color="black"
                                maxW="xs"
                                truncate
                                className={`${inter.className}`}
                             >
                                {articleItem.Description}{' '}
                             </Text>
                             <Text
                                fontSize="sm"
                                fontStyle="italic"
                                fontWeight="light"
                                color="black"
                                alignSelf="end"
                                className={`${inter.className}`}
                             >
                                {new Date(articleItem.CreatedAt).toLocaleDateString()}
                             </Text>
                          </VStack>
                          <Flex justify="end">
                             <Link
                                href={`/articles/${articleItem.ID}`}
                                color="black"
                                className={`${inter.className} underline uppercase font-semibold text-base text-black`}
                             >
                                Читать полностью
                             </Link>
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
