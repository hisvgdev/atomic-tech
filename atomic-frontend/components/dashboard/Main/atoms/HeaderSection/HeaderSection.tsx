import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { HeaderSectionProps } from './HeaderSection.types';

export const HeaderSection: FC<HeaderSectionProps> = (props) => {
   const { title, titleWidth = '2xl', isCenter, children } = props;
   return (
      <Flex direction="column" gap={7}>
         <Box maxW={titleWidth}>
            <Heading
               fontSize="2.625rem"
               lineHeight="2.8rem"
               fontWeight="bold"
               color="white"
               textAlign={isCenter ? 'center' : ''}
            >
               {title}
            </Heading>
         </Box>
         <Box maxW="md" mx={isCenter ? 'auto' : ''} textAlign={isCenter ? 'center' : ''}>
            {children}
         </Box>
      </Flex>
   );
};
