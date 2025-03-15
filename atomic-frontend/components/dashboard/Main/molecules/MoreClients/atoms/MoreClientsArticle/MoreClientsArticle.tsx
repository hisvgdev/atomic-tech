'use client';

import React, { FC } from 'react';
import { MoreClientsArticleProps } from './MoreClientsArticle.types';
import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

export const MoreClientsArticle: FC<MoreClientsArticleProps> = (props) => {
   const { author, desc, logoCompany, id } = props;

   return (
      <Box
         bg="#FFFFFF1A"
         rounded="3.125rem"
         flex="0 0 30%"
         minW="0"
         overflow="hidden"
         pt="24"
         pb="4.68rem"
         px="9"
      >
         <Flex direction="column" align="center" justify="end" gap="20">
            <Text as="p" textAlign="center" fontWeight="semibold" fontSize="base">
               {desc}
            </Text>
            <Flex direction="column" gap="1.25rem" align="center" justify="center">
               <Text>{author}</Text>
               <Image src={logoCompany} width={110} height={25} alt="" />
            </Flex>
         </Flex>
      </Box>
   );
};
