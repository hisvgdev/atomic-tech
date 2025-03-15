'use client';

import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { MORE_CLIENTS_ARTICLES_DATA } from './MoreClientsArticles.constants';
import MoreClientsArticle from '../../atoms/MoreClientsArticle';
import { useEmblaSlider } from '@/hooks/useEmblaSlider';
import CustomBtnSlider from '@/shared/ui/custom/atom/CustomBtnSlider';

export const MoreClientsArticles = () => {
   const { emblaRef, scrollNext, scrollPrev } = useEmblaSlider();
   return (
      <Flex direction="column" gap="12" align="center" justify="center">
         <Box overflow="hidden" ref={emblaRef}>
            <Flex gap={6} p="5">
               {MORE_CLIENTS_ARTICLES_DATA.map((itemArticles, _) => {
                  return <MoreClientsArticle key={itemArticles.id} {...itemArticles} />;
               })}
            </Flex>
         </Box>
         <CustomBtnSlider slideNext={scrollNext} slidePrev={scrollPrev} />
      </Flex>
   );
};
