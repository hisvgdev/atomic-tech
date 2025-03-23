import { Box, Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import StepCircle from '../StepCircle';
import { inter } from '@/constants/fonts/inter/inter.constants';
import { ProcessStepProps } from './ProcessStep.types';

export const ProcessStep: FC<ProcessStepProps> = (props) => {
   const { number, align, text, highlight } = props;
   return (
      <Flex align="center" justify={align} gap="5">
         <StepCircle number={number} />
         <Box maxW={{ base: 'full', lg: '80' }}>
            <Text
               className={`${inter.className}`}
               fontSize={{ base: 'sm', lg: 'md' }}
               fontWeight="light"
            >
               {text}{' '}
               <Text as="span" fontStyle="italic" fontWeight="semibold">
                  {highlight}
               </Text>
            </Text>
         </Box>
      </Flex>
   );
};
