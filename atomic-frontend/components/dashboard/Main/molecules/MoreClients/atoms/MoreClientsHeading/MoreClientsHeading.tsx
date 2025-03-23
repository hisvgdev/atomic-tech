import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import CustomTitle from '@/shared/ui/custom/atom/CustomTitle';
import CustomButton, { VariantButton } from '@/shared/ui/custom/atom/CustomButton';
import { inter } from '@/constants/fonts/inter/inter.constants';
import { useIsMobile } from '@/hooks/useMediaQuery';

export const MoreClientsHeading = () => {
   const isMobile = useIsMobile();
   return (
      <Flex direction="column" align="center" justify="center" w="full" gap="24">
         <Flex direction="column" gap="1" align="center" justifyContent="center">
            <Box maxW="4xl">
               <CustomTitle
                  size={isMobile ? '2rem' : '4rem'}
                  title="Более 235 благодарных клиентов"
                  weight="bold"
                  lineHeight={isMobile ? '' : '4rem'}
                  isCenter
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
               isUppercase
            />
            <Text
               textDecoration="underline"
               fontWeight="normal"
               fontSize="5"
               className={`${inter.className}`}
            >
               Оставить отзыв
            </Text>
         </Flex>
      </Flex>
   );
};
