import { FC } from 'react';
import { DevWorkStepProps } from './DevWorkStep.types';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import CustomSplittedText from '@/shared/ui/custom/atom/CustomSplittedText';
import { Copy, Zap } from 'lucide-react';
import Image from 'next/image';
import { inter } from '@/constants/fonts/inter/inter.constants';
import { useIsMobile } from '@/hooks/useMediaQuery';

export const DevWorkStep: FC<DevWorkStepProps> = (props) => {
   const { number, title, description, icon, splitLines = 1, highlight } = props;
   const isMobile = useIsMobile();
   return (
      <Flex
         w="full"
         align="center"
         justify="center"
         gap={{ base: '10', lg: '15rem' }}
         direction={{ base: 'column', lg: 'row' }}
      >
         <Flex
            direction="column"
            justify={{ base: 'center', lg: 'center' }}
            align={{ base: 'center', lg: 'start' }}
            gap={{ base: '3', lg: '7' }}
         >
            <Flex
               direction={{ base: 'row', lg: 'column' }}
               gap={{ base: '2', lg: '10' }}
               align={{ base: 'start', lg: 'start' }}
            >
               <Heading as="h2" fontSize={{ base: 'xl', lg: '4rem' }} fontWeight="bold">
                  {number}.
               </Heading>
               <Box position="relative">
                  <CustomSplittedText
                     text={title}
                     lines={isMobile ? 1 : splitLines}
                     lineHeight={isMobile ? '2rem' : '3rem'}
                  />
                  {!isMobile && highlight && (
                     <Box
                        position="absolute"
                        bottom="0"
                        right={number === 1 ? (isMobile ? '10%' : '20%') : '0%'}
                     >
                        {number === 1 ? (
                           <Copy color="#5547FF" />
                        ) : (
                           <Zap fill="#5547FF" color="#5547FF" />
                        )}
                     </Box>
                  )}
               </Box>
            </Flex>
            <Text
               maxW={{ base: '100%', lg: '3/4' }}
               fontSize={{ base: 'sm' }}
               lineHeight={{ base: '1.2rem' }}
               className={`${inter.className}`}
               textAlign={{ base: 'center', lg: 'start' }}
            >
               {description}
            </Text>
         </Flex>
         <Image src={icon} alt="step-icon" width={460} height={290} className="object-cover" />
      </Flex>
   );
};
