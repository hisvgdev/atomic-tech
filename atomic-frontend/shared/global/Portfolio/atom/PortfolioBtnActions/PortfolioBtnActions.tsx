import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { PortfolioBtnActionsProps } from './PortfolioBtnActions.types';

export const PortfolioBtnActions: FC<PortfolioBtnActionsProps> = () => {
   const [activeIndex, setActiveIndex] = useState<number>(0);

   const handleFindActiveIndex = (idx: number) => {
      setActiveIndex(idx);
   };

   return (
      <Flex align="center" mx="auto" gap={8}>
         {['Сайты', 'Телеграм-боты', 'WebApp', 'Мобильные приложения', 'Блокчейн'].map(
            (btnItem, idx) => {
               const isActive = activeIndex === idx;
               return (
                  <Box key={idx}>
                     <Button
                        h="2.8rem"
                        px="1.25rem"
                        border="1px solid"
                        rounded="full"
                        fontWeight="light"
                        fontSize="md"
                        transition="all 0.3s ease"
                        color="white"
                        bg={isActive ? '#5547FF' : 'transparent'}
                        borderColor={isActive ? '#5547FF' : 'white'}
                        _hover={{
                           bg: '#5547FF',
                           borderColor: '#5547FF',
                        }}
                        onClick={() => handleFindActiveIndex(idx)}
                     >
                        <Text>{btnItem}</Text>
                     </Button>
                  </Box>
               );
            },
         )}
      </Flex>
   );
};
