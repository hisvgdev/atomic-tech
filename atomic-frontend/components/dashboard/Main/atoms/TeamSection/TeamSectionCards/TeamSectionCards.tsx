import React, { FC } from 'react';
import { TeamSectionCard } from './TeamSectionCard/TeamSectionCard';
import { TeamSectionCardsProps } from './TeamSectionCards.types';

export const TeamSectionCards: FC<TeamSectionCardsProps> = (props) => {
   const { emblaRef } = props;
   return <TeamSectionCard emblaRef={emblaRef} />;
};
