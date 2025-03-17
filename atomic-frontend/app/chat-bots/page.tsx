import React, { Suspense } from 'react';
import Loading from './loading';

const HeaderWrapper = React.lazy(() => import('@/shared/global/Header/cells'));
const PortfolioWrapper = React.lazy(
   () => import('@/shared/global/Portfolio/molecules/PortfolioWrapper'),
);
const MainWrapper = React.lazy(() => import('@/components/chat-bots/Main/organism/MainLayout'));
const Feedbacks = React.lazy(() => import('@/shared/global/Feedbacks/molecules/Feedbacks'));

export default function ChatBots() {
   return (
      <Suspense fallback={<Loading />}>
         <HeaderWrapper />
         <PortfolioWrapper />
         <MainWrapper />
         <Feedbacks isBgWhite withSpacing withTitle />
      </Suspense>
   );
}
