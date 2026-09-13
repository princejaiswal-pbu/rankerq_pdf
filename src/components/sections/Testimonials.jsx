export default function Testimonials() {
  return (
    <section style={{ padding: '60px 0' }}>
      <h2 style={{ textAlign: 'center', fontWeight: 800, fontSize: '1.75rem' }}>Loved by 2M+ users</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginTop: '24px' }}>
        <div style={{ border: '1px solid var(--color-border)', padding: '20px', borderRadius: '12px' }}>"Super fast merge, no watermark!" — Priya S.</div>
        <div style={{ border: '1px solid var(--color-border)', padding: '20px', borderRadius: '12px' }}>"Compress cut my 50MB file to 4MB." — Aman K.</div>
        <div style={{ border: '1px solid var(--color-border)', padding: '20px', borderRadius: '12px' }}>"Clean UI, love the orange theme." — Rahul M.</div>
      </div>
    </section>
  )
}
