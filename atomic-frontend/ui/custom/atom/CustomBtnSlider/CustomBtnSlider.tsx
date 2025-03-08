import ArrowIcon from '@/components/Icons/atoms/ArrowIcon';
import { Flex, Box, Button } from '@chakra-ui/react';
import React, { FC } from 'react';
import { CustomBtnSliderProps } from './CustomBtnSlider.types';

export const CustomBtnSlider: FC<CustomBtnSliderProps> = ({ slideNext, slidePrev }) => {
   return (
      <Box pt="16">
         <Flex w="full" justify="center" align="center" gap="10">
            <Button
               rounded="full"
               w="14"
               h="14"
               border="1px solid white"
               onClick={slidePrev ? slidePrev : undefined}
            >
               <ArrowIcon />
            </Button>
            <Button
               rounded="full"
               w="14"
               h="14"
               bg="white"
               transform="rotate(180deg)"
               onClick={slideNext ? slideNext : undefined}
            >
               <ArrowIcon color="black" />
            </Button>
         </Flex>
      </Box>
   );
};
