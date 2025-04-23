'use client';

import { Box, Flex, Text, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import React, { FC } from 'react';
import ourTeamsAvatar from '@/public/assets/images/main/ourTeamsAvatar.svg';
import { TeamSectionCardProps } from './TeamSectionCard.types';
import { inter } from '@/constants/fonts/inter/inter.constants';

export const TeamSectionCard: FC<TeamSectionCardProps> = (props) => {
   const { teamInfo } = props;
   return (
      <Box
         bg="#92C8FF"
         rounded={{ base: '2xl', lg: '3xl' }}
         flex={{ base: '0 0 100%', lg: '0 0 15%' }}
         overflow="hidden"
      >
         <Flex flexDirection="column" justify="center" align="center" gap={4} pt={4}>
            <Flex flexDirection="column" align="center" justify="center">
               <Heading
                  color="black"
                  fontWeight="semibold"
                  fontSize="md"
                  className={`${inter.className}`}
               >
                  {teamInfo?.Name || 'Василий Пупочек'}
               </Heading>
               <Text color="black" fontSize="4" fontWeight="light" className={`${inter.className}`}>
                  {teamInfo?.Description || 'Таргетолог'}
               </Text>
            </Flex>
            {teamInfo?.Avatar && (
               <Image
                  src={teamInfo?.Avatar.URL || ourTeamsAvatar}
                  width={260}
                  height={260}
                  alt="avatar-founder"
               />
            )}
         </Flex>
      </Box>
   );
};
