import React from 'react';

export function Chip({ active = false, children, style, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-block',
        fontFamily: 'var(--font-body)',
        fontSize: '.85rem',
        lineHeight: 1.3,
        padding: '6px 14px',
        borderRadius: 'var(--radius-pill)',
        border: '1px solid var(--border-subtle)',
        color: active ? 'var(--text-on-inverse)' : 'var(--text-muted)',
        background: active ? 'var(--action-primary)' : 'transparent',
        borderColor: active ? 'var(--action-primary)' : 'var(--border-subtle)',
        ...style
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
