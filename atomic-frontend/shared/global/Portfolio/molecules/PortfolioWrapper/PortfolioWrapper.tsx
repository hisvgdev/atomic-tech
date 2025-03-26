'use client';

import { Sizes, SizeValues } from '@/types/frontend/size.types';
import CustomTitle from '@/shared/ui/custom/atom/CustomTitle';
import { Container, Flex } from '@chakra-ui/react';
import React from 'react';
import PortfolioBtnActions from '../../atom/PortfolioBtnActions';
import { PortfolioCards } from '../PortfolioCards';
import { useInView } from 'react-intersection-observer';
import { MotionBox } from '@/shared/ui/animation';
import { usePathname } from 'next/navigation';

export const PortfolioWrapper = () => {
   const pathname = usePathname();
   const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
   });

   return (
      <Container
         as="section"
         mx="auto"
         maxW={Sizes[SizeValues.primaryContainerSize].primary}
         py={pathname.includes('/blockchain') ? '' : '28'}
         ref={ref}
      >
         <MotionBox initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
            <Flex direction="column" gap={12}>
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
