'use client';

import { Sizes, SizeValues } from '@/types/frontend/size.types';
import CustomTitle from '@/shared/ui/custom/atom/CustomTitle';
import { Container, Flex } from '@chakra-ui/react';
import React, { FC, useMemo, useState } from 'react';
import { PortfolioCards } from '../PortfolioCards';
import { useInView } from 'react-intersection-observer';
import { MotionBox } from '@/shared/ui/animation';
import { usePathname } from 'next/navigation';
import { PortfolioWrapperProps } from './PortfolioWrapper.types';
import BtnActionsClient from '@/shared/global/BtnActions/BtnActionsClient';

export const PortfolioWrapper: FC<PortfolioWrapperProps> = (props) => {
   const { workCases, workCasesCategories } = props;
   const pathname = usePathname();
   const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
   });

   const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

   const filteredWorkCases = useMemo(() => {
      if (!workCasesCategories || workCasesCategories.length === 0) return workCases || [];

      const selectedCategory = workCasesCategories[activeCategoryIndex];
      if (!selectedCategory) return workCases || [];

      return (workCases || []).filter((workCase) =>
         workCase.categories.some((cat) => cat.ID === selectedCategory.ID),
      );
   }, [workCases, workCasesCategories, activeCategoryIndex]);

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
                  <CustomTitle
                     size="3rem"
                     title="Портфолио"
                     weight="semibold"
                     isInsideInCenter={pathname.includes('/blockchain')}
                     italic
                  />
               </Flex>
               <BtnActionsClient
                  activeIndex={activeCategoryIndex}
                  categories={workCasesCategories!}
                  onChangeCategory={(index) => {
                     setActiveCategoryIndex(index);
                  }}
                  isInsideInCenter={pathname.includes('/blockchain')}
               />
               <PortfolioCards filteredWorkCases={filteredWorkCases!} />
            </Flex>
         </MotionBox>
      </Container>
   );
};
