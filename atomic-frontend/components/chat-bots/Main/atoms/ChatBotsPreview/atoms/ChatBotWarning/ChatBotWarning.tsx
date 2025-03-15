import { Flex, Text, VStack } from '@chakra-ui/react';
import { Sparkle } from 'lucide-react';
import React, { FC } from 'react';
import { ChatBotWarningProps } from './ChatBotWarning.types';

export const ChatBotWarning: FC<ChatBotWarningProps> = (props) => {
   const {} = props;
   return (
      <Flex align="start" gap={4} maxW="xl">
         <Sparkle />
         <VStack spaceY={2} align="start">
            <Text fontSize="lg" fontWeight="semibold" fontStyle="italic">
               Не работаем с пирамидами, казино и подобными проектами
            </Text>
            <Text fontSize="sm" fontWeight="light">
               Не занимаемся разработкой цифровых товаров, нарушающих законодательство Российской
               Федерации или оказывающих вред для гражданских лиц.
            </Text>
         </VStack>
      </Flex>
   );
};
