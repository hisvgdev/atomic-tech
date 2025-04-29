import { StaticImageData } from "next/image";

export interface PreviewContentProps {
  title: string;
  imgSrc: string;
  width: number;
  height: number;
  additionalTitle?: string;
  needToBreakAWord?: boolean;
  description?: string;
}