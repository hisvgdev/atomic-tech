'use client';

import { Box, Flex, Text, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import React, { FC } from 'react';
import ourTeamsAvatar from '@/public/assets/images/main/ourTeamsAvatar.svg';
import { TeamSectionCardProps } from './TeamSectionCard.types';

export const TeamSectionCard: FC<TeamSectionCardProps> = (props) => {
   const { emblaRef } = props;
   return (
      <Box overflow="hidden" ref={emblaRef}>
         <Flex gap={6} p="5">
            {Array.from({ length: 6 }).map((_, idx) => (
               <Box
                  key={idx}
                  bg="#92C8FF"
                  rounded="3.125rem"
                  flex="0 0 25%"
                  minW="0"
                  overflow="hidden"
               >
                  <Flex flexDirection="column" gap={4} pt={4}>
                     <Flex flexDirection="column" align="center" justify="center">
                        <Heading color="black" fontWeight="semibold" fontSize="md">
                           Василий Пупочек
                        </Heading>
                        <Text color="black" fontSize="base" fontWeight="light">
                           Таргетолог
                        </Text>
                     </Flex>
                     <Image src={ourTeamsAvatar} width={260} height={260} alt="avatar-founder" />
                  </Flex>
               </Box>
            ))}
         </Flex>
      </Box>
   );
};
