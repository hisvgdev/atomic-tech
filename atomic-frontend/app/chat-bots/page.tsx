import Grid from '@/components/chat-bots/Grid';
import React, { Suspense } from 'react';
import Loading from './loading';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Чат-боты',
   description:
      'Страница, посвященная разработке чат-ботов нашей командой Atomic, с примерами и решениями.',
   keywords:
      'чат-боты, технологии, Atomic команда, искусственный интеллект, автоматизация, разработки',
   openGraph: {
      title: 'Чат-боты',
      description:
         'Страница, посвященная разработке чат-ботов нашей командой Atomic, с примерами и решениями.',
      url: 'https://atomic-tech.ru/chatbots',
      type: 'website',
      images: [
         {
            url: 'https://atomic-tech.ru/assets/images/chatbots-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Чат-боты от команды Atomic',
         },
      ],
   },
   twitter: {
      card: 'summary_large_image',
      title: 'Чат-боты',
      description:
         'Страница, посвященная разработке чат-ботов нашей командой Atomic, с примерами и решениями.',
      images: [
         {
            url: 'https://atomic-tech.ru/assets/images/chatbots-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Чат-боты от команды Atomic',
         },
      ],
   },
   category: 'Чат-боты',
};

export default function ChatBots() {
   return (
      <Suspense fallback={<Loading />}>
         <Grid />
      </Suspense>
   );
}
