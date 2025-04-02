import { Box, Heading, VStack, Text, Icon, Circle } from '@chakra-ui/react';
import { FC } from 'react';
import { FeatureCardProps } from './FeatureCard.types';
import { inter } from '@/constants/fonts/inter/inter.constants';

export const FeatureCard: FC<FeatureCardProps> = (props) => {
   const { title, description, icon, reverse = false } = props;
   return (
      <Box
         w="full"
         h="17rem"
         bg={{ base: '#F4F4F4', _dark: '#FFFFFF1A' }}
         borderRadius="2xl"
         p={6}
         display="flex"
         flexDir="column"
         gap={8}
         justifyContent={reverse ? 'space-between' : 'flex-start'}
      >
         {reverse ? (
            <VStack align="start" spaceY={4}>
               <Heading size="md" fontWeight="semibold" className={`${inter.className}`}>
                  {title}
               </Heading>
               <Text fontSize="sm" fontWeight="normal" className={`${inter.className}`}>
                  {description}
               </Text>
            </VStack>
         ) : (
            <Circle
               size={16}
               bg="#CECAFF"
               display="flex"
               alignItems="center"
               justifyContent="center"
            >
               <Circle
                  size={10}
                  bg="#5547FF"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
               >
                  <Icon as={icon} boxSize={5} color="#CECAFF" />
               </Circle>
            </Circle>
         )}

         {!reverse ? (
            <VStack align="start" spaceY="4">
               <Heading size="md" fontWeight="semibold" className={`${inter.className}`}>
                  {title}
               </Heading>
               <Text fontSize="sm" fontWeight="normal" className={`${inter.className}`}>
                  {description}
               </Text>
            </VStack>
         ) : (
            <Circle
               size={16}
               bg="#CECAFF"
               display="flex"
               alignItems="center"
               justifyContent="center"
            >
               <Circle
                  size={10}
                  bg="#5547FF"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
               >
                  <Icon as={icon} boxSize={5} color="#CECAFF" />
               </Circle>
            </Circle>
         )}
      </Box>
   );
};
