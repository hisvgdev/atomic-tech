import { Sizes, SizeValues } from '@/types/frontend/size.types';
import { Box, Container, Flex } from '@chakra-ui/react';
import React from 'react';
import ProcessDeveloping from '../ProcessDeveloping';
import ThemesEnum from '../ThemesEnum';
import TechnologyWrapper from '@/components/dashboard/Main/molecules/TechnologyWrapper';
import PortfolioLayout from '@/shared/global/Portfolio/cells/PortfolioLayout/PortfolioLayout';
import SendApplication from '@/shared/global/SendApplication/organism';
import BottomGradient from '@/shared/global/BottomGradient';
import { MainWrapperProps } from './MainWrapper.types';

export const MainWrapper = (props: MainWrapperProps) => {
   const { technologies } = props;
   return (
      <Box
         bg={{ base: '{colors.light}', _dark: '{colors.secondaryDark}' }}
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
            <Flex direction="column" gap="28" p="7" pt="20" position="relative" zIndex="max">
               <ProcessDeveloping />
               <ThemesEnum />
               <TechnologyWrapper technologies={technologies} />
               <PortfolioLayout />
               <SendApplication />
            </Flex>
         </Container>
         <BottomGradient />
      </Box>
   );
};
