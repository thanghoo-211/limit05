import React from 'react';

const base = {
  font: 'inherit',
  fontFamily: 'var(--font-body)',
  fontWeight: 'var(--weight-semibold)',
  borderRadius: 'var(--radius-sm)',
  border: '1px solid transparent',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--sp-sm)',
  textDecoration: 'none',
  transition: 'var(--transition-control)',
  whiteSpace: 'nowrap'
};

const sizes = {
  sm: { padding: '10px 20px', fontSize: '14px' },
  md: { padding: '14px 28px', fontSize: '16px' },
  lg: { padding: '18px 36px', fontSize: '18px' }
};

const variants = {
  primary: { background: 'var(--action-primary)', color: 'var(--action-primary-text)', boxShadow: 'var(--shadow-button)' },
  ghost: { background: 'transparent', color: 'var(--text-body)', borderColor: 'var(--border-subtle)', boxShadow: 'none' },
  accent: { background: 'var(--action-accent)', color: 'var(--action-accent-text)', boxShadow: 'var(--shadow-button)' }
};

export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  focusRing = false,
  fullWidth = false,
  as = 'button',
  children,
  style,
  ...rest
}) {
  const Tag = as;
  const [hover, setHover] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const s = {
    ...base,
    ...sizes[size],
    ...v,
    width: fullWidth ? '100%' : undefined,
    filter: hover && !disabled ? 'brightness(var(--hover-brightness))' : undefined,
    boxShadow: hover && !disabled && variant !== 'ghost' ? 'var(--shadow-button-hover)' : v.boxShadow,
    background: hover && !disabled && variant === 'ghost' ? 'var(--surface-tint)' : v.background,
    opacity: disabled ? 0.45 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
    outline: focusRing ? 'var(--focus-ring)' : undefined,
    outlineOffset: focusRing ? 'var(--focus-ring-offset)' : undefined,
    ...style
  };
  return (
    <Tag
      style={s}
      disabled={as === 'button' ? disabled : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
