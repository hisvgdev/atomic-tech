import { CategoriesProps } from "@/types/frontend/categories.types";
import { WorkCaseProps } from "@/types/frontend/workCase.types";

export interface CaseWrapperProps {
  workCases: WorkCaseProps[];
  workCasesSubCategories: CategoriesProps[]
  workCasesCategories: CategoriesProps[]
}