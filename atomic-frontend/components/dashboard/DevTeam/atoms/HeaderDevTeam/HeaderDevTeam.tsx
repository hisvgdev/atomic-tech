'use client';

import React, { FC, useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { MotionBox } from '@/shared/ui/animation';
import CustomButton, { VariantButton } from '@/shared/ui/custom/atom/CustomButton';
import { HeaderDevTeamProps } from './HeaderDevTeam.types';
import { inter } from '@/constants/fonts/inter/inter.constants';
import ContactRequestLayout from '@/shared/global/ContactRequest/organism';

export const HeaderDevTeam: FC<HeaderDevTeamProps> = (props) => {
   const {} = props;
   const [isOpen, setIsOpen] = useState(false);
   const handleOpen = () => setIsOpen(true);
   const handleClose = () => setIsOpen(false);
   return (
      <>
         <Flex direction="column" gap={2}>
            <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
               <Text as="h1" fontWeight="light" className={`${inter.className} text-base`}>
                  ATOMIC CODE
               </Text>
            </MotionBox>
            <Flex
               align={{ base: 'start', lg: 'end' }}
               justify={{ base: 'start', lg: 'space-between' }}
               direction={{ base: 'column', lg: 'row' }}
               gap={{ base: '6', lg: '0' }}
            >
               <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <Text
                     fontWeight="bold"
                     fontSize={{ base: 'xl', lg: '5xl' }}
                     lineHeight={{ base: '2rem', lg: '6rem' }}
                  >
                     Креативная команда разработчиков
                  </Text>
               </MotionBox>
               <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  maxW="64"
                  w="full"
               >
                  <CustomButton text="Обсудить проект" width="full" onClick={handleOpen} />
               </MotionBox>
            </Flex>
         </Flex>
         <ContactRequestLayout handleClose={handleClose} handleOpen={handleOpen} isOpen={isOpen} />
      </>
   );
};
