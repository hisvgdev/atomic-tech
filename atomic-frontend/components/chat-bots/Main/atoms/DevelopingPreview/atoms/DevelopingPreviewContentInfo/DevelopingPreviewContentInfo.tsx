import React, { FC } from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { DevelopingPreviewContentInfoProps } from './DevelopingPreviewContentInfo.types';
import { inter } from '@/constants/fonts/inter/inter.constants';

export const DevelopingPreviewContentInfo: FC<DevelopingPreviewContentInfoProps> = (props) => {
   const {} = props;
   return (
      <VStack spaceY={'7'} align="start">
         <Box>
            <Heading as="h3" fontSize="2.8rem" fontWeight="lighter" lineHeight="3.5rem">
               Анализируем всех конкурентов в вашей нише, чтобы создать{' '}
               <Text as="span" fontWeight="bold">
                  лучшее решение для вас
               </Text>
            </Heading>
         </Box>
         <Box maxW="30%">
            <Text as="p" fontSize="sm" fontWeight="lighter" className={`${inter.className}`}>
               Узнаем ваш запрос и предложим{' '}
               <Text
                  as="span"
                  fontStyle="italic"
                  fontWeight="semibold"
                  className={`${inter.className}`}
               >
                  лучшие варианты под ваши задачи и бюджет
               </Text>
            </Text>
         </Box>
      </VStack>
   );
};
