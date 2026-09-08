import React from 'react';

export function Field({ label, hint, type = 'text', placeholder, focused = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const active = focus || focused;
  return (
    <label style={{ display: 'block', margin: 'var(--sp-md) 0', fontFamily: 'var(--font-body)', ...style }}>
      {label ? (
        <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '.88rem', marginBottom: 'var(--sp-xs)' }}>
          {label}
        </span>
      ) : null}
      <input
        type={type}
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: '100%',
          font: 'inherit',
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--size-body)',
          padding: '12px 14px',
          border: '1px solid ' + (active ? 'var(--action-accent)' : 'var(--border-subtle)'),
          borderRadius: 'var(--radius-sm)',
          background: 'var(--surface-card)',
          color: 'var(--text-body)',
          outline: active ? '2px solid var(--action-accent)' : 'none'
        }}
        {...rest}
      />
      {hint ? (
        <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: 'var(--size-caption)', marginTop: 'var(--sp-xs)' }}>
          {hint}
        </span>
      ) : null}
    </label>
  );
}
