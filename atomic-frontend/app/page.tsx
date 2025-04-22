import MainLayout from '@/components/dashboard/Main/organism/MainLayout/MainLayout';
import ShowreelLayout from '@/components/dashboard/Showreel/cells/ShowreelLayout';
import ArticleLayout from '@/shared/global/Articles/cells/ArticleLayout';
import ContactRequestLayout from '@/shared/global/ContactRequest/organism';
import FooterLayout from '@/shared/global/Footer/cells/FooterLayout';
import HeaderLayout from '@/shared/global/Header/organism/HeaderLayout/HeaderLayout';
import PortfolioLayout from '@/shared/global/Portfolio/cells/PortfolioLayout/PortfolioLayout';
import React from 'react';

export default function Home() {
   return (
      <>
         <HeaderLayout header={null} />
         <PortfolioLayout />
         <ShowreelLayout />
         <MainLayout />
         <ArticleLayout />
         <ContactRequestLayout />
         <FooterLayout />
      </>
   );
}
