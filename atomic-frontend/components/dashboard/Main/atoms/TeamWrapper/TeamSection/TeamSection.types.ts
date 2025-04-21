export interface TeamSectionProps {
  team: RootTeam[]
}


export interface RootTeam {
  avatar: Avatar
  avatarID: string
  createdAt: string
  description: string
  id: string
  isLead: boolean
  name: string
  updatedAt: string
}

export interface Avatar {
  id: string
  objectName: string
  url: string
}
