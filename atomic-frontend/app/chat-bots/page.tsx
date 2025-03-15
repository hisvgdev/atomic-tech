import React, { Suspense } from 'react';
import Loading from './loading';

const HeaderWrapper = React.lazy(() => import('@/shared/global/Header/cells'));
const PortfolioWrapper = React.lazy(
   () => import('@/shared/global/Portfolio/molecules/PortfolioWrapper'),
);
const MainWrapper = React.lazy(() => import('@/components/chat-bots/Main/organism/MainLayout'));

export default function ChatBots() {
   return (
      <Suspense fallback={<Loading />}>
         <HeaderWrapper />
         <PortfolioWrapper />
         <MainWrapper />
      </Suspense>
   );
}
