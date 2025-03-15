import React, { FC } from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { DevelopingPreviewContentInfoProps } from './DevelopingPreviewContentInfo.types';

export const DevelopingPreviewContentInfo: FC<DevelopingPreviewContentInfoProps> = (props) => {
   const {} = props;
   return (
      <VStack spaceY={'8'} align="start">
         <Box maxW="5xl">
            <Heading as="h3" fontSize="2xl" fontWeight="lighter" lineHeight="3.5rem">
               Анализируем всех конкурентов в вашей нише, чтобы создать{' '}
               <Text as="span" fontWeight="bold">
                  лучшее решение для вас
               </Text>
            </Heading>
         </Box>
         <Box maxW="5/12">
            <Text as="p" fontSize="md" fontWeight="lighter">
               Узнаем ваш запрос и предложим{' '}
               <Text as="span" className="italic" fontWeight="semibold">
                  лучшие варианты под ваши задачи и бюджет
               </Text>
            </Text>
         </Box>
      </VStack>
   );
};
