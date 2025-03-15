'use client';

import React, { createContext, useContext } from 'react';

interface IThemeContextProps {
   theme: 'dark' | 'light';
   setTheme: (theme: 'dark' | 'light') => void;
   handleChangeTheme?: () => void;
}

export const ThemeContext = createContext<IThemeContextProps>({
   theme: 'dark',
   setTheme: () => {},
});

export const SwitchThemeContext = ({ children }: { children: React.ReactElement }) => {
   const { theme, setTheme } = useContext(ThemeContext);

   const handleChangeTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
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
