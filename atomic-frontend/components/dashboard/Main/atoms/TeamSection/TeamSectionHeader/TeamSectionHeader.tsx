'use client';

import CustomBtnSlider from '@/shared/ui/custom/atom/CustomBtnSlider';
import { Flex, Box, Heading } from '@chakra-ui/react';
import React, { FC } from 'react';
import { TeamSectionHeaderProps } from './TeamSectionHeader.types';

export const TeamSectionHeader: FC<TeamSectionHeaderProps> = (props) => {
   const { scrollNext, scrollPrev } = props;

   return (
      <Flex w="full" justify="space-between" align="center">
         <Box maxW="lg">
            <Heading fontWeight="normal" fontSize="xl">
               Знакомьтесь с нашей{' '}
               <b style={{ fontWeight: 'bold' }}>креативной командой разработчиков</b>
            </Heading>
         </Box>
         <CustomBtnSlider slideNext={scrollNext} slidePrev={scrollPrev} hasSpacing={false} />
      </Flex>
   );
};
