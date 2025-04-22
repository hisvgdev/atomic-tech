import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { createPortal } from 'react-dom';
import { ContactRequestWrapperProps } from './ContactRequestWrapperProps';
import ContactRequestForm from '../../atoms/ContactRequestForm';
import MotionWrapperClient from '@/shared/ui/animation/MotionWrapperClient';

export const ContactRequestWrapper: FC<ContactRequestWrapperProps> = (props) => {
   const { handleClose, isOpen } = props;
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
            <MotionWrapperClient>
               <Box p="8" rounded="3xl">
                  <ContactRequestForm handleClose={handleClose as () => void} />
               </Box>
            </MotionWrapperClient>
         </Box>,
         document.body,
      )
   );
};
