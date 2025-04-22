'use client';

import CustomButton, { VariantButton } from '@/shared/ui/custom/atom/CustomButton';
import { Box, Flex } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { ProcessDevelopingProps } from './ProcessDeveloping.types';
import ProcessDevelopingHeading from '../../atoms/ProcessDevelopingHeading';
import ProcessStep from '../../atoms/ProcessStep';
import ContactRequestLayout from '@/shared/global/ContactRequest/organism';

export const ProcessDeveloping: FC<ProcessDevelopingProps> = (props) => {
   const {} = props;
   const [isOpen, setIsOpen] = useState(false);
   const handleOpen = () => setIsOpen(true);
   const handleClose = () => setIsOpen(false);
   return (
      <>
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
                        onClick={handleOpen}
                     />
                  </Flex>
               </Flex>
            </Box>
         </Flex>
         <ContactRequestLayout handleClose={handleClose} isOpen={isOpen} />
      </>
   );
};
