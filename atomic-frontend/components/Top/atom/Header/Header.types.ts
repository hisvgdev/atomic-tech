import { ListCollection } from "@chakra-ui/react";
import { IconType } from "react-icons";

export interface HeaderProps { }

export interface HeaderData {
  id: string,
  title: string,
  type: string,
  children?: ListCollection,
  icon?: IconType
  link?: string;
}