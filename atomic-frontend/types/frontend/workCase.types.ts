import { CategoriesProps } from "./categories.types"

export interface WorkCaseProps {
  categories: CategoriesProps[]
  created_at: string
  id: string
  preview: string
  sub_categories: CategoriesProps[]
  tags: string
  title: string
  niche: string;
  develop_type: string;
  app: string;
  languages: string;
  images: string[];
  description: string;
}
