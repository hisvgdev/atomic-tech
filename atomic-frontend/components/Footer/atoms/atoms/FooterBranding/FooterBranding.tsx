import { Flex, Heading, Link, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { FooterBrandingProps } from './FooterBranding.types';

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
         >
            Atomic Code
         </Heading>
         <Link href="#" color="#B5EF69" fontSize="base" textDecoration="underline">
            Политика обработки персональных данных
         </Link>
         <Flex align="center" gap={6}>
            <Text fontSize="sm" fontWeight="light" color="#F3F4F4">
               ИНН: 1234567891
            </Text>
            <Text fontSize="sm" fontWeight="light" color="#F3F4F4">
               ОГРН: 1234567891012
            </Text>
         </Flex>
      </Flex>
   );
};
