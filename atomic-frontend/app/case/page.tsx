import CaseLayout from '@/components/case/organism/CaseLayout/CaseLayout';
import FooterLayout from '@/shared/global/Footer/cells/FooterLayout';
import NavContent from '@/shared/global/Header/atom/NavContent';
import CustomBackPage from '@/shared/ui/custom/atom/CustomBackPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Портфолио',
   description: 'Страница портфолио, демонстрирующая проекты, разработанные командой Atomic.',
   keywords: 'портфолио, проекты, Atomic команда, разработки, кейсы, технологии',
   openGraph: {
      title: 'Портфолио',
      description: 'Страница портфолио, демонстрирующая проекты, разработанные командой Atomic.',
      url: 'https://atomic-tech.ru/portfolio',
      type: 'website',
      images: [
         {
            url: 'https://atomic-tech.ru/assets/images/portfolio-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Портфолио от команды Atomic',
         },
      ],
   },
   twitter: {
      card: 'summary_large_image',
      title: 'Портфолио',
      description: 'Страница портфолио, демонстрирующая проекты, разработанные командой Atomic.',
      images: [
         {
            url: 'https://atomic-tech.ru/assets/images/portfolio-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Портфолио от команды Atomic',
         },
      ],
   },
   category: 'Портфолио',
};

export default function Case() {
   return (
      <div className="bg-white text-black">
         <NavContent isDarkLogo />
         <CustomBackPage />
         <CaseLayout />
         <FooterLayout />
      </div>
   );
}
