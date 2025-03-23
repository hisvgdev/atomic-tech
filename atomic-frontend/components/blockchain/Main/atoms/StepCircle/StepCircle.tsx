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
         textAlign="center"
         w={{ base: 'auto', lg: '24' }}
         h={{ base: 'auto', lg: '24' }}
         p={{ base: '4', lg: '0' }}
         boxShadow="0 0 25px 8px rgba(74, 65, 255, 0.5)"
      >
         <Text
            fontSize={{ base: 'md', lg: '3.75rem' }}
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
