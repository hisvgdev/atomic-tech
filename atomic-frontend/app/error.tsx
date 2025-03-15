'use client';

import { ErrorPageProps } from '@/types/frontend/page.types';
import { useEffect } from 'react';

export default function Error({ error, reset }: ErrorPageProps) {
   useEffect(() => {
      console.error('Error from SSR', error);
   }, []);

   return (
      <main className="grid min-h-full place-items-center bg-transparent px-6 py-24 sm:py-32 lg:px-8">
         <div className="text-center">
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
               Неизвестная ошибка
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-200">
               Что-то пошло не так. Если вы считаете что это ошибка, пожалуйста свяжитесь с
               поддержкой
            </p>
         </div>
      </main>
   );
}
