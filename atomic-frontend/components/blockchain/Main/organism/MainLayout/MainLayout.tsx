import React from 'react';
import MainWrapper from '../../molecules/MainWrapper';
import { getAllTechnologies, getAllWorkCases } from '@/service/api/handlers.api';

export default async function MainLayout() {
   const technologies = await getAllTechnologies();
   return <MainWrapper technologies={technologies} />;
}
