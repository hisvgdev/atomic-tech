import React, { Suspense } from 'react';
import Loading from './loading';

const HeaderWrapper = React.lazy(() => import('@/shared/global/Header/cells'));
const OurBenefitsLayout = React.lazy(
   () => import('@/components/blockchain/OurBenefits/organism/OurBenefitsLayout'),
);
const FeedbacksWrapper = React.lazy(() => import('@/shared/global/Feedbacks/molecules/Feedbacks'));
const MainLayout = React.lazy(() => import('@/components/blockchain/Main/organism/MainLayout'));

export const metadata = {
   title: 'Блокчейн',
};

export default function Blockchain() {
   return (
      <Suspense fallback={<Loading />}>
         <HeaderWrapper />
         <OurBenefitsLayout />
         <MainLayout />
         <FeedbacksWrapper isBgWhite withSpacing withTitle />
      </Suspense>
   );
}
