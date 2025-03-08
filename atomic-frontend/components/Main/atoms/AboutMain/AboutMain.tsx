'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import avatarFounder from '@/public/assets/images/main/avatarFounder.svg';
import { AboutMainProps } from './AboutMain.types';
import { Box, Stack, Heading, Text, Flex } from '@chakra-ui/react';
import TeamSection from '../TeamSection';
import ForecastSection from '../ForecastSection';

export const AboutMain: FC<AboutMainProps> = (props) => {
   const {} = props;
   return (
      <Box w="full" py="12">
         <Stack direction={{ base: 'column', lg: 'row' }} justify="space-between" align="center">
            <Stack spaceY={4} align="flex-end" maxW="xs">
               <Heading
                  textAlign="end"
                  fontSize={{ base: '4xl', lg: '5.625rem' }}
                  textTransform="uppercase"
                  fontWeight="semibold"
                  lineHeight="1"
               >
                  Atomic Code
               </Heading>
               <Text textAlign="end">
                  Придумываем и создаем продукты,{' '}
                  <Text as="span" className="italic font-bold">
                     которые окупаются и постоянно приносят прибыль{' '}
                  </Text>
                  вашему бизнесу
               </Text>
            </Stack>
            <Box
               rounded="3.125rem"
               position="relative"
               background="linear-gradient(180deg, #5547FF 0%, rgba(85, 71, 255, 0.75) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.25) 100%)"
            >
               <Image src={avatarFounder} width={415} height={640} alt="avatar-founder" />
               <Box position="absolute" bottom="2" right="10">
                  <Heading as="h4" fontSize="1.375rem" fontWeight="bold" textAlign="end">
                     Альберт Каренович
                  </Heading>
                  <Text fontSize="base" fontWeight="semibold" textAlign="end">
                     Основатель компании
                  </Text>
               </Box>
            </Box>
         </Stack>
         <Flex direction="column" gap="32">
            <TeamSection />
            <ForecastSection />
         </Flex>
      </Box>
   );
};
