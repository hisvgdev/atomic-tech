import { Flex, Box, Button } from '@chakra-ui/react';
import React, { FC } from 'react';
import { CustomBtnSliderProps } from './CustomBtnSlider.types';
import { MoveLeft, MoveRight } from 'lucide-react';

export const CustomBtnSlider: FC<CustomBtnSliderProps> = (props) => {
   const { slideNext, slidePrev } = props;
   return (
      <Box>
         <Flex w="full" justify="center" align="center" gap="10">
            <Button
               rounded="full"
               w="14"
               h="14"
               border="1px solid white"
               onClick={slidePrev ? slidePrev : undefined}
            >
               <MoveLeft />
            </Button>
            <Button
               rounded="full"
               w="14"
               h="14"
               bg="white"
               onClick={slideNext ? slideNext : undefined}
            >
               <MoveRight color="black" />
            </Button>
         </Flex>
      </Box>
   );
};
