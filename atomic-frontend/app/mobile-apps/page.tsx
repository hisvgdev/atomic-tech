import Grid from '@/components/mobile-apps/Grid';
import React, { Suspense } from 'react';
import Loading from './loading';

export const metadata = {
   title: 'MobileApps',
   description: "This is a mobileapps page who's developing in our atomic teams",
};

export default function MobileApps() {
   return (
      <Suspense fallback={<Loading />}>
         <Grid />
      </Suspense>
   );
}
