'use client';

import { SwitchThemeContext, useTheme } from '@/context/SwitchTheme';
import clsx from 'clsx';
import React from 'react';
import { Header } from '../atom/Header/Header';
import { Switch } from '@/ui/chakra/switch';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Box, Container, Flex, Icon } from '@chakra-ui/react';
import TopMain from '../molecules/TopMain';
import { Sizes, SizeValues } from '@/types/Size.types';
import { MotionBox } from '@/ui/animation';

export const TopWrapper = () => {
   const { theme, handleChangeTheme } = useTheme();

   return (
      <SwitchThemeContext>
         <Box
            className={clsx(
               'rounded-b-[15rem]',
               theme === 'light'
                  ? 'bg-white text-gray-800 rounded-md shadow-md'
                  : 'bg-black text-white rounded-md shadow-lg',
            )}
         >
            <Header />
            <Container maxW="max-w-6xl">
               <MotionBox
                  className="py-9"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
               >
                  <Flex justify="end">
                     <Switch
                        size="lg"
                        checked={theme === 'light'}
                        value={theme}
                        onChange={handleChangeTheme}
                        trackLabel={{
                           on: (
                              <Icon color="yellow.400">
                                 <FaSun />
                              </Icon>
                           ),
                           off: (
                              <Icon color="gray.400">
                                 <FaMoon />
                              </Icon>
                           ),
                        }}
                     />
                  </Flex>
               </MotionBox>
            </Container>
            <Container as="main" maxW={Sizes[SizeValues.primaryContainerSize].primary} mx="auto">
               <TopMain />
            </Container>
         </Box>
      </SwitchThemeContext>
   );
};
