import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { OurDevelopingHeadingProps } from './OurDevelopingHeading.types';
import { inter } from '@/constants/fonts/inter/inter.constants';

export const OurDevelopingHeading: FC<OurDevelopingHeadingProps> = (props) => {
   const { title, desc } = props;
   return (
      <Box maxW={{ base: '100%', lg: '2/3' }}>
         <Flex
            direction="column"
            gap={{ base: '1', lg: '2' }}
            justify={{ base: 'center', lg: 'start' }}
            align={{ base: 'center', lg: 'start' }}
         >
            <Heading
               fontWeight="light"
               fontSize={{ base: 'sm', lg: 'md' }}
               className={`${inter.className}`}
            >
               {title}
            </Heading>
            <Text
               fontWeight="semibold"
               fontSize={{ base: 'xl', lg: '3xl' }}
               lineHeight={{ base: '2.2rem', lg: '3.3rem' }}
               textAlign={{ base: 'center', lg: 'start' }}
            >
               {desc}
            </Text>
         </Flex>
      </Box>
   );
};
