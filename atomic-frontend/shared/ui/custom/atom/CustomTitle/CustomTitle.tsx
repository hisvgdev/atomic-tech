import React, { FC } from 'react';
import { CustomTitleProps } from './CustomTitle.types';
import { Box, Heading } from '@chakra-ui/react';

export const CustomTitle: FC<CustomTitleProps> = (props) => {
   const { size, title, italic, weight, isCenter, lineHeight } = props;
   return (
      <Heading
         fontWeight={weight}
         fontStyle={italic ? 'italic' : ''}
         fontSize={size}
         lineHeight={lineHeight}
         textAlign={isCenter ? 'center' : ''}
      >
         {title}
      </Heading>
   );
};
