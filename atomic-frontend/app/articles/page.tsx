import NavContent from '@/shared/global/Header/atom/NavContent';
import CustomBackPage from '@/shared/ui/custom/atom/CustomBackPage';
import FooterLayout from '@/shared/global/Footer/cells/FooterLayout';
import ArticlesLayout from '@/components/articles/organism/ArticlesLayout/ArticlesLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Статьи',
   description: 'Это страница с статьями, которые разрабатываются нашей командой Atomic',
   keywords: 'статьи, Atomic команда, разработка, блог, технологии, инновации',
   openGraph: {
      title: 'Статьи',
      description: 'Это страница с статьями, которые разрабатываются нашей командой Atomic',
      url: 'https://atomic-tech.ru/articles',
      type: 'website',
      images: [
         {
            url: 'https://atomic-tech.ru/assets/images/articles-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Статьи от команды Atomic',
         },
      ],
   },
   twitter: {
      card: 'summary_large_image',
      title: 'Статьи',
      description: 'Это страница с статьями, которые разрабатываются нашей командой Atomic',
      images: [
         {
            url: 'https://atomic-tech.ru/assets/images/articles-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Статьи от команды Atomic',
         },
      ],
   },
   category: 'Статьи',
};

export default function Articles() {
   return (
      <div className="bg-white text-black">
         <NavContent isDarkLogo />
         <CustomBackPage />
         <ArticlesLayout />
         <FooterLayout />
      </div>
   );
}
