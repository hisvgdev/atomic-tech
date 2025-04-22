import React from 'react';
import HeaderWrapper from '../../cells';
import { RootHeader } from '@/types/frontend/header.types';

export default async function HeaderLayout({ header }: { header: RootHeader | null }) {
   return <HeaderWrapper header={header as RootHeader} />;
}
