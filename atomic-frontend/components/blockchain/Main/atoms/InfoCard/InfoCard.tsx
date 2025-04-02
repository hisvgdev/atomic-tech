import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { inter } from '@/constants/fonts/inter/inter.constants';
import { InfoCardProps } from './InfoCard.types';

export const InfoCard: FC<InfoCardProps> = (props) => {
   const { title, description, bgColor, iconBgColor, icon, textColor = 'white' } = props;
   return (
      <Box w="xs" h="48" bg={bgColor} rounded="3xl" p="3" position="relative">
         <Flex direction="column" gap="2" h="36">
            <Box maxW="32" h="full">
               <Text
                  color={textColor}
                  fontSize="sm"
                  fontWeight="semibold"
                  lineHeight="1.5"
                  className={`${inter.className} leading-6`}
               >
                  {title}
               </Text>
            </Box>
            <Box mt="auto">
               <Text
                  color={textColor}
                  fontSize="sm"
                  fontWeight="light"
                  className={`${inter.className}`}
               >
                  {description}
               </Text>
            </Box>
         </Flex>
         <Box
            position="absolute"
            top="-10%"
            right="-5%"
            bgColor={{ base: 'white', _dark: '#232323' }}
            rounded="xl"
            p="2"
         >
            <Box bg={iconBgColor} rounded="full" p="3">
               {icon}
            </Box>
         </Box>
      </Box>
   );
};
