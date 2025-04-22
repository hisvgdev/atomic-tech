'use client';

import React from 'react';
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
import { ColorModeButton } from '@/shared/ui/chakra/color-mode';

export const HeaderWrapper = () => {
   const pathname = usePathname();
   return (
      <Box
         className="h-auto"
         bg={{ base: '{colors.light}', _dark: '{colors.dark}' }}
         borderBottomRadius={{ base: '3rem', lg: '15rem' }}
      >
         <Flex className="w-full" direction="column" gap={{ base: '4', lg: '8' }}>
            <NavContent />
            <Container maxW={{ base: '100%', lg: '8xl' }}>
               <MotionBox
                  className="w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
               >
                  <Flex className="w-full" justify="end">
                     <ColorModeButton />
                  </Flex>
               </MotionBox>
            </Container>

            <Flex justify="center" align="center" pb={{ base: '20', lg: '48' }}>
               {pathname.endsWith('/') && (
                  <Container maxW={{ base: '100%', lg: '8xl' }}>
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
