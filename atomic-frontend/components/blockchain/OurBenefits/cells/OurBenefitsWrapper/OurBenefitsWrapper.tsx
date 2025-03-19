'use client';

import React, { FC } from 'react';
import { OurBenefitsWrapperProps } from './OurBenefitsWrapper.types';
import { Flex } from '@chakra-ui/react';
import OurBenefitsCards from '../../molecules/OurBenefitsCards';
import { MotionBox } from '@/shared/ui/animation';
import OurBenefitsHeading from '../../atoms/OurBenefitsHeading';

export const OurBenefitsWrapper: FC<OurBenefitsWrapperProps> = (props) => {
   const {} = props;
   return (
      <MotionBox py="28" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
         <Flex direction="column" maxW="68rem" mx="auto" gap="28">
            <OurBenefitsHeading />
            <OurBenefitsCards />
         </Flex>
      </MotionBox>
   );
};
