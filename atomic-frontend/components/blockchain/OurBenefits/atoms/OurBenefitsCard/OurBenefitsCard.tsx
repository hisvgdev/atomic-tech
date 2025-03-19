'use client';

import React, { FC } from 'react';
import { OurBenefitsCardProps } from './OurBenefitsCard.types';
import { Button, Box, Text, Card } from '@chakra-ui/react';

import { CircleHelp } from 'lucide-react';
import Image from 'next/image';

export const OurBenefitsCard: FC<OurBenefitsCardProps> = (props) => {
   const { icon, title, bgColor } = props;
   const isGradient = bgColor.startsWith('linear-gradient');
   return (
      <Card.Root
         width="16.25rem"
         height="16.87rem"
         p="7"
         bgColor={bgColor}
         borderRadius="1.875rem"
         position="relative"
         {...(isGradient ? { backgroundImage: bgColor } : { bgColor })}
      >
         <Box
            {...(isGradient ? { backgroundImage: bgColor } : { bgColor })}
            maxW="12.25rem"
            maxH="13.125rem"
            rounded="1.875rem"
            backdropFilter="blur(20px)"
            boxShadow="0px 0px 15px 0px #FFFFFF14 inset, 0px 4px 25px 0px #00000040"
            sx={{
               backdropFilter: 'blur(20px)',
            }}
         >
            <Card.Header display="flex" justifyContent="center" alignItems="center">
               <Image src={icon} width={120} height={120} alt="dex-icon" className="object-cover" />
            </Card.Header>
            <Card.Body display="flex" flexGrow={1} alignItems="center" justifyContent="flex-end">
               <Text color="white" fontSize="sm" fontWeight="semibold">
                  {title}
               </Text>
            </Card.Body>
         </Box>
         <Card.Footer>
            <Button variant="outline" position="absolute" bottom="0" right="1">
               <CircleHelp size={18} color="#FFFFFF80" />
            </Button>
         </Card.Footer>
      </Card.Root>
   );
};
