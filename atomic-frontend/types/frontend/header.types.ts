export interface RootHeader {
  ID: string
  Title: string
  Descriptions: Description[]
  Images: Image[]
  CreatedAt: string
  UpdatedAt: string
}

export interface Description {
  ID: string
  PageHeaderID: string
  Text: string
}

export interface Image {
  ID: string
  URL: string
  ObjectName: string
}
