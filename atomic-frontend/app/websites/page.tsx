import Grid from '@/components/websites/Grid';
import React, { Suspense } from 'react';
import Loading from './loading';

export const metadata = {
   title: 'Websites',
   description: "This is a websites page who's developing in our atomic teams",
};

export default function Websites() {
   return (
      <Suspense fallback={<Loading />}>
         <Grid />
      </Suspense>
   );
}
