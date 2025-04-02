import { useTheme } from 'next-themes';
import React from 'react';

export const BottomGradient = () => {
   const { theme } = useTheme();
   return (
      <div
         style={{
            background:
               theme === 'light'
                  ? `linear-gradient(rgb(255, 255, 255) 33.01%, rgb(175, 191, 255) 100%)`
                  : `linear-gradient(180deg, #232323 33.01%, #5547FF 100%)`,
            width: '100%',
            height: '15%',
            position: 'absolute',
            bottom: '0',
            zIndex: '0',
         }}
      />
   );
};
