import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import PreviewContent from '../../molecules/PreviewContent';

export const PreviewWrapper = () => {
   return (
      <Box zIndex={10} position="relative">
         <div
            style={{
               background:
                  'linear-gradient(180deg, #AA00FF 0%, rgba(103, 65, 255, 0.797994) 16.5%, rgba(0, 166, 255, 0.485803) 42%, rgba(0, 255, 255, 0) 100%)',
               filter: 'blur(250px)',
               width: '100%',
               height: '100%',
               position: 'absolute',
               top: 0,
               left: 0,
               zIndex: -1,
            }}
         />
         <Flex direction="row" gap="10">
            <PreviewContent />
         </Flex>
      </Box>
   );
};
