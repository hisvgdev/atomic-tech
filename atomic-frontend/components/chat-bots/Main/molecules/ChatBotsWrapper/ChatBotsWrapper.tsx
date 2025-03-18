import { Box, Heading, Text } from '@chakra-ui/react';
import ChatBotsPreview from '../../atoms/ChatBotsPreview/molecules';

export const ChatBotsWrapper = () => {
   return (
      <Box pt="20" display="flex" flexDirection="column" gap="32">
         <Box maxW="3xl">
            <Heading as="h3" fontSize="2xl" fontWeight="lighter" lineHeight="3.5rem">
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
