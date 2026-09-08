import * as React from 'react';

/**
 * White surface on Frost White, 16px radius, soft ink-tinted shadow and an optional
 * 1px Sage Mist hairline. The container for every feature block and product tile.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 1px Sage Mist hairline. Default true. */
  bordered?: boolean;
  /** Use Glacial Ice Blue instead of white — for callouts, not for product tiles. */
  tint?: boolean;
  padding?: string;
  /** Renders an H3-scale Forest Juniper heading above the body. */
  title?: React.ReactNode;
  children?: React.ReactNode;
}

export declare function Card(props: CardProps): JSX.Element;
