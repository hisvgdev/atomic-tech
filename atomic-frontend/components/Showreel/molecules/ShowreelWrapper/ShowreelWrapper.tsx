'use client';

import { Sizes, SizeValues } from '@/types/Size.types';
import { Container } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import { MotionBox } from '@/ui/animation';
import ShowreelContent from '../../atoms/ShowreelContent';

export const ShowreelWrapper = () => {
   const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
   });

   return (
      <Container
         as="section"
         mx="auto"
         maxW={Sizes[SizeValues.primaryContainerSize].primary}
         py="24"
         ref={ref}
      >
         <MotionBox initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
            <ShowreelContent />
         </MotionBox>
      </Container>
   );
};
