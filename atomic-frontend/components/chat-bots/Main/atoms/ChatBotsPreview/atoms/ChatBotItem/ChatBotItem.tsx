import { Text, VStack } from '@chakra-ui/react';
import React, { FC } from 'react';
import { ChatBotItemProps } from './ChatBotItem.types';
import Image from 'next/image';
import { inter } from '@/constants/fonts/inter/inter.constants';

export const ChatBotItem: FC<ChatBotItemProps> = (props) => {
   const { title, imageSrc } = props;
   return (
      <VStack spaceY={4} align="center">
         <Text
            fontSize="md"
            fontWeight="semibold"
            fontStyle="italic"
            className={`${inter.className}`}
         >
            {title}
         </Text>
         <Image src={imageSrc} alt={title} width={360} height={750} />
      </VStack>
   );
};
