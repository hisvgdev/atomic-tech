import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { ProjectsOurDevelopingWithHeadingProps } from './ProjectsOurDevelopingWithHeading.types';
import { inter } from '@/constants/fonts/inter/inter.constants';

export const ProjectsOurDevelopingWithHeading: FC<ProjectsOurDevelopingWithHeadingProps> = (
   props,
) => {
   const { title, description } = props;
   return (
      <Box maxW="xs">
         <Flex direction="column" gap="7" align="start">
            <Heading
               as="h3"
               fontWeight="semibold"
               fontSize="xl"
               lineHeight="2rem"
               className={`${inter.className}`}
            >
               {title}
            </Heading>
            <Text fontWeight="light" fontSize="sm" className={`${inter.className}`}>
               {description}
            </Text>
         </Flex>
      </Box>
   );
};
