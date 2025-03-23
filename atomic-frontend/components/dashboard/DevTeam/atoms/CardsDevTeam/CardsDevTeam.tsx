import CustomChart from '@/shared/ui/custom/atom/CustomChart/CustomChart';
import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import planck from 'planck';
import { avatars } from '../../organism/DevTeamWrapper/DevTeamWrapper.constants';
import atomicImage from '@/public/assets/images/atomicIcon.svg';
import Image from 'next/image';
import { MotionBox } from '@/shared/ui/animation';
import { inter } from '@/constants/fonts/inter/inter.constants';

export const CardsDevTeam = () => {
   const [items, setItems] = useState<{ id: number; x: number; y: number; angle: number }[]>([]);
   const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
   const worldRef = useRef<planck.World | null>(null);
   const objectsRef = useRef<planck.Body[]>([]);
   // const containerRef = useRef<HTMLDivElement | null>(null);

   // useEffect(() => {
   //    const updateSize = () => {
   //       if (containerRef.current) {
   //          setContainerSize({
   //             width: containerRef.current.offsetWidth,
   //             height: containerRef.current.offsetHeight,
   //          });
   //       }
   //    };
   //    updateSize();
   //    window.addEventListener('resize', updateSize);
   //    return () => window.removeEventListener('resize', updateSize);
   // }, []);

   // useEffect(() => {
   //    if (!containerSize.width || !containerSize.height) return;

   //    const world = new planck.World(planck.Vec2(0, 10));
   //    worldRef.current = world;
   //    const scale = 30;

   //    const createWall = (x: number, y: number, width: number, height: number) => {
   //       const wall = world.createBody({
   //          type: 'static',
   //          position: planck.Vec2(x / scale, y / scale),
   //       });
   //       wall.createFixture(planck.Box(width / scale, height / scale));
   //    };

   //    createWall(containerSize.width / 2, containerSize.height - 10, containerSize.width / 2, 10);
   //    createWall(10, containerSize.height / 2, 10, containerSize.height / 2);
   //    createWall(containerSize.width - 10, containerSize.height / 2, 10, containerSize.height / 2);

   //    const newItems = Array.from({ length: 10 }, (_, i) => ({
   //       id: i + 1,
   //       x: Math.random() * containerSize.width,
   //       y: (Math.random() * containerSize.height) / 2,
   //       angle: 0,
   //    }));

   //    setItems(newItems);
   //    objectsRef.current = newItems.map(({ x, y }) => {
   //       const body = world.createBody({
   //          type: 'dynamic',
   //          position: planck.Vec2(x / scale, y / scale),
   //          angle: Math.random() * Math.PI,
   //       });
   //       body.createFixture(planck.Box(40 / scale, 20 / scale), {
   //          density: 1,
   //          friction: 0.3,
   //          restitution: 0.8,
   //       });

   //       const velocityX = (Math.random() - 0.5) * 5;
   //       const velocityY = Math.random() * -5;
   //       body.setLinearVelocity(planck.Vec2(velocityX, velocityY));
   //       body.setAngularVelocity((Math.random() - 0.5) * 4);

   //       body.applyForceToCenter(planck.Vec2((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2));

   //       return body;
   //    });

   //    const update = () => {
   //       world.step(1 / 40);
   //       setItems((prevItems) =>
   //          prevItems.map((item, index) => {
   //             const body = objectsRef.current[index];
   //             const pos = body.getPosition();
   //             return {
   //                ...item,
   //                x: pos.x * scale,
   //                y: Math.min(pos.y * scale, 250),
   //                angle: body.getAngle(),
   //             };
   //          }),
   //       );

   //       requestAnimationFrame(update);
   //    };
   //    requestAnimationFrame(update);
   // }, [containerSize]);

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
                  <Flex align="center" justify="center" position="relative">
                     {avatars.map((avatar, index) => {
                        const isCenter = index === Math.floor(avatars.length / 2);
                        const shift = index - Math.floor(avatars.length / 2);
                        const positionStyle = isCenter
                           ? {}
                           : {
                                transform: 'translateX(${shift * -18}px)',
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
               p={6}
            >
               <Text
                  fontSize="sm"
                  fontWeight="medium"
                  maxW="52"
                  color="white"
                  className={`${inter.className} leading-6`}
               >
                  Создаем продукты,{' '}
                  <Text as="span" fontStyle="italic" fontWeight="bold">
                     которые приносят прибыль{' '}
                  </Text>
                  вашему бизнесу
               </Text>
               <Box w="17.8rem" h="8.75rem">
                  <CustomChart />
               </Box>
            </MotionBox>
            <Flex gap={9}>
               {[25, 40, 235].map((value, index) => (
                  <MotionBox
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     textAlign="center"
                     key={index}
                     maxW={24}
                  >
                     <Text fontSize="3.125rem" fontWeight="bold">
                        {value}
                     </Text>
                     <Text
                        fontSize="base"
                        fontWeight="light"
                        className={`${inter.className} leading-5`}
                     >
                        {index === 0
                           ? 'Успешных проектов'
                           : index === 1
                             ? 'Сделано сайтов'
                             : 'Довольных клиентов'}
                     </Text>
                  </MotionBox>
               ))}
            </Flex>
         </Flex>
         <MotionBox
            position="relative"
            w="full"
            h="400px"
            bg="white"
            rounded="1.875rem"
            overflow="hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            // ref={containerRef}
         >
            <Flex direction="column" align="center" pt={9}>
               <Text
                  textAlign="center"
                  fontSize="1.375rem"
                  fontWeight="bold"
                  color="black"
                  maxW="17.5rem"
               >
                  Мы предоставляем услуги
               </Text>
               <Box position="relative" w="full" h="full">
                  {items.map(({ id, x, y, angle }) => (
                     <Box
                        key={id}
                        position="absolute"
                        borderWidth={1}
                        borderColor="black"
                        rounded="full"
                        py={2}
                        px={7}
                        bg="white"
                        transform={`translate(${x}px, ${y}px) rotate(${angle}rad)`}
                     >
                        <Text color="black">CRM</Text>
                     </Box>
                  ))}
               </Box>
            </Flex>
         </MotionBox>
      </Flex>
   );
};
