import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React, { FC } from 'react';
import { DevelopingPreviewCardProps } from './DevelopingPreviewCard.types';

export const DevelopingPreviewCard: FC<DevelopingPreviewCardProps> = (props) => {
   const { icon, maxWidth, text } = props;
   return (
      <Flex align="center" gap={5}>
         <Flex
            align="center"
            justify="center"
            w={20}
            h={20}
            rounded="full"
            bg="#C6C1FF"
            boxShadow="3px 4px 18px 0px #A3AFFD33"
         >
            <Image src={icon} width={45} height={45} alt="icon" />
         </Flex>
         <Text maxW={maxWidth} fontSize="sm" fontWeight="normal">
            {text}
         </Text>
      </Flex>
   );
};
