'use client';

import PortfolioBtnActions from '@/shared/global/Portfolio/atom/PortfolioBtnActions';
import { MotionEntity } from '@/shared/ui/animation';
import CustomTitle from '@/shared/ui/custom/atom/CustomTitle';
import { Container, Flex, VStack } from '@chakra-ui/react';
import React from 'react';
import ArticleList from '../../atoms/ArticleList';
import CustomPagination from '@/shared/ui/custom/atom/CustomPagination';

export const ArticlesWrapper = () => {
   return (
      <MotionEntity initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
         <Container py="12">
            <VStack align="start" spaceY="12">
               <CustomTitle title="Статьи" weight="600" size="3rem" />
               <PortfolioBtnActions />
               <ArticleList />
               <Flex width="full" justify="end">
                  <CustomPagination
                     currentPage={1}
                     totalPages={10}
                     onPageChange={() => console.log('next')}
                  />
               </Flex>
            </VStack>
         </Container>
      </MotionEntity>
   );
};
