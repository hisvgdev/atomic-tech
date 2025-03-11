import React, { Suspense } from 'react';
import Loading from './loading';

const TopWrapper = React.lazy(() => import('@/components/Top/cells'));
const PortfolioLayout = React.lazy(() => import('@/components/Portfolio/cells/PortfolioLayout'));
const ShowreelLayout = React.lazy(() => import('@/components/Showreel/cells/ShowreelLayout'));
const MainLayout = React.lazy(() => import('@/components/Main/cells/MainLayout'));
const ArticleLayout = React.lazy(() => import('@/components/Articles/cells/ArticleLayout'));
const FooterLayout = React.lazy(() => import('@/components/Footer/cells/FooterLayout'));

export default function Home() {
   return (
      <Suspense fallback={<Loading />}>
         <TopWrapper />
         <PortfolioLayout />
         <ShowreelLayout />
         <MainLayout />
         <ArticleLayout />
         <FooterLayout />
      </Suspense>
   );
}
