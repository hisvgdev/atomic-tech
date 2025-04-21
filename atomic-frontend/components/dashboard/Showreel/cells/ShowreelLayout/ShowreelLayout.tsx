import React from 'react';
import { getAllPromo } from '@/service/api/handlers.api';
import ShowreelWrapper from '../../molecules/ShowreelWrapper';

export async function ShowreelLayout() {
   const showreelData = await getAllPromo();

   if (!showreelData || showreelData.length === 0) {
      return null;
   }
   return <ShowreelWrapper videoData={showreelData} />;
}
