import Grid from '@/components/mobile-apps/Grid';
import React, { Suspense } from 'react';
import Loading from './loading';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Мобильные приложения',
   description:
      'Страница, посвященная разработке мобильных приложений командой Atomic, с примерами и решениями.',
   keywords:
      'мобильные приложения, технологии, Atomic команда, разработки, приложения, мобильный софт',
   openGraph: {
      title: 'Мобильные приложения',
      description:
         'Страница, посвященная разработке мобильных приложений командой Atomic, с примерами и решениями.',
      url: 'https://atomic-tech.ru/mobile-apps',
      type: 'website',
      images: [
         {
            url: 'https://atomic-tech.ru/assets/images/mobile-apps-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Мобильные приложения от команды Atomic',
         },
      ],
   },
   twitter: {
      card: 'summary_large_image',
      title: 'Мобильные приложения',
      description:
         'Страница, посвященная разработке мобильных приложений командой Atomic, с примерами и решениями.',
      images: [
         {
            url: 'https://atomic-tech.ru/assets/images/mobile-apps-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Мобильные приложения от команды Atomic',
         },
      ],
   },
   category: 'Мобильные приложения',
};

export default function MobileApps() {
   return (
      <Suspense fallback={<Loading />}>
         <Grid />
      </Suspense>
   );
}
