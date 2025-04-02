'use client';

import { Button } from '@chakra-ui/react';
import React, { FC } from 'react';
import { CustomButtonProps, VariantButton } from './CustomButton.types';
import { useTheme } from 'next-themes';

export const CustomButton: FC<CustomButtonProps> = (props) => {
   const { text, width, variant = VariantButton.default, isUppercase, onClick } = props;
   const { theme } = useTheme();

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
         : VariantButton.light === theme
           ? {
                bg: 'none',
                border: '1px solid black',
                rounded: 'full',
                _hover: { bg: 'white', border: '1px solid white' },
             }
           : {
                bg: 'white',
                color: 'black',
                _hover: { bg: 'gray.200' },
             };

   return (
      <Button
         type="button"
         fontWeight="semibold"
         rounded="full"
         w={width || 'full'}
         py={{ base: '3', lg: '6' }}
         px={{ base: '5', lg: '10' }}
         className={`${isUppercase ? 'uppercase' : ''}`}
         onClick={onClick ? onClick : undefined}
         {...buttonStyles}
      >
         {text}
      </Button>
   );
};
