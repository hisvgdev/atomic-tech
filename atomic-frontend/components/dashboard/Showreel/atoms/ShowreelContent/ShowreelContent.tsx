import CustomTitle from '@/shared/ui/custom/atom/CustomTitle';
import { Button, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import YouTube from 'react-youtube';
import atomicCodePreviewVideo from '@/public/assets/images/atomicCodePreviewVideo.png';
import atomicCodePlayVideo from '@/public/assets/images/atomicCodeStartVideo.svg';
import { ShowreelContentProps } from './ShowreelContent.types';
import { inter } from '@/constants/fonts/inter/inter.constants';

export const ShowreelContent: FC<ShowreelContentProps> = (props) => {
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
            <Text
               fontWeight="light"
               maxW={{ base: '100%', lg: '65%' }}
               textAlign="center"
               overflow="hidden"
               className={`${inter.className} text-md`}
            >
               В нем мы показали еще одну часть <br />
               <b className="font-bold italic">наших проектов</b>
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
                  className="object-cover"
               />
               <Button position="absolute">
                  <Image src={atomicCodePlayVideo} alt="play-button" />
               </Button>
            </Flex>
         ) : (
            <YouTube videoId="xyqhDOkr4hs" opts={videoOptions} />
         )}
      </Flex>
   );
};
