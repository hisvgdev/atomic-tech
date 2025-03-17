import CustomTitle from '@/shared/ui/custom/atom/CustomTitle';
import { Flex } from '@chakra-ui/react';
import ServiceFirstColumn from '../../atoms/ServiceFirstColumn';
import ServiceSecondColumn from '../../atoms/ServiceSecondColumn';
import ServiceThirdColumn from '../../atoms/ServiceThirdColumn';
import ServiceFourColumn from '../../atoms/ServiceFourColumn';

export const ServiceWrapper = () => {
   return (
      <Flex justify="center" align="center" direction="column" gap="12">
         <CustomTitle title="Услуги" italic size="3rem" weight="semibold" />

         <Flex direction="column" gap="5">
            <Flex align="center" gap="10">
               <ServiceFirstColumn />
               <ServiceSecondColumn />
            </Flex>
            <ServiceThirdColumn />
            <ServiceFourColumn />
         </Flex>
      </Flex>
   );
};
