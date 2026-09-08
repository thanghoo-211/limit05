import React from 'react';

const SRC = {
  forest: 'logo-mark-forest.png',
  white: 'logo-mark-white.png',
  original: 'logo-mark.png'
};

export function BrandMark({
  tone = 'forest',
  size = 40,
  wordmark = true,
  assetBase = 'assets/',
  style,
  ...rest
}) {
  const color = tone === 'white' ? 'var(--text-on-inverse)' : 'var(--text-heading)';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--sp-sm)', ...style }} {...rest}>
      <img
        src={assetBase + (SRC[tone] || SRC.forest)}
        alt="Limit05"
        style={{ height: size, width: 'auto', display: 'block' }}
      />
      {wordmark ? (
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 'var(--weight-xbold)',
            fontSize: size * 0.5,
            letterSpacing: 'var(--ls-h1)',
            color
          }}
        >
          Limit05
        </span>
      ) : null}
    </span>
  );
}
