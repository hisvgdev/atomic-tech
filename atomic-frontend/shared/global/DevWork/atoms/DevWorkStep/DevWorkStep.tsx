import { FC } from 'react';
import { DevWorkStepProps } from './DevWorkStep.types';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import CustomSplittedText from '@/shared/ui/custom/atom/CustomSplittedText';
import { Copy, Zap } from 'lucide-react';
import Image from 'next/image';
import { inter } from '@/constants/fonts/inter/inter.constants';

export const DevWorkStep: FC<DevWorkStepProps> = (props) => {
   const { number, title, description, icon, splitLines = 1, highlight } = props;
   return (
      <Flex w="full" align="center" gap="15rem" justify="center">
         <Flex direction="column" gap={7} align="start">
            <Flex direction="column" gap={10} align="start">
               <Heading as="h2" fontSize="4rem" fontWeight="bold">
                  {number}.
               </Heading>
               <Box position="relative">
                  <CustomSplittedText text={title} lines={splitLines} lineHeight="3rem" />
                  {highlight && (
                     <Box position="absolute" bottom="0" right={number === 1 ? '20%' : '0%'}>
                        {number === 1 ? (
                           <Copy color="#5547FF" />
                        ) : (
                           <Zap fill="#5547FF" color="#5547FF" />
                        )}
                     </Box>
                  )}
               </Box>
            </Flex>
            <Text maxW="3/4" className={`${inter.className} leading-6`}>
               {description}
            </Text>
         </Flex>
         <Image src={icon} alt="step-icon" width={460} height={290} className="object-cover" />
      </Flex>
   );
};
