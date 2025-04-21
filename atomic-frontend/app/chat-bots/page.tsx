import Grid from '@/components/chat-bots/Grid';
import React, { Suspense } from 'react';
import Loading from './loading';

export const metadata = {
   title: 'Chatbots',
   description: "This is a chatbots page who's developing in our atomic teams",
};

export default function ChatBots() {
   return (
      <Suspense fallback={<Loading />}>
         <Grid />
      </Suspense>
   );
}
