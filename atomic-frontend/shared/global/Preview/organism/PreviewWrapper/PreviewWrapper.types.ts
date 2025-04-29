import { StaticImageData } from "next/image";

export interface PreviewWrapperProps {
  title: string;
  imgSrc: string;
  description?: string;
  width: number;
  height: number;
  additionalTitle?: string;
}