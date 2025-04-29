'use client';

import { Flex, Box, Button } from '@chakra-ui/react';
import React, { FC } from 'react';
import { CustomBtnSliderProps } from './CustomBtnSlider.types';
import { MoveLeft, MoveRight } from 'lucide-react';
import { useTheme } from 'next-themes';

export const CustomBtnSlider: FC<CustomBtnSliderProps> = (props) => {
   const { slideNext, slidePrev } = props;
   const { theme } = useTheme();
   return (
      <Box>
         <Flex w="full" justify="center" align="center" gap="10">
            <Button
               rounded="full"
               w={{ base: '10', lg: '14' }}
               h={{ base: '10', lg: '14' }}
               borderWidth="1px"
               borderColor={{ base: 'black', _dark: 'white' }}
               onClick={slidePrev ? slidePrev : undefined}
            >
               <MoveLeft color="white" />
            </Button>
            <Button
               rounded="full"
               w={{ base: '10', lg: '14' }}
               h={{ base: '10', lg: '14' }}
               bg={{ base: 'black', _dark: 'white' }}
               onClick={slideNext ? slideNext : undefined}
            >
               <MoveRight color={theme === 'light' ? 'white' : 'black'} />
            </Button>
         </Flex>
      </Box>
   );
};
