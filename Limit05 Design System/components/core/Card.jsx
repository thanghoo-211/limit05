import React from 'react';

export function Card({ bordered = true, tint = false, padding = 'var(--sp-lg)', title, children, style, ...rest }) {
  return (
    <div
      style={{
        background: tint ? 'var(--surface-tint)' : 'var(--surface-card)',
        color: 'var(--text-body)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--size-body)',
        lineHeight: 'var(--lh-body)',
        border: bordered ? 'var(--border-hairline)' : '1px solid transparent',
        borderRadius: 'var(--radius-md)',
        padding,
        boxShadow: 'var(--shadow-card)',
        ...style
      }}
      {...rest}
    >
      {title ? (
        <strong
          style={{
            display: 'block',
            marginBottom: 'var(--sp-sm)',
            color: 'var(--action-primary)',
            fontFamily: 'var(--font-display)',
            fontWeight: 'var(--weight-semibold)',
            fontSize: 'var(--size-h3)',
            lineHeight: 'var(--lh-h3)'
          }}
        >
          {title}
        </strong>
      ) : null}
      {children}
    </div>
  );
}
