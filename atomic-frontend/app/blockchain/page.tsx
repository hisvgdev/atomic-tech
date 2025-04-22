import { Grid } from '@/components/blockchain/Grid';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
   title: 'Блокчейн',
   description:
      'Страница о блокчейн-разработке, создаваемая командой Atomic, с преимуществами и отзывами.',
   keywords: 'блокчейн, технологии, Atomic команда, инновации, отзывы, преимущества, разработки',
   openGraph: {
      title: 'Блокчейн',
      description:
         'Страница о блокчейн-разработке, создаваемая командой Atomic, с преимуществами и отзывами.',
      url: 'https://atomic-tech.ru/blockchain',
      type: 'website',
      images: [
         {
            url: 'https://atomic-tech.ru/assets/images/blockchain-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Блокчейн от команды Atomic',
         },
      ],
   },
   twitter: {
      card: 'summary_large_image',
      title: 'Блокчейн',
      description:
         'Страница о блокчейн-разработке, создаваемая командой Atomic, с преимуществами и отзывами.',
      images: [
         {
            url: 'https://atomic-tech.ru/assets/images/blockchain-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Блокчейн от команды Atomic',
         },
      ],
   },
   category: 'Блокчейн',
};

export default function Blockchain() {
   return (
      <>
         <Grid />
      </>
   );
}
