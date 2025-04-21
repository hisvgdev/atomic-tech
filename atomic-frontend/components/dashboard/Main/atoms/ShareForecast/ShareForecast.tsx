import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import CustomButton, { VariantButton } from '@/shared/ui/custom/atom/CustomButton';
import revertArrowIcon from '@/public/assets/images/main/revertArrowIcon.svg';

export const ShareForecast = ({ handleOpen }: { handleOpen: () => void }) => {
   return (
      <Flex
         direction="column"
         justify={{ base: 'center', lg: 'normal' }}
         align={{ base: 'center', lg: 'normal' }}
         position="relative"
      >
         <Flex direction="column" gap="7">
            <Box maxW="72">
               <Text fontWeight="bold" fontSize="sm" className="uppercase" lineHeight="1.31rem">
                  Расскажем о возможностях для конкретно вашего случая
               </Text>
            </Box>
            <Flex justify="end" maxW="sm" display={{ base: 'none', lg: 'flex' }}>
               <Image src={revertArrowIcon} width={167} height={80} alt="revert-arrow-icon" />
            </Flex>
            <Flex justify="center" align="center" display={{ base: 'block', lg: 'none' }}>
               <CustomButton
                  text="Узнать прогноз"
                  isUppercase
                  variant={VariantButton.gradient}
                  width="18rem"
                  onClick={handleOpen}
               />
            </Flex>
         </Flex>
         <Flex justify="center" align="center" display={{ base: 'none', lg: 'flex' }}>
            <CustomButton
               text="Узнать прогноз"
               isUppercase
               variant={VariantButton.gradient}
               width="18rem"
               onClick={handleOpen}
            />
         </Flex>
      </Flex>
   );
};
