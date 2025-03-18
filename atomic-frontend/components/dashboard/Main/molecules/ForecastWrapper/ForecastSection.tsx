import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { LucideRussianRuble, Mountain, Trophy } from 'lucide-react';
import { FC } from 'react';
import { ForecastSectionProps } from './ForecastSection.types';
import FeatureCard from '../../atoms/FeatureCard';
import ShareForecast from '../../atoms/ShareForecast';
import HeaderSection from '../../atoms/HeaderSection';
import { inter } from '@/constants/fonts/inter/inter.constants';

export const ForecastSection: FC<ForecastSectionProps> = () => {
   return (
      <Flex direction="column" gap="24">
         <HeaderSection title="Узнайте прогноз окупаемости разработки">
            <Text fontSize="1rem" fontWeight="light" color="white" className={`${inter.className}`}>
               Изучим ваш запрос, предложим разные варианты и{' '}
               <Text as="span" fontStyle="italic" fontWeight="medium">
                  объясним всё простым языком
               </Text>
            </Text>
         </HeaderSection>
         <Flex gap={10} maxW="5xl">
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
         <ShareForecast />
      </Flex>
   );
};
