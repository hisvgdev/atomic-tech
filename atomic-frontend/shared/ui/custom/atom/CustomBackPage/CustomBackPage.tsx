'use client';

import { FC } from 'react';
import { CustomBackPageProps } from './CustomBackPage.types';
import { MoveLeft } from 'lucide-react';
import { Box, Button, Container } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { MotionEntity } from '@/shared/ui/animation';

export const CustomBackPage: FC<CustomBackPageProps> = (props) => {
   const {} = props;
   const router = useRouter();
   return (
      <MotionEntity initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
         <Container>
            <Box py={{ base: '8', lg: '14' }}>
               <Button className="flex items-center gap-6" onClick={() => router.back()}>
                  <MoveLeft />
                  <span>Вернуться назад</span>
               </Button>
            </Box>
         </Container>
      </MotionEntity>
   );
};
