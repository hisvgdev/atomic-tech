'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import avatarFounder from '@/public/assets/images/main/avatarFounder.svg';
import { AboutMainProps } from './AboutMain.types';
import { Box, Stack, Heading, Text } from '@chakra-ui/react';
import { inter } from '@/constants/fonts/inter/inter.constants';

export const AboutMain: FC<AboutMainProps> = (props) => {
   const {} = props;
   return (
      <Box w="full" py="12">
         <Stack direction={{ base: 'column', lg: 'row' }} justify="space-between" align="center">
            <Stack spaceY={4} align="flex-end" maxW="xs" position="relative">
               <Heading
                  textAlign="end"
                  fontSize={{ base: '4xl', lg: '5.625rem' }}
                  textTransform="uppercase"
                  fontWeight="semibold"
                  lineHeight="1"
               >
                  Atomic Code
               </Heading>
               <Text textAlign="end" className={inter.className}>
                  Придумываем и создаем продукты,{' '}
                  <Text as="span" className="italic font-bold">
                     которые окупаются и постоянно приносят прибыль{' '}
                  </Text>
                  вашему бизнесу
               </Text>
               <Box position="absolute" bottom="20%" left="0">
                  <Text fontWeight="medium" className={`${inter.className} text-5xl`}>
                     {'{'}
                  </Text>
               </Box>
            </Stack>
            <Box
               rounded="3.125rem"
               position="relative"
               background="linear-gradient(180deg, #5547FF 0%, rgba(85, 71, 255, 0.75) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)"
            >
               <Image src={avatarFounder} width={415} height={640} alt="avatar-founder" />
               <Box position="absolute" bottom="2" right="12">
                  <Heading
                     as="h4"
                     fontSize="1.375rem"
                     fontWeight="bold"
                     textAlign="end"
                     className={`${inter.className}`}
                  >
                     Альберт Каренович
                  </Heading>
                  <Text
                     fontSize="base"
                     fontWeight="semibold"
                     textAlign="end"
                     className={`${inter.className}`}
                  >
                     Основатель компании
                  </Text>
               </Box>
               <Box position="absolute" bottom="3" right="5">
                  <Text fontWeight="medium" className={`${inter.className} text-5xl`}>
                     {'}'}
                  </Text>
               </Box>
            </Box>
         </Stack>
      </Box>
   );
};
