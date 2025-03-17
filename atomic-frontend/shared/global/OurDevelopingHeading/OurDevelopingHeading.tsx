import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { OurDevelopingHeadingProps } from './OurDevelopingHeading.types';

export const OurDevelopingHeading: FC<OurDevelopingHeadingProps> = (props) => {
   const { title, desc } = props;
   return (
      <Box maxW="2/3">
         <Flex direction="column" gap="2.5" align="start">
            <Heading fontWeight="light" fontSize="md">
               {title}
            </Heading>
            <Text fontWeight="semibold" fontSize="3xl" lineHeight="3.3rem">
               {desc}
            </Text>
         </Flex>
      </Box>
   );
};
