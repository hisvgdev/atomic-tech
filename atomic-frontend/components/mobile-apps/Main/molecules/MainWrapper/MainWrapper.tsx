'use client';

import { Sizes, SizeValues } from '@/types/frontend/size.types';
import { Box, Container, Flex } from '@chakra-ui/react';
import React from 'react';
import InfinitySloganLine from '../../../../../shared/global/InfinitySloganLine';
import { ProjectsOurDeveloping } from '@/shared/global/ProjectsOurDeveloping/molecules/ProjectsOurDeveloping';
import SendApplication from '@/shared/global/SendApplication/organism';
import BottomGradient from '@/shared/global/BottomGradient';

export const MainWrapper = () => {
   return (
      <Box
         className="overflow-hidden relative rounded-[15rem] py-28"
         bg={{ base: '{colors.light}', _dark: '{colors.secondaryDark}' }}
         py={{ base: '14', lg: '28' }}
         borderRadius={{ base: '5rem', lg: '15rem' }}
      >
         <Box
            position="absolute"
            top="0"
            left="0"
            w="81.25rem"
            h="81.25rem"
            borderRadius="full"
            bgGradient="linear(180deg, #AA00FF 0%, rgba(103, 65, 255, 0.797994) 16.5%, rgba(0, 166, 255, 0.485803) 42%, rgba(0, 255, 255, 0) 100%)"
            filter="blur(200px)"
            zIndex="-1"
            display={{ base: 'none', lg: 'block' }}
         />
         <Box
            position="absolute"
            inset="0"
            w="100%"
            h="100%"
            bgGradient="linear(180deg, rgba(0, 117, 255, 0) 0%, rgba(0, 117, 255, 0.75) 100%)"
            filter="blur(100px)"
            zIndex="-1"
            display={{ base: 'none', lg: 'block' }}
         />
         <Flex direction="column" gap={{ base: '10', lg: '20' }} position="relative" zIndex="max">
            <InfinitySloganLine />
            <Container as="main" maxW={Sizes[SizeValues.primaryContainerSize].primary} mx="auto">
               <Flex direction="column" gap="28">
                  <ProjectsOurDeveloping />
                  <SendApplication />
               </Flex>
            </Container>
         </Flex>
         <BottomGradient />
      </Box>
   );
};
