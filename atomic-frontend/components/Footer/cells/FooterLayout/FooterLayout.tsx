import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import FooterBranding from '../../atoms/atoms/FooterBranding';
import FooterNav from '../../atoms/atoms/FooterNav';
import FooterContacts from '../../atoms/atoms/FooterContacts';

export const FooterLayout = () => {
   return (
      <Box bg="#232323" py={20} borderTopRadius="15rem">
         <Box maxW="6xl" mx="auto" px={4}>
            <Flex justify="space-between" align="center" flexWrap="wrap">
               <FooterBranding />
               <FooterNav />
               <FooterContacts />
            </Flex>
         </Box>
      </Box>
   );
};
