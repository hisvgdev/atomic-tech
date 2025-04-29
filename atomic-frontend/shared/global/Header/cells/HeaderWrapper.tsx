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
import { RootHeader } from '@/types/frontend/header.types';

export const HeaderWrapper = ({ header }: { header: RootHeader }) => {
   const pathname = usePathname();
   console.log(header);
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
                     imgSrc={header?.Images?.[1].URL || atomicPhonePreviewImage.src}
                     title={header.Title}
                     additionalTitle="Создание чат-ботов любой сложности"
                     description={header?.Descriptions?.[0].Text}
                     width={750}
                     height={650}
                  />
               )}
               {pathname.includes('/websites') && (
                  <PreviewWrapper
                     imgSrc={header?.Images?.[1].URL || atomicTabletPreviewImage.src}
                     title={header.Title}
                     additionalTitle="Создание сайтов"
                     description={header?.Descriptions?.[0].Text}
                     width={750}
                     height={650}
                  />
               )}
               {pathname.includes('/mobile-apps') && (
                  <PreviewWrapper
                     imgSrc={header?.Images?.[1].URL || atomicPhonePreviewImage.src}
                     title={header.Title}
                     additionalTitle="Создание мобильных приложений"
                     description={header?.Descriptions?.[0].Text}
                     width={750}
                     height={650}
                  />
               )}
               {pathname.includes('/blockchain') && (
                  <PreviewWrapper
                     imgSrc={header?.Images?.[1].URL || atomicBlockchainImage.src}
                     additionalTitle="Создание блокчейн проектов"
                     description={header?.Descriptions?.[0].Text}
                     title={header.Title}
                     width={750}
                     height={650}
                  />
               )}
            </Flex>
         </Flex>
      </Box>
   );
};
