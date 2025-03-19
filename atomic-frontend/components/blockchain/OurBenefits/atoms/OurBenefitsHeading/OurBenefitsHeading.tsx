import { Box, Heading, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { OurBenefitsHeadingProps } from './OurBenefitsHeading.types';

export const OurBenefitsHeading: FC<OurBenefitsHeadingProps> = (props) => {
   const {} = props;
   return (
      <Box>
         <Heading fontWeight="light" fontSize="2.8rem" className="leading-10">
            Наши компетенции, <br />{' '}
            <Text as="span" fontWeight="bold">
               рассказываем о том, что умеем
            </Text>{' '}
         </Heading>
      </Box>
   );
};
