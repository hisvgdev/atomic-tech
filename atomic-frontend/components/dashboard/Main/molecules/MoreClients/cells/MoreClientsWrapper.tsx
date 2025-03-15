import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import MoreClientsHeading from '../atoms/MoreClientsHeading';
import MoreClientsArticles from '../molecules/MoreClientsArticles';
import MoreClientsInfinityTape from '../atoms/MoreClientsInfinityTape';

export const MoreClientsWrapper = () => {
   return (
      <Box w="full" h="full" py="20">
         <Flex direction="column" gap="14">
            <Flex direction="column" gap="24">
               <MoreClientsHeading />
               <MoreClientsArticles />
            </Flex>
            <MoreClientsInfinityTape />
         </Flex>
      </Box>
   );
};
