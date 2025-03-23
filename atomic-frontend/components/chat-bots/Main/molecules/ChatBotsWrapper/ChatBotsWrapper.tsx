import { Box, Heading, Text } from '@chakra-ui/react';
import ChatBotsPreview from '../../atoms/ChatBotsPreview/molecules';

export const ChatBotsWrapper = () => {
   return (
      <Box pt="20" display="flex" flexDirection="column" gap={{ base: '20', lg: '34' }}>
         <Box maxW={{ base: 'xl', lg: '3xl' }}>
            <Heading
               as="h3"
               fontSize={{ base: 'xl', lg: '2xl' }}
               fontWeight="lighter"
               lineHeight={{ base: '2rem', lg: '3.5rem' }}
               textAlign={{ base: 'center', lg: 'start' }}
            >
               Создаем чат-боты, которые{' '}
               <Text as="span" fontWeight="bold">
                  Стабильно приносят прибыль
               </Text>
            </Heading>
         </Box>
         <ChatBotsPreview />
      </Box>
   );
};
