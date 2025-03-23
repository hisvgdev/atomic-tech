import React from "react";

export interface HeaderSectionProps {
  title: string;
  fontSizeMobile?: string;
  lineHeight?: string;
  titleWidth?: string;
  children: React.ReactNode
  isCenter?: boolean
}