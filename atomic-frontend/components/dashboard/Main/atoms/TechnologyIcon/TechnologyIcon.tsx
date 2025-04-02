import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React, { FC } from 'react';
import { TechnologyIconProps } from './TechnologyIcon.types';

export const TechnologyIcon: FC<TechnologyIconProps> = (props) => {
   const { top, left, icon, title, width, height } = props;
   return (
      <Box
         position="absolute"
         top={top}
         left={left}
         transform="translate(-50%, -50%)"
         textAlign="center"
      >
         <Image src={icon} alt={`${title}-icon`} width={width} height={height} />
         <Text fontSize="0.875rem" fontWeight="light">
            {title}
         </Text>
      </Box>
   );
};
