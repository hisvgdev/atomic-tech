import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { PortfolioBtnActionsProps } from './PortfolioBtnActions.types';
import { inter } from '@/constants/fonts/inter/inter.constants';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

export const PortfolioBtnActions: FC<PortfolioBtnActionsProps> = (props) => {
   const { isInsideInCenter } = props;
   const [activeIndex, setActiveIndex] = useState<number>(0);
   const { theme } = useTheme();
   const pathname = usePathname();
   const handleFindActiveIndex = (idx: number) => {
      setActiveIndex(idx);
   };
   const specificRoute = ['/articles', '/portfolio'].includes(pathname);
   return (
      <Flex
         align="center"
         mx="auto"
         width={{ base: undefined, lg: specificRoute ? 'full' : undefined }}
         justify={{ base: 'center', lg: specificRoute ? 'space-between' : undefined }}
         gap={{ base: '4', lg: '8' }}
         flexWrap={{ base: 'wrap', smToLg: 'wrap' }}
      >
         {['Сайты', 'Телеграм-боты', 'WebApp', 'Мобильные приложения', 'Блокчейн'].map(
            (btnItem, idx) => {
               const isActive = activeIndex === idx;
               return (
                  <Box key={idx}>
                     <Button
                        h="2.8rem"
                        px={{ base: '1rem', lg: '1.25rem' }}
                        border="1px solid"
                        rounded="full"
                        transition="all 0.3s ease"
                        bg={isActive ? '#5547FF' : 'transparent'}
                        borderColor={
                           isActive
                              ? '#5547FF'
                              : isInsideInCenter && theme === 'light'
                                ? 'black'
                                : 'white'
                        }
                        _hover={{
                           bg: '#5547FF',
                           borderColor: '#5547FF',
                        }}
                        onClick={() => handleFindActiveIndex(idx)}
                     >
                        <Text
                           fontWeight="light"
                           transition="all 0.3s ease"
                           fontSize={{ base: 'sm', lg: 'md' }}
                           className={`${inter.className}`}
                           _hover={{
                              color: 'white',
                           }}
                        >
                           {btnItem}
                        </Text>
                     </Button>
                  </Box>
               );
            },
         )}
      </Flex>
   );
};
