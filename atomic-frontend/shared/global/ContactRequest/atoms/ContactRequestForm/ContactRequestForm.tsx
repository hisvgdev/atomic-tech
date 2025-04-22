'use client';

import { inter } from '@/constants/fonts/inter/inter.constants';
import { CircleX } from 'lucide-react';
import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react';

import { FC, useState } from 'react';
import { ContactRequestFormProps } from './ContactRequestForm.types';
import { Formik, Form, Field } from 'formik';
import { Toaster, toaster } from '@/shared/ui/chakra/toaster';
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
   email: Yup.string().email('Неверный формат email').required('Обязательное поле'),
   number: Yup.string()
      .matches(/^\d+$/, 'Допустимы только цифры')
      .min(10, 'Минимум 10 цифр')
      .required('Обязательное поле'),
   telegram: Yup.string()
      .matches(/^@[\w\d_]+$/, 'Ник должен начинаться с "@" и содержать буквы/цифры')
      .required('Обязательное поле'),
});

export const ContactRequestForm: FC<ContactRequestFormProps> = ({ handleClose }) => {
   const [loading, setLoading] = useState(false);

   return (
      <Box bg="#F4F4F4" p="11" rounded="3xl" maxW="2xl" mb="20" position="relative">
         <Formik
            initialValues={{ email: '', number: '', telegram: '' }}
            validationSchema={ContactSchema}
            onSubmit={async (values, actions) => {
               setLoading(true);
               try {
                  await fetch('/api/contact', {
                     method: 'POST',
                     headers: {
                        'Content-Type': 'application/json',
                     },
                     body: JSON.stringify(values),
                  });
                  actions.resetForm();
                  toaster.create({
                     description: 'Ваш запрос был успешно отправлен!',
                     type: 'success',
                  });
               } catch (err) {
                  console.error('Ошибка отправки формы:', err);
                  toaster.create({
                     description: 'Ошибка отправки формы',
                     type: 'error',
                  });
               } finally {
                  setLoading(false);
               }
            }}
         >
            {({ errors, touched }) => (
               <Form>
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
                              className={inter.className}
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
                           <Flex width="full" direction="column" gap="2">
                              <Field name="email">
                                 {({ field }: any) => (
                                    <Input
                                       {...field}
                                       placeholder="example@mail.com"
                                       backgroundColor="white"
                                       borderColor={
                                          errors.email && touched.email ? 'red.400' : '#C8C8C8'
                                       }
                                       borderWidth="1px"
                                       py="5"
                                       px="3"
                                       rounded="lg"
                                       fontWeight="light"
                                       color="black"
                                       _placeholder={{ color: 'black' }}
                                    />
                                 )}
                              </Field>
                              <span
                                 className="text-xs"
                                 style={{
                                    color: '#ef4444',
                                 }}
                              >
                                 {errors.email}
                              </span>
                           </Flex>
                           <Flex direction="column" width="full" gap="2">
                              <Field name="number">
                                 {({ field }: any) => (
                                    <Input
                                       {...field}
                                       placeholder="Ваш номер"
                                       backgroundColor="white"
                                       borderColor={
                                          errors.number && touched.number ? 'red.400' : '#C8C8C8'
                                       }
                                       borderWidth="1px"
                                       py="5"
                                       px="3"
                                       rounded="lg"
                                       fontWeight="light"
                                       color="black"
                                       _placeholder={{ color: 'black' }}
                                    />
                                 )}
                              </Field>
                              <span
                                 className="text-xs"
                                 style={{
                                    color: '#ef4444',
                                 }}
                              >
                                 {errors.number}
                              </span>
                           </Flex>
                           <Flex direction="column" gap="2" width="full">
                              <Field name="telegram">
                                 {({ field }: any) => (
                                    <Input
                                       {...field}
                                       placeholder="@telegram"
                                       backgroundColor="white"
                                       borderColor={
                                          errors.telegram && touched.telegram
                                             ? 'red.400'
                                             : '#C8C8C8'
                                       }
                                       borderWidth="1px"
                                       py="5"
                                       px="3"
                                       rounded="lg"
                                       fontWeight="light"
                                       color="black"
                                       _placeholder={{ color: 'black' }}
                                    />
                                 )}
                              </Field>
                              <span
                                 className="text-xs"
                                 style={{
                                    color: '#ef4444',
                                 }}
                              >
                                 {errors.telegram}
                              </span>
                           </Flex>
                        </Flex>
                     </Flex>

                     <Button
                        type="submit"
                        loading={loading}
                        loadingText="Отправка..."
                        bg="linear-gradient(258.97deg, #4A41FF -3.45%, #6EB2FF 55.6%, #19C8E3 100.54%)"
                        width={{ base: 'full', lg: '15rem' }}
                        borderRadius="11.25rem"
                        p="7"
                        boxShadow="0px 4px 10px 0px #00000026, 0px 4px 15px 0px #FFFFFF40 inset"
                        _hover={{ filter: 'brightness(1.1)' }}
                        _active={{ filter: 'brightness(0.9)' }}
                        fontSize="sm"
                        fontWeight="bold"
                        color="white"
                     >
                        Отправить заявку
                     </Button>
                  </Flex>
               </Form>
            )}
         </Formik>

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
         <Toaster />
      </Box>
   );
};
