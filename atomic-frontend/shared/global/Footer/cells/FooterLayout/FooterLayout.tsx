'use client';

import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import FooterBranding from '../../atoms/atoms/FooterBranding';
import FooterNav from '../../atoms/atoms/FooterNav';
import FooterContacts from '../../atoms/atoms/FooterContacts';
import { useInView } from 'react-intersection-observer';
import { MotionBox } from '@/shared/ui/animation';

export const FooterLayout = () => {
   const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
   });
   return (
      <Box ref={ref}>
         <MotionBox initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
            <Box bg="#232323" py={20} borderTopRadius="15rem">
               <Box maxW="6xl" mx="auto" px={4}>
                  <Flex justify="space-between" align="center" flexWrap="wrap">
                     <FooterBranding />
                     <FooterNav />
                     <FooterContacts />
                  </Flex>
               </Box>
            </Box>
         </MotionBox>
      </Box>
   );
};
