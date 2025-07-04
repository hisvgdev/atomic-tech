'use client';

import { FC } from 'react';
import { CustomBackPageProps } from './CustomBackPage.types';
import { MoveLeft } from 'lucide-react';
import { Box, Button, Container } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import MotionWrapperClient from '@/shared/ui/animation/MotionWrapperClient';

export const CustomBackPage: FC<CustomBackPageProps> = (props) => {
   const {} = props;
   const router = useRouter();
   return (
      <MotionWrapperClient>
         <Container>
            <Box py={{ base: '8', lg: '14' }}>
               <Button className="flex items-center gap-6" onClick={() => router.back()}>
                  <MoveLeft color="black" />
                  <span className="text-black">Вернуться назад</span>
               </Button>
            </Box>
         </Container>
      </MotionWrapperClient>
   );
};
