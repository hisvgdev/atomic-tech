import { Box, Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import PreviewContent from '../../molecules/PreviewContent';
import { PreviewWrapperProps } from './PreviewWrapper.types';

export const PreviewWrapper: FC<PreviewWrapperProps> = (props) => {
   const { title, additionalTitle, description, imgSrc, width, height } = props;
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
         <Flex direction="row" gap="10" p={{ base: '10', lg: '0' }}>
            <PreviewContent
               title={title}
               additionalTitle={additionalTitle}
               description={description}
               imgSrc={imgSrc}
               width={width}
               height={height}
            />
         </Flex>
      </Box>
   );
};
