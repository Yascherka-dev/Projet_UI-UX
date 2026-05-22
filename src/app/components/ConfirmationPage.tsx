import { Icon, Reveal } from './SharedComponents';

type Submission = {
  type: 'rdv' | 'message';
  date?: { day: number; month: number; year: number };
  slot?: string;
};

export function ConfirmationPage({ onNavigate, submission }: { onNavigate: (page: string) => void; submission: Submission | null }) {
  const isRdv = submission?.type === 'rdv';
  const dateLabel = isRdv && submission.date
    ? new Date(submission.date.year, submission.date.month, submission.date.day).toLocaleDateString('fr-FR', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
      })
    : null;

  return (
    <div className="page">
      <section className="dark-section" style={{ minHeight: '100vh', paddingTop: 132, paddingBottom: 80, display: 'flex', alignItems: 'center' }}>
        <div className="mesh-bg"/>
        <div className="grain"/>
        <div className="container" style={{ position: 'relative', width: '100%' }}>
          <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
            <Reveal>
              <div style={{
                width: 80, height: 80,
                borderRadius: '50%',
                background: 'rgba(52,211,153,0.15)',
                border: '1px solid rgba(52,211,153,0.4)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                color: '#34D399',
                marginBottom: 32,
                position: 'relative',
              }}>
                <Icon.check style={{ width: 36, height: 36 }}/>
                <div style={{
                  position: 'absolute',
                  inset: -10,
                  borderRadius: '50%',
                  border: '1px solid rgba(52,211,153,0.25)',
                  animation: 'pulseRing 2s ease-out infinite',
                }}/>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="eyebrow eyebrow-dark" style={{ marginBottom: 18, color: '#34D399' }}>
                {isRdv ? 'Rendez-vous confirmé' : 'Demande reçue'}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <h1 className="display-lg" style={{ color: 'white', textWrap: 'balance' }}>
                {isRdv
                  ? 'C\'est noté, à très vite.'
                  : 'Merci, votre demande est arrivée.'}
              </h1>
            </Reveal>

            <Reveal delay={300}>
              <p style={{
                marginTop: 24,
                color: '#CBD5E1',
                fontSize: 18,
                lineHeight: 1.6,
                maxWidth: '52ch',
                margin: '24px auto 0',
              }}>
                {isRdv
                  ? 'Un email de confirmation vient d\'être envoyé avec le lien visio et un rappel des modalités. Vous pouvez d\'ores et déjà préparer les éléments de contexte.'
                  : 'Charlotte vous répond sous 24h ouvrées avec un premier diagnostic et, si pertinent, une proposition de créneau pour échanger plus en détail.'}
              </p>
            </Reveal>

            {isRdv && dateLabel && (
              <Reveal delay={400}>
                <div className="glass" style={{
                  marginTop: 48,
                  padding: 32,
                  textAlign: 'left',
                  maxWidth: 540,
                  margin: '48px auto 0',
                }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 24, alignItems: 'center' }}>
                    <div style={{
                      width: 60, height: 60, borderRadius: 12,
                      background: 'var(--blue)',
                      color: 'white',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon.calendar style={{ width: 26, height: 26 }}/>
                    </div>
                    <div>
                      <div style={{ color: 'white', fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, textTransform: 'capitalize', letterSpacing: '-0.015em' }}>
                        {dateLabel}
                      </div>
                      <div style={{ color: '#CBD5E1', fontSize: 15, marginTop: 4 }}>
                        à <strong style={{ color: 'white' }}>{submission.slot}</strong> · 30 minutes · visioconférence
                      </div>
                    </div>
                  </div>
                  <div style={{
                    marginTop: 24, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.10)',
                    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12,
                  }}>
                    <button className="btn btn-ghost-dark" style={{ justifyContent: 'center', width: '100%' }}>
                      <Icon.calendar/> Ajouter au calendrier
                    </button>
                    <button className="btn btn-ghost-dark" style={{ justifyContent: 'center', width: '100%' }}>
                      <Icon.mail/> Renvoyer l'email
                    </button>
                  </div>
                </div>
              </Reveal>
            )}

            <Reveal delay={500}>
              <div style={{
                marginTop: 56,
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 16,
                maxWidth: 720,
                margin: '56px auto 0',
              }}>
                {[
                  { num: '01', title: 'Préparez le contexte', body: 'Notes, screenshots, contrats existants — tout ce qui aide à cadrer rapidement.' },
                  { num: '02', title: 'Envoyez en amont', body: 'Documents par email à charlotte.galichet@avocatsp.com (secret pro).' },
                  { num: '03', title: '30 minutes d\'échange', body: 'Diagnostic clair, prochaines étapes, devis si nécessaire.' },
                ].map((step, i) => (
                  <div key={i} style={{
                    padding: 20,
                    border: '1px solid rgba(255,255,255,0.10)',
                    borderRadius: 12,
                    textAlign: 'left',
                    background: 'rgba(255,255,255,0.02)',
                  }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--blue)', marginBottom: 8 }}>{step.num}</div>
                    <div style={{ color: 'white', fontWeight: 500, fontSize: 14, marginBottom: 6 }}>{step.title}</div>
                    <div style={{ color: '#94A3B8', fontSize: 12.5, lineHeight: 1.5 }}>{step.body}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={600}>
              <div style={{ marginTop: 56, display: 'flex', gap: 14, justifyContent: 'center' }}>
                <button className="btn btn-ghost-dark" onClick={() => onNavigate('home')}>
                  Retour à l'accueil
                </button>
                <button className="btn btn-ghost-dark" onClick={() => onNavigate('articles')}>
                  Lire les articles
                  <Icon.arrow/>
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
