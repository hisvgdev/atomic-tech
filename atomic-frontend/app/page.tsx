import ArticleLayout from '@/components/Articles/cells/ArticleLayout';
import { MainLayout } from '@/components/Main/cells/MainLayout/MainLayout';
import PortfolioLayout from '@/components/Portfolio/cells/PortfolioLayout';
import ShowreelLayout from '@/components/Showreel/cells/ShowreelLayout';
import TopWrapper from '@/components/Top/cells';

export default function Home() {
   return (
      <>
         <TopWrapper />
         <PortfolioLayout />
         <ShowreelLayout />
         <MainLayout />
         <ArticleLayout />
      </>
   );
}
