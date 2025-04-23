import { RootTeam } from "@/types/frontend/team.types";
import { EmblaViewportRefType } from "embla-carousel-react";


export interface TeamSectionCardsProps {
  emblaRef: EmblaViewportRefType
  isDragging: boolean;
  team: RootTeam[] | null;
}