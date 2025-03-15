import React, { FC } from 'react';
import { DevWorkHeadingProps } from './DevWorkHeading.types';
import { Box, Heading, Text } from '@chakra-ui/react';

export const DevWorkHeading: FC<DevWorkHeadingProps> = (props) => {
   const {} = props;
   return (
      <Box>
         <Heading fontSize="3xl" fontWeight="lighter" lineHeight="3rem" textAlign="center">
            Работа строится <br />
            <Text as="span" fontWeight="bold">
               в несколько этапов
            </Text>
         </Heading>
      </Box>
   );
};
