export default function Button({ children, variant = 'primary', ...props }) {
  const styles = {
    primary: { background: 'var(--color-primary)', color: 'white' },
    secondary: { background: 'white', border: '1px solid var(--color-border)', color: 'var(--color-text)' },
    ghost: { background: 'transparent', color: 'var(--color-text)' }
  }
  return (
    <button
      {...props}
      style={{
        padding: '0.75rem 1.25rem',
        borderRadius: 'var(--radius-md)',
        fontWeight: 600,
        cursor: 'pointer',
        border: 'none',
        ...styles[variant],
        ...props.style
      }}
    >
      {children}
    </button>
  )
}
