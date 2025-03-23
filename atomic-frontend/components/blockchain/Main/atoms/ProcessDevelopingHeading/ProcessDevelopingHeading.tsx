import { inter } from '@/constants/fonts/inter/inter.constants';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import React, { FC } from 'react';
import { ProcessDevelopingHeadingProps } from './ProcessDevelopingHeading.types';

export const ProcessDevelopingHeading: FC<ProcessDevelopingHeadingProps> = (props) => {
   const {} = props;
   return (
      <VStack align={{ base: 'center', lg: 'start' }} gap="4">
         <Box maxW={{ base: '100%', lg: '3xl' }}>
            <Heading
               fontSize={{ base: 'xl', lg: '4xl' }}
               className={`${inter.className}`}
               lineHeight={{ base: '2rem', lg: '2.5rem' }}
               textAlign={{ base: 'center', lg: 'start' }}
               fontWeight="light"
            >
               Процесс разработки и{' '}
               <Text as="span" fontWeight="bold">
                  внедрения блокчейн-проекта
               </Text>
            </Heading>
         </Box>
         <Box maxW="lg">
            <Text
               fontSize="sm"
               fontWeight="light"
               textAlign={{ base: 'center', lg: 'start' }}
               className={`${inter.className}`}
            >
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
