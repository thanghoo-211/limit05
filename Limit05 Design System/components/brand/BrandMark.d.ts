import * as React from 'react';

/**
 * The Limit05 dragon mark, optionally locked up with the wordmark set in SVN-Gilroy XBold.
 * Intentional addition — the source bundle ships the mark as an image, not as a component.
 */
export interface BrandMarkProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** forest = for light grounds, white = for Forest Juniper grounds, original = supplied artwork (white body, red eye) */
  tone?: 'forest' | 'white' | 'original';
  /** Mark height in px. Wordmark is half this. */
  size?: number;
  wordmark?: boolean;
  /** Path prefix to /assets, relative to the consuming page. */
  assetBase?: string;
}

export declare function BrandMark(props: BrandMarkProps): JSX.Element;
