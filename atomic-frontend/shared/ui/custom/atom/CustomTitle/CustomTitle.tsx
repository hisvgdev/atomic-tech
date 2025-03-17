import React, { FC } from 'react';
import { CustomTitleProps } from './CustomTitle.types';
import { Heading } from '@chakra-ui/react';

export const CustomTitle: FC<CustomTitleProps> = (props) => {
   const { size, title, italic, weight, isCenter, lineHeight } = props;
   return (
      <Heading
         fontWeight={weight}
         fontStyle={italic ? 'italic' : ''}
         fontSize={size}
         lineHeight={lineHeight}
         textAlign={isCenter ? 'center' : ''}
         color="white"
      >
         {title}
      </Heading>
   );
};
