import { Button } from '@chakra-ui/react';
import React, { FC } from 'react';
import { CustomButtonProps } from './CustomButton.types';

export const CustomButton: FC<CustomButtonProps> = (props) => {
   const { text, width, variant, isUppercase } = props;

   const buttonStyles =
      variant === 'gradient'
         ? {
              background:
                 'linear-gradient(258.97deg, #4A41FF -3.45%, #6EB2FF 55.6%, #19C8E3 100.54%)',
              color: 'white',
              boxShadow: '0px 4px 10px 0px #00000026',

              _hover: {
                 background:
                    'linear-gradient(258.97deg, #3A30FF -3.45%, #5EA2FF 55.6%, #10B8D3 100.54%)',
              },
           }
         : {
              bg: 'white',
              color: 'black',
              _hover: { bg: 'gray.200' },
           };

   return (
      <Button
         type="button"
         w={width || 'full'}
         fontWeight="semibold"
         rounded="full"
         py={{ base: '3', lg: '6' }}
         px={{ base: '5', lg: '10' }}
         {...buttonStyles}
         className={`${isUppercase ? 'uppercase' : ''}`}
      >
         {text}
      </Button>
   );
};
