import Grid from '@/components/websites/Grid';
import React, { Suspense } from 'react';
import Loading from './loading';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Веб-сайты',
   description:
      'Страница, посвященная разработке веб-сайтов командой Atomic, с примерами и решениями.',
   keywords: 'веб-сайты, веб-разработка, Atomic команда, технологии, сайты, интернет-решения',
   openGraph: {
      title: 'Веб-сайты',
      description:
         'Страница, посвященная разработке веб-сайтов командой Atomic, с примерами и решениями.',
      url: 'https://atomic-tech.ru/websites',
      type: 'website',
      images: [
         {
            url: 'https://atomic-tech.ru/assets/images/websites-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Веб-сайты от команды Atomic',
         },
      ],
   },
   twitter: {
      card: 'summary_large_image',
      title: 'Веб-сайты',
      description:
         'Страница, посвященная разработке веб-сайтов командой Atomic, с примерами и решениями.',
      images: [
         {
            url: 'https://atomic-tech.ru/assets/images/websites-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Веб-сайты от команды Atomic',
         },
      ],
   },
   category: 'Веб-сайты',
};

export default function Websites() {
   return (
      <Suspense fallback={<Loading />}>
         <Grid />
      </Suspense>
   );
}
