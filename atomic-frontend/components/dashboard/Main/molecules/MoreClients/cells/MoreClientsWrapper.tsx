import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import MoreClientsHeading from '../atoms/MoreClientsHeading';
import MoreClientsInfinityTape from '../atoms/MoreClientsInfinityTape';
import Feedbacks from '@/shared/global/Feedbacks/molecules/Feedbacks';

export const MoreClientsWrapper = () => {
   return (
      <Box w="full" h="full" py="20">
         <Flex direction="column" gap="14">
            <Flex direction="column" gap="24">
               <MoreClientsHeading />
               <Feedbacks />
            </Flex>
            <MoreClientsInfinityTape />
         </Flex>
      </Box>
   );
};
