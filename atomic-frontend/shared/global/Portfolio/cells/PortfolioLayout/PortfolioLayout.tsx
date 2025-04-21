import React from 'react';
import PortfolioWrapper from '../../molecules/PortfolioWrapper';
import { PortfolioLayoutProps } from './PortoflioLayout.types';
import { getAllWorkCaseCategories, getAllWorkCases } from '@/service/api/handlers.api';

export default async function PortfolioLayout(props: PortfolioLayoutProps) {
   const workCases = await getAllWorkCases();
   const workCasesCategories = await getAllWorkCaseCategories();
   return <PortfolioWrapper workCases={workCases} workCasesCategories={workCasesCategories} />;
}
