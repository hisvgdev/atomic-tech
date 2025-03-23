import React, { FC } from 'react';
import { CustomTitleProps } from './CustomTitle.types';
import { Heading } from '@chakra-ui/react';
import { inter } from '@/constants/fonts/inter/inter.constants';

export const CustomTitle: FC<CustomTitleProps> = (props) => {
   const { size, title, italic, weight, isCenter, lineHeight } = props;
   return (
      <Heading
         fontWeight={weight}
         fontStyle={italic ? 'italic' : ''}
         fontSize={size}
         lineHeight={{ base: '3rem', md: lineHeight }}
         textAlign={isCenter ? 'center' : ''}
         color="white"
         className={`${inter.className}`}
      >
         {title}
      </Heading>
   );
};
