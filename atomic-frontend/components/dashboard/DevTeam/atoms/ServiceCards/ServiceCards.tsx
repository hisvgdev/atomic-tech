import { Box, Text } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const services = [
   'CRM',
   'Блокчейн',
   'Интернет-магазин',
   'Сайт',
   'Телеграм-боты',
   'Софт',
   'Мобильные приложения',
   'Игры',
   'Нейросети',
];

export const ServiceCards = () => {
   const containerRef = useRef<HTMLDivElement | null>(null);
   const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

   return (
      <Box w="full" h="96" position="relative" overflow="hidden" bg="white">
         {services.map((service, index) => (
            <Box
               key={index}
               borderWidth={1}
               borderColor="black"
               rounded="full"
               py={2}
               px={7}
               whiteSpace="nowrap"
               bg="white"
               color="black"
               position="absolute"
            >
               <Text fontSize="sm">{service}</Text>
            </Box>
         ))}
      </Box>
   );
};
