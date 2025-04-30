'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import avatarFounder from '@/public/assets/images/main/avatarFounder.svg';
import { AboutMainProps } from './AboutMain.types';
import { Box, Stack, Heading, Text, Flex } from '@chakra-ui/react';
import { inter } from '@/constants/fonts/inter/inter.constants';

export const AboutMain: FC<AboutMainProps> = (props) => {
   const { getLead } = props;
   return (
      <Box w="full" py="12">
         <Stack direction={{ base: 'column', lg: 'row' }} justify="space-between" align="center">
            <Flex direction="column" maxW="sm" gap={{ base: '8', lg: '32' }}>
               <Heading
                  textAlign="end"
                  fontSize={{ base: '4xl', lg: '5.625rem' }}
                  textTransform="uppercase"
                  fontWeight="semibold"
                  lineHeight="1"
               >
                  Atomic Code
               </Heading>
               <Box>
                  <Text textAlign="end" maxW="xs" className={inter.className}>
                     Придумываем и создаем продукты,{' '}
                     <Text as="span" className="italic font-bold">
                        которые окупаются и постоянно приносят прибыль{' '}
                     </Text>
                     вашему бизнесу
                  </Text>
                  <Box position="absolute" bottom="23%" left="2%">
                     <Text
                        display={{ base: 'none', lg: 'block' }}
                        fontWeight="medium"
                        className={`${inter.className} text-5xl`}
                     >
                        {'{'}
                     </Text>
                  </Box>
               </Box>
            </Flex>
            <Box
               rounded="3.125rem"
               position="relative"
               background="linear-gradient(180deg, #5547FF 0%, rgba(85, 71, 255, 0.75) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)"
            >
               {getLead.Avatar ? (
                  <Image
                     src={getLead.Avatar.URL}
                     width={415}
                     height={640}
                     alt={getLead.Avatar.ObjectName || '-'}
                     style={{
                        borderRadius: '1.5rem',
                        objectFit: 'cover',
                     }}
                  />
               ) : (
                  <Image src={avatarFounder} width={415} height={640} alt="avatar-founder" />
               )}
               <Box position="absolute" bottom="2" right="12">
                  <Heading
                     as="h4"
                     fontSize="1.375rem"
                     fontWeight="bold"
                     textAlign="end"
                     color="white"
                     className={`${inter.className}`}
                  >
                     {getLead.Name}
                  </Heading>
                  <Text
                     fontSize="base"
                     fontWeight="semibold"
                     textAlign="end"
                     color="white"
                     className={`${inter.className}`}
                  >
                     {getLead.Description}
                  </Text>
               </Box>
               <Box position="absolute" bottom="3" right="5">
                  <Text fontWeight="medium" color="white" className={`${inter.className} text-5xl`}>
                     {'}'}
                  </Text>
               </Box>
            </Box>
         </Stack>
      </Box>
   );
};
