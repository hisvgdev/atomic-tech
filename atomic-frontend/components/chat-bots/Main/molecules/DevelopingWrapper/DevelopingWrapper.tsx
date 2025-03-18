import { Box, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import React, { FC } from 'react';
import { DevelopingWrapperProps } from './DevelopingWrapper.types';
import DevelopingPreview from '../../atoms/DevelopingPreview/molecules';
import CustomButton, { VariantButton } from '@/shared/ui/custom/atom/CustomButton';

export const DevelopingWrapper: FC<DevelopingWrapperProps> = (props) => {
   const {} = props;
   return (
      <Flex direction="column" justifyContent="center" align="center" gap={32}>
         <DevelopingPreview />
         <CustomButton variant={VariantButton.gradient} text="Обсудить разработку" width="20rem" />
      </Flex>
   );
};
