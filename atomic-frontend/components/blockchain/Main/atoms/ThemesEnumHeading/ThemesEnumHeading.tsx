import { inter } from '@/constants/fonts/inter/inter.constants';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { ThemesEnumHeadingProps } from './ThemesEnumHeading.types';

export const ThemesEnumHeading: FC<ThemesEnumHeadingProps> = (props) => {
   const { title, desc } = props;
   return (
      <Flex direction="column" gap={{ base: '6', lg: '10' }}>
         <Heading
            fontWeight="bold"
            fontSize={{ base: '1.5rem', lg: '2.5rem' }}
            lineHeight={{ base: '2rem', lg: '2.5rem' }}
         >
            {title}
         </Heading>
         <Box maxW="md">
            <Text fontWeight="light" className={`${inter.className}`}>
               {desc}
            </Text>
         </Box>
      </Flex>
   );
};
