import { CategoriesProps } from "./categories.types"

export interface WorkCaseProps {
  Categories: CategoriesProps[]
  CreatedAt: string
  ID: string
  preview: string
  SubCategories: CategoriesProps[]
  Tags: string
  Title: string
  Niche: string;
  DevelopType: string;
  App: string;
  Preview: {
    ID: string;
    URL: string;
    ObjectName: string;
  }
  Languages: string;
  Images: {
    ID: string;
    URL: string;
    ObjectName: string;
  } | null;
  Description: string;
}
