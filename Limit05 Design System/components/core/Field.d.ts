import * as React from 'react';

/** Label-above input. White fill, Sage Mist border, 8px radius; focus swaps border and outline to Terracotta Rust. */
export interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  /** Force the focus treatment (specimen use). */
  focused?: boolean;
}

export declare function Field(props: FieldProps): JSX.Element;
