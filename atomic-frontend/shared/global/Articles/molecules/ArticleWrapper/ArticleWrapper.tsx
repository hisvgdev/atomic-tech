'use client';

import React, { FC } from 'react';
import { Sizes, SizeValues } from '@/types/frontend/size.types';
import { MotionBox } from '@/shared/ui/animation';
import { Container, Flex, Grid, VStack } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import CustomTitle from '@/shared/ui/custom/atom/CustomTitle';
import { ArticleWrapperProps } from './ArticleWrapper.types';
import CustomButton, { VariantButton } from '@/shared/ui/custom/atom/CustomButton';
import { useRouter } from 'next/navigation';

export const ArticleWrapper: FC<ArticleWrapperProps> = (props) => {
   const { children } = props;
   const router = useRouter();
   const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
   });
   return (
      <Container
         as="section"
         maxW={{ base: '100%', lg: Sizes[SizeValues.primaryContainerSize].primary }}
         py="28"
         ref={ref}
      >
         <MotionBox initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
            <VStack align={{ base: 'center', lg: 'start' }} spaceY={{ base: '8', lg: '14' }}>
               <CustomTitle title="Статьи" weight="600" size="3rem" italic />
               <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={10} w="full">
                  {children}
               </Grid>
               <Flex justifyContent="center" align="center" w="full">
                  <CustomButton
                     text="Все статьи"
                     width="15rem"
                     variant={VariantButton.gradient}
                     onClick={() => router.push('/articles')}
                  />
               </Flex>
            </VStack>
         </MotionBox>
      </Container>
   );
};
