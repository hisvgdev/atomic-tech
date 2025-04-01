import React, { FC } from 'react';
import { ContactRequestLayoutProps } from './ContactRequestLayout.types';
import ContactRequestWrapper from '../molecules/ContactRequestWrapper';

export const ContactRequestLayout: FC<ContactRequestLayoutProps> = (props) => {
   const { handleClose, handleOpen, isOpen } = props;
   return (
      <ContactRequestWrapper handleClose={handleClose} handleOpen={handleOpen} isOpen={isOpen} />
   );
};
