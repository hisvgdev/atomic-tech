'use client';

import React, { useState } from 'react';
import {
   Box,
   Button,
   CloseButton,
   Container,
   Drawer,
   Flex,
   IconButton,
   ListCollection,
   Portal,
} from '@chakra-ui/react';
import { NAV_DATA, MOBILE_NAV_DATA } from './NavContent.constants';
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
import { Menu } from 'lucide-react';
import Image from 'next/image';
import logoIcon from '@/public/assets/images/atomicLogo.svg';
import blackLogoIcon from '@/public/assets/images/atomicLogoBlack.svg';
import { useTheme } from 'next-themes';
import ContactRequestLayout from '@/shared/global/ContactRequest/organism';

export const NavContent = ({ isDarkLogo }: { isDarkLogo?: boolean }) => {
   const { theme } = useTheme();
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
   const closeMenu = () => setIsMenuOpen(false);

   const handleOpen = () => setIsOpen(true);
   const handleClose = () => setIsOpen(false);

   const renderHeaderElements = (headerItem: NavData): JSX.Element | null => {
      const safetyHeaderLink = typeof headerItem.link === 'string' ? headerItem.link : '/';

      switch (headerItem.type) {
         case 'link':
            return (
               <Link
                  href={safetyHeaderLink}
                  style={{
                     color: isDarkLogo ? 'black' : '',
                  }}
               >
                  {headerItem.title}
               </Link>
            );
         case 'select':
            return (
               <SelectRoot collection={headerItem.children as ListCollection} size="sm" w="28">
                  <SelectTrigger>
                     <SelectValueText
                        placeholder={headerItem.title}
                        color={isDarkLogo ? 'black' : ''}
                     />
                  </SelectTrigger>
                  <SelectContent>
                     {Array.isArray(headerItem.children?.items) &&
                        headerItem.children.items.length > 0 &&
                        headerItem.children.items.map((item) => (
                           <SelectItem item={item} key={item.value}>
                              <Link href={item.value}>{item.label}</Link>
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
            className="w-full"
            py="4"
            shadow="sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
         >
            <Container maxW="max-w-6xl">
               <Flex justifyContent="space-between" alignItems="center" py={{ base: '2', lg: '4' }}>
                  <Box>
                     <Link href="/">
                        <IconButton variant="ghost">
                           <Image
                              src={theme === 'light' || isDarkLogo ? blackLogoIcon : logoIcon}
                              width={120}
                              height={120}
                              alt=""
                           />
                        </IconButton>
                     </Link>
                  </Box>

                  <Flex display={{ base: 'none', lg: 'flex' }} alignItems="center" gap="16">
                     {NAV_DATA.map((headerItem) => (
                        <Box key={headerItem.id}>{renderHeaderElements(headerItem)}</Box>
                     ))}
                  </Flex>

                  <Flex display={{ base: 'none', lg: 'flex' }} gap="8" alignItems="center">
                     <Button
                        w="10rem"
                        borderWidth="1px"
                        rounded="full"
                        py="4"
                        px="8"
                        borderColor={theme === 'light' ? 'black' : 'white'}
                        color={isDarkLogo ? 'black' : ''}
                        onClick={handleOpen}
                     >
                        Обсудить проект
                     </Button>
                     {/* <SelectRoot collection={LANGUAGE_DATA} size="sm" width="4rem">
                        <SelectTrigger>
                           <SelectValueText
                              placeholder={LANGUAGE_DATA.items[0].label}
                              fontWeight="bold"
                              color={isDarkLogo ? 'black' : ''}
                              style={{
                                 color: isDarkLogo ? 'black' : '',
                              }}
                           />
                        </SelectTrigger>
                        <SelectContent>
                           {LANGUAGE_DATA.items.map((language) => (
                              <SelectItem item={language} key={language.value}>
                                 {language.label}
                              </SelectItem>
                           ))}
                        </SelectContent>
                     </SelectRoot> */}
                  </Flex>

                  <Drawer.Root
                     modal={false}
                     open={isMenuOpen}
                     onOpenChange={(e) => setIsMenuOpen(e.open)}
                  >
                     <Drawer.Trigger asChild>
                        <IconButton
                           display={{ base: 'flex', lg: 'none' }}
                           onClick={toggleMenu}
                           variant="ghost"
                           aria-label="Open menu"
                        >
                           <Menu />
                        </IconButton>
                     </Drawer.Trigger>
                     <Portal>
                        <Drawer.Backdrop />
                        <Drawer.Positioner>
                           <Drawer.Content background={theme === 'dark' ? '' : 'gray.100'}>
                              <Drawer.Header>
                                 <Drawer.Title
                                    fontSize="md"
                                    color={theme === 'dark' ? '' : 'black'}
                                 >
                                    Меню навигации
                                 </Drawer.Title>
                              </Drawer.Header>
                              <Drawer.Body>
                                 <Flex direction="column" gap="7">
                                    {MOBILE_NAV_DATA.map((headerItem) => (
                                       <Box
                                          key={headerItem.id}
                                          onClick={closeMenu}
                                          color={theme === 'dark' ? '' : 'black'}
                                       >
                                          <Flex gap="3" align="center">
                                             {headerItem.icon && <headerItem.icon size={20} />}
                                             <Link href={headerItem.link ?? '#'}>
                                                {headerItem.title}
                                             </Link>
                                          </Flex>
                                       </Box>
                                    ))}
                                    <Button
                                       w="100%"
                                       borderWidth="1px"
                                       rounded="full"
                                       py="4"
                                       px="8"
                                       borderColor={theme === 'light' ? 'black' : 'white'}
                                       onClick={() => {
                                          closeMenu();
                                          handleOpen();
                                       }}
                                    >
                                       Обсудить проект
                                    </Button>
                                    {/* <SelectRoot collection={LANGUAGE_DATA} size="sm" width="100%">
                                       <SelectTrigger>
                                          <SelectValueText
                                             color={theme === 'dark' ? '' : 'black'}
                                             placeholder={LANGUAGE_DATA.items[0].label}
                                             fontWeight="bold"
                                          />
                                       </SelectTrigger>
                                       <SelectContent>
                                          {LANGUAGE_DATA.items.map((language) => (
                                             <SelectItem
                                                item={language}
                                                key={language.value}
                                                style={{
                                                   color: isDarkLogo ? 'black' : 'white',
                                                }}
                                             >
                                                {language.label}
                                             </SelectItem>
                                          ))}
                                       </SelectContent>
                                    </SelectRoot> */}
                                 </Flex>
                              </Drawer.Body>
                              <Drawer.CloseTrigger position="absolute" top="5" right="3" asChild>
                                 <CloseButton size="md" color={theme === 'dark' ? '' : 'black'} />
                              </Drawer.CloseTrigger>
                           </Drawer.Content>
                        </Drawer.Positioner>
                     </Portal>
                  </Drawer.Root>
               </Flex>
            </Container>
         </MotionBox>
         <ContactRequestLayout isOpen={isOpen} handleClose={handleClose} />
      </header>
   );
};
