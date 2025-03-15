'use client';

import React from 'react';
import Image from 'next/image';
import { Box, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import atomicLogoYandex from '@/public/assets/images/main/moreClients/atomicYandexLogo.svg';
import atomicLogoVk from '@/public/assets/images/main/moreClients/atomicVkLogo.svg';
import atomicLogoWb from '@/public/assets/images/main/moreClients/atomicWbLogo.svg';

const logos = [
   { src: atomicLogoYandex, alt: 'Yandex' },
   { src: atomicLogoVk, alt: 'VK' },
   { src: atomicLogoWb, alt: 'Wildberries' },
];

export const MoreClientsInfinityTape = () => {
   return (
      <Box overflow="hidden" width="100%" py="5">
         <Flex overflow="hidden" whiteSpace="nowrap" position="relative">
            <motion.div
               style={{ display: 'flex', gap: '9rem', minWidth: 'max-content' }}
               animate={{ x: ['0%', '-100%'] }}
               transition={{ ease: 'linear', duration: 10, repeat: Infinity }}
            >
               {[...logos, ...logos].map((logo, index) => (
                  <Box key={index} flexShrink={0} w="8rem" h="4rem" position="relative">
                     <Image src={logo.src} alt={logo.alt} fill style={{ objectFit: 'contain' }} />
                  </Box>
               ))}
            </motion.div>
         </Flex>
      </Box>
   );
};
