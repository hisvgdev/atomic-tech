'use client';

import React from 'react';
import { useTheme } from '@/context/SwitchTheme';
import { Box, Button, Container, Flex, Icon, ListCollection, Select } from '@chakra-ui/react';
import clsx from 'clsx';
import { NAV_DATA, LANGUAGE_DATA } from './NavContent.constants';
import Link from 'next/link';
import { NavData } from './NavContent.types';
import {
   SelectContent,
   SelectItem,
   SelectRoot,
   SelectTrigger,
   SelectValueText,
} from '@/shared/ui/chakra/select';
import { MotionBox } from '@/shared/ui/animation';

export const NavContent = () => {
   const { theme } = useTheme();

   const renderHeaderElements = (headerItem: NavData): JSX.Element | null => {
      const safetyHeaderLink = typeof headerItem.link === 'string' ? headerItem.link : '/';

      switch (headerItem.type) {
         case 'link':
            return <Link href={safetyHeaderLink}>{headerItem.title}</Link>;
         case 'select':
            return (
               <SelectRoot collection={headerItem.children as ListCollection} size="sm" w="28">
                  <SelectTrigger>
                     <SelectValueText placeholder={headerItem.title} />
                  </SelectTrigger>
                  <SelectContent>
                     {Array.isArray(headerItem.children?.items) &&
                        headerItem.children.items.length > 0 &&
                        headerItem.children.items.map((item) => (
                           <SelectItem item={item} key={item.value}>
                              {item.label}
                           </SelectItem>
                        ))}
                  </SelectContent>
               </SelectRoot>
            );
         default:
            return null;
      }
   };

   return (
      <header>
         <MotionBox
            className="w-full shadow-md rounded-b-[7rem]"
            py="12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
         >
            <Container maxW="max-w-6xl">
               <Flex justifyContent="space-between" alignItems="center">
                  <Box>
                     <Link href="/">
                        <Button
                           className={clsx(
                              'border py-4 px-8 rounded-full',
                              theme === 'light' ? 'border-black' : 'border-white',
                           )}
                        >
                           Logo
                        </Button>
                     </Link>
                  </Box>
                  <Flex placeItems="center" gap="12">
                     {NAV_DATA.map((headerItem) => {
                        return <Box key={headerItem.id}>{renderHeaderElements(headerItem)}</Box>;
                     })}
                  </Flex>
                  <Flex gap="8" placeItems="center">
                     <Box>
                        <Button
                           className={clsx(
                              'border py-4 px-8 rounded-full',
                              theme === 'light' ? 'border-black' : 'border-white',
                           )}
                        >
                           Обсудить проект
                        </Button>
                     </Box>
                     <Box>
                        <SelectRoot collection={LANGUAGE_DATA} size="sm" width="4rem">
                           <SelectTrigger>
                              <SelectValueText
                                 placeholder={LANGUAGE_DATA.items[0].label}
                                 fontWeight="bold"
                              />
                           </SelectTrigger>
                           <SelectContent>
                              {LANGUAGE_DATA.items.map((language) => (
                                 <SelectItem item={language} key={language.value}>
                                    {language.label}
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </SelectRoot>
                     </Box>
                  </Flex>
               </Flex>
            </Container>
         </MotionBox>
      </header>
   );
};
