import { inter } from '@/constants/fonts/inter/inter.constants';
import { CircleX } from 'lucide-react';
import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { ContactRequestFormProps } from './ContactRequestForm.types';

export const ContactRequestForm: FC<ContactRequestFormProps> = (props) => {
   const { handleClose } = props;
   return (
      <Box bg="#F4F4F4" p="11" rounded="3xl" maxW="2xl" mb="20" position="relative">
         <form>
            <Flex direction="column" gap={{ base: '5', lg: '10' }}>
               <Flex direction="column" gap={{ base: '5', lg: '10' }}>
                  <Flex direction="column">
                     <Heading color="black" fontWeight="bold" fontSize="xl">
                        Оставьте контакт
                     </Heading>
                     <Text
                        color="black"
                        fontWeight="light"
                        fontSize="md"
                        className={`${inter.className}`}
                     >
                        и мы свяжемся с вами в ближайшее время
                     </Text>
                  </Flex>
                  <Flex
                     width="full"
                     gap="4"
                     direction={{ base: 'column', lg: 'row' }}
                     align="center"
                  >
                     <Input
                        borderWidth="1px"
                        borderColor="#C8C8C8"
                        rounded="lg"
                        py="5"
                        px="3"
                        backgroundColor="white"
                        placeholder="example@mail.com"
                        fontWeight="light"
                        color="black"
                        className={`${inter.className}`}
                        _placeholder={{
                           color: 'black',
                        }}
                     />
                     <Input
                        borderWidth="1px"
                        borderColor="#C8C8C8"
                        rounded="lg"
                        py="5"
                        px="3"
                        backgroundColor="white"
                        placeholder="Ваш номер"
                        fontWeight="light"
                        color="black"
                        className={`${inter.className} text-black`}
                        _placeholder={{
                           color: 'black',
                        }}
                     />
                     <Input
                        borderWidth="1px"
                        borderColor="#C8C8C8"
                        rounded="lg"
                        py="5"
                        px="3"
                        backgroundColor="white"
                        placeholder="Ник в телеграм"
                        fontWeight="light"
                        color="black"
                        className={`${inter.className}`}
                        _placeholder={{
                           color: 'black',
                        }}
                     />
                  </Flex>
               </Flex>
               <Button
                  bg="linear-gradient(258.97deg, #4A41FF -3.45%, #6EB2FF 55.6%, #19C8E3 100.54%)"
                  width={{ base: 'full', lg: '15rem' }}
                  borderRadius="180px"
                  p="7"
                  boxShadow="0px 4px 10px 0px #00000026, 0px 4px 15px 0px #FFFFFF40 inset"
                  _hover={{
                     filter: 'brightness(1.1)',
                  }}
                  _active={{
                     filter: 'brightness(0.9)',
                  }}
                  fontSize="sm"
                  fontWeight="bold"
                  color="white"
               >
                  Отправить заявку
               </Button>
            </Flex>
         </form>
         <Box position="absolute" right="4" top="4" color="black" fontSize="xl" fontWeight="bold">
            <button
               onClick={handleClose}
               style={{
                  opacity: '20%',
               }}
            >
               <CircleX />
            </button>
         </Box>
      </Box>
   );
};
