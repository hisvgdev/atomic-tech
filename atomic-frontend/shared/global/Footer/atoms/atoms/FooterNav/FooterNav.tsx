import { Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { FooterNavProps } from './FooterNav.types';

export const FooterNav: FC<FooterNavProps> = (props) => {
   const {} = props;
   return (
      <Flex direction="column" gap={4}>
         {[
            'Мобильные приложения',
            'Сайты',
            'Телеграм-боты',
            'Блокчейн',
            'Кейсы',
            'Статьи',
            'О нас',
         ].map((item, idx) => (
            <Text key={idx} fontSize="base" fontWeight="light" color="white">
               {item}
            </Text>
         ))}
      </Flex>
   );
};
