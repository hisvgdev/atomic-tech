import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import CustomButton, { VariantButton } from '@/ui/custom/atom/CustomButton';
import revertArrowIcon from '@/public/assets/images/main/revertArrowIcon.svg';

export const ShareForecast = () => {
   return (
      <Flex direction="column" position="relative">
         <Flex direction="column" gap="7">
            <Box maxW="72">
               <Text fontWeight="bold" fontSize="sm" className="uppercase" lineHeight="1.31rem">
                  Расскажем о возможностях для конкретно вашего случая
               </Text>
            </Box>
            <Flex justify="end" maxW="sm">
               <Image src={revertArrowIcon} width={167} height={80} alt="revert-arrow-icon" />
            </Flex>
         </Flex>
         <Flex justify="center" align="center">
            <CustomButton text="УЗНАТЬ ПРОГНОЗ" variant={VariantButton.gradient} width="18rem" />
         </Flex>
      </Flex>
   );
};
