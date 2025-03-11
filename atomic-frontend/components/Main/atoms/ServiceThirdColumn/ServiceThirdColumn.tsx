import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React, { FC } from 'react';
import atomicServiceLeftHand from '@/public/assets/images/main/service/atomicServiceLeftHand.svg';
import atomicServiceRightHand from '@/public/assets/images/main/service/atomicServiceRightHand.svg';
import atomicServiceBot from '@/public/assets/images/main/service/atomicServiceBot.svg';
import { ServiceThirdColumnProps } from './ServiceThirdColumn.types';

export const ServiceThirdColumn: FC<ServiceThirdColumnProps> = (props) => {
   const {} = props;
   return (
      <Flex justify="center" align="center" gap="10">
         <Box bg="#97C5FF" w="16rem" rounded="1.25rem" p="16" textAlign="center">
            <Text color="black" fontWeight="bold" fontSize="1.56rem">
               CRM
            </Text>
         </Box>

         <Box flex="1" bg="#97C5FF" rounded="1.25rem" p="16" position="relative">
            <Image
               src={atomicServiceLeftHand}
               width={150}
               height={120}
               alt="left-hand"
               style={{ position: 'absolute', left: 0, top: '5%' }}
            />
            <Image
               src={atomicServiceRightHand}
               width={220}
               height={120}
               alt="right-hand"
               style={{ position: 'absolute', right: '25%', top: 0 }}
            />
            <Flex justify="end" align="end">
               <Text fontWeight="bold" fontSize="1.56rem">
                  Нейросети
               </Text>
            </Flex>
         </Box>

         <Flex
            bg="#181818"
            w="16rem"
            rounded="1.25rem"
            p="6"
            direction="column"
            justifyContent="end"
            align="end"
         >
            <Image src={atomicServiceBot} width={135} height={95} alt="bot" />
            <Text fontWeight="bold" fontSize="4">
               Телеграм бот
            </Text>
         </Flex>
      </Flex>
   );
};
