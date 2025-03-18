import { Flex, Text, VStack } from '@chakra-ui/react';
import { Sparkle } from 'lucide-react';
import React, { FC } from 'react';
import { ChatBotWarningProps } from './ChatBotWarning.types';
import { inter } from '@/constants/fonts/inter/inter.constants';

export const ChatBotWarning: FC<ChatBotWarningProps> = (props) => {
   const {} = props;
   return (
      <Flex align="start" gap={4} maxW="2xl">
         <Sparkle />
         <VStack align="start">
            <Text
               fontSize="md"
               fontWeight="semibold"
               fontStyle="italic"
               className={`${inter.className}`}
            >
               Не работаем с пирамидами, казино и подобными проектами
            </Text>
            <Text fontSize="sm" fontWeight="light" className={`${inter.className}`}>
               Не занимаемся разработкой цифровых товаров, нарушающих законодательство Российской
               Федерации или оказывающих вред для гражданских лиц.
            </Text>
         </VStack>
      </Flex>
   );
};
