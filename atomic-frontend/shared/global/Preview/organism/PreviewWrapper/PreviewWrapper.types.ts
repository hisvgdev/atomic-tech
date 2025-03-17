import { StaticImageData } from "next/image";

export interface PreviewWrapperProps {
  title: string;
  imgSrc: StaticImageData
  width: number;
  height: number;
}