'use client';

import { Sizes, SizeValues } from '@/types/frontend/size.types';
import { Container } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import { MotionBox } from '@/shared/ui/animation';
import ShowreelContent from '../../atoms/ShowreelContent';
import { FC } from 'react';
import { ShowreelWrapperProps } from './ShowreelWrapper.types';

export const ShowreelWrapper: FC<ShowreelWrapperProps> = (props) => {
   const { videoData } = props;
   const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
   });

   return (
      <Container
         as="section"
         mx="auto"
         maxW={Sizes[SizeValues.primaryContainerSize].primary}
         pb="28"
         ref={ref}
      >
         <MotionBox initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
            <ShowreelContent />
         </MotionBox>
      </Container>
   );
};
