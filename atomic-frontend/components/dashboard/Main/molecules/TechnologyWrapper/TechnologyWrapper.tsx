'use client';

import { Box, Flex, Text } from '@chakra-ui/react';

import React from 'react';
import HeaderSection from '../../atoms/HeaderSection';

import atomicVueJsIcon from '@/public/assets/images/main/tech/atomicVueIcon.svg';
import atomicGraphQlIcon from '@/public/assets/images/main/tech/atomicGraphQLIcon.svg';
import atomicTSIcon from '@/public/assets/images/main/tech/atomicTsIcon.svg';
import atomicJsIcon from '@/public/assets/images/main/tech/atomicJsIcon.svg';
import atomicIPFSIcon from '@/public/assets/images/main/tech/atomicIPFSIcon.svg';
import atomicReactIcon from '@/public/assets/images/main/tech/atomicReactIcon.svg';
import atomicWeb3Icon from '@/public/assets/images/main/tech/atomicWeb3Icon.svg';
import CustomButton, { VariantButton } from '@/shared/ui/custom/atom/CustomButton';
import TechnologyIcon from '../../atoms/TechnologyIcon';
import { inter } from '@/constants/fonts/inter/inter.constants';
import { useIsMobile } from '@/hooks/useMediaQuery';
import { TechnologyWrapperProps } from './TechnologyWrapper.types';
import { RootTechnology } from '@/types/frontend/technology.types';

const technologiesMock = [
   { title: 'Vue.js', icon: atomicVueJsIcon, width: 120, height: 120, top: '15%', left: '10%' },
   { title: 'GraphQL', icon: atomicGraphQlIcon, width: 80, height: 80, top: '10%', left: '25%' },
   { title: 'React', icon: atomicReactIcon, width: 160, height: 160, top: '5%', left: '40%' },
   { title: 'JavaScript', icon: atomicJsIcon, width: 160, height: 160, top: '20%', left: '60%' },
   { title: 'TypeScript', icon: atomicTSIcon, width: 100, height: 100, top: '45%', left: '75%' },
   { title: 'IPFS', icon: atomicIPFSIcon, width: 120, height: 120, top: '15%', left: '80%' },
   { title: 'Web3', icon: atomicWeb3Icon, width: 200, height: 200, top: '45%', left: '25%' },
];

export const TechnologyWrapper = (props: TechnologyWrapperProps) => {
   const { technologies } = props;
   const isMobile = useIsMobile();

   const getTechnologyWithDefaults = (techFromServer: RootTechnology, index: number) => {
      const fallback = technologiesMock[index] || {};

      return {
         ID: techFromServer?.ID,
         ImageID: techFromServer?.ImageID,
         Images: techFromServer?.Image,
         Name: techFromServer?.Name || fallback.title || 'Без названия',
         title: techFromServer?.Name || fallback.title || 'Без названия',
         icon: fallback.icon,
         width: fallback.width || 100,
         height: fallback.height || 100,
         top: fallback.top || '50%',
         left: fallback.left || '50%',
      };
   };
   const normalizedTechnologies = Array.isArray(technologies)
      ? technologies.map(getTechnologyWithDefaults)
      : technologiesMock;

   return (
      <Flex
         direction="column"
         gap="24"
         justify="center"
         align="center"
         position="relative"
         overflow="hidden"
         pt="20"
      >
         <Flex justify="center" align="center">
            <HeaderSection
               titleWidth={isMobile ? '' : '4xl'}
               title="Используем десятки инструментов и сервисов под любые задачи и бюджет"
               fontSizeMobile="1.75rem"
               isCenter
               isInsideToMain
            >
               <Text fontSize="1rem" fontWeight="light" className={`${inter.className}`}>
                  Предлагаем{' '}
                  <Text as="span" fontStyle="italic" fontWeight="semibold">
                     несколько решений
                  </Text>{' '}
                  разработки и{' '}
                  <Text as="span" fontStyle="italic" fontWeight="semibold">
                     честно объясняем
                  </Text>{' '}
                  плюсы, минусы и{' '}
                  <Text as="span" fontStyle="italic" fontWeight="semibold">
                     окупаемость
                  </Text>{' '}
                  каждого варианта.
               </Text>
            </HeaderSection>
         </Flex>
         <Box position="relative" zIndex="max">
            <Flex
               w="72rem"
               h="40rem"
               justify="center"
               align="center"
               position="relative"
               overflow="hidden"
               display={{ base: 'none', lg: 'block' }}
            >
               {normalizedTechnologies.map((tech, index) => (
                  <TechnologyIcon key={index} {...tech} animationDelay={index * 0.3} />
               ))}
            </Flex>
            <Box
               position="absolute"
               bottom="26%"
               left="50%"
               transform="translateX(-50%)"
               zIndex="2"
            >
               <CustomButton
                  text="Узнать больше о технологиях"
                  variant={VariantButton.gradient}
                  width="20rem"
                  isUppercase
               />
            </Box>
         </Box>
      </Flex>
   );
};
