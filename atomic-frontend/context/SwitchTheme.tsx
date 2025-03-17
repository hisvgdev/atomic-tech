'use client';

import React, { createContext, useContext, useState } from 'react';

interface IThemeContextProps {
   theme: 'dark' | 'light';
   setTheme: React.Dispatch<React.SetStateAction<'dark' | 'light'>>;
   handleChangeTheme?: () => void;
}

export const ThemeContext = createContext<IThemeContextProps | undefined>(undefined);

export const SwitchThemeContext = ({ children }: { children: React.ReactNode }) => {
   const [theme, setTheme] = useState<'dark' | 'light'>('dark');

   const handleChangeTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
   };

   return (
      <ThemeContext.Provider value={{ theme, setTheme, handleChangeTheme }}>
         {children}
      </ThemeContext.Provider>
   );
};

export const useTheme = () => {
   const context = useContext(ThemeContext);
   if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider');
   }
   return context;
};
