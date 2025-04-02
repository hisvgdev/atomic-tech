import { Box, Heading, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { OurBenefitsHeadingProps } from './OurBenefitsHeading.types';

export const OurBenefitsHeading: FC<OurBenefitsHeadingProps> = (props) => {
   const {} = props;
   return (
      <Box>
         <Heading
            fontWeight="light"
            fontSize={{ base: 'xl', lg: '2.8rem' }}
            lineHeight={{ base: '2rem', lg: '2.5rem' }}
            textAlign={{ base: 'center', lg: 'start' }}
            color="white"
         >
            Наши компетенции, <br />{' '}
            <Text as="span" fontWeight="bold">
               рассказываем о том, что умеем
            </Text>{' '}
         </Heading>
      </Box>
   );
};
