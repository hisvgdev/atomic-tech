'use client';

import React from 'react';
import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { PORTFOLIO_CARDS_DATA } from '../../molecules/PortfolioCards/PortfolioCards.constants';
import CustomTitle from '@/ui/custom/atom/CustomTitle';
import Image from 'next/image';
import CustomBtnSlider from '@/ui/custom/atom/CustomBtnSlider';
import { useEmblaSlider } from '@/hooks/useEmblaSlider';

export const PortfolioCard = () => {
   const { emblaRef, scrollNext, scrollPrev } = useEmblaSlider();
   return (
      <Box overflow="hidden" ref={emblaRef}>
         <Flex>
            {PORTFOLIO_CARDS_DATA.map((ptCards) => (
               <Box key={ptCards.id} flex="0 0 33.333%" minW="0" p="2">
                  <Stack spaceY={9} align="start">
                     <Image src={ptCards.img} width={360} height={411} alt="" />
                     <Stack spaceY={5}>
                        <CustomTitle size="1.75rem" italic weight="500" title={ptCards.title} />
                        <Box>
                           <Text fontSize="md" fontWeight="light">
                              <b className="font-bold">
                                 <Text as="span" fontStyle="italic">
                                    Ниша:{' '}
                                 </Text>
                              </b>
                              {ptCards.niche}
                           </Text>
                           <Text fontSize="md" fontWeight="light">
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
      </Box>
   );
};
