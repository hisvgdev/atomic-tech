import React from 'react';
import { getAllWorkCaseCategories, getAllWorkCases } from '@/service/api/handlers.api';
import MainWrapper from '@/components/websites/Main/molecules/MainWrapper';
import ArticleLayout from '@/shared/global/Articles/cells/ArticleLayout';
import Feedbacks from '@/shared/global/Feedbacks/molecules/Feedbacks';
import FooterLayout from '@/shared/global/Footer/cells/FooterLayout';
import PortfolioWrapper from '@/shared/global/Portfolio/molecules/PortfolioWrapper';
import HeaderLayout from '@/shared/global/Header/organism/HeaderLayout/HeaderLayout';

export default async function Grid() {
   const workCases = await getAllWorkCases();
   const workCasesCategoriests = await getAllWorkCaseCategories();
   return (
      <>
         <HeaderLayout />
         <PortfolioWrapper workCases={workCases} workCasesCategories={workCasesCategoriests} />
         <MainWrapper />
         <Feedbacks isBgWhite withSpacing withTitle />
         <ArticleLayout />
         <FooterLayout />
      </>
   );
}
