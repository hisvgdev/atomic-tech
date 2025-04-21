import { Box, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import React, { FC } from 'react';
import { TechnologyIconProps } from './TechnologyIcon.types';
import { motion } from 'framer-motion';

export const TechnologyIcon: FC<TechnologyIconProps> = (props) => {
   const {
      top,
      left,
      icon,
      title,
      width,
      height,
      animationDelay = 0,
      ID,
      Images,
      ImageID,
      Name,
   } = props;
   console.log(Image);
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
         <VStack gap="2">
            <Image
               src={
                  typeof icon === 'string'
                     ? icon
                     : Images?.URL?.startsWith('http') || Images?.URL?.startsWith('/')
                       ? Images.URL
                       : '/placeholder.svg'
               }
               alt={`${Name ? Name : title}-icon`}
               width={width}
               height={height}
            />
            <Text fontSize="0.875rem" fontWeight="light">
               {title}
            </Text>
         </VStack>
      </motion.div>
   );
};
