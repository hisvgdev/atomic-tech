import React, { FC } from 'react';
import { DevWorkWrapperProps } from './DevWorkWrapper.types';
import { Flex } from '@chakra-ui/react';
import DevWorkHeading from '../../atoms/DevWorkHeading';
import techQuestIcon from '@/public/assets/images/chat-bots/techQuestIcon.svg';
import findingBestSolutionIcon from '@/public/assets/images/chat-bots/findingBestSolutionIcon.svg';
import showResultIcon from '@/public/assets/images/chat-bots/showResultIcon.svg';
import DevWorkStep from '../../atoms/DevWorkStep';

export const DevWorkWrapper: FC<DevWorkWrapperProps> = () => {
   return (
      <div className="w-full">
         <Flex direction="column" gap="24" align="center" justify="center">
            <DevWorkHeading />
            <Flex direction="column" align="center" gap="24" justify="center" w="full">
               <DevWorkStep
                  number={1}
                  title="Техническое задание"
                  description="Узнаем запрос и пожелания, изучаем проект и составляем подробное техническое задание"
                  icon={techQuestIcon}
                  splitLines={2}
                  highlight="copy"
               />
               <DevWorkStep
                  number={2}
                  title="Подбор оптимальных решений"
                  description="Даем несколько вариантов реализации под ваш бюджет, объясняем плюсы и минусы каждого варианта"
                  icon={findingBestSolutionIcon}
                  splitLines={3}
               />
               <DevWorkStep
                  number={3}
                  title="Показываем результаты"
                  description="Начинаем реализацию, показываем результаты работы. Отправляем текстовые версии и записываем скринкасты с объяснениями"
                  icon={showResultIcon}
                  splitLines={2}
                  highlight="zap"
               />
            </Flex>
         </Flex>
      </div>
   );
};
