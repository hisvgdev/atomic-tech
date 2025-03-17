'use client';

import OurDevelopingHeading from '@/shared/global/OurDevelopingHeading';
import CustomButton, { VariantButton } from '@/shared/ui/custom/atom/CustomButton';
import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import { ProjectsOurDevelopingProps } from './ProjectsOurDeveloping.types';
import ProjectsOurDevelopingWithHeading from '../atoms/ProjectsOurDevelopingWithHeading';
import { usePathname } from 'next/navigation';

export const ProjectsOurDeveloping: FC<ProjectsOurDevelopingProps> = (props) => {
   const { isButtonVisible } = props;
   const pathname = usePathname();
   const descHeading =
      pathname === '/websites'
         ? 'Создаем продукты, которые приносят прибыль вашему бизнесу'
         : 'Создаем мобильные приложения, которые приносят прибыль';
   return (
      <Flex direction="column" gap="36">
         <OurDevelopingHeading title="Принципы нашей работы" desc={descHeading} />

         <Flex align="center" justify="center" gap="24">
            <ProjectsOurDevelopingWithHeading
               title="Соединяем маркетинг и дизайн"
               description="Что сделает сайт функциональным и отличающимся от конкурентов."
            />
            <ProjectsOurDevelopingWithHeading
               title="Работаем на результат"
               description="Сайт будет продавать и демонстрировать ценность продукта."
            />
            <ProjectsOurDevelopingWithHeading
               title="Исследуем ЦА"
               description="Поэтому знаем, какой подход эффективен именно для вашего проекта."
            />
         </Flex>

         {isButtonVisible && isButtonVisible && (
            <Flex align="center" justify="center">
               <CustomButton
                  variant={VariantButton.gradient}
                  text="Обсудить разработку"
                  width="20rem"
                  isUppercase
               />
            </Flex>
         )}
      </Flex>
   );
};
