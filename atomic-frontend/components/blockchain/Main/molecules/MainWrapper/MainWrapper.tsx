'use client';

import { useTheme } from '@/context/SwitchTheme';
import { Sizes, SizeValues } from '@/types/frontend/size.types';
import { Box, Container, Flex } from '@chakra-ui/react';
import React from 'react';
import ProcessDeveloping from '../ProcessDeveloping';
import ThemesEnum from '../ThemesEnum';
import TechnologyWrapper from '@/components/dashboard/Main/molecules/TechnologyWrapper';
import PortfolioLayout from '@/shared/global/Portfolio/cells/PortfolioLayout';
import SendApplication from '@/shared/global/SendApplication/organism';

export const MainWrapper = () => {
   const { theme } = useTheme();
   return (
      <Box
         bg={`${theme === 'light' ? 'white' : '{colors.dark}'}`}
         color={`${theme === 'light' ? 'gray.800' : 'white'}`}
         position="relative"
         zIndex="10"
         borderRadius={{ base: '5rem', lg: '15rem' }}
         overflow="hidden"
      >
         <Container
            as="main"
            maxW={{ base: '100%', lg: Sizes[SizeValues.primaryContainerSize].primary }}
            mx="auto"
         >
            <Flex direction="column" gap="28" p="7">
               <ProcessDeveloping />
               <ThemesEnum />
               <TechnologyWrapper />
               <PortfolioLayout />
               <SendApplication />
            </Flex>
         </Container>
      </Box>
   );
};
