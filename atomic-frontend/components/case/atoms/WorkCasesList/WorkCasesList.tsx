'use client';
import React from 'react';
import { Box, Image, Text, Tag, VStack, Wrap, WrapItem, Grid, Flex } from '@chakra-ui/react';
import { WorkCasesListProps } from './WorkCasesList.types';
import { inter } from '@/constants/fonts/inter/inter.constants';
import Link from 'next/link';

const PLACEHOLDER_DATA = new Array(6).fill({
   preview: '/placeholder-image.jpg',
   title: 'Заголовок',
   tags: ['Нейросети', 'Блокчейн', 'AppStore', 'RU'],
   created_at: '01.01.2025',
});

export const WorkCasesList = ({ paginatedWorkCases }: WorkCasesListProps) => {
   const itemsToRender = paginatedWorkCases.length > 0 ? paginatedWorkCases : PLACEHOLDER_DATA;

   return (
      <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={10} w="full">
         {itemsToRender.map((item, idx) => (
            <Link key={idx} href={`case/${item.ID}`}>
               <Flex justify="center" align="center" direction="column" gap="2">
                  <Box borderRadius="xl" overflow="hidden">
                     {item.Preview ? (
                        <Image
                           src={item.Preview.URL}
                           width={400}
                           height={410}
                           alt={item.Preview.ObjectName}
                           style={{
                              borderRadius: '1.5rem',
                              aspectRatio: '1/1',
                              objectFit: 'cover',
                              maxWidth: '100%',
                              maxHeight: '100%',
                           }}
                        />
                     ) : (
                        <Box w="80" h="25rem" bg="skyblue" rounded="2xl" />
                     )}
                  </Box>
                  <VStack align="center" spaceY="2">
                     <Text
                        fontWeight="semibold"
                        fontSize="lg"
                        className={`${inter.className} text-center text-xl`}
                     >
                        {item.Title}
                     </Text>
                     <Wrap>
                        {(typeof item.Tags === 'string'
                           ? item.Tags.split(',').map((t: string) => t.trim())
                           : item.Tags || []
                        ).map((tag: string, i: number) => (
                           <WrapItem key={i}>
                              <Tag.Root
                                 variant="solid"
                                 style={{
                                    backgroundColor: '#C6C1FF',
                                    borderRadius: '99999px',
                                 }}
                                 className={`${inter.className} py-2 px-[0.875rem] font-normal text-xs`}
                              >
                                 {tag}
                              </Tag.Root>
                           </WrapItem>
                        ))}
                     </Wrap>
                     <Text fontStyle="italic" fontSize="sm">
                        {new Date(item.CreatedAt).toLocaleDateString()}
                     </Text>
                  </VStack>
               </Flex>
            </Link>
         ))}
      </Grid>
   );
};
