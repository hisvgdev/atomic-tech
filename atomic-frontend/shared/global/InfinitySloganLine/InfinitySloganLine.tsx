import React from 'react';
import { motion } from 'framer-motion';
import { Box, Flex, Text } from '@chakra-ui/react';
import { INFINITY_SLOGAN_DATA } from './InfinitySloganLine.constans';

export const InfinitySloganLine = () => {
   return (
      <Box overflow="hidden" whiteSpace="nowrap">
         <motion.div
            style={{
               display: 'flex',
               alignItems: 'center',
               gap: '1.25rem',
               flexWrap: 'nowrap',
            }}
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
         >
            {INFINITY_SLOGAN_DATA.concat(INFINITY_SLOGAN_DATA).map((sloganItem, idx) => (
               <Flex
                  key={sloganItem.id + `-copy-${idx}`}
                  style={{ backgroundColor: sloganItem.bgColor }}
                  align="center"
                  justify="center"
                  py="2"
                  px="4"
                  borderRadius="full"
               >
                  <Text color={sloganItem.textColor || '#000000'} fontSize="xs">
                     {sloganItem.title}
                  </Text>
               </Flex>
            ))}
         </motion.div>
      </Box>
   );
};
