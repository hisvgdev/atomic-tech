import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { LucideRussianRuble, Mountain, Trophy } from 'lucide-react';
import { FC, useState } from 'react';
import { ForecastSectionProps } from './ForecastSection.types';
import FeatureCard from '../../atoms/FeatureCard';
import ShareForecast from '../../atoms/ShareForecast';
import HeaderSection from '../../atoms/HeaderSection';
import { inter } from '@/constants/fonts/inter/inter.constants';
import { useIsMobile } from '@/hooks/useMediaQuery';
import ContactRequestLayout from '@/shared/global/ContactRequest/organism';

export const ForecastSection: FC<ForecastSectionProps> = () => {
   const isMobile = useIsMobile();
   const [isOpen, setIsOpen] = useState(false);
   const handleOpen = () => setIsOpen(true);
   const handleClose = () => setIsOpen(false);
   return (
      <Flex direction="column" gap={{ base: '10', lg: '24' }}>
         <HeaderSection
            title="Узнайте прогноз окупаемости разработки"
            isCenter={isMobile ? true : false}
            fontSizeMobile="1.75rem"
            isInsideToMain
         >
            <Text fontSize="1rem" fontWeight="light" className={`${inter.className}`}>
               Изучим ваш запрос, предложим разные варианты и{' '}
               <Text as="span" fontStyle="italic" fontWeight="medium">
                  объясним всё простым языком
               </Text>
            </Text>
         </HeaderSection>
         <Flex direction={{ base: 'column', lg: 'row' }} gap={10} maxW="5xl">
            <FeatureCard
               title="3 варианта стоимости"
               description="Предложим три варианта разработки и расскажем о преимуществах каждого из них."
               icon={LucideRussianRuble}
            />
            <FeatureCard
               title="Возможные риски и подводные камни"
               description="Расскажем все подробно и простым языком."
               icon={Mountain}
            />
            <FeatureCard
               title="Окупаемость и реалистичный результат работы"
               description="Вы будете понимать заранее, какого результата ожидать."
               icon={Trophy}
               reverse
            />
         </Flex>
         <ShareForecast handleOpen={handleOpen} />
         <ContactRequestLayout handleClose={handleClose} isOpen={isOpen} />
      </Flex>
   );
};
