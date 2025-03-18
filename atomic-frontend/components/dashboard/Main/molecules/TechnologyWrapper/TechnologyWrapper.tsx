import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
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

const technologies = [
   { title: 'Vue.js', icon: atomicVueJsIcon, width: 120, height: 120, top: '45%', left: '15%' },
   { title: 'GraphQL', icon: atomicGraphQlIcon, width: 80, height: 80, top: '35%', left: '27%' },
   { title: 'React', icon: atomicReactIcon, width: 160, height: 194, top: '25%', left: '45%' },
   { title: 'JavaScript', icon: atomicJsIcon, width: 160, height: 160, top: '30%', left: '65%' },
   { title: 'TypeScript', icon: atomicTSIcon, width: 100, height: 100, top: '55%', left: '75%' },
   { title: 'IPFS', icon: atomicIPFSIcon, width: 100, height: 100, top: '20%', left: '85%' },
   { title: 'Web3', icon: atomicWeb3Icon, width: 160, height: 160, top: '60%', left: '35%' },
];

export const TechnologyWrapper = () => {
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
               titleWidth="4xl"
               title="Используем десятки инструментов и сервисов под любые задачи и бюджет"
               isCenter
            >
               <Text
                  fontSize="1rem"
                  fontWeight="light"
                  color="white"
                  className={`${inter.className}`}
               >
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
         <Box position="relative">
            <Flex
               w="72.5rem"
               h="33.43rem"
               justify="center"
               align="center"
               position="relative"
               overflow="hidden"
            >
               {technologies.map((tech, index) => (
                  <TechnologyIcon {...tech} key={index} />
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
               />
            </Box>
         </Box>
      </Flex>
   );
};
