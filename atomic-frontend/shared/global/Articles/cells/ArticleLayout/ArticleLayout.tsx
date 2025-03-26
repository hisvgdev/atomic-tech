import ArticleContent from '../../atoms/ArticleContent';
import ArticleWrapper from '../../molecules/ArticleWrapper';

export const ArticleLayout = async () => {
   return (
      <ArticleWrapper>
         <ArticleContent />
      </ArticleWrapper>
   );
};
