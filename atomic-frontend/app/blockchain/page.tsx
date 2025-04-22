import MainLayout from '@/components/blockchain/Main/organism/MainLayout/MainLayout';
import OurBenefitsLayout from '@/components/blockchain/OurBenefits/organism/OurBenefitsLayout';
import ArticleLayout from '@/shared/global/Articles/cells/ArticleLayout';
import Feedbacks from '@/shared/global/Feedbacks/molecules/Feedbacks';
import FooterLayout from '@/shared/global/Footer/cells/FooterLayout';
import HeaderLayout from '@/shared/global/Header/organism/HeaderLayout/HeaderLayout';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
   title: 'Блокчейн',
   description:
      'Страница о блокчейн-разработке, создаваемая командой Atomic, с преимуществами и отзывами.',
   keywords: 'блокчейн, технологии, Atomic команда, инновации, отзывы, преимущества, разработки',
   openGraph: {
      title: 'Блокчейн',
      description:
         'Страница о блокчейн-разработке, создаваемая командой Atomic, с преимуществами и отзывами.',
      url: 'https://atomic-tech.ru/blockchain',
      type: 'website',
      images: [
         {
            url: 'https://atomic-tech.ru/assets/images/blockchain-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Блокчейн от команды Atomic',
         },
      ],
   },
   twitter: {
      card: 'summary_large_image',
      title: 'Блокчейн',
      description:
         'Страница о блокчейн-разработке, создаваемая командой Atomic, с преимуществами и отзывами.',
      images: [
         {
            url: 'https://atomic-tech.ru/assets/images/blockchain-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Блокчейн от команды Atomic',
         },
      ],
   },
   category: 'Блокчейн',
};

export default function Blockchain() {
   return (
      <>
         <HeaderLayout />
         <OurBenefitsLayout />
         <MainLayout />
         <Feedbacks isBgWhite withSpacing withTitle />
         <ArticleLayout />
         <FooterLayout />
      </>
   );
}
