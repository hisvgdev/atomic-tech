import { Box, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { StepCircleProps } from './StepCircle.types';

export const StepCircle: FC<StepCircleProps> = (props) => {
   const { number } = props;
   return (
      <Box
         position="relative"
         display="flex"
         alignItems="center"
         justifyContent="center"
         bgColor="#A3AFFD"
         rounded="full"
         w="24"
         h="24"
         textAlign="center"
         boxShadow="0 0 25px 8px rgba(74, 65, 255, 0.5)"
      >
         <Text
            fontSize="3.75rem"
            fontWeight="bold"
            bgGradient="linear(to-b, #4A41FF, #598EFF)"
            bgClip="text"
            color="white"
         >
            {number}
         </Text>
      </Box>
   );
};
