import { inter } from '@/constants/fonts/inter/inter.constants';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import React, { FC } from 'react';
import { ProcessDevelopingHeadingProps } from './ProcessDevelopingHeading.types';

export const ProcessDevelopingHeading: FC<ProcessDevelopingHeadingProps> = (props) => {
   const {} = props;
   return (
      <VStack align="start" gap="4">
         <Box maxW="3xl">
            <Heading fontSize="4xl" fontWeight="light" className={`${inter.className} leading-10`}>
               Процесс разработки и{' '}
               <Text as="span" fontWeight="bold">
                  внедрения блокчейн-проекта
               </Text>
            </Heading>
         </Box>
         <Box maxW="lg">
            <Text fontSize="sm" fontWeight="light" className={`${inter.className}`}>
               Мы разрабатываем{' '}
               <Text as="span" fontWeight="bold">
                  блокчейн-проекты «под ключ»
               </Text>
               , начиная с идеи и архитектуры и заканчивая{' '}
               <Text as="span" fontWeight="bold">
                  полным внедрением и поддержкой.
               </Text>
            </Text>
         </Box>
      </VStack>
   );
};
