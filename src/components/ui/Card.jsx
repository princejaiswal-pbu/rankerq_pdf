export default function Card({ children, style, ...props }) {
  return (
    <div
      {...props}
      style={{
        background: 'var(--color-card)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-lg)',
        boxShadow: 'var(--shadow-sm)',
        transition: 'all 0.2s',
        ...style
      }}
    >
      {children}
    </div>
  )
}
