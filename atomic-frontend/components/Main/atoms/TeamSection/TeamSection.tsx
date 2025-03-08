'use client';

import { Box } from '@chakra-ui/react';
import React, { FC } from 'react';
import { TeamSectionProps } from './TeamSection.types';
import TeamSectionCards from './TeamSectionCards';
import TeamSectionHeader from './TeamSectionHeader';
import { useEmblaSlider } from '@/hooks/useEmblaSlider';

export const TeamSection: FC<TeamSectionProps> = () => {
   const { emblaRef, scrollNext, scrollPrev } = useEmblaSlider();
   return (
      <Box w="full" display="flex" flexDirection="column" gap={12}>
         <TeamSectionHeader scrollNext={scrollNext} scrollPrev={scrollPrev} />
         <TeamSectionCards emblaRef={emblaRef} />
      </Box>
   );
};
