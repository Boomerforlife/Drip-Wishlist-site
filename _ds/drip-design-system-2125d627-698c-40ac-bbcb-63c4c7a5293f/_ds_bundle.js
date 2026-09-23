/* @ds-bundle: {"format":4,"namespace":"DripDesignSystem_2125d6","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"EmailCapture","sourcePath":"components/forms/EmailCapture.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"a73f1a386e93","components/core/Button.jsx":"738fe953761e","components/forms/EmailCapture.jsx":"6102b5c44928"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DripDesignSystem_2125d6 = window.DripDesignSystem_2125d6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = 'accent'
}) {
  const tones = {
    accent: {
      color: 'var(--accent)',
      border: '1px solid var(--accent)'
    },
    secondary: {
      color: 'var(--secondary)',
      border: '1px solid var(--secondary)'
    },
    text: {
      color: 'var(--text)',
      border: '1px solid var(--text)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-caption)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      padding: '5px 10px',
      borderRadius: 'var(--radius-pill)',
      display: 'inline-flex',
      alignItems: 'center',
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled,
  type = 'button'
}) {
  const pad = size === 'sm' ? '10px 18px' : size === 'lg' ? '18px 32px' : '14px 24px';
  const fontSize = size === 'sm' ? 12 : size === 'lg' ? 15 : 13;
  const base = {
    fontFamily: 'var(--font-display)',
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-wide)',
    fontSize,
    padding: pad,
    border: '1px solid transparent',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'transform var(--dur-fast) var(--ease-editorial), opacity var(--dur-fast) var(--ease-editorial), background var(--dur-fast) var(--ease-editorial)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  };
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--bg)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text)',
      borderColor: 'var(--text)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--accent)',
      borderColor: 'transparent'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      ...base,
      ...variants[variant]
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/EmailCapture.jsx
try { (() => {
const {
  useState
} = React;
function EmailCapture({
  onSubmit,
  placeholder = 'your@school.edu'
}) {
  const [value, setValue] = useState('');
  const [sent, setSent] = useState(false);
  const submit = e => {
    e.preventDefault();
    if (!value) return;
    setSent(true);
    onSubmit && onSubmit(value);
  };
  if (sent) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        color: 'var(--accent)',
        fontSize: 14
      }
    }, "You're on the list. We'll email you when it's your turn.");
  }
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    value: value,
    onChange: e => setValue(e.target.value),
    placeholder: placeholder,
    style: {
      flex: '1 1 220px',
      background: 'transparent',
      border: 'none',
      borderBottom: '1px solid var(--secondary)',
      color: 'var(--text)',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      padding: '10px 2px',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    variant: "primary"
  }, "Join Wishlist"));
}
Object.assign(__ds_scope, { EmailCapture });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/EmailCapture.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.EmailCapture = __ds_scope.EmailCapture;

})();
