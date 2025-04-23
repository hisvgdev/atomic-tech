import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { avatars } from '../../organism/DevTeamWrapper/DevTeamWrapper.constants';
import atomicImage from '@/public/assets/images/atomicIcon.svg';
import Image from 'next/image';
import { MotionBox } from '@/shared/ui/animation';
import { inter } from '@/constants/fonts/inter/inter.constants';
import CustomChart from '@/shared/ui/custom/atom/CustomChart/CustomChart';
import { motion } from 'framer-motion';

const services = [
   'CRM',
   'Блокчейн',
   'Интернет-магазин',
   'Сайт',
   'Телеграм-боты',
   'Софт',
   'Мобильные приложения',
   'Игры',
   'Нейросети',
];

const ServiceCard = ({ service }: { service: string }) => (
   <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{
         opacity: 1,
         y: 0,
         transition: { type: 'spring', stiffness: 200, damping: 12 },
      }}
      whileHover={{ scale: 1.05 }}
      borderWidth={1}
      borderColor="black"
      rounded="full"
      py={2}
      px={7}
      bg="white"
      color="black"
   >
      <Text fontSize="sm">{service}</Text>
   </MotionBox>
);

const TypewriterNumber = ({ value }: { value: number }) => {
   const [displayedValue, setDisplayedValue] = useState(0);

   useEffect(() => {
      let i = 0;
      const interval = setInterval(() => {
         if (i <= value) {
            setDisplayedValue(i);
            i += Math.floor(value / 100) || 1;
         } else {
            clearInterval(interval);
         }
      }, 20);

      return () => clearInterval(interval);
   }, [value]);

   return <motion.span>{displayedValue}</motion.span>;
};

const StatsCard = ({ value, label }: { value: number; label: string }) => (
   <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      textAlign="center"
      maxW={24}
   >
      <Text fontSize="3rem" fontWeight="bold">
         <TypewriterNumber value={value} />
      </Text>
      <Text fontSize="base" fontWeight="light" className={`${inter.className} leading-5`}>
         {label}
      </Text>
   </MotionBox>
);

const TeamAvatars = () => (
   <Flex align="center" justify="center" position="relative">
      {avatars.map((avatar, index) => {
         const isCenter = index === Math.floor(avatars.length / 2);
         const shift = index - Math.floor(avatars.length / 2);
         const positionStyle = isCenter
            ? {}
            : {
                 transform: `translateX(${shift * -18}px)`,
                 zIndex: 5 - Math.abs(shift),
              };

         return (
            <Box
               key={index}
               className={`${avatar.size} border-2 border-white`}
               rounded="full"
               overflow="hidden"
               bg="gray.200"
               style={positionStyle}
            >
               <Image
                  src={avatar.src}
                  alt={`Avatar ${index + 1}`}
                  className="w-full h-full object-cover"
               />
            </Box>
         );
      })}
   </Flex>
);

export const CardsDevTeam = () => {
   return (
      <Flex gap={10} pb={{ base: '0', lg: '20' }} direction={{ base: 'column', lg: 'row' }}>
         <Flex direction="column" gap={9}>
            <MotionBox
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               bg="white"
               maxW="96"
               w="full"
               px={14}
               py={5}
               rounded="4xl"
            >
               <Flex direction="column" align="center" gap={4}>
                  <TeamAvatars />
                  <MotionBox
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     textAlign="center"
                     w="full"
                  >
                     <Text
                        fontSize="md"
                        fontWeight="semibold"
                        color="black"
                        className={`${inter.className} leading-6`}
                     >
                        Команда профессионалов
                     </Text>
                     <Text
                        color="black"
                        fontSize="sm"
                        fontWeight="normal"
                        className={`${inter.className} leading-6`}
                     >
                        Справимся с любой задачей
                     </Text>
                  </MotionBox>
               </Flex>
            </MotionBox>

            <MotionBox
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               bg="gray.800"
               maxW="22.5rem"
               h="11.5rem"
               rounded="1.875rem"
               display="flex"
               alignItems="center"
               justifyContent="center"
            >
               <Image src={atomicImage} alt="atomic" />
            </MotionBox>
         </Flex>

         <Flex direction="column" gap={9}>
            <MotionBox
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               bg="whiteAlpha.200"
               backdropFilter="blur(10px)"
               rounded="3xl"
               w={{ base: 'full', lg: '96' }}
               h={{ base: '14.68rem', lg: '1/2' }}
               p={6}
               style={{ boxShadow: '0px 4px 15px 0px #FFFFFF26 inset' }}
            >
               <Text
                  fontSize="sm"
                  fontWeight="medium"
                  maxW="52"
                  className={`${inter.className} leading-6`}
               >
                  Создаем продукты,{' '}
                  <Text as="span" fontStyle="italic" fontWeight="bold">
                     которые приносят прибыль
                  </Text>{' '}
                  вашему бизнесу
               </Text>
               <Box w="full" h="full" mb="8">
                  <CustomChart />
               </Box>
            </MotionBox>

            <Flex justify={{ base: 'start', lg: 'center' }} gap={9}>
               {[25, 40, 235].map((value, index) => (
                  <StatsCard
                     key={index}
                     value={value}
                     label={
                        index === 0
                           ? 'Успешных проектов'
                           : index === 1
                             ? 'Сделано сайтов'
                             : 'Довольных клиентов'
                     }
                  />
               ))}
            </Flex>
         </Flex>

         <MotionBox
            position="relative"
            w="full"
            h="96"
            bg="white"
            rounded="1.875rem"
            overflow="hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
         >
            <Flex direction="column" align="center" py="9" gap={{ base: '4', lg: '12' }}>
               <Text
                  textAlign="center"
                  fontSize="1.375rem"
                  fontWeight="bold"
                  color="black"
                  maxW="17.5rem"
               >
                  Мы предоставляем услуги
               </Text>
               <Flex alignItems="center" justify="center" wrap="wrap" gap="4">
                  {services.map((service, index) => (
                     <ServiceCard key={index} service={service} />
                  ))}
               </Flex>
            </Flex>
         </MotionBox>
      </Flex>
   );
};
