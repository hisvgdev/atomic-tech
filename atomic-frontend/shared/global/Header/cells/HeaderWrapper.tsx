'use client';

import { useTheme } from '@/context/SwitchTheme';
import React from 'react';
import { Switch } from '@/shared/ui/chakra/switch';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Box, Container, Flex, Icon } from '@chakra-ui/react';
import { MotionBox } from '@/shared/ui/animation';
import NavContent from '../atom/NavContent';
import DevTeamWrapper from '@/components/dashboard/DevTeam/organism/DevTeamWrapper';
import { Sizes, SizeValues } from '@/types/frontend/size.types';
import { usePathname } from 'next/navigation';
import PreviewWrapper from '@/shared/global/Preview/organism/PreviewWrapper';

import atomicPhonePreviewImage from '@/public/assets/images/chat-bots/atomicCodePhone.png';
import atomicTabletPreviewImage from '@/public/assets/images/websites/atomicCodeTablet.svg';
import atomicBlockchainImage from '@/public/assets/images/blockchain/blockchainLogo.svg';
import clsx from 'clsx';

export const HeaderWrapper = () => {
   const { theme, handleChangeTheme } = useTheme();
   const pathname = usePathname();

   return (
      <Box
         className={clsx(
            'overflow-hidden h-screen',
            theme === 'light' ? 'bg-white text-gray-800' : 'bg-black text-white',
         )}
         borderBottomRadius={{ base: '3rem', lg: '15rem' }}
      >
         <Flex direction="column" gap={{ base: '4', lg: '8' }}>
            <NavContent />
            <Container maxW={{ base: '100%', lg: Sizes[SizeValues.primaryContainerSize].primary }}>
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

            <Flex justify="center" align="center" pb={{ base: '20', lg: '48' }}>
               {pathname.endsWith('/') && (
                  <Container
                     maxW={{ base: '100%', lg: Sizes[SizeValues.primaryContainerSize].primary }}
                  >
                     <DevTeamWrapper />
                  </Container>
               )}
               {pathname.includes('/chat-bots') && (
                  <PreviewWrapper
                     imgSrc={atomicPhonePreviewImage}
                     title="Создание чат-ботов"
                     width={545}
                     height={630}
                  />
               )}
               {pathname.includes('/websites') && (
                  <PreviewWrapper
                     imgSrc={atomicTabletPreviewImage}
                     title="Создание сайтов"
                     width={605}
                     height={440}
                  />
               )}
               {pathname.includes('/mobile-apps') && (
                  <PreviewWrapper
                     imgSrc={atomicPhonePreviewImage}
                     title="Создание мобильных приложений"
                     width={545}
                     height={630}
                  />
               )}
               {pathname.includes('/blockchain') && (
                  <Container
                     maxW={{ base: '100%', lg: Sizes[SizeValues.primaryContainerSize].primary }}
                  >
                     <PreviewWrapper
                        imgSrc={atomicBlockchainImage}
                        title="Создание блокчейн проектов"
                        width={760}
                        height={650}
                     />
                  </Container>
               )}
            </Flex>
         </Flex>
      </Box>
   );
};
