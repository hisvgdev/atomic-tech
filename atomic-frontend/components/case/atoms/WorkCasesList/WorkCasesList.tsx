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
            <Link key={idx} href={`case/${item.id}`}>
               <Flex direction="column" gap="2">
                  <Box borderRadius="xl" overflow="hidden">
                     <Image
                        src={item.preview}
                        alt={item.title}
                        width="100%"
                        height="20rem"
                        objectFit="cover"
                     />
                  </Box>
                  <VStack align="center" spaceY="2">
                     <Text
                        fontWeight="semibold"
                        fontSize="lg"
                        className={`${inter.className} text-2xl`}
                     >
                        {item.title}
                     </Text>
                     <Wrap>
                        {(typeof item.tags === 'string'
                           ? item.tags.split(',').map((t: string) => t.trim())
                           : item.tags || []
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
                        {new Date(item.created_at).toLocaleDateString()}
                     </Text>
                  </VStack>
               </Flex>
            </Link>
         ))}
      </Grid>
   );
};
