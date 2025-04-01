import NavContent from '@/shared/global/Header/atom/NavContent';
import CustomBackPage from '@/shared/ui/custom/atom/CustomBackPage';
import FooterLayout from '@/shared/global/Footer/cells/FooterLayout';
import ArticlesLayout from '@/components/articles/organism/ArticlesLayout';

export const metadata = {
   title: 'Статьи',
   description: "This is a articles page who's developing in our atomic teams",
};

export default function Articles() {
   return (
      <>
         <NavContent />
         <CustomBackPage />
         <ArticlesLayout />
         <FooterLayout />
      </>
   );
}
