import { Image } from "@/types/frontend/technology.types";

export interface TechnologyIconProps {
  title?: string;
  icon?: string;
  width?: number;
  height?: number;
  top?: string;
  left?: string;
  animationDelay?: number;

  ID?: string;
  Images?: Image
  ImageID?: string;
  Name?: string
}