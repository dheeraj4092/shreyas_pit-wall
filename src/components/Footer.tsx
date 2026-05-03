export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      maxWidth: 1440, margin: '0 auto', padding: '48px 36px 36px',
    }}>
      <div style={{ borderTop: '2px solid var(--ink)', paddingTop: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 700, color: 'var(--ink)' }}>
              Shreyas' <em style={{ fontStyle: 'italic', color: 'var(--audi-primary)' }}>Pit Wall</em>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-3)', marginTop: 4 }}>
              Personal F1 {year} Dashboard · Audi Edition
            </div>
          </div>

          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          </div>
        </div>

        <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid var(--rule-light)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--ink-3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Go Audi · Race hard · {year}
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--ink-3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Vorsprung durch Technik
          </span>
        </div>
      </div>
    </footer>
  );
}
