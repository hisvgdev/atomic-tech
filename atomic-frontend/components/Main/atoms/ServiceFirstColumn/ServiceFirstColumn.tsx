import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import atomicServicePhone from '@/public/assets/images/main/service/atomicServicePhone.svg';

export const ServiceFirstColumn = () => {
   return (
      <Box
         flex="1"
         bg="#97C5FF"
         rounded="1.25rem"
         position="relative"
         overflow="hidden"
         h="24rem"
         p="5"
      >
         <Box maxW="3xs" overflow="hidden" position="absolute" bottom="10%" left="7%">
            <Text color="black" fontWeight="bold" fontSize="md">
               Мобильные приложения
            </Text>
         </Box>
         <Box position="absolute" right="0" top="0">
            <Image src={atomicServicePhone} alt="mobile-apps" width={435} height={393} />
         </Box>
      </Box>
   );
};
