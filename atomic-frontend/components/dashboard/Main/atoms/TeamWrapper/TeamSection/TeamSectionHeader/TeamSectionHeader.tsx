'use client';

import CustomBtnSlider from '@/shared/ui/custom/atom/CustomBtnSlider';
import { Flex, Box, Heading } from '@chakra-ui/react';
import React, { FC } from 'react';
import { TeamSectionHeaderProps } from './TeamSectionHeader.types';
import { inter } from '@/constants/fonts/inter/inter.constants';

export const TeamSectionHeader: FC<TeamSectionHeaderProps> = (props) => {
   const { scrollNext, scrollPrev } = props;

   return (
      <Flex w="full" justify="space-between" align="center">
         <Box maxW="lg">
            <Heading
               fontWeight="normal"
               fontSize="xl"
               lineHeight="2rem"
               textAlign={{ base: 'center', lg: 'start' }}
               className={`${inter.className}`}
            >
               Знакомьтесь с нашей{' '}
               <b style={{ fontWeight: 'bold' }}>креативной командой разработчиков</b>
            </Heading>
         </Box>
         <Box display={{ base: 'none', lg: 'block' }}>
            <CustomBtnSlider slideNext={scrollNext} slidePrev={scrollPrev} />
         </Box>
      </Flex>
   );
};
