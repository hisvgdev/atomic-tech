export interface RootTeam {
  ID: string
  Name: string
  AvatarID: string
  Avatar: Avatar
  IsLead: boolean
  Description: string
  CreatedAt: string
  UpdatedAt: string
}

export interface Avatar {
  ID: string
  URL: string
  ObjectName: string
}
