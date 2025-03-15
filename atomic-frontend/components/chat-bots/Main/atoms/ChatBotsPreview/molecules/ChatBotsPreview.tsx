import { Flex } from '@chakra-ui/react';
import React from 'react';
import ChatBotItem from '../atoms/ChatBotItem';
import ChatBotWarning from '../atoms/ChatBotWarning';

import atomicChatBotsWithButton from '@/public/assets/images/chat-bots/atomicChatBotsWithButton.svg';
import atomicChatBotsAutomatic from '@/public/assets/images/chat-bots/atomicChatBotsAutomatic.svg';
import atomicChatBotsWithMiniApp from '@/public/assets/images/chat-bots/atomicChatBotsWithMiniApp.svg';

export const ChatBotsPreview = () => {
   return (
      <Flex direction="column" align="end" gap={16}>
         <Flex gap={10}>
            <ChatBotItem title="Кнопочные" imageSrc={atomicChatBotsWithButton} />
            <ChatBotItem title="Автоматизированные" imageSrc={atomicChatBotsAutomatic} />
            <ChatBotItem title="Приложения в Телеграм" imageSrc={atomicChatBotsWithMiniApp} />
         </Flex>
         <ChatBotWarning />
      </Flex>
   );
};
