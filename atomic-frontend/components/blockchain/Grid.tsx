import React from 'react';
import MainLayout from '@/components/blockchain/Main/organism/MainLayout/MainLayout';
import OurBenefitsLayout from '@/components/blockchain/OurBenefits/organism/OurBenefitsLayout';
import ArticleLayout from '@/shared/global/Articles/cells/ArticleLayout';
import Feedbacks from '@/shared/global/Feedbacks/molecules/Feedbacks';
import FooterLayout from '@/shared/global/Footer/cells/FooterLayout';
import HeaderLayout from '@/shared/global/Header/organism/HeaderLayout/HeaderLayout';
import PortfolioLayout from '@/shared/global/Portfolio/cells/PortfolioLayout/PortfolioLayout';
import { Flex } from '@chakra-ui/react';
import { getHeaderPage } from '@/service/api/handlers.api';

export default async function Grid() {
   const header = await getHeaderPage('blockchain');
   return (
      <>
         <Flex direction="column" gap="20">
            <HeaderLayout header={header} />
            <OurBenefitsLayout />
            <PortfolioLayout />
            <MainLayout />
         </Flex>
         {/* <Feedbacks isBgWhite withSpacing withTitle /> */}
         <ArticleLayout />
         <FooterLayout />
      </>
   );
}
