import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import MoreClientsHeading from '../atoms/MoreClientsHeading';
import MoreClientsInfinityTape from '../atoms/MoreClientsInfinityTape';
import Feedbacks from '@/shared/global/Feedbacks/molecules/Feedbacks';
import { useTheme } from 'next-themes';

export const MoreClientsWrapper = () => {
   const { theme } = useTheme();
   return (
      <Box w="full" h="full" py="20" position="relative">
         <div
            style={{
               background:
                  theme === 'light'
                     ? `linear-gradient(rgb(255, 255, 255) 33.01%, rgb(175, 191, 255) 100%)`
                     : `linear-gradient(180deg, #232323 33.01%, #5547FF 100%)`,
               width: '100%',
               height: '100%',
               position: 'absolute',
               bottom: '0',
               zIndex: '0',
            }}
         />
         <Flex direction="column" gap="14" position="relative" zIndex="max">
            <Flex direction="column" gap="24">
               <MoreClientsHeading />
               <Feedbacks isBgWhite={theme === 'light'} />
            </Flex>
            <MoreClientsInfinityTape />
         </Flex>
      </Box>
   );
};
