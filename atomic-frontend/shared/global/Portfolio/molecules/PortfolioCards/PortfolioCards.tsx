'use client';

import React, { FC } from 'react';
import { PortfolioCardsProps } from './PortfolioCards.types';
import { PortfolioCard } from '../../atom/PortfolioCard/PortfolioCard';

export const PortfolioCards: FC<PortfolioCardsProps> = (props) => {
   return <PortfolioCard />;
};
