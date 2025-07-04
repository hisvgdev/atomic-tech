import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React, { FC } from 'react';
import atomicServiceBag from '@/public/assets/images/main/service/atomicServiceBag.svg';
import atomicServiceSoft from '@/public/assets/images/main/service/atomicServiceSoft.png';
import atomicServiceBlockchain from '@/public/assets/images/main/service/atomicServiceBlockchain.png';
import { ServiceSecondColumnProps } from './ServiceSecondColumn.types';
import { motion } from 'framer-motion';

export const ServiceSecondColumn: FC<ServiceSecondColumnProps> = (props) => {
   const {} = props;
   return (
      <Flex direction="column" flex="1" gap="3.5">
         <Flex gap="10">
            <Box
               flex="1"
               bg="#4B9CFF"
               rounded="1.25rem"
               p="5"
               position="relative"
               height="16rem"
               textAlign="center"
               overflow="hidden"
            >
               <Text color="white" fontWeight="bold" fontSize="sm">
                  Интернет - магазины
               </Text>
               <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                     duration: 2,
                     repeat: Infinity,
                     repeatType: 'mirror',
                     ease: 'easeInOut',
                  }}
                  style={{ position: 'absolute', right: 0, left: 0, bottom: '-20px' }}
               >
                  <Image src={atomicServiceBag} alt="e-commerce" width={240} height={240} />
               </motion.div>
            </Box>
            <Box
               flex="1"
               rounded="1.25rem"
               backgroundImage={`url(${atomicServiceSoft.src})`}
               backgroundSize="cover"
               backgroundPosition="center"
            >
               <Flex justify="center" align="center" h="full">
                  <Text color="white" fontWeight="bold" fontSize="md">
                     Софт
                  </Text>
               </Flex>
            </Box>
         </Flex>
         <Image src={atomicServiceBlockchain} width={515} height={110} alt="blockchain" />
      </Flex>
   );
};
