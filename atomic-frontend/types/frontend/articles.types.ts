export interface ArticlesProps {
  ID: string
  Title: string
  Description: string
  ShortTitle: string
  ShortDescription: string
  ShortImageID: string
  ShortImage: ShortImage
  MainImages: MainImage[]
  Categories: Category[]
  SubCategories: SubCategory[]
  Tags: string
  CreatedAt: string
  UpdatedAt: string
}

export interface ShortImage {
  ID: string
  URL: string
  ObjectName: string
}

export interface MainImage {
  ID: string
  URL: string
  ObjectName: string
}

export interface Category {
  ID: string
  Name: string
}

export interface SubCategory {
  ID: string
  Name: string
}