import MainWrapper from '@/components/chat-bots/Main/molecules/MainWrapper';
import ArticleLayout from '@/shared/global/Articles/cells/ArticleLayout';
import Feedbacks from '@/shared/global/Feedbacks/molecules/Feedbacks';
import FooterLayout from '@/shared/global/Footer/cells/FooterLayout';
import HeaderWrapper from '@/shared/global/Header/cells';
import PortfolioWrapper from '@/shared/global/Portfolio/molecules/PortfolioWrapper';
import React from 'react';

export const metadata = {
   title: 'Chatbots',
   description: "This is a chatbots page who's developing in our atomic teams",
};

export default function ChatBots() {
   return (
      <>
         <HeaderWrapper />
         <PortfolioWrapper />
         <MainWrapper />
         <Feedbacks isBgWhite withSpacing withTitle />
         <ArticleLayout />
         <FooterLayout />
      </>
   );
}
