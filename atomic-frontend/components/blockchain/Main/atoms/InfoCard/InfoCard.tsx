import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { inter } from '@/constants/fonts/inter/inter.constants';
import { InfoCardProps } from './InfoCard.types';

export const InfoCard: FC<InfoCardProps> = (props) => {
   const { title, description, bgColor, iconBgColor, icon, textColor = 'white' } = props;
   return (
      <Box w="xs" h="48" bg={bgColor} rounded="0.625rem" p="6" position="relative">
         <Flex direction="column" gap="2">
            <Box maxW="48">
               {' '}
               <Text
                  color={textColor}
                  fontSize="md"
                  fontWeight="semibold"
                  className={`${inter.className} leading-6`}
               >
                  {title}
               </Text>
            </Box>
            <Text
               color={textColor}
               fontSize="sm"
               fontWeight="light"
               className={`${inter.className}`}
            >
               {description}
            </Text>
         </Flex>
         <Box position="absolute" top="-10%" right="-5%" bgColor="#232323" rounded="2xl" p="2">
            <Box bg={iconBgColor} rounded="full" p="3">
               {icon}
            </Box>
         </Box>
      </Box>
   );
};
