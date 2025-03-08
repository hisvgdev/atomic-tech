'use client';

import React, { FC } from 'react';
import { Sizes, SizeValues } from '@/types/Size.types';
import { MotionBox } from '@/ui/animation';
import { Box, Container, Flex, Grid, VStack } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import CustomTitle from '@/ui/custom/atom/CustomTitle';
import ArticleContent from '../../atoms/ArticleContent';
import { ArticleWrapperProps } from './ArticleWrapper.types';
import CustomButton, { VariantButton } from '@/ui/custom/atom/CustomButton';

export const ArticleWrapper: FC<ArticleWrapperProps> = (props) => {
   const {} = props;
   const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
   });
   return (
      <Container
         as="section"
         maxW={Sizes[SizeValues.primaryContainerSize].primary}
         py={16}
         ref={ref}
      >
         <MotionBox initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
            <VStack align="start" spaceY={14}>
               <CustomTitle title="Статьи" weight="600" size="3rem" italic />
               <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={10} w="full">
                  <ArticleContent />
               </Grid>
               <Flex justifyContent="center" align="center" w="full">
                  <CustomButton text="Все статьи" width="15rem" variant={VariantButton.gradient} />
               </Flex>
            </VStack>
         </MotionBox>
      </Container>
   );
};
