'use client';

import { Sizes, SizeValues } from '@/types/Size.types';
import CustomTitle from '@/ui/custom/atom/CustomTitle';
import { Container, Flex } from '@chakra-ui/react';
import React from 'react';
import PortfolioBtnActions from '../../atom/PortfolioBtnActions';
import { PortfolioCards } from '../PortfolioCards';
import { useInView } from 'react-intersection-observer';
import { MotionBox } from '@/ui/animation';

export const PortfolioWrapper = () => {
   const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
   });

   return (
      <Container
         as="section"
         mx="auto"
         maxW={Sizes[SizeValues.primaryContainerSize].primary}
         py="40"
         ref={ref}
      >
         <MotionBox initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
            <Flex direction="column" gap={10}>
               <Flex justify="center" align="center">
                  <CustomTitle size="3rem" title="Портфолио" weight="semibold" italic />
               </Flex>
               <PortfolioBtnActions />
               <PortfolioCards />
            </Flex>
         </MotionBox>
      </Container>
   );
};
