import { Flex, Heading, Link, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { FooterBrandingProps } from './FooterBranding.types';
import { inter } from '@/constants/fonts/inter/inter.constants';

export const FooterBranding: FC<FooterBrandingProps> = (props) => {
   const {} = props;
   return (
      <Flex direction="column" gap={7}>
         <Heading
            as="h1"
            fontWeight="semibold"
            textTransform="uppercase"
            fontSize="4xl"
            color="white"
            className={`${inter.className}`}
         >
            Atomic Code
         </Heading>
         <Link href="#" color="#B5EF69" fontSize="base" textDecoration="underline">
            Политика обработки персональных данных
         </Link>
         <Flex align="center" gap={6}>
            <Text fontSize="sm" fontWeight="light" color="#F3F4F4" className={`${inter.className}`}>
               ИНН: 1234567891
            </Text>
            <Text fontSize="sm" fontWeight="light" color="#F3F4F4" className={`${inter.className}`}>
               ОГРН: 1234567891012
            </Text>
         </Flex>
      </Flex>
   );
};
