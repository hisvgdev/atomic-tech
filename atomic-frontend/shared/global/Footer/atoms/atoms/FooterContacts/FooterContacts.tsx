import { Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { FooterContactsProps } from './FooterContacts.types';

export const FooterContacts: FC<FooterContactsProps> = (props) => {
   const {} = props;
   return (
      <Flex direction="column" gap={5}>
         <Text fontSize="xl" fontWeight="light" color="white">
            +7 (999) 999-99-99
         </Text>
         <Text fontSize="xl" fontWeight="light" color="white">
            mail@company.com
         </Text>
      </Flex>
   );
};
