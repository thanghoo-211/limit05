import * as React from 'react';

/**
 * The single conversion control of the system. Primary is Forest Juniper; there is at
 * most one primary button in view at a time.
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** primary = Forest Juniper CTA, ghost = Sage Mist outline, accent = Terracotta Rust (urgency only) */
  variant?: 'primary' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  /** Renders the Terracotta Rust focus ring for specimen/documentation purposes. */
  focusRing?: boolean;
  fullWidth?: boolean;
  /** Render as another element, e.g. 'a'. */
  as?: 'button' | 'a';
  children?: React.ReactNode;
}

export declare function Button(props: ButtonProps): JSX.Element;
