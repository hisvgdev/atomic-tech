import MainLayout from '@/components/blockchain/Main/organism/MainLayout/MainLayout';
import OurBenefitsLayout from '@/components/blockchain/OurBenefits/organism/OurBenefitsLayout';
import ArticleLayout from '@/shared/global/Articles/cells/ArticleLayout';
import Feedbacks from '@/shared/global/Feedbacks/molecules/Feedbacks';
import FooterLayout from '@/shared/global/Footer/cells/FooterLayout';
import HeaderWrapper from '@/shared/global/Header/cells';
import React from 'react';

export const metadata = {
   title: 'Blockchain',
   description: "This is a blockchain page who's developing in our atomic teams",
};

export default function Blockchain() {
   return (
      <>
         <HeaderWrapper />
         <OurBenefitsLayout />
         <MainLayout />
         <Feedbacks isBgWhite withSpacing withTitle />
         <ArticleLayout />
         <FooterLayout />
      </>
   );
}
