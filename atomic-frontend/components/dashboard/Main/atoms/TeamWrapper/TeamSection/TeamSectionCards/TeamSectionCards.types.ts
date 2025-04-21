import { EmblaViewportRefType } from "embla-carousel-react";
import { RootTeam } from "../TeamSection.types";

export interface TeamSectionCardsProps {
  emblaRef: EmblaViewportRefType
  isDragging: boolean;
  team: RootTeam[]
}