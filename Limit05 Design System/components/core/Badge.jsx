import React from 'react';

export function Badge({ tone = 'accent', children, style, ...rest }) {
  const tones = {
    accent: { background: 'var(--action-accent)', color: 'var(--action-accent-text)' },
    primary: { background: 'var(--action-primary)', color: 'var(--action-primary-text)' },
    tint: { background: 'var(--surface-tint)', color: 'var(--text-heading)' }
  };
  return (
    <span
      style={{
        display: 'inline-block',
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--weight-bold)',
        fontSize: '.78rem',
        lineHeight: 1.2,
        padding: '5px 12px',
        borderRadius: 'var(--radius-pill)',
        ...tones[tone],
        ...style
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
