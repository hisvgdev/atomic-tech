import React, { FC } from 'react';
import { Box, Flex, VStack } from '@chakra-ui/react';
import { DevelopingPreviewCardsProps } from './DevelopingPreviewCards.types';
import DevelopingPreviewCard from '../atoms/DevelopingPreviewCard';

import gearIcon from '@/public/assets/images/chat-bots/gearIcon.svg';
import boxIcon from '@/public/assets/images/chat-bots/boxIcon.svg';
import msgIcon from '@/public/assets/images/chat-bots/msgIcon.svg';

export const DevelopingPreviewCards: FC<DevelopingPreviewCardsProps> = (props) => {
   const {} = props;
   return (
      <VStack spaceY={20}>
         <Flex
            gap={24}
            w="100%"
            direction={{ base: 'column', lg: 'row' }}
            justify={{ base: 'center', lg: 'space-between' }}
         >
            <DevelopingPreviewCard
               icon={gearIcon}
               text="Честно говорим об ожидаемом результате работы и обо всех подводных камнях разработки"
               maxWidth="17rem"
            />
            <DevelopingPreviewCard
               icon={boxIcon}
               text="Ведем еженедельную отчетность в мессенджерах и отвечаем на все вопросы"
               maxWidth="14rem"
            />
            <Box display={{ base: 'block', lg: 'none' }}>
               <DevelopingPreviewCard
                  icon={msgIcon}
                  text="Слышим клиентов и учитываем ваши пожелания, позволяя принимать участие в разработке"
                  maxWidth="17rem"
               />
            </Box>
         </Flex>
         <Box display={{ base: 'none', lg: 'block' }}>
            <DevelopingPreviewCard
               icon={msgIcon}
               text="Слышим клиентов и учитываем ваши пожелания, позволяя принимать участие в разработке"
               maxWidth="17rem"
            />
         </Box>
      </VStack>
   );
};
