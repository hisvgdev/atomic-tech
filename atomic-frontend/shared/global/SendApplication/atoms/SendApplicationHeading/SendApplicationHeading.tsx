import { inter } from '@/constants/fonts/inter/inter.constants';
import { useIsMobile } from '@/hooks/useMediaQuery';
import CustomSplittedText from '@/shared/ui/custom/atom/CustomSplittedText';
import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export const SendApplicationHeading = () => {
   const isMobile = useIsMobile();
   return (
      <Box>
         <Flex direction="column" gap={{ base: '4', lg: '8' }} align="center" justify="center">
            <CustomSplittedText
               text="Отправьте заявку и получите расчет стоимости и готовое предложение"
               weight="normal"
               lines={isMobile ? 1 : 3}
               size={isMobile ? '2rem' : '3rem'}
               lineHeight={isMobile ? '1.5rem' : '1.5rem'}
               isCenter={isMobile ? true : false}
            />
            <Text
               className={`${inter.className}`}
               fontSize={{ base: 'sm', lg: '1.2rem' }}
               textAlign="center"
            >
               Узнаем ваш запрос и предложим{' '}
               <Text as="span" className="italic font-bold">
                  {' '}
                  лучшие варианты
               </Text>{' '}
               <br />
               под ваши задачи и бюджет.
            </Text>
         </Flex>
      </Box>
   );
};
