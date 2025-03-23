import { Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { FooterContactsProps } from './FooterContacts.types';
import { inter } from '@/constants/fonts/inter/inter.constants';

export const FooterContacts: FC<FooterContactsProps> = (props) => {
   const {} = props;
   return (
      <Flex direction="column" gap={{ base: '1', lg: '5' }}>
         <Text
            fontSize={{ base: 'md', lg: 'xl' }}
            fontWeight="light"
            color="white"
            className={`${inter.className}`}
         >
            +7 (999) 999-99-99
         </Text>
         <Text
            fontSize={{ base: 'md', lg: 'xl' }}
            fontWeight="light"
            color="white"
            className={`${inter.className}`}
         >
            mail@company.com
         </Text>
      </Flex>
   );
};
