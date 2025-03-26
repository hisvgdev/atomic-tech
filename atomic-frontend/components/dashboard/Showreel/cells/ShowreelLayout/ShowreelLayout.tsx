import React from 'react';
import ShowreelWrapper from '../../molecules/ShowreelWrapper';
import { handleGetPromo } from '@/service/api/promo.api';

export async function ShowreelLayout() {
   // const showreelData = await handleGetPromo();

   // if (!showreelData || showreelData.length === 0) {
   //    return null;
   // }

   return <ShowreelWrapper />;
}
