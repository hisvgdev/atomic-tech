import CustomButton, { VariantButton } from '@/shared/ui/custom/atom/CustomButton';
import { Box, Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import { ProcessDevelopingProps } from './ProcessDeveloping.types';
import ProcessDevelopingHeading from '../../atoms/ProcessDevelopingHeading';
import ProcessStep from '../../atoms/ProcessStep';

export const ProcessDeveloping: FC<ProcessDevelopingProps> = (props) => {
   const {} = props;
   return (
      <Box>
         <Flex direction="column" gap="20">
            <ProcessDevelopingHeading />
            <Box w="full" h="full">
               <Flex direction="column" gap="20">
                  <ProcessStep
                     number={1}
                     text="Формируем"
                     highlight="технические требования"
                     align="start"
                  />
                  <ProcessStep
                     number={2}
                     text="Разрабатываем структуру смарт-контрактов, выбираем"
                     highlight="механизм консенсуса"
                     align="center"
                  />
                  <ProcessStep
                     number={3}
                     text="Разрабатываем фронтенд и бэкенд, проводим"
                     highlight="тестирование безопасности и оптимизируем код"
                     align="end"
                  />
                  <ProcessStep
                     number={4}
                     text="Размещаем смарт-контракты в сети, настраиваем"
                     highlight="интеграцию с бизнес-системами и готовим техническую документацию"
                     align="center"
                  />
                  <ProcessStep
                     number={5}
                     text="Обеспечиваем мониторинг работы, выпускаем обновления и"
                     highlight="оказываем техническую поддержку"
                     align="start"
                  />
                  <Flex justify="center" align="center">
                     <CustomButton
                        text="Обсудить разработку"
                        variant={VariantButton.gradient}
                        width="22.5rem"
                        isUppercase
                     />
                  </Flex>
               </Flex>
            </Box>
         </Flex>
      </Box>
   );
};
