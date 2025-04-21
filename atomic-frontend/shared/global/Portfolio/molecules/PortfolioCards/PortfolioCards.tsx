'use client';
import React, { FC } from 'react';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { PORTFOLIO_CARDS_DATA } from '../../molecules/PortfolioCards/PortfolioCards.constants';
import Image from 'next/image';
import CustomBtnSlider from '@/shared/ui/custom/atom/CustomBtnSlider';
import { useEmblaSlider } from '@/hooks/useEmblaSlider';
import { inter } from '@/constants/fonts/inter/inter.constants';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { PortfolioCardsProps } from './PortfolioCards.types';

export const PortfolioCards: FC<PortfolioCardsProps> = (props) => {
   const { filteredWorkCases } = props;
   const { emblaRef, scrollNext, scrollPrev, isDragging } = useEmblaSlider();
   const { theme } = useTheme();
   const pathname = usePathname();
   return (
      <Flex overflow="hidden" ref={emblaRef} direction="column" gap="8">
         <Flex cursor={isDragging ? 'grabbing' : 'grab'}>
            {filteredWorkCases.length > 0
               ? filteredWorkCases.map((ptCards, idx) => {
                    return (
                       <Box
                          key={ptCards.id}
                          flex={{ base: '0 0 100%', smToLg: '0 0 100%', lg: '0 0 33.333%' }}
                          minW="0"
                          p={{ base: '6', lg: '2' }}
                       >
                          <Stack spaceY={9} align="start">
                             <Image src={ptCards.preview} width={360} height={410} alt="" />
                             <Stack spaceY={5}>
                                <Heading
                                   fontSize="xl"
                                   fontWeight="extrabold"
                                   fontStyle="italic"
                                   color={{
                                      base:
                                         pathname === '/blockchain' && theme === 'light'
                                            ? 'black'
                                            : 'white',
                                   }}
                                   className={`${inter.className}`}
                                >
                                   {ptCards.title}
                                </Heading>
                                <Box>
                                   <Text
                                      fontSize="1.125rem"
                                      fontWeight="light"
                                      color={{
                                         base:
                                            pathname === '/blockchain' && theme === 'light'
                                               ? 'black'
                                               : 'white',
                                      }}
                                      className={`${inter.className}`}
                                   >
                                      <b className="font-bold">
                                         <Text as="span" fontStyle="italic">
                                            Ниша:{' '}
                                         </Text>
                                      </b>
                                      {ptCards.niche}
                                   </Text>
                                   <Text
                                      fontSize="1.125rem"
                                      fontWeight="light"
                                      color={{
                                         base:
                                            pathname === '/blockchain' && theme === 'light'
                                               ? 'black'
                                               : 'white',
                                      }}
                                      className={`${inter.className}`}
                                   >
                                      <b className="font-bold">
                                         <Text as="span" fontStyle="italic">
                                            App:{' '}
                                         </Text>
                                      </b>
                                      {ptCards.app}
                                   </Text>
                                </Box>
                             </Stack>
                          </Stack>
                       </Box>
                    );
                 })
               : PORTFOLIO_CARDS_DATA.map((ptCards) => (
                    <Box
                       key={ptCards.id}
                       flex={{ base: '0 0 100%', smToLg: '0 0 100%', lg: '0 0 33.333%' }}
                       minW="0"
                       p={{ base: '6', lg: '2' }}
                    >
                       <Stack spaceY={9} align="start">
                          <Image src={ptCards.img} width={360} height={410} alt="" />
                          <Stack spaceY={5}>
                             <Heading
                                fontSize="xl"
                                fontWeight="extrabold"
                                fontStyle="italic"
                                color={{
                                   base:
                                      pathname === '/blockchain' && theme === 'light'
                                         ? 'black'
                                         : 'white',
                                }}
                                className={`${inter.className}`}
                             >
                                {ptCards.title}
                             </Heading>
                             <Box>
                                <Text
                                   fontSize="1.125rem"
                                   fontWeight="light"
                                   color={{
                                      base:
                                         pathname === '/blockchain' && theme === 'light'
                                            ? 'black'
                                            : 'white',
                                   }}
                                   className={`${inter.className}`}
                                >
                                   <b className="font-bold">
                                      <Text as="span" fontStyle="italic">
                                         Ниша:{' '}
                                      </Text>
                                   </b>
                                   {ptCards.niche}
                                </Text>
                                <Text
                                   fontSize="1.125rem"
                                   fontWeight="light"
                                   color={{
                                      base:
                                         pathname === '/blockchain' && theme === 'light'
                                            ? 'black'
                                            : 'white',
                                   }}
                                   className={`${inter.className}`}
                                >
                                   <b className="font-bold">
                                      <Text as="span" fontStyle="italic">
                                         App:{' '}
                                      </Text>
                                   </b>
                                   {ptCards.app}
                                </Text>
                             </Box>
                          </Stack>
                       </Stack>
                    </Box>
                 ))}
         </Flex>
         <CustomBtnSlider slideNext={scrollNext} slidePrev={scrollPrev} />
      </Flex>
   );
};
