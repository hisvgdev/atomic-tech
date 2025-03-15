import CustomSplittedText from '@/shared/ui/custom/atom/CustomSplittedText';
import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export const SendApplicationHeading = () => {
   return (
      <Box>
         <Flex direction="column" gap="8" align="center" justify="center">
            <CustomSplittedText
               lines={3}
               text="Отправьте заявку и получите расчет стоимости и готовое предложение"
               weight="normal"
               size="3rem"
               lineHeight="1.5rem"
            />
            <Text fontSize="1.2rem" textAlign="center">
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
