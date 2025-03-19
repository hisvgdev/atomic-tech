import { inter } from '@/constants/fonts/inter/inter.constants';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { ThemesEnumHeadingProps } from './ThemesEnumHeading.types';

export const ThemesEnumHeading: FC<ThemesEnumHeadingProps> = (props) => {
   const { title, desc } = props;
   return (
      <Flex direction="column" gap="10">
         <Heading fontWeight="bold" fontSize="2.5rem" className="leading-10">
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
