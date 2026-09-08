import * as React from 'react';

/** Feature / category pill: Sage Mist outline, Muted Olive text. Selected state fills Forest Juniper. */
export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  active?: boolean;
  children?: React.ReactNode;
}

export declare function Chip(props: ChipProps): JSX.Element;
