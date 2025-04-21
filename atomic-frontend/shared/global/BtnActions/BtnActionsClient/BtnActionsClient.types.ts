import { CategoriesProps } from "@/types/frontend/categories.types";

export interface BtnActionsClientProps {
  isInsideInCenter?: boolean;
  categories: CategoriesProps[]
  activeIndex: number;
  onChangeCategory: (idx: number) => void;
}