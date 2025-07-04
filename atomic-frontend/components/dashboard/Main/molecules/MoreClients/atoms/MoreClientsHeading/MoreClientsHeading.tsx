'use client';

import React, { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import CustomTitle from '@/shared/ui/custom/atom/CustomTitle';
import CustomButton, { VariantButton } from '@/shared/ui/custom/atom/CustomButton';
import { inter } from '@/constants/fonts/inter/inter.constants';
import { useIsMobile } from '@/hooks/useMediaQuery';
import ContactRequestLayout from '@/shared/global/ContactRequest/organism';

export const MoreClientsHeading = () => {
   const isMobile = useIsMobile();
   const [isOpen, setIsOpen] = useState(false);
   const handleOpen = () => setIsOpen(true);
   const handleClose = () => setIsOpen(false);
   return (
      <>
         <Flex direction="column" align="center" justify="center" w="full" gap="24">
            <Flex direction="column" gap="1" align="center" justifyContent="center">
               <Box maxW="4xl">
                  <CustomTitle
                     lineHeight={isMobile ? '2.2rem' : '4rem'}
                     title="Более 235 благодарных клиентов"
                     weight="bold"
                     size={isMobile ? '2rem' : '4rem'}
                     isCenter
                     isInsideInCenter
                  />
               </Box>
               <Box>
                  <Text
                     fontSize={{ base: 'md', lg: 'lg' }}
                     fontWeight="light"
                     className={`${inter.className}`}
                  >
                     Станьте одним из них.
                  </Text>
               </Box>
            </Flex>
            <Flex
               align="center"
               gap={{ base: '3', lg: '11' }}
               direction={{ base: 'column', lg: 'row' }}
            >
               <CustomButton
                  variant={VariantButton.gradient}
                  text="Обсудить проект"
                  width="18rem"
                  onClick={handleOpen}
                  isUppercase
               />
               <Text
                  textDecoration="underline"
                  fontWeight="normal"
                  fontSize="5"
                  className={`${inter.className} cursor-pointer`}
               >
                  Оставить отзыв
               </Text>
            </Flex>
         </Flex>
         <ContactRequestLayout handleClose={handleClose} isOpen={isOpen} />
      </>
   );
};
