import React from 'react';
import { INFINITY_SLOGAN_DATA } from './InfinitySloganLine.constans';
import { motion } from 'framer-motion';

export const InfinitySloganLine = () => {
   return (
      <div className="overflow-hidden whitespace-nowrap">
         <motion.div
            className="flex items-center gap-10 flex-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
         >
            {INFINITY_SLOGAN_DATA.concat(INFINITY_SLOGAN_DATA).map((sloganItem) => (
               <div
                  key={sloganItem.id + '-copy'}
                  style={{ backgroundColor: sloganItem.bgColor }}
                  className="flex items-center justify-center py-2 px-4 rounded-full"
               >
                  <span className="text-xs" style={{ color: sloganItem.textColor || '#000000' }}>
                     {sloganItem.title}
                  </span>
               </div>
            ))}
         </motion.div>
      </div>
   );
};
