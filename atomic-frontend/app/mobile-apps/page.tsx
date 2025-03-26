import React from 'react';

const HeaderWrapper = React.lazy(() => import('@/shared/global/Header/cells'));
const PortfolioWrapper = React.lazy(
   () => import('@/shared/global/Portfolio/molecules/PortfolioWrapper'),
);
const MainWrapper = React.lazy(() => import('@/components/mobile-apps/Main/organism/MainLayout'));
const Feedbacks = React.lazy(() => import('@/shared/global/Feedbacks/molecules/Feedbacks'));
const ArticleLayout = React.lazy(() => import('@/shared/global/Articles/cells/ArticleLayout'));
const FooterLayout = React.lazy(() => import('@/shared/global/Footer/cells/FooterLayout'));

export const metadata = {
   title: 'MobileApps',
   description: "This is a mobileapps page who's developing in our atomic teams",
};

export default function MobileApps() {
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
