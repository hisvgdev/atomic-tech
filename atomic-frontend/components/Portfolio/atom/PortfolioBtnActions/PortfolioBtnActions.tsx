import { Box, Button, Flex, Text } from '@chakra-ui/react';
import clsx from 'clsx';
import React, { FC, useState } from 'react';
import { PortfolioBtnActionsProps } from './PortfolioBtnActions.types';

export const PortfolioBtnActions: FC<PortfolioBtnActionsProps> = (props) => {
   const {} = props;
   const [activeIndex, setActiveIndex] = useState<number>(0);
   const handleFindActiveIndex = (idx: number) => {
      setActiveIndex(idx);
   };
   return (
      <Flex align="center" mx="auto" gap="8">
         {['Сайты', 'Телеграм-боты', 'WebApp', 'Мобильные приложения', 'Блокчейн'].map(
            (btnItem, idx) => {
               const isActive = activeIndex === idx;
               return (
                  <Box key={idx}>
                     <Button
                        className={clsx(
                           'h-11 px-5 border-[1px] rounded-full transition-all font-light text-[1.25rem]',
                           {
                              'hover:bg-[#5547FF] hover:border-[#5547FF]': !isActive,
                              'bg-[#5547FF] border-[#5547FF]': isActive,
                              'border-white': !isActive,
                           },
                        )}
                        type="button"
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
