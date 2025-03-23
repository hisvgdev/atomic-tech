import { inter } from '@/constants/fonts/inter/inter.constants';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { ThemesEnumCardProps } from './ThemesEnumCard.types';

export const ThemesEnumCard: FC<ThemesEnumCardProps> = (props) => {
   const { image, title, desc } = props;
   return (
      <Box
         w={{ base: 'fit', lg: 'xl' }}
         h="sm"
         bg="{colors.black}"
         rounded="3xl"
         p="6"
         overflow="hidden"
      >
         <Flex direction="column" gap={{ base: '4', lg: '12' }}>
            <Flex direction="column" gap={{ base: '3', lg: '6' }}>
               <Text fontWeight="semibold" fontSize="1.4rem">
                  {title}
               </Text>
               <Box w="full" overflow="hidden">
                  <Text fontSize="sm" className={`${inter.className}`} fontWeight="light">
                     {desc}
                  </Text>
               </Box>
            </Flex>
            <Image
               src={image}
               style={{ borderRadius: '1.25rem' }}
               alt="solana-projects"
               width={510}
               height={133}
               className="object-cover"
            />
         </Flex>
      </Box>
   );
};
