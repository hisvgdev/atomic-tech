'use client';

import { Box, Flex } from '@chakra-ui/react';
import HeaderDevTeam from '../../atoms/HeaderDevTeam';
import CardsDevTeam from '../../atoms/CardsDevTeam';
import { FC } from 'react';
import { DevTeamWrapperProps } from './DevTeamWrapper.types';

export const DevTeamWrapper: FC<DevTeamWrapperProps> = (props) => {
   const {} = props;
   return (
      <Box zIndex={10} position="relative">
         <div
            style={{
               background:
                  'linear-gradient(180deg, #AA00FF 0%, rgba(103, 65, 255, 0.797994) 16.5%, rgba(0, 166, 255, 0.485803) 42%, rgba(0, 255, 255, 0) 100%)',
               filter: 'blur(250px)',
               width: '100%',
               height: '100%',
               position: 'absolute',
               top: 0,
               left: 0,
               zIndex: -1,
            }}
         />
         <Flex direction="column" gap={{ base: '10', lg: '24' }}>
            <HeaderDevTeam />
            <CardsDevTeam />
         </Flex>
      </Box>
   );
};
