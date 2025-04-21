import { CategoriesProps } from "@/types/frontend/categories.types";
import { WorkCaseProps } from "@/types/frontend/workCase.types";

export interface PortfolioWrapperProps {
  workCases?: WorkCaseProps[]
  workCasesCategories?: CategoriesProps[]
}
