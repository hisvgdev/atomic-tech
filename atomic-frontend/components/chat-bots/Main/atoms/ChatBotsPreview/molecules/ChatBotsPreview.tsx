import { Flex } from '@chakra-ui/react';
import React from 'react';
import ChatBotItem from '../atoms/ChatBotItem';
import ChatBotWarning from '../atoms/ChatBotWarning';

import atomicChatBotsWithButton from '@/public/assets/images/chat-bots/atomicChatBotsWithButton.svg';
import atomicChatBotsAutomatic from '@/public/assets/images/chat-bots/atomicChatBotsAutomatic.svg';
import atomicChatBlackBotsAutomatic from '@/public/assets/images/chat-bots/atomicChatBlackBotsAutomatic.svg';
import atomicChatBotsWithMiniApp from '@/public/assets/images/chat-bots/atomicChatBotsWithMiniApp.svg';
import { useTheme } from 'next-themes';

export const ChatBotsPreview = () => {
   const { theme } = useTheme();
   return (
      <Flex direction="column" align={{ base: 'center', lg: 'end' }} gap="16">
         <Flex direction={{ base: 'column', lg: 'row' }} gap="10">
            <ChatBotItem title="Кнопочные" imageSrc={atomicChatBotsWithButton} />
            <ChatBotItem
               title="Автоматизированные"
               imageSrc={theme === 'light' ? atomicChatBlackBotsAutomatic : atomicChatBotsAutomatic}
            />
            <ChatBotItem title="Приложения в Телеграм" imageSrc={atomicChatBotsWithMiniApp} />
         </Flex>
         <ChatBotWarning />
      </Flex>
   );
};
