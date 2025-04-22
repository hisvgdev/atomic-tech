'use client';
import CustomTitle from '@/shared/ui/custom/atom/CustomTitle';
import { Box, Container, Flex, VStack } from '@chakra-ui/react';
import React, { useMemo, useState } from 'react';
import ArticleList from '../../atoms/ArticleList';
import CustomPagination from '@/shared/ui/custom/atom/CustomPagination';
import MotionWrapperClient from '@/shared/ui/animation/MotionWrapperClient';
import { CategoriesProps } from '@/types/frontend/categories.types';
import { ArticlesProps } from '@/types/frontend/articles.types';
import BtnActionsClient from '@/shared/global/BtnActions/BtnActionsClient';

const ARTICLES_PER_PAGE = 6;

export const ArticlesWrapper = ({
   articleCategories,
   articleSubCategories,
   articles,
}: {
   articleCategories: CategoriesProps[];
   articleSubCategories: CategoriesProps[];
   articles: ArticlesProps[];
}) => {
   const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
   const [currentPage, setCurrentPage] = useState(1);

   const filteredArticles = useMemo(() => {
      const selectedCategory = articleCategories[activeCategoryIndex];
      if (!selectedCategory) return articles;
      return articles.filter((article) =>
         article.Categories.some((cat) => cat.ID === selectedCategory.ID),
      );
   }, [articles, articleCategories, activeCategoryIndex]);

   const paginatedArticles = useMemo(() => {
      const start = (currentPage - 1) * ARTICLES_PER_PAGE;
      const end = start + ARTICLES_PER_PAGE;
      return filteredArticles.slice(start, end);
   }, [filteredArticles, currentPage]);

   const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);

   return (
      <MotionWrapperClient>
         <Container py="12">
            <VStack align="start" spaceY="12">
               <CustomTitle title="Статьи" weight="600" size="3rem" isInAnotherPage italic />
               <BtnActionsClient
                  categories={articleCategories}
                  activeIndex={activeCategoryIndex}
                  onChangeCategory={(index) => {
                     setActiveCategoryIndex(index);
                     setCurrentPage(1);
                  }}
               />
               <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                  <Flex as="li" gap="6" wrap="wrap">
                     {Array.isArray(articleSubCategories) &&
                        articleSubCategories.map((item, idx) => (
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
               <ArticleList articles={paginatedArticles} />
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
};
