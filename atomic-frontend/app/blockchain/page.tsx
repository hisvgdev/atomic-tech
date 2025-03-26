import React from 'react';

const HeaderWrapper = React.lazy(() => import('@/shared/global/Header/cells'));
const OurBenefitsLayout = React.lazy(
   () => import('@/components/blockchain/OurBenefits/organism/OurBenefitsLayout'),
);
const FeedbacksWrapper = React.lazy(() => import('@/shared/global/Feedbacks/molecules/Feedbacks'));
const MainLayout = React.lazy(() => import('@/components/blockchain/Main/organism/MainLayout'));
const ArticleLayout = React.lazy(() => import('@/shared/global/Articles/cells/ArticleLayout'));
const FooterLayout = React.lazy(() => import('@/shared/global/Footer/cells/FooterLayout'));

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
         <FeedbacksWrapper isBgWhite withSpacing withTitle />
         <ArticleLayout />
         <FooterLayout />
      </>
   );
}
