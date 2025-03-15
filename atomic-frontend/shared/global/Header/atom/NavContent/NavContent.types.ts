import { ListCollection } from "@chakra-ui/react";
import { IconType } from "react-icons";

export interface NavProps { }

export interface NavData {
  id: string,
  title: string,
  type: string,
  children?: ListCollection,
  icon?: IconType
  link?: string;
}