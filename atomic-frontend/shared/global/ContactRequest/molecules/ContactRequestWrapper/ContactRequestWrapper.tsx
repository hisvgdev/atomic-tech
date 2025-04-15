'use client';

import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { createPortal } from 'react-dom';
import { MotionEntity } from '@/shared/ui/animation';
import { ContactRequestWrapperProps } from './ContactRequestWrapperProps';
import ContactRequestForm from '../../atoms/ContactRequestForm';

export const ContactRequestWrapper: FC<ContactRequestWrapperProps> = (props) => {
   const { handleOpen, handleClose, isOpen } = props;
   return (
      isOpen &&
      createPortal(
         <Box
            position="fixed"
            top="0"
            left="0"
            width="100%"
            height="100%"
            bg="rgba(0, 0, 0, 0.5)"
            display="flex"
            justifyContent="center"
            alignItems="center"
            zIndex="max"
            onClick={handleClose}
         >
            <MotionEntity
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.9 }}
               onClick={(e) => e.stopPropagation()}
            >
               <Box p="8" rounded="3xl">
                  <ContactRequestForm handleClose={handleClose as () => void} />
               </Box>
            </MotionEntity>
         </Box>,
         document.body,
      )
   );
};
