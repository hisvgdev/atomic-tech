import { Box, Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import SendApplicationHeading from '../../atoms/SendApplicationHeading';
import CustomButton, { VariantButton } from '@/shared/ui/custom/atom/CustomButton';
import Image from 'next/image';
import atomicRevertArrowIcon from '@/public/assets/images/chat-bots/rightRevertArrowIcon.svg';
import atomicChatLeftIcon from '@/public/assets/images/chat-bots/chatLeftIcon.svg';
import atomicChatRightIcon from '@/public/assets/images/chat-bots/chatRightIcon.svg';
import { SendApplicationWrapperProps } from './SendApplicationWrapper.types';

export const SendApplicationWrapper: FC<SendApplicationWrapperProps> = (props) => {
   const {} = props;
   return (
      <Flex
         direction="column"
         gap={{ base: '12', lg: '24' }}
         align="center"
         justify="center"
         position="relative"
      >
         <SendApplicationHeading />
         <Box w="full" h="full">
            <Flex justify="center" align="center">
               <CustomButton
                  variant={VariantButton.gradient}
                  text="Отправить заявку"
                  width="18rem"
               />
            </Flex>
            <Box position="absolute" right="10%" top="10%" display={{ base: 'none', lg: 'block' }}>
               <Image src={atomicRevertArrowIcon} alt="" />
            </Box>
         </Box>
         <Box py="48">
            <Box position="absolute" bottom="15%" left="5%">
               <Image src={atomicChatLeftIcon} alt="" width={315} height={205} />
            </Box>
            <Box position="absolute" bottom="5%" right="5%">
               <Image src={atomicChatRightIcon} alt="" width={180} height={80} />
            </Box>
         </Box>
      </Flex>
   );
};
