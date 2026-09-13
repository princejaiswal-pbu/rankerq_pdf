export default function ProgressBar({ value = 0 }) {
  return (
    <div style={{ width: '100%', height: '8px', background: 'var(--color-border)', borderRadius: '999px', overflow: 'hidden' }}>
      <div style={{ width: `${value}%`, height: '100%', background: 'var(--color-primary)', transition: 'width 0.3s' }} />
    </div>
  )
}
