'use client';

import CustomButton, { VariantButton } from '@/shared/ui/custom/atom/CustomButton';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import { PreviewContentProps } from './PreviewContent.types';
import ContactRequestLayout from '@/shared/global/ContactRequest/organism';

const inter = Inter({
   weight: ['300', '700'],
   subsets: ['latin'],
   display: 'swap',
   fallback: ['Arial', 'sans-serif'],
});

export const PreviewContent: FC<PreviewContentProps> = (props) => {
   const { title, additionalTitle, needToBreakAWord, description, imgSrc, width, height } = props;
   const [isOpen, setIsOpen] = useState(false);

   const handleOpen = () => setIsOpen(true);
   const handleClose = () => setIsOpen(false);

   return (
      <Box>
         <Flex direction="row" gap={{ base: '5', lg: '12' }} align="center">
            <Flex direction="column" gap="7" maxW="41.25rem" w="full">
               <Flex direction="column" gap="2.5">
                  <Heading className={`${inter.className}`} fontSize="2.5" fontWeight="light">
                     ATOMIC CODE
                  </Heading>
                  {title ? (
                     <Box lineHeight={{ base: '2.2rem', lg: '3.5rem' }}>
                        {(() => {
                           if (!title) return;
                           const words = title.split(' ');
                           const mid = Math.ceil(words.length / 2);
                           const firstLine = words.slice(0, mid).join(' ');
                           const secondLine = words.slice(mid).join(' ');

                           return (
                              <>
                                 <Text
                                    fontSize={{ base: '2rem', lg: '3.18rem' }}
                                    fontWeight="semibold"
                                 >
                                    {firstLine}
                                 </Text>
                                 <Text
                                    fontSize={{ base: '2rem', lg: '3.18rem' }}
                                    fontWeight="light"
                                 >
                                    {secondLine}
                                 </Text>
                              </>
                           );
                        })()}
                     </Box>
                  ) : (
                     <Box lineHeight={{ base: '2.2rem', lg: '3.5rem' }}>
                        {(() => {
                           if (!additionalTitle) return;
                           const words = additionalTitle.split(' ');
                           const mid = Math.ceil(words.length / 2);
                           const firstLine = words.slice(0, mid).join(' ');
                           const secondLine = words.slice(mid).join(' ');

                           return (
                              <>
                                 <Text
                                    fontSize={{ base: '2rem', lg: '3.18rem' }}
                                    fontWeight="semibold"
                                 >
                                    {firstLine}
                                 </Text>
                                 <Text
                                    fontSize={{ base: '2rem', lg: '3.18rem' }}
                                    fontWeight="light"
                                 >
                                    {secondLine}
                                 </Text>
                              </>
                           );
                        })()}
                     </Box>
                  )}
               </Flex>
               <Flex direction="column" gap="14">
                  <Box maxW="xs">
                     {description ? (
                        <Text
                           fontSize={{ base: 'sm', lg: '5' }}
                           fontWeight="light"
                           className={`${inter.className}`}
                        >
                           {description}
                        </Text>
                     ) : (
                        <Text
                           fontSize={{ base: 'sm', lg: '5' }}
                           fontWeight="light"
                           className={`${inter.className}`}
                        >
                           Которые окупаются и приносят прибыль{' '}
                           <Text
                              as="span"
                              fontWeight="semibold"
                              fontStyle="italic"
                              className={`${inter.className}`}
                           >
                              вашему бизнесу
                           </Text>
                        </Text>
                     )}
                  </Box>
                  <Box>
                     <CustomButton
                        variant={VariantButton.default}
                        text="Обсудить проект"
                        width="17rem"
                        onClick={handleOpen}
                     />
                  </Box>
               </Flex>
            </Flex>
            <Box className="flex-1" display={{ base: 'none', lg: 'block' }}>
               <Image
                  src={imgSrc}
                  alt={description || ''}
                  width={width}
                  height={height}
                  className="object-cover"
                  style={{
                     borderRadius: '1.5rem',
                  }}
               />
            </Box>
         </Flex>
         <ContactRequestLayout handleClose={handleClose} isOpen={isOpen} />
      </Box>
   );
};
