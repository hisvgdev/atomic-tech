import { StaticImageData } from "next/image";

export interface PreviewContentProps {
  title: string;
  imgSrc: StaticImageData
  width: number;
  height: number;
}