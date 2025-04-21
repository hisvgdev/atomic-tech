'use client';

import React, { FC } from 'react';
import { CustomTitleProps } from './CustomTitle.types';
import { Heading } from '@chakra-ui/react';
import { inter } from '@/constants/fonts/inter/inter.constants';

export const CustomTitle: FC<CustomTitleProps> = (props) => {
   const { size, title, italic, weight, isCenter, isInsideInCenter, isInAnotherPage, lineHeight } =
      props;
   return (
      <Heading
         fontWeight={weight}
         fontStyle={italic ? 'italic' : 'normal'}
         fontSize={size}
         lineHeight={lineHeight ?? '3rem'}
         textAlign={isCenter ? 'center' : 'start'}
         className={`${inter.className}`}
         color={isInAnotherPage ? 'black' : 'white'}
      >
         {title}
      </Heading>
   );
};
