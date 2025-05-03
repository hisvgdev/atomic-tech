'use server';

import { getAllArticles } from '@/service/api/handlers.api';
import ArticleContent from '../../atoms/ArticleContent';
import ArticleWrapper from '../../molecules/ArticleWrapper';

export const ArticleLayout = async () => {
   const articles = await getAllArticles();
   console.log(articles);
   return (
      <ArticleWrapper>
         <ArticleContent articles={articles} />
      </ArticleWrapper>
   );
};
