'use client';

import { useState } from 'react';
import { Box, Image, IconButton } from '@chakra-ui/react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);

export default function ImageModal({
   imageUrl,
   width = 560,
   height = 480,
   maxW = '90vw',
   maxH = '90vh',
   alt = 'Image',
}: {
   imageUrl: string;
   width?: number;
   height?: number;
   alt?: string;
   maxW?: string;
   maxH?: string;
}) {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <>
         {/* Превью */}
         <Box
            cursor="zoom-in"
            w="100%"
            h="100%"
            overflow="hidden"
            borderRadius="50px"
            onClick={() => setIsOpen(true)}
         >
            <Image
               src={imageUrl}
               alt={alt}
               objectFit="cover"
               width={width}
               height={height}
               borderRadius="50px"
            />
         </Box>

         {/* Фуллскрин модалка */}
         <AnimatePresence>
            {isOpen && (
               <MotionBox
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  position="fixed"
                  top="0"
                  left="0"
                  width="100vw"
                  height="100vh"
                  bg="rgba(0, 0, 0, 0.85)"
                  zIndex="1400"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  onClick={() => setIsOpen(false)}
               >
                  <IconButton
                     aria-label="Close"
                     position="absolute"
                     top="4"
                     right="4"
                     onClick={() => setIsOpen(false)}
                     zIndex="1401"
                     bg="rgba(255,255,255,0.1)"
                     _hover={{ bg: 'whiteAlpha.300' }}
                     color="white"
                     borderRadius="full"
                  >
                     <X />
                  </IconButton>
                  <Image
                     src={imageUrl}
                     alt={alt}
                     maxW={maxW}
                     maxH={maxH}
                     objectFit="contain"
                     borderRadius="lg"
                     onClick={(e) => e.stopPropagation()}
                  />
               </MotionBox>
            )}
         </AnimatePresence>
      </>
   );
}
