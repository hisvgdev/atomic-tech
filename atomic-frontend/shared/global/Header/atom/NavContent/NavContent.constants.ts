import { v4 as uuidv4 } from 'uuid';
import { RiArrowDropDownLine } from "react-icons/ri";
import { NavData } from "./NavContent.types";
import { createListCollection } from "@chakra-ui/react";

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