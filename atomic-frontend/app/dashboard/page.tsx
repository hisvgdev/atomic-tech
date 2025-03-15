import React, { Suspense } from 'react';
import Loading from './loading';

const HeaderWrapper = React.lazy(() => import('@/shared/global/Header/cells'));
const PortfolioLayout = React.lazy(() => import('@/shared/global/Portfolio/cells/PortfolioLayout'));
const ShowreelLayout = React.lazy(
   () => import('@/components/dashboard/Showreel/cells/ShowreelLayout'),
);
const MainLayout = React.lazy(() => import('@/components/dashboard/Main/cells/MainLayout'));

export default function Dashboard() {
   return (
      <Suspense fallback={<Loading />}>
         <HeaderWrapper />
         <PortfolioLayout />
         <ShowreelLayout />
         <MainLayout />
      </Suspense>
   );
}
