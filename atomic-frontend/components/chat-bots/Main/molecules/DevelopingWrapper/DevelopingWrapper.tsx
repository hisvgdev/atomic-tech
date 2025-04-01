'use client';

import { Flex } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { DevelopingWrapperProps } from './DevelopingWrapper.types';
import DevelopingPreview from '../../atoms/DevelopingPreview/molecules';
import CustomButton, { VariantButton } from '@/shared/ui/custom/atom/CustomButton';
import ContactRequestLayout from '@/shared/global/ContactRequest/organism';

export const DevelopingWrapper: FC<DevelopingWrapperProps> = (props) => {
   const {} = props;
   const [isOpen, setIsOpen] = useState(false);
   const handleOpen = () => setIsOpen(true);
   const handleClose = () => setIsOpen(false);
   return (
      <>
         <Flex
            direction="column"
            justifyContent="center"
            align="center"
            gap={{ base: '16', lg: '32' }}
         >
            <DevelopingPreview />
            <CustomButton
               variant={VariantButton.gradient}
               text="Обсудить разработку"
               width="20rem"
               onClick={handleOpen}
            />
         </Flex>
         <ContactRequestLayout isOpen={isOpen} handleClose={handleClose} handleOpen={handleOpen} />
      </>
   );
};
