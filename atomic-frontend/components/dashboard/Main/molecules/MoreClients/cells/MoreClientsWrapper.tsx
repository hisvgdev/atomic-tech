import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import MoreClientsHeading from '../atoms/MoreClientsHeading';
import Feedbacks from '@/shared/global/Feedbacks/molecules/Feedbacks';
import { useTheme } from 'next-themes';

export const MoreClientsWrapper = () => {
   const { theme } = useTheme();
   return (
      <Box w="full" h="full" py="20">
         <Flex direction="column" gap="14">
            <Flex direction="column" gap="24">
               <MoreClientsHeading />
               <Feedbacks isBgWhite={theme === 'light'} />
            </Flex>
         </Flex>
      </Box>
   );
};
