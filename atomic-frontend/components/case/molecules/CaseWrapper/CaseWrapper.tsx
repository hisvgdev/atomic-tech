'use client';

import React, { useMemo, useState } from 'react';
import { CaseWrapperProps } from './CaseWrapper.types';
import MotionWrapperClient from '@/shared/ui/animation/MotionWrapperClient';
import { Container, Flex, VStack } from '@chakra-ui/react';
import CustomTitle from '@/shared/ui/custom/atom/CustomTitle';
import BtnActionsClient from '@/shared/global/BtnActions/BtnActionsClient';
import CustomPagination from '@/shared/ui/custom/atom/CustomPagination';
import WorkCasesList from '../../atoms/WorkCasesList';

const WORK_CASES_PER_PAGE = 6;

export function CaseWrapper(props: CaseWrapperProps) {
   const { workCases, workCasesCategories, workCasesSubCategories } = props;

   const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
   const [currentPage, setCurrentPage] = useState(1);

   const filteredWorkCases = useMemo(() => {
      const selectedCategory = workCasesCategories[activeCategoryIndex];
      if (!selectedCategory) return workCases;
      return workCases.filter((workCase) =>
         workCase.Categories.some((cat) => cat.ID === selectedCategory.ID),
      );
   }, [workCases, workCasesCategories, activeCategoryIndex]);

   const paginatedWorkCases = useMemo(() => {
      const start = (currentPage - 1) * WORK_CASES_PER_PAGE;
      const end = start + WORK_CASES_PER_PAGE;
      return filteredWorkCases.slice(start, end);
   }, [filteredWorkCases, currentPage]);

   const totalPages = Math.ceil(filteredWorkCases.length / WORK_CASES_PER_PAGE);

   return (
      <MotionWrapperClient>
         <Container py="12">
            <VStack align="start" spaceY="12">
               <CustomTitle title="Портфолио" weight="600" size="3rem" isInAnotherPage />
               <BtnActionsClient
                  categories={workCasesCategories}
                  activeIndex={activeCategoryIndex}
                  onChangeCategory={(index) => {
                     setActiveCategoryIndex(index);
                     setCurrentPage(1);
                  }}
               />
               <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                  <Flex as="li" gap="6" wrap="wrap">
                     {Array.isArray(workCasesSubCategories) &&
                        workCasesSubCategories.map((item, idx) => (
                           <li
                              key={idx}
                              style={{
                                 display: 'inline-block',
                              }}
                           >
                              {item.Name}
                           </li>
                        ))}
                  </Flex>
               </ul>
               <WorkCasesList paginatedWorkCases={paginatedWorkCases} />
               <Flex width="full" justify="end">
                  <CustomPagination
                     currentPage={currentPage}
                     totalPages={totalPages}
                     onPageChange={setCurrentPage}
                  />
               </Flex>
            </VStack>
         </Container>
      </MotionWrapperClient>
   );
}
