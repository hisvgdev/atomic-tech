'use client';

import { Sizes, SizeValues } from '@/types/frontend/size.types';
import { Box, Container, Flex } from '@chakra-ui/react';
import React from 'react';
import AboutMain from '../../atoms/AboutMain';
import ForecastSection from '../ForecastWrapper';
import TechnologyWrapper from '../TechnologyWrapper';
import ServiceWrapper from '../ServiceWrapper';
import MoreClientsWrapper from '../MoreClients/cells';
import BottomGradient from '@/shared/global/BottomGradient';
import TeamWrapper from '../../atoms/TeamWrapper/TeamWrapper';
import { RootTeam } from '@/types/frontend/team.types';

export const MainSection = (props: { team: RootTeam[]; technology: any }) => {
   const { team, technology } = props;
   const getLead = team.filter((t) => t.IsLead);
   return (
      <Box
         className="overflow-hidden relative h-full"
         bg={{ base: '{colors.light}', _dark: '{colors.secondaryDark}' }}
         rounded={{ base: '3rem', lg: '15rem' }}
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
         <Flex as="main" direction="column" gap="20" position="relative" zIndex="max">
            <Container
               maxW={{ base: '100%', lg: Sizes[SizeValues.primaryContainerSize].primary }}
               mx="auto"
            >
               <AboutMain getLead={getLead[0]} />
            </Container>
            <TeamWrapper team={team} />
            <Container
               maxW={{ base: '100%', lg: Sizes[SizeValues.primaryContainerSize].primary }}
               mx="auto"
            >
               <ForecastSection />
               <TechnologyWrapper technologies={technology} />
               <ServiceWrapper />
            </Container>
            <MoreClientsWrapper />
         </Flex>
         <BottomGradient />
      </Box>
   );
};
