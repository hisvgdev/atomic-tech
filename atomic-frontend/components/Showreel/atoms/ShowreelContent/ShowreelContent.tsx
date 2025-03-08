'use client';

import CustomTitle from '@/ui/custom/atom/CustomTitle';
import { Button, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import YouTube from 'react-youtube';
import atomicCodePreviewVideo from '@/public/assets/images/atomicCodePreviewVideo.png';
import atomicCodeStartVideo from '@/public/assets/images/atomicCodeStartVideo.svg';
import { ShowreelContentProps } from './ShowreelContent.types';

export const ShowreelContent: FC<ShowreelContentProps> = (props) => {
   const {} = props;
   const [isPlaying, setIsPlaying] = useState(false);

   const videoOptions = {
      width: '1160px',
      height: '625px',
      playerVars: {
         autoplay: 1,
      },
   };
   return (
      <Flex direction="column" gap={12} align="center">
         <Flex direction="column" justify="center" align="center" gap="7">
            <CustomTitle size="3rem" title="Посмотрите шоурил" weight="semibold" italic />
            <Text className="font-light text-base max-w-80 text-center overflow-hidden">
               В нем мы показали еще одну часть <b className="font-bold">наших проектов</b>
            </Text>
         </Flex>

         {!isPlaying ? (
            <Flex
               position="relative"
               justify="center"
               align="center"
               cursor="pointer"
               onClick={() => setIsPlaying(true)}
            >
               <Image
                  src={atomicCodePreviewVideo}
                  alt="Видео превью"
                  width={1160}
                  height={625}
                  objectFit="cover"
               />
               <Button position="absolute">
                  <Image src={atomicCodeStartVideo} width={97} height={97} alt="" />
               </Button>
            </Flex>
         ) : (
            <YouTube videoId="xyqhDOkr4hs" opts={videoOptions} />
         )}
      </Flex>
   );
};
