import React from 'react';
import CaseWrapper from '../../molecules/CaseWrapper';
import { CaseLayoutProps } from './CaseLayout.types';
import {
   getAllWorkCaseCategories,
   getAllWorkCases,
   getAllWorkCaseSubCategories,
} from '@/service/api/handlers.api';

export default async function CaseLayout(props: CaseLayoutProps) {
   const {} = props;
   const workCases = await getAllWorkCases();
   const workCasesSubCategories = await getAllWorkCaseSubCategories();
   const workCasesCategories = await getAllWorkCaseCategories();

   return (
      <CaseWrapper
         workCases={workCases}
         workCasesSubCategories={workCasesSubCategories}
         workCasesCategories={workCasesCategories}
      />
   );
}
