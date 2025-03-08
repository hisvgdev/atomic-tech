'use client';

import { SwitchThemeContext, useTheme } from '@/context/SwitchTheme';
import { Sizes, SizeValues } from '@/types/Size.types';
import { Box, Container } from '@chakra-ui/react';
import clsx from 'clsx';
import React from 'react';
import AboutMain from '../../atoms/AboutMain';

export const MainWrapper = () => {
   const { theme } = useTheme();
   return (
      <SwitchThemeContext>
         <Box
            className={clsx(
               'rounded-[15rem] relative z-10',
               theme === 'light'
                  ? 'bg-white text-gray-800 rounded-md shadow-md'
                  : 'bg-black text-white rounded-md shadow-lg',
            )}
         >
            <div
               style={{
                  background:
                     'linear-gradient(180deg, #AA00FF 0%, rgba(103, 65, 255, 0.797994) 16.5%, rgba(0, 166, 255, 0.485803) 42%, rgba(0, 255, 255, 0) 100%)',
                  filter: 'blur(400px)',
                  width: '81.25rem',
                  height: '81.25rem',
                  position: 'absolute',
                  borderRadius: '99999px',
                  top: 0,
                  left: 0,
                  zIndex: -1,
               }}
            />
            <div
               className="absolute inset-0"
               style={{
                  background:
                     'linear-gradient(180deg, rgba(0, 117, 255, 0) 0%, rgba(0, 117, 255, 0.75) 100%)',
                  filter: 'blur(250px)',
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  zIndex: -1,
               }}
            />
            <Container as="main" maxW={Sizes[SizeValues.primaryContainerSize].primary} mx="auto">
               <AboutMain />
            </Container>
         </Box>
      </SwitchThemeContext>
   );
};
