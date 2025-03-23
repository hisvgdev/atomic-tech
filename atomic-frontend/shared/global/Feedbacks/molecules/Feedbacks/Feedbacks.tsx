'use client';

import { Box, Flex, Heading } from '@chakra-ui/react';
import React, { FC } from 'react';
import { MORE_CLIENTS_ARTICLES_DATA } from './Feedbacks.constants';
import { useEmblaSlider } from '@/hooks/useEmblaSlider';
import CustomBtnSlider from '@/shared/ui/custom/atom/CustomBtnSlider';
import Feedback from '../../atoms/Feedback';
import { FeedbacksProps } from './Feedbacks.types';
import { MotionBox } from '@/shared/ui/animation';
import { useInView } from 'react-intersection-observer';

export const Feedbacks: FC<FeedbacksProps> = (props) => {
   const { emblaRef, scrollNext, scrollPrev } = useEmblaSlider();
   const { isBgWhite, withSpacing, withTitle } = props;
   const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
   });
   return (
      <Box ref={ref}>
         <MotionBox initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
            <Flex
               direction="column"
               gap="12"
               align="center"
               justify="center"
               pt={withSpacing ? '28' : undefined}
            >
               {withTitle && (
                  <Flex justify="center" align="center">
                     <Heading className="italic" fontSize="3xl" fontWeight="semibold" color="white">
                        Отзывы
                     </Heading>
                  </Flex>
               )}
               <Box maxW={{ base: '96', lg: '100%' }} overflow="hidden" ref={emblaRef}>
                  <Flex gap={6} p={{ base: '0', lg: '5' }}>
                     {MORE_CLIENTS_ARTICLES_DATA.map((itemArticles, _) => {
                        return (
                           <Feedback
                              key={itemArticles.id}
                              {...itemArticles}
                              isBgWhite={isBgWhite}
                           />
                        );
                     })}
                  </Flex>
               </Box>
               <CustomBtnSlider slideNext={scrollNext} slidePrev={scrollPrev} />
            </Flex>
         </MotionBox>
      </Box>
   );
};
