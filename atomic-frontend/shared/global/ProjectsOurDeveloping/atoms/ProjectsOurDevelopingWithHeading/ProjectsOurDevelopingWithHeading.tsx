import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { ProjectsOurDevelopingWithHeadingProps } from './ProjectsOurDevelopingWithHeading.types';
import { inter } from '@/constants/fonts/inter/inter.constants';

export const ProjectsOurDevelopingWithHeading: FC<ProjectsOurDevelopingWithHeadingProps> = (
   props,
) => {
   const { title, description } = props;
   return (
      <Box maxW={{ base: '100%', lg: 'xs' }}>
         <Flex
            direction="column"
            gap={{ base: '3', lg: '7' }}
            align={{ base: 'center', lg: 'start' }}
         >
            <Heading
               as="h3"
               fontWeight="semibold"
               fontSize={{ base: 'md', lg: 'xl' }}
               lineHeight="2rem"
               className={`${inter.className}`}
               textAlign={{ base: 'center', lg: 'start' }}
            >
               {title}
            </Heading>
            <Text
               fontWeight="light"
               fontSize="sm"
               className={`${inter.className}`}
               textAlign={{ base: 'center', lg: 'start' }}
            >
               {description}
            </Text>
         </Flex>
      </Box>
   );
};
