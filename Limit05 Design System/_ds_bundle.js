/* @ds-bundle: {"format":4,"namespace":"Limit05DesignSystem_2b3c93","components":[{"name":"BrandMark","sourcePath":"components/brand/BrandMark.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Field","sourcePath":"components/core/Field.jsx"}],"sourceHashes":{"components/brand/BrandMark.jsx":"855685d5893e","components/core/Badge.jsx":"52df4190f53e","components/core/Button.jsx":"00984c2c4492","components/core/Card.jsx":"7bfd1fd8ee64","components/core/Chip.jsx":"ca1589f8c212","components/core/Field.jsx":"49796a97d348","ui_kits/landing/commerce.jsx":"d3f26ff219e8","ui_kits/landing/features.jsx":"bf03660dce1f","ui_kits/landing/header.jsx":"b4c0d84f245f","ui_kits/landing/hero.jsx":"9d975e547d39"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Limit05DesignSystem_2b3c93 = window.Limit05DesignSystem_2b3c93 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/BrandMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SRC = {
  forest: 'logo-mark-forest.png',
  white: 'logo-mark-white.png',
  original: 'logo-mark.png'
};
function BrandMark({
  tone = 'forest',
  size = 40,
  wordmark = true,
  assetBase = 'assets/',
  style,
  ...rest
}) {
  const color = tone === 'white' ? 'var(--text-on-inverse)' : 'var(--text-heading)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-sm)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: assetBase + (SRC[tone] || SRC.forest),
    alt: "Limit05",
    style: {
      height: size,
      width: 'auto',
      display: 'block'
    }
  }), wordmark ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-xbold)',
      fontSize: size * 0.5,
      letterSpacing: 'var(--ls-h1)',
      color
    }
  }, "Limit05") : null);
}
Object.assign(__ds_scope, { BrandMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/BrandMark.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  tone = 'accent',
  children,
  style,
  ...rest
}) {
  const tones = {
    accent: {
      background: 'var(--action-accent)',
      color: 'var(--action-accent-text)'
    },
    primary: {
      background: 'var(--action-primary)',
      color: 'var(--action-primary-text)'
    },
    tint: {
      background: 'var(--surface-tint)',
      color: 'var(--text-heading)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-bold)',
      fontSize: '.78rem',
      lineHeight: 1.2,
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  sm: {
    padding: '10px 20px',
    fontSize: '14px'
  },
  md: {
    padding: '14px 28px',
    fontSize: '16px'
  },
  lg: {
    padding: '18px 36px',
    fontSize: '18px'
  }
};
const variants = {
  primary: {
    background: 'var(--action-primary)',
    color: 'var(--action-primary-text)',
    boxShadow: 'var(--shadow-button)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-body)',
    borderColor: 'var(--border-subtle)',
    boxShadow: 'none'
  },
  accent: {
    background: 'var(--action-accent)',
    color: 'var(--action-accent-text)',
    boxShadow: 'var(--shadow-button)'
  }
};
function Button({
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
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: s,
    disabled: as === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  bordered = true,
  tint = false,
  padding = 'var(--sp-lg)',
  title,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
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
    }
  }, rest), title ? /*#__PURE__*/React.createElement("strong", {
    style: {
      display: 'block',
      marginBottom: 'var(--sp-sm)',
      color: 'var(--action-primary)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--size-h3)',
      lineHeight: 'var(--lh-h3)'
    }
  }, title) : null, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Chip({
  active = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  hint,
  type = 'text',
  placeholder,
  focused = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const active = focus || focused;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      margin: 'var(--sp-md) 0',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      color: 'var(--text-muted)',
      fontSize: '.88rem',
      marginBottom: 'var(--sp-xs)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
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
    }
  }, rest)), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      color: 'var(--text-muted)',
      fontSize: 'var(--size-caption)',
      marginTop: 'var(--sp-xs)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Field.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/commerce.jsx
try { (() => {
const {
  Button,
  Card,
  Field,
  Badge,
  BrandMark
} = window.Limit05DesignSystem_2b3c93;
function CartDrawer({
  open,
  count,
  onClose,
  onCheckout,
  onQty
}) {
  const unit = 590000;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(25,36,32,.35)',
      backdropFilter: 'blur(2px)',
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity var(--dur-fast) var(--ease-out)',
      zIndex: 40
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      width: '400px',
      maxWidth: '92vw',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-raised)',
      zIndex: 41,
      transform: open ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform var(--dur-fast) var(--ease-out)',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'var(--sp-lg)',
      borderBottom: '1px solid var(--divider)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h3)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-heading)'
    }
  }, "Gi\u1ECF h\xE0ng"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "\u0110\xF3ng",
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      color: 'var(--text-muted)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x",
    style: {
      width: 20,
      height: 20
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: 'var(--sp-lg)'
    }
  }, count === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "Ch\u01B0a c\xF3 s\u1EA3n ph\u1EA9m n\xE0o.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-md)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/product-2.png",
    alt: "",
    style: {
      width: '88px',
      height: '88px',
      objectFit: 'cover',
      borderRadius: 'var(--radius-sm)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: 'block',
      color: 'var(--text-heading)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, "Sling Limit05 \xB7 Sage Grey"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      color: 'var(--text-muted)',
      fontSize: 'var(--size-caption)',
      margin: '2px 0 var(--sp-sm)'
    }
  }, "Ripstop 210D \xB7 420g"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onQty(-1),
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      padding: '6px 10px',
      color: 'var(--text-heading)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "minus",
    style: {
      width: 14,
      height: 14
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: '22px',
      textAlign: 'center',
      fontWeight: 600,
      fontVariantNumeric: 'tabular-nums'
    }
  }, count), /*#__PURE__*/React.createElement("button", {
    onClick: () => onQty(1),
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      padding: '6px 10px',
      color: 'var(--text-heading)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "plus",
    style: {
      width: 14,
      height: 14
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: 'var(--text-heading)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, (unit * count).toLocaleString('vi-VN'), "\u20AB"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--sp-lg)',
      borderTop: '1px solid var(--divider)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 'var(--sp-md)',
      color: 'var(--text-muted)',
      fontSize: 'var(--size-caption)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Giao h\xE0ng"), /*#__PURE__*/React.createElement("span", null, "Mi\u1EC5n ph\xED")), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    disabled: count === 0,
    onClick: onCheckout
  }, "Thanh to\xE1n \xB7 ", (unit * count).toLocaleString('vi-VN'), "\u20AB"))));
}
function Checkout({
  step,
  onSubmit,
  onClose
}) {
  if (!step) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      background: 'rgba(25,36,32,.45)',
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--sp-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '480px',
      maxWidth: '100%',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-raised)',
      padding: 'var(--sp-lg)',
      fontFamily: 'var(--font-body)'
    }
  }, step === 'form' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h3)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-heading)'
    }
  }, "Th\xF4ng tin giao h\xE0ng"), /*#__PURE__*/React.createElement(Field, {
    label: "H\u1ECD v\xE0 t\xEAn",
    placeholder: "Nguy\u1EC5n V\u0103n A"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i",
    placeholder: "09xx xxx xxx"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "\u0110\u1ECBa ch\u1EC9",
    placeholder: "S\u1ED1 nh\xE0, \u0111\u01B0\u1EDDng, qu\u1EADn"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-sm)',
      marginTop: 'var(--sp-md)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onSubmit
  }, "\u0110\u1EB7t h\xE0ng"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onClose
  }, "Quay l\u1EA1i"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 'var(--sp-md) 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: '56px',
      height: '56px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-tint)',
      color: 'var(--action-primary)',
      margin: '0 auto var(--sp-md)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 28,
      height: 28
    }
  })), /*#__PURE__*/React.createElement("strong", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h3)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-heading)'
    }
  }, "\u0110\xE3 nh\u1EADn \u0111\u01A1n h\xE0ng"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      margin: 'var(--sp-sm) 0 var(--sp-lg)'
    }
  }, "Ch\xFAng t\xF4i g\u1ECDi x\xE1c nh\u1EADn trong 2 gi\u1EDD l\xE0m vi\u1EC7c."), /*#__PURE__*/React.createElement(Button, {
    onClick: onClose
  }, "Xong"))));
}
function BuyBar({
  visible,
  onAdd,
  onBuy
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 30,
      background: 'rgba(255,255,255,.94)',
      backdropFilter: 'blur(12px)',
      borderTop: '1px solid var(--ink-a08)',
      boxShadow: 'var(--shadow-raised)',
      transform: visible ? 'translateY(0)' : 'translateY(100%)',
      transition: 'transform var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--sp-md) var(--sp-lg)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-md)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/product-1.png",
    alt: "",
    style: {
      width: '44px',
      height: '44px',
      objectFit: 'cover',
      borderRadius: 'var(--radius-sm)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: 'block',
      color: 'var(--text-heading)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: '15px'
    }
  }, "Sling Limit05"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: '13px'
    }
  }, "590.000\u20AB \xB7 mi\u1EC5n ph\xED giao h\xE0ng")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 'var(--sp-sm)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onAdd
  }, "Th\xEAm gi\u1ECF h\xE0ng"), /*#__PURE__*/React.createElement(Button, {
    onClick: onBuy
  }, "Mua ngay"))));
}
function Footer() {
  const link = {
    color: 'var(--text-on-inverse)',
    opacity: .8,
    textDecoration: 'none',
    fontSize: '14px'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-inverse)',
      marginTop: 'var(--sp-xl)',
      padding: 'var(--sp-xl) var(--sp-lg) 120px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: 'var(--sp-xl)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BrandMark, {
    tone: "white",
    size: 36,
    assetBase: "../../assets/"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-on-inverse)',
      opacity: .75,
      fontSize: '14px',
      lineHeight: 1.6,
      margin: 'var(--sp-md) 0 0',
      maxWidth: '34ch'
    }
  }, "T\xFAi k\u1EF9 thu\u1EADt cho di chuy\u1EC3n h\xE0ng ng\xE0y. T\u1EF1 do \u2014 Kh\xE1c bi\u1EC7t \u2014 B\u1EC1n b\u1EC9.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--sp-sm)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-on-inverse)',
      fontWeight: 600,
      fontSize: '14px',
      marginBottom: 'var(--sp-xs)'
    }
  }, "S\u1EA3n ph\u1EA9m"), /*#__PURE__*/React.createElement("a", {
    href: "#tinh-nang",
    style: link
  }, "T\xEDnh n\u0103ng"), /*#__PURE__*/React.createElement("a", {
    href: "#chat-lieu",
    style: link
  }, "Ch\u1EA5t li\u1EC7u"), /*#__PURE__*/React.createElement("a", {
    href: "#thong-so",
    style: link
  }, "Th\xF4ng s\u1ED1")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--sp-sm)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-on-inverse)',
      fontWeight: 600,
      fontSize: '14px',
      marginBottom: 'var(--sp-xs)'
    }
  }, "H\u1ED7 tr\u1EE3"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, "B\u1EA3o h\xE0nh 24 th\xE1ng"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, "\u0110\u1ED5i tr\u1EA3 30 ng\xE0y"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, "Li\xEAn h\u1EC7"))));
}
Object.assign(window, {
  CartDrawer,
  Checkout,
  BuyBar,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/commerce.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/features.jsx
try { (() => {
const {
  Card,
  Chip,
  Button
} = window.Limit05DesignSystem_2b3c93;
const FEATURES = [{
  icon: 'layout-grid',
  title: 'Mỗi món đồ, một ô cố định riêng',
  body: 'Sáu ngăn phân vùng cho sạc, cáp, tai nghe, ví, chìa khoá và điện thoại. Rút ra dùng ngay, không phải lục tung túi.'
}, {
  icon: 'droplets',
  title: 'Ripstop chống thấm nước nhẹ',
  body: 'Vải 210D dệt gia cường ô vuông, phủ PU mặt trong. Mưa rào bất chợt trên đường không làm ướt thiết bị.'
}, {
  icon: 'shield',
  title: 'Ngăn đệm cho thiết bị',
  body: 'Khoang chính lót mút 4mm, đủ cho tablet 11 inch. Không trầy xước khi đặt cạnh chìa khoá.'
}, {
  icon: 'feather',
  title: '420g, đeo cả ngày',
  body: 'Dây đeo dệt 38mm với đệm vai tháo rời. Trọng lượng dồn về hông, không kéo vai khi đi xe máy.'
}];
function Features() {
  return /*#__PURE__*/React.createElement("section", {
    id: "tinh-nang",
    style: {
      maxWidth: 'var(--container-max)',
      margin: 'var(--sp-xl) auto 0',
      padding: '0 var(--sp-lg)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h2)',
      lineHeight: 'var(--lh-h2)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-heading)',
      margin: '0 0 var(--sp-lg)',
      maxWidth: '22ch'
    }
  }, "B\u1ED1n quy\u1EBFt \u0111\u1ECBnh k\u1EF9 thu\u1EADt, kh\xF4ng ph\u1EA3i b\u1ED1n t\xEDnh n\u0103ng"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 'var(--sp-md)'
    }
  }, FEATURES.map(f => /*#__PURE__*/React.createElement(Card, {
    key: f.title,
    bordered: false
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: '44px',
      height: '44px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-tint)',
      color: 'var(--action-primary)',
      marginBottom: 'var(--sp-md)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": f.icon,
    style: {
      width: 22,
      height: 22
    }
  })), /*#__PURE__*/React.createElement("strong", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h3)',
      lineHeight: 'var(--lh-h3)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--action-primary)',
      marginBottom: 'var(--sp-sm)'
    }
  }, f.title), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, f.body)))));
}
function Material() {
  return /*#__PURE__*/React.createElement("section", {
    id: "chat-lieu",
    style: {
      maxWidth: 'var(--container-max)',
      margin: 'var(--sp-xl) auto 0',
      padding: '0 var(--sp-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.05fr',
      gap: 'var(--sp-xl)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/product-2.png",
    alt: "Chi ti\u1EBFt v\u1EA3i ripstop",
    style: {
      width: '100%',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h2)',
      lineHeight: 'var(--lh-h2)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-heading)',
      margin: '0 0 var(--sp-md)'
    }
  }, "Gi\u1ED1ng m\u1ED9t chi\u1EBFc khay chia \u0111\u1ED3 thu nh\u1ECF"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)',
      margin: '0 0 var(--sp-md)',
      maxWidth: '52ch'
    }
  }, "Thay v\xEC n\xE9m t\u1EA5t c\u1EA3 ch\xECa kho\xE1, s\u1EA1c c\xE1p v\xE0 v\xED ti\u1EC1n l\u1ED9n x\u1ED9n v\xE0o m\u1ED9t chi\u1EBFc h\u1ED9p l\u1EDBn, m\u1ED7i m\xF3n \u0111\u1ED3 \u0111\u1EC1u c\xF3 s\u1EB5n m\u1ED9t \xF4 c\u1ED1 \u0111\u1ECBnh ri\xEAng bi\u1EC7t \u0111\u1EC3 b\u1EA1n r\xFAt ra d\xF9ng ngay l\u1EADp t\u1EE9c."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'grid',
      gap: 'var(--sp-sm)'
    }
  }, ['Khoá kéo YKK chống nước', 'Móc treo chìa khoá cố định', 'Ngăn sau chống trộm RFID', 'Đáy gia cường 500D'].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--sp-sm)',
      alignItems: 'center',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 18,
      height: 18,
      color: 'var(--action-primary)'
    }
  }), t))))));
}
function Specs() {
  const rows = [['Chất liệu', 'Ripstop 210D phủ PU, đáy 500D'], ['Kích thước', '28 × 16 × 9 cm'], ['Trọng lượng', '420 g'], ['Số ngăn', '6 (1 chính, 3 phụ, 1 RFID, 1 chìa khoá)'], ['Dây đeo', 'Dệt 38mm, điều chỉnh 70–130 cm'], ['Bảo hành', '24 tháng']];
  return /*#__PURE__*/React.createElement("section", {
    id: "thong-so",
    style: {
      maxWidth: 'var(--container-max)',
      margin: 'var(--sp-xl) auto 0',
      padding: '0 var(--sp-lg)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h2)',
      lineHeight: 'var(--lh-h2)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-heading)',
      margin: '0 0 var(--sp-lg)'
    }
  }, "Th\xF4ng s\u1ED1"), /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r[0],
    style: {
      display: 'grid',
      gridTemplateColumns: '220px 1fr',
      gap: 'var(--sp-md)',
      padding: 'var(--sp-md) var(--sp-lg)',
      borderTop: i ? '1px solid var(--divider)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--size-caption)',
      fontWeight: 'var(--weight-medium)'
    }
  }, r[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)'
    }
  }, r[1])))));
}
Object.assign(window, {
  Features,
  Material,
  Specs
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/features.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/header.jsx
try { (() => {
const {
  BrandMark,
  Button,
  Badge
} = window.Limit05DesignSystem_2b3c93;
function Announcement({
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-tint)',
      color: 'var(--text-heading)',
      fontSize: '14px',
      fontWeight: 500,
      textAlign: 'center',
      padding: '10px var(--sp-md)',
      position: 'relative'
    }
  }, "Mi\u1EC5n ph\xED giao h\xE0ng to\xE0n qu\u1ED1c cho \u0111\u01A1n t\u1EEB 500.000\u20AB \u2014 nh\u1EADn h\xE0ng trong 2 ng\xE0y", /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "\u0110\xF3ng",
    style: {
      position: 'absolute',
      right: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'none',
      border: 0,
      cursor: 'pointer',
      color: 'var(--text-muted)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x",
    style: {
      width: 16,
      height: 16
    }
  })));
}
function Header({
  cartCount,
  onCart,
  onBuy
}) {
  const link = {
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
    fontWeight: 500,
    color: 'var(--text-body)',
    textDecoration: 'none'
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(244,248,250,.88)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--ink-a08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--sp-md) var(--sp-lg)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-lg)'
    }
  }, /*#__PURE__*/React.createElement(BrandMark, {
    size: 34,
    assetBase: "../../assets/"
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--sp-lg)',
      marginLeft: 'var(--sp-md)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#tinh-nang",
    style: link
  }, "T\xEDnh n\u0103ng"), /*#__PURE__*/React.createElement("a", {
    href: "#chat-lieu",
    style: link
  }, "Ch\u1EA5t li\u1EC7u"), /*#__PURE__*/React.createElement("a", {
    href: "#thong-so",
    style: link
  }, "Th\xF4ng s\u1ED1")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-md)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onCart,
    "aria-label": "Gi\u1ECF h\xE0ng",
    style: {
      position: 'relative',
      background: 'none',
      border: 0,
      cursor: 'pointer',
      color: 'var(--text-heading)',
      display: 'flex',
      padding: '6px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "shopping-bag",
    style: {
      width: 22,
      height: 22
    }
  }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      background: 'var(--action-accent)',
      color: '#fff',
      fontSize: '11px',
      fontWeight: 700,
      minWidth: '18px',
      height: '18px',
      borderRadius: 'var(--radius-pill)',
      display: 'grid',
      placeItems: 'center',
      padding: '0 4px'
    }
  }, cartCount)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onBuy
  }, "Mua ngay"))));
}
Object.assign(window, {
  Announcement,
  Header
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/hero.jsx
try { (() => {
const {
  Button,
  Badge,
  Chip
} = window.Limit05DesignSystem_2b3c93;
function Hero({
  onBuy,
  onAdd
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-tint)',
      borderRadius: 'var(--radius-lg)',
      margin: 'var(--sp-lg) auto 0',
      maxWidth: 'var(--container-max)',
      padding: 'var(--sp-xl) var(--sp-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr 1fr',
      gap: 'var(--sp-xl)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, null, "Sale -20% \xB7 c\xF2n 12 su\u1EA5t"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h1-fluid)',
      lineHeight: 'var(--lh-h1)',
      letterSpacing: 'var(--ls-h1)',
      fontWeight: 'var(--weight-xbold)',
      color: 'var(--text-heading)',
      margin: 'var(--sp-md) 0 var(--sp-sm)'
    }
  }, "Kh\xF4ng ph\u1EA3i", /*#__PURE__*/React.createElement("br", null), "gi\u1EDBi h\u1EA1n"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '19px',
      lineHeight: 1.5,
      color: 'var(--text-muted)',
      margin: '0 0 var(--sp-lg)',
      maxWidth: '46ch'
    }
  }, "T\xFAi sling k\u1EF9 thu\u1EADt ripstop ch\u1ED1ng th\u1EA5m, h\u1EC7 th\u1ED1ng \u0111a ng\u0103n khoa h\u1ECDc. M\u1ED7i m\xF3n \u0111\u1ED3 m\u1ED9t \xF4 c\u1ED1 \u0111\u1ECBnh ri\xEAng."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-sm)',
      flexWrap: 'wrap',
      marginBottom: 'var(--sp-lg)'
    }
  }, /*#__PURE__*/React.createElement(Chip, null, "Ch\u1ED1ng n\u01B0\u1EDBc"), /*#__PURE__*/React.createElement(Chip, null, "\u0110a ng\u0103n"), /*#__PURE__*/React.createElement(Chip, null, "Ripstop 210D"), /*#__PURE__*/React.createElement(Chip, null, "420g")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--sp-md)',
      marginBottom: 'var(--sp-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-xbold)',
      fontSize: '34px',
      color: 'var(--text-heading)'
    }
  }, "590.000\u20AB"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '18px',
      color: 'var(--text-muted)',
      textDecoration: 'line-through'
    }
  }, "740.000\u20AB")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-sm)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onBuy
  }, "Mua ngay"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "ghost",
    onClick: onAdd
  }, "Th\xEAm gi\u1ECF h\xE0ng"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-raised)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/product-1.png",
    alt: "T\xFAi sling Limit05",
    style: {
      width: '100%',
      display: 'block'
    }
  }))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/hero.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BrandMark = __ds_scope.BrandMark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Field = __ds_scope.Field;

})();
