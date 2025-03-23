import { ListCollection } from "@chakra-ui/react";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons/lib";

export interface NavProps { }

export interface NavData {
  id: string,
  title: string,
  type: string,
  children?: ListCollection,
  icon?: LucideIcon | IconType
  link?: string;
}

export interface MobileNavData {
  id: string,
  title: string,
  icon?: LucideIcon
  link?: string;
}