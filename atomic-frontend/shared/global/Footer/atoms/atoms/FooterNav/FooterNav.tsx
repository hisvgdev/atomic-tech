import { Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { FooterNavProps } from './FooterNav.types';
import { inter } from '@/constants/fonts/inter/inter.constants';
import { FOOTER_NAV_DATA } from './FooterNav.constants';
import Link from 'next/link';

export const FooterNav: FC<FooterNavProps> = (props) => {
   const {} = props;
   return (
      <Flex direction="column" align="start" gap={4}>
         {FOOTER_NAV_DATA.map((item, idx) => (
            <Link key={item.id + idx} href={item.link}>
               <Text
                  fontSize="base"
                  fontWeight="light"
                  color="white"
                  className={`${inter.className}`}
               >
                  {item.title}
               </Text>
            </Link>
         ))}
      </Flex>
   );
};
