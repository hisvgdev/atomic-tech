import { Button } from '@chakra-ui/react';
import React, { FC } from 'react';
import { CustomButtonProps } from './CustomButton.types';

export const CustomButton: FC<CustomButtonProps> = (props) => {
   const { text, width, variant } = props;

   const buttonStyles =
      variant === 'gradient'
         ? {
              background:
                 'linear-gradient(258.97deg, #4A41FF -3.45%, #6EB2FF 55.6%, #19C8E3 100.54%)',
              color: 'white',
              _hover: {
                 background:
                    'linear-gradient(258.97deg, #3A30FF -3.45%, #5EA2FF 55.6%, #10B8D3 100.54%)',
              },
           }
         : {
              bg: 'white',
              color: 'black',
              _hover: { bg: 'gray.100' },
           };

   return (
      <Button
         type="button"
         w={width || 'full'}
         fontWeight="semibold"
         rounded="full"
         shadow="md"
         py="6"
         px="10"
         {...buttonStyles}
      >
         {text}
      </Button>
   );
};
