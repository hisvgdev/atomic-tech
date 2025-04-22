import { StaticImageData } from "next/image";

export interface PreviewContentProps {
  title: string;
  imgSrc: StaticImageData | string;
  width: number;
  height: number;
  additionalTitle?: string;
  needToBreakAWord?: boolean;
  description?: string;
}