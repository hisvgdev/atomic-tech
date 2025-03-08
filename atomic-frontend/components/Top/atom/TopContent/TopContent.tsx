import { Inter } from 'next/font/google';
import React, { FC } from 'react';
import { TopContentProps } from './TopContent.types';
import { Flex, Text } from '@chakra-ui/react';
import { MotionBox } from '@/ui/animation';
import CustomButton, { VariantButton } from '@/ui/custom/atom/CustomButton';

const inter = Inter({
   weight: ['300', '700'],
   subsets: ['latin'],
   display: 'swap',
   fallback: ['Arial', 'sans-serif'],
});

export const TopContent: FC<TopContentProps> = (props) => {
   const {} = props;
   return (
      <Flex direction="column" gap={2}>
         <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Text as="h1" fontWeight="light" className={`${inter.className} text-base`}>
               ATOMIC CODE
            </Text>
         </MotionBox>
         <Flex align="end" justify="space-between">
            <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
               <Text fontWeight="bold" fontSize="5xl" className="leading-[6.125rem]">
                  Креативная команда <br /> разработчиков
               </Text>
            </MotionBox>
            <MotionBox
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               maxW="64"
               w="full"
            >
               <CustomButton text="Обсудить проект" width="full" variant={VariantButton.default} />
            </MotionBox>
         </Flex>
      </Flex>
   );
};
