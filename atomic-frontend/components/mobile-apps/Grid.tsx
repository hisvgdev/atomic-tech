import MainWrapper from '@/components/mobile-apps/Main/molecules/MainWrapper';
import { getAllWorkCaseCategories, getAllWorkCases, getHeaderPage } from '@/service/api/handlers.api';
import ArticleLayout from '@/shared/global/Articles/cells/ArticleLayout';
import Feedbacks from '@/shared/global/Feedbacks/molecules/Feedbacks';
import FooterLayout from '@/shared/global/Footer/cells/FooterLayout';
import HeaderLayout from '@/shared/global/Header/organism/HeaderLayout/HeaderLayout';
import PortfolioWrapper from '@/shared/global/Portfolio/molecules/PortfolioWrapper';

export default async function Grid() {
   const workCases = await getAllWorkCases();
   const workCasesCategoriests = await getAllWorkCaseCategories();
   const header = await getHeaderPage('mobile-apps');
   return (
      <>
         <HeaderLayout header={header} />
         <PortfolioWrapper workCases={workCases} workCasesCategories={workCasesCategoriests} />
         <MainWrapper />
         {/* <Feedbacks isBgWhite withSpacing withTitle /> */}
         <ArticleLayout />
         <FooterLayout />
      </>
   );
}
