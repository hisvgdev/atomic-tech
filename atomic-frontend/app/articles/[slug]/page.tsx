import { handleGetArticle } from '@/service/api/articles.api';

export async function generateMetadata({ params }: { params: { slug: string } }) {
   return {
      title: `Article - ${params.slug}`,
      description: '',
   };
}

export default async function Articles({ params }: { params: { slug: string } }) {
   const getArticle = await handleGetArticle(params.slug);
   return (
      <div>
         <div>{params.slug}</div>
      </div>
   );
}
