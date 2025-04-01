import MainLayout from '@/components/dashboard/Main/molecules/MainLayout';
import ShowreelLayout from '@/components/dashboard/Showreel/cells/ShowreelLayout';
import ArticleLayout from '@/shared/global/Articles/cells/ArticleLayout';
import ContactRequestLayout from '@/shared/global/ContactRequest/organism';
import FooterLayout from '@/shared/global/Footer/cells/FooterLayout';
import HeaderWrapper from '@/shared/global/Header/cells';
import PortfolioLayout from '@/shared/global/Portfolio/cells/PortfolioLayout';
import React from 'react';

export default function Home() {
   return (
      <>
         <HeaderWrapper />
         <PortfolioLayout />
         <ShowreelLayout />
         <MainLayout />
         <ArticleLayout />
         <ContactRequestLayout />
         <FooterLayout />
      </>
   );
}
