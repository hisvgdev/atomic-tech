'use client';

import { MotionEntity } from '@/shared/ui/animation';
import React from 'react';

const MotionWrapperClient = ({ children }: { children: React.ReactNode }) => {
   return (
      <MotionEntity
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
         onClick={(e) => e.stopPropagation()}
      >
         {children}
      </MotionEntity>
   );
};

export default MotionWrapperClient;
