'use client';

import { ThemeContext } from '@/context/SwitchTheme';
import { useState } from 'react';

export default function ThemeLayout({ children }: { children: React.ReactNode }) {
   const [theme, setTheme] = useState<'dark' | 'light'>('dark');

   const handleChangeTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
   };

   return (
      <ThemeContext.Provider value={{ theme, setTheme, handleChangeTheme }}>
         {children}
      </ThemeContext.Provider>
   );
}
