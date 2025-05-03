import React from 'react';
import { ArticlesLayoutProps } from './ArticlesLayout.types';
import ArticlesWrapper from '../../molecules/ArticlesWrapper';
import {
   getAllArticleCategories,
   getAllArticles,
   getAllArticleSubCategories,
} from '@/service/api/handlers.api';

export default async function ArticlesLayout(props: ArticlesLayoutProps) {
   const {} = props;
   const articleSubCategories = await getAllArticleSubCategories();
   const articleCategories = await getAllArticleCategories();
   const articles = await getAllArticles();
   return (
      <ArticlesWrapper
         articles={articles}
         articleSubCategories={articleSubCategories}
         articleCategories={articleCategories}
      />
   );
}
