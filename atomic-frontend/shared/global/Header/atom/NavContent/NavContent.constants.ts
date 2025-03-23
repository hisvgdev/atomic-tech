import { v4 as uuidv4 } from 'uuid';
import { RiArrowDropDownLine } from "react-icons/ri";
import { MobileNavData, NavData } from "./NavContent.types";
import { createListCollection } from "@chakra-ui/react";
import { BookUser, Bot, Briefcase, Layers, Link, Newspaper, TabletSmartphone, User } from 'lucide-react'
export const NAV_DATA: NavData[] = [
  {
    id: uuidv4(),
    title: "Услуги",
    type: "select",
    children: createListCollection({
      items: [
        {
          label: "Чат-боты",
          value: "/chat-bots",
        },
        {
          label: "Сайты",
          value: "/websites",
        },
        {
          label: "Мобильные приложения",
          value: "/mobile-apps",
        },
        {
          label: "Блокчейн",
          value: "/blockchain",
        },
      ]
    }),
    icon: RiArrowDropDownLine
  },
  {
    id: uuidv4(),
    title: "Блокчейн",
    type: "link",
    link: "/blockchain",
  },
  {
    id: uuidv4(),
    title: "Кейсы",
    type: "link",
    link: "/case"
  },
  {
    id: uuidv4(),
    title: "Контакты",
    type: "link",
    link: "/contacts"
  },
  {
    id: uuidv4(),
    title: "Статьи",
    type: "link",
    link: "/articles"
  },
  {
    id: uuidv4(),
    title: "О нас",
    type: "link",
    link: "/about-us"
  },
]

export const MOBILE_NAV_DATA: MobileNavData[] = [
  {
    id: uuidv4(),
    title: "Чат-боты",
    link: "/chat-bots",
    icon: Bot,
  },
  {
    id: uuidv4(),
    title: "Сайты",
    link: "/websites",
    icon: Layers
  },
  {
    id: uuidv4(),
    title: "Мобильные приложения",
    link: "/mobile-apps",
    icon: TabletSmartphone
  },
  {
    id: uuidv4(),
    title: "Блокчейн",
    link: "/blockchain",
    icon: Link
  },
  {
    id: uuidv4(),
    title: "Кейсы",
    link: "/case",
    icon: Briefcase
  },
  {
    id: uuidv4(),
    title: "Контакты",
    link: "/contacts",
    icon: BookUser
  },
  {
    id: uuidv4(),
    title: "Статьи",
    link: "/articles",
    icon: Newspaper
  },
  {
    id: uuidv4(),
    title: "О нас",
    link: "/about-us",
    icon: User
  },
]

export const LANGUAGE_DATA = createListCollection({
  items: [
    {
      label: "RUS",
      value: "ru",
    },
    {
      label: "ENG",
      value: "en",
    },
  ],
})