'use client';

import { Box, Container, Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import { TeamSectionProps } from './TeamSection.types';
import TeamSectionCards from './TeamSectionCards';
import TeamSectionHeader from './TeamSectionHeader';
import { useEmblaSlider } from '@/hooks/useEmblaSlider';
import { Sizes, SizeValues } from '@/types/frontend/size.types';
import CustomBtnSlider from '@/shared/ui/custom/atom/CustomBtnSlider';

export const TeamSection: FC<TeamSectionProps> = () => {
   const { emblaRef, scrollNext, scrollPrev } = useEmblaSlider();
   return (
      <Flex direction="column" gap={12}>
         <Container
            as="main"
            maxW={{ base: '100%', lg: Sizes[SizeValues.primaryContainerSize].primary }}
            mx="auto"
         >
            <TeamSectionHeader scrollNext={scrollNext} scrollPrev={scrollPrev} />
         </Container>
         <TeamSectionCards emblaRef={emblaRef} />
         <Box display={{ base: 'block', lg: 'none' }}>
            <CustomBtnSlider slideNext={scrollNext} slidePrev={scrollPrev} />
         </Box>
      </Flex>
   );
};
