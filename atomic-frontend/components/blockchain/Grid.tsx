import React from 'react';
import MainLayout from '@/components/blockchain/Main/organism/MainLayout/MainLayout';
import OurBenefitsLayout from '@/components/blockchain/OurBenefits/organism/OurBenefitsLayout';
import ArticleLayout from '@/shared/global/Articles/cells/ArticleLayout';
import Feedbacks from '@/shared/global/Feedbacks/molecules/Feedbacks';
import FooterLayout from '@/shared/global/Footer/cells/FooterLayout';
import HeaderLayout from '@/shared/global/Header/organism/HeaderLayout/HeaderLayout';
import PortfolioLayout from '@/shared/global/Portfolio/cells/PortfolioLayout/PortfolioLayout';
import { Flex } from '@chakra-ui/react';

export const Grid = () => {
   return (
      <>
         <Flex direction="column" gap="20">
            <HeaderLayout />
            <OurBenefitsLayout />
            <PortfolioLayout />
            <MainLayout />
         </Flex>
         <Feedbacks isBgWhite withSpacing withTitle />
         <ArticleLayout />
         <FooterLayout />
      </>
   );
};
