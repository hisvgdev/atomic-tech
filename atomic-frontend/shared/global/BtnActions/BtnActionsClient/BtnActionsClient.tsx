'use client';

import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { inter } from '@/constants/fonts/inter/inter.constants';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { BtnActionsClientProps } from './BtnActionsClient.types';

export const BtnActionsClient: FC<BtnActionsClientProps> = ({
   isInsideInCenter,
   categories,
   activeIndex,
   onChangeCategory,
}) => {
   const { theme } = useTheme();
   const pathname = usePathname();
   const specificRoute = ['/articles', '/portfolio'].includes(pathname);

   if (!Array.isArray(categories) || categories.length === 0) return null;

   return (
      <Flex
         align="center"
         mx="auto"
         width={{ base: undefined, lg: specificRoute ? 'full' : undefined }}
         justify={{ base: 'center', lg: specificRoute ? 'space-between' : undefined }}
         gap={{ base: '4', lg: '8' }}
         flexWrap={{ base: 'wrap', smToLg: 'wrap' }}
      >
         {categories.map((cat, idx) => {
            const isActive = activeIndex === idx;
            return (
               <Box key={idx}>
                  <Button
                     h="2.8rem"
                     px={{ base: '1rem', lg: '1.25rem' }}
                     border="1px solid"
                     rounded="full"
                     transition="all 0.3s ease"
                     bg={isActive ? '#5547FF' : 'transparent'}
                     borderColor={
                        isActive
                           ? '#5547FF'
                           : isInsideInCenter && theme === 'light'
                             ? 'black'
                             : 'white'
                     }
                     color={isActive ? 'white' : ''}
                     _hover={{
                        bg: '#5547FF',
                        borderColor: '#5547FF',
                        color: 'white',
                     }}
                     onClick={() => onChangeCategory(idx)}
                  >
                     <Text
                        fontWeight="light"
                        transition="all 0.3s ease"
                        fontSize={{ base: 'sm', lg: 'md' }}
                        className={`${inter.className}`}
                        _hover={{
                           color: 'white',
                        }}
                     >
                        {cat.Name}
                     </Text>
                  </Button>
               </Box>
            );
         })}
      </Flex>
   );
};
