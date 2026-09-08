import * as React from 'react';

/** Sale / urgency label. Terracotta Rust pill with bold white text — large-or-bold text only. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'accent' | 'primary' | 'tint';
  children?: React.ReactNode;
}

export declare function Badge(props: BadgeProps): JSX.Element;
