'use client';

import React, { FC } from 'react';
import { FeedbackProps } from './Feedback.types';
import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { inter } from '@/constants/fonts/inter/inter.constants';

export const Feedback: FC<FeedbackProps> = (props) => {
   const { author, desc, logoCompany, id, blackLogoCompany, isBgWhite, isDragging } = props;

   return (
      <Box
         bg={isBgWhite ? 'white' : '#FFFFFF1A'}
         rounded={{ base: '2xl', lg: '3.125rem' }}
         flex={{ base: '0 0 100%', lg: '0 0 30%' }}
         minW="0"
         overflow="hidden"
         pt="24"
         pb="4.68rem"
         px="9"
         cursor={isDragging ? 'grabbing' : 'grab'}
      >
         <Flex direction="column" align="center" justify="center" gap="6" h="100%">
            <Box maxW="sm">
               <Text
                  as="p"
                  textAlign="center"
                  fontWeight="semibold"
                  fontSize="base"
                  color={isBgWhite ? 'black' : ''}
                  flexGrow={1}
                  className={`${inter.className}`}
               >
                  {desc}
               </Text>
            </Box>
            <Flex direction="column" gap="1.25rem" align="center" justify="center" mt="auto">
               <Text color={isBgWhite ? 'black' : undefined} className={`${inter.className}`}>
                  {author}
               </Text>
               <Image
                  src={isBgWhite ? blackLogoCompany : logoCompany}
                  width={110}
                  height={25}
                  alt=""
               />
            </Flex>
         </Flex>
      </Box>
   );
};
