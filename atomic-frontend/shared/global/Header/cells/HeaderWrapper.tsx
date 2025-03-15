'use client';

import { SwitchThemeContext, useTheme } from '@/context/SwitchTheme';
import clsx from 'clsx';
import React from 'react';
import { Switch } from '@/shared/ui/chakra/switch';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Box, Container, Flex, Icon } from '@chakra-ui/react';
import { MotionBox } from '@/shared/ui/animation';
import NavContent from '../atom/NavContent';
import DevTeamWrapper from '@/components/dashboard/DevTeam/organism/DevTeamWrapper';
import { Sizes, SizeValues } from '@/types/frontend/size.types';
import { usePathname } from 'next/navigation';
import PreviewWrapper from '@/components/chat-bots/Preview/organism/PreviewWrapper';

export const HeaderWrapper = () => {
   const { theme, handleChangeTheme } = useTheme();
   const pathname = usePathname();
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
            <NavContent />
            <Container maxW={Sizes[SizeValues.primaryContainerSize].primary}>
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
               {pathname.includes('/dashboard') && <DevTeamWrapper />}
               {pathname.includes('/chat-bots') && <PreviewWrapper />}
            </Container>
         </Box>
      </SwitchThemeContext>
   );
};
