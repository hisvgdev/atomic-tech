import { StaticImageData } from "next/image";

export interface PreviewWrapperProps {
  title: string;
  imgSrc: StaticImageData | string;
  description?: string;
  width: number;
  height: number;
  additionalTitle?: string;
}