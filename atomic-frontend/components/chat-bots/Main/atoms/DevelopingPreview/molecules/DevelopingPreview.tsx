import React, { FC } from 'react';
import { DevelopingPreviewProps } from './DevelopingPreview.types';
import { Box, Flex } from '@chakra-ui/react';
import DevelopingPreviewContentInfo from '../atoms/DevelopingPreviewContentInfo';
import DevelopingPreviewCard from '../atoms/DevelopingPreviewCards/molecules';

export const DevelopingPreview: FC<DevelopingPreviewProps> = () => {
   return (
      <Box w="full">
         <Flex direction="column" gap={24}>
            <DevelopingPreviewContentInfo />
            <DevelopingPreviewCard />
         </Flex>
      </Box>
   );
};
