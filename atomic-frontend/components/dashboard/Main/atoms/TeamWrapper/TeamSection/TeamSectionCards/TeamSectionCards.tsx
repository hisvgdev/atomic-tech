import React, { FC } from 'react';
import { TeamSectionCard } from './TeamSectionCard/TeamSectionCard';
import { TeamSectionCardsProps } from './TeamSectionCards.types';
import { Box, Flex } from '@chakra-ui/react';

export const TeamSectionCards: FC<TeamSectionCardsProps> = (props) => {
   const { emblaRef, isDragging, team } = props;
   return (
      <Box ref={emblaRef} overflow="hidden">
         <Flex
            gap={6}
            p={{ base: '0', lg: '5' }}
            mx={{ base: '', lg: 'auto' }}
            justify={{ base: '', lg: 'center' }}
            align={{ base: '', lg: 'center' }}
            width="fit-content"
         >
            {team && team.length > 0
               ? team.map((t, idx) => {
                    return (
                       <Box
                          key={idx}
                          flex={{
                             base: '0 0 100%',
                             lg:
                                team.length === 1
                                   ? '0 0 100%'
                                   : team.length === 2
                                     ? '0 0 48%'
                                     : team.length === 3
                                       ? '0 0 31%'
                                       : '0 0 23%',
                          }}
                          cursor={isDragging ? 'grabbing' : 'grab'}
                       >
                          <TeamSectionCard teamInfo={t} />
                       </Box>
                    );
                 })
               : Array.from({ length: 4 }).map((_, idx) => (
                    <Box
                       key={idx}
                       flex={{ base: '0 0 100%', lg: '0 0 23%' }}
                       cursor={isDragging ? 'grabbing' : 'grab'}
                    >
                       <TeamSectionCard teamInfo={null} />
                    </Box>
                 ))}
         </Flex>
      </Box>
   );
};
