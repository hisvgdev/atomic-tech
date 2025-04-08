import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React, { FC } from 'react';
import { TechnologyIconProps } from './TechnologyIcon.types';
import { motion } from 'framer-motion';

export const TechnologyIcon: FC<TechnologyIconProps> = (props) => {
   const { top, left, icon, title, width, height, animationDelay = 0 } = props;
   return (
      <motion.div
         animate={{
            y: [0, -15, 0],
         }}
         transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: animationDelay,
         }}
         style={{
            position: 'absolute',
            top: top,
            left: left,
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
         }}
      >
         <Image src={icon} alt={`${title}-icon`} width={width} height={height} />
         <Text fontSize="0.875rem" fontWeight="light">
            {title}
         </Text>
      </motion.div>
   );
};
