import { v4 as uuidv4 } from 'uuid';
import dexIcon from '@/public/assets/images/blockchain/dexIcon.svg';
import smartContract from "@/public/assets/images/blockchain/smartContractIcon.svg";
import deFi from "@/public/assets/images/blockchain/deFiIcon.svg";
import NFTIcon from "@/public/assets/images/blockchain/NFTIcon.svg";

export const BENEFITS_CARDS_DATA = [
  {
    id: uuidv4(),
    title: "DEX",
    bgColor: "#5547FF",
    icon: dexIcon,
  },
  {
    id: uuidv4(),
    title: "Cмарт контракты",
    bgColor: "#A199FF",
    icon: smartContract,
  },
  {
    id: uuidv4(),
    title: "DeFI",
    bgColor: "#2D2D2D",
    icon: deFi,
  },
  {
    id: uuidv4(),
    title: "NFT",
    bgColor: "linear-gradient(258.97deg, #4A41FF -3.45%, #6EB2FF 55.6%, #19C8E3 100.54%)",
    icon: NFTIcon,
  },
]