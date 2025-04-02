import React from 'react';
import Image from 'next/image';

import atomicServiceBg from '@/public/assets/images/main/service/atomicServiceBackground.png';
import atomicServiceJoystick from '@/public/assets/images/main/service/atomicServiceJoystic.svg';
import { Box, Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const ServiceFourColumn = () => {
   return (
      <Flex justify="center" align="center" gap="10">
         <Box
            w="24rem"
            p="24"
            backgroundImage={`url(${atomicServiceBg.src})`}
            backgroundSize="cover"
            backgroundPosition="center"
            rounded="1.25rem"
            textAlign="center"
         >
            <Text fontWeight="bold" fontSize="1.56rem" color="white">
               Сайты
            </Text>
         </Box>

         <Box
            flex="1"
            bg="#4B9CFF"
            height="15rem"
            overflow="hidden"
            rounded="1.25rem"
            position="relative"
         >
            <motion.div
               animate={{ y: [0, -15, 0] }}
               transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  ease: 'easeInOut',
               }}
            >
               <Image src={atomicServiceJoystick} width={735} height={368} alt="joystick" />
            </motion.div>
            <Box position="absolute" right="10%" bottom="5%">
               <Text fontWeight="bold" fontSize="1.56rem" color="white">
                  Игры
               </Text>
            </Box>
         </Box>
      </Flex>
   );
};
