'use client';

import OurDevelopingHeading from '@/shared/global/OurDevelopingHeading';
import CustomButton, { VariantButton } from '@/shared/ui/custom/atom/CustomButton';
import { Flex } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { ProjectsOurDevelopingProps } from './ProjectsOurDeveloping.types';
import ProjectsOurDevelopingWithHeading from '../atoms/ProjectsOurDevelopingWithHeading';
import { usePathname } from 'next/navigation';
import ContactRequestLayout from '../../ContactRequest/organism';

export const ProjectsOurDeveloping: FC<ProjectsOurDevelopingProps> = (props) => {
   const { isButtonVisible } = props;
   const [isOpen, setIsOpen] = useState(false);
   const handleOpen = () => setIsOpen(true);
   const handleClose = () => setIsOpen(false);
   const pathname = usePathname();
   const descHeading =
      pathname === '/websites'
         ? 'Создаем продукты, которые приносят прибыль вашему бизнесу'
         : 'Создаем мобильные приложения, которые приносят прибыль';
   return (
      <>
         <Flex direction="column" gap={{ base: '14', lg: '36' }}>
            <OurDevelopingHeading title="Принципы нашей работы" desc={descHeading} />

            <Flex
               align="center"
               justify="center"
               direction={{ base: 'column', lg: 'row' }}
               gap={{ base: '8', lg: '24' }}
            >
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
                     onClick={handleOpen}
                  />
               </Flex>
            )}
         </Flex>
         <ContactRequestLayout handleClose={handleClose} handleOpen={handleOpen} isOpen={isOpen} />
      </>
   );
};
