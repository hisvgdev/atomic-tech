import CustomButton, { VariantButton } from '@/shared/ui/custom/atom/CustomButton';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import React, { FC } from 'react';
import { PreviewContentProps } from './PreviewContent.types';

const inter = Inter({
   weight: ['300', '700'],
   subsets: ['latin'],
   display: 'swap',
   fallback: ['Arial', 'sans-serif'],
});

export const PreviewContent: FC<PreviewContentProps> = (props) => {
   const { title, imgSrc, width, height } = props;
   return (
      <Box>
         <Flex direction="row" gap="14" align="center">
            <Flex direction="column" gap="7" maxW="41.25rem" w="full">
               <Flex direction="column" gap="2.5">
                  <Heading className={`${inter.className}`} fontSize="2.5" fontWeight="light">
                     ATOMIC CODE
                  </Heading>
                  <Box lineHeight="3.5rem">
                     <Text fontSize="3.18rem" fontWeight="semibold">
                        {title}
                     </Text>
                     <Text fontSize="3.18rem" fontWeight="light">
                        любой сложности
                     </Text>
                  </Box>
               </Flex>
               <Flex direction="column" gap="14">
                  <Box maxW="xs">
                     <Text fontSize="5" fontWeight="light">
                        Которые окупаются и приносят прибыль{' '}
                        <Text as="span" fontWeight="semibold" className="italic">
                           вашему бизнесу
                        </Text>
                     </Text>
                  </Box>
                  <Box>
                     <CustomButton
                        variant={VariantButton.default}
                        text="Обсудить проект"
                        width="17rem"
                     />
                  </Box>
               </Flex>
            </Flex>
            <Box className="flex-1">
               <Image src={imgSrc} alt="atomic-preview-phone-image" width={width} height={height} />
            </Box>
         </Flex>
      </Box>
   );
};
