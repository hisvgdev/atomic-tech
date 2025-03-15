import CustomButton, { VariantButton } from '@/shared/ui/custom/atom/CustomButton';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import React from 'react';
import atomicPhorePreviewImage from '@/public/assets/images/chat-bots/atomicCodePhone.png';

const inter = Inter({
   weight: ['300', '700'],
   subsets: ['latin'],
   display: 'swap',
   fallback: ['Arial', 'sans-serif'],
});

export const PreviewContent = () => {
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
                        Создание чат-ботов
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
               <Image
                  src={atomicPhorePreviewImage}
                  alt="atomic-preview-phone-image"
                  width={545}
                  height={630}
               />
            </Box>
         </Flex>
      </Box>
   );
};
