import React, { FC } from 'react';
import { OurBenefitsCardsProps } from './OurBenefitsCards.types';
import OurBenefitsCard from '../../atoms/OurBenefitsCard';
import { BENEFITS_CARDS_DATA } from './OurBenefitsCards.constants';
import { Flex } from '@chakra-ui/react';

export const OurBenefitsCards: FC<OurBenefitsCardsProps> = (props) => {
   const {} = props;
   return (
      <Flex
         direction={{ base: 'column', lg: 'row' }}
         justify={{ base: 'center', lg: 'space-between' }}
         align="center"
         gap={{ base: '8', lg: '0' }}
      >
         {BENEFITS_CARDS_DATA.map((itemData, idx) => {
            return <OurBenefitsCard key={itemData.id + idx} {...itemData} />;
         })}
      </Flex>
   );
};
