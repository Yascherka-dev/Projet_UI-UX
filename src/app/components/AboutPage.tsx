import { Icon, Reveal, BlueDivider } from './SharedComponents';
import { TIMELINE, PRINCIPLES } from './data';
import portraitImg from 'figma:asset/IMG_0633Bw-732x1024.jpg';

export function AboutPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="page">
      {/* ============ HERO ============ */}
      <section className="dark-section" style={{ paddingTop: 132, paddingBottom: 100 }}>
        <div className="mesh-bg"/>
        <div className="grain"/>
        <div className="container" style={{ position: 'relative' }}>
          <Reveal>
            <div className="eyebrow eyebrow-dark" style={{ marginBottom: 24 }}>
              <span style={{ color: 'var(--blue)' }}>·</span>&nbsp;&nbsp;À propos
            </div>
          </Reveal>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr',
            gap: 80,
            alignItems: 'end',
          }}>
            <Reveal delay={80}>
              <h1 className="display-xl" style={{ color: 'white', textWrap: 'balance' }}>
                Avocate, pas <span style={{ color: 'var(--blue)' }}>process</span>.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p style={{ color: '#CBD5E1', fontSize: 18, lineHeight: 1.6 }}>
                Charlotte Galichet a fondé son cabinet en juillet 2016, après dix années passées en grands cabinets parisiens et un poste de juriste en industrie. Solo par choix — pour rester précise, rapide et personnellement engagée sur chaque dossier.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="container"><BlueDivider/></div>

      {/* ============ ASYMMETRIC PORTRAIT + BIO ============ */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: 96,
            alignItems: 'start',
          }}>
            {/* Left: oversized photo with geometric accents */}
            <Reveal variant="left">
              <div style={{ position: 'relative', paddingRight: 24, paddingBottom: 24 }}>
                {/* Geometric accent block */}
                <div style={{
                  position: 'absolute',
                  right: 0, bottom: 0,
                  width: '62%', height: '55%',
                  background: 'var(--blue)',
                  borderRadius: 6,
                }}/>
                <div style={{
                  position: 'absolute',
                  left: -20, top: -20,
                  width: 64, height: 64,
                  border: '1px solid var(--blue)',
                  borderRadius: 4,
                }}/>
                {/* Photo */}
                <img
                  src={portraitImg}
                  alt="Charlotte Galichet, Avocate spécialisée en droit de l'IA, RGPD et propriété intellectuelle"
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: 'auto',
                    aspectRatio: '4/5',
                    objectFit: 'cover',
                    borderRadius: 4,
                    border: '1px solid var(--border)',
                    display: 'block',
                  }}
                />
                {/* Caption */}
                <div style={{
                  marginTop: 28,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                }}>
                  <div style={{ width: 32, height: 1, background: 'var(--border)' }}/>
                  <span>Cabinet · 4 place de Valois, Paris 1<sup>er</sup></span>
                </div>
              </div>
            </Reveal>

            {/* Right: bio */}
            <div>
              <Reveal>
                <div className="eyebrow" style={{ marginBottom: 18 }}>Parcours</div>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-md" style={{ textWrap: 'balance', marginBottom: 32 }}>
                  Dix ans à comprendre comment le droit s'applique au numérique.
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20, color: 'var(--muted)', fontSize: 16.5, lineHeight: 1.7 }}>
                  <p>
                    Charlotte Galichet est avocate au Barreau de Paris depuis 2006. Elle a fondé son cabinet en juillet 2016, situé 4 place de Valois, 75001 Paris.
                  </p>
                  <p>
                    Sa pratique est centrée sur trois domaines clés : le droit de l'intelligence artificielle, la protection des données personnelles (RGPD), et la propriété intellectuelle.
                  </p>
                  <p>
                    Elle accompagne exclusivement des entreprises B2B, tous secteurs confondus, dans leurs enjeux juridiques liés au numérique et à l'innovation : éditeurs SaaS, plateformes de marketplace, fintechs, healthtechs, agences digitales, assureurs, retail innovants.
                  </p>
                  <p>
                    Charlotte publie régulièrement dans la revue Dalloz IP/IT, où elle partage son expertise et sa veille juridique sur l'évolution du droit du numérique. Elle intervient également à l'EFB et dans plusieurs masters spécialisés.
                  </p>
                </div>
              </Reveal>

              {/* Dalloz badge with green glow */}
              <Reveal delay={300}>
                <div style={{
                  marginTop: 40,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 16,
                  padding: '16px 22px',
                  borderRadius: 12,
                  background: 'white',
                  border: '1px solid var(--rgpd-bg)',
                  position: 'relative',
                  boxShadow: '0 0 0 6px rgba(22,101,52,0.06)',
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 10,
                    background: 'var(--rgpd-bg)',
                    color: 'var(--rgpd-fg)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative',
                  }}>
                    <Icon.doc/>
                    <div style={{
                      position: 'absolute', inset: -3,
                      borderRadius: 12,
                      background: 'radial-gradient(circle, rgba(22,101,52,0.25), transparent 70%)',
                      animation: 'fadeIn 1s ease forwards',
                      zIndex: -1,
                    }}/>
                  </div>
                  <div>
                    <div className="eyebrow" style={{ color: 'var(--rgpd-fg)', marginBottom: 4 }}>Publications</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 18 }}>
                      Dalloz IP/IT
                    </div>
                    <div style={{ color: 'var(--muted)', fontSize: 13, marginTop: 2 }}>
                      Autrice régulière · revue de référence en droit du numérique
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PULL QUOTE ============ */}
      <section className="section-sm" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <Reveal>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '120px 1fr',
              gap: 56,
              alignItems: 'start',
              maxWidth: 1040, margin: '0 auto',
            }}>
              <div style={{ color: 'var(--blue)', opacity: 0.2 }}>
                <Icon.quote style={{ width: 120, height: 96 }}/>
              </div>
              <div>
                <p className="pullquote">
                  Je ne surveille pas vos pratiques —<br/>
                  <span style={{ color: 'var(--blue)' }}>je les protège.</span>
                </p>
                <p style={{ marginTop: 28, color: 'var(--muted)', fontSize: 15.5, lineHeight: 1.7, maxWidth: '60ch' }}>
                  Une bonne défense juridique n'est pas un contrôle qualité a posteriori. C'est un cadre opérationnel que vos équipes intègrent dès la conception du produit — et qui leur permet d'aller plus vite, pas moins vite.
                </p>
                <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 14, color: 'var(--muted)', fontSize: 13.5 }}>
                  <div style={{ width: 40, height: 1, background: 'var(--border)' }}/>
                  Charlotte Galichet
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ TIMELINE ============ */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 720, marginBottom: 64 }}>
            <Reveal>
              <div className="eyebrow" style={{ marginBottom: 18 }}>
                <span style={{ color: 'var(--blue)' }}>·</span>&nbsp;&nbsp;Repères
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-lg" style={{ textWrap: 'balance' }}>
                Vingt ans, condensés.
              </h2>
            </Reveal>
          </div>

          <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
          }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute',
              left: 110, top: 12, bottom: 12,
              width: 1,
              background: 'var(--border)',
            }}/>

            {TIMELINE.map((t, i) => (
              <Reveal key={i} delay={i * 80}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '100px 24px 1fr',
                  gap: 24,
                  alignItems: 'start',
                  padding: '24px 0',
                  borderTop: i === 0 ? '1px solid var(--border)' : 'none',
                  borderBottom: '1px solid var(--border)',
                  position: 'relative',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 13.5,
                    color: 'var(--blue)',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    paddingTop: 4,
                  }}>
                    {t.year}
                  </div>
                  <div style={{
                    width: 12, height: 12,
                    borderRadius: '50%',
                    background: t.highlight ? 'var(--blue)' : 'white',
                    border: t.highlight ? 'none' : '2px solid var(--border)',
                    boxShadow: t.highlight ? '0 0 0 6px rgba(24,71,240,0.12)' : 'none',
                    marginTop: 8,
                    marginLeft: -6,
                    position: 'relative',
                    zIndex: 1,
                  }}/>
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 500,
                      fontSize: 20,
                      letterSpacing: '-0.015em',
                      marginBottom: 6,
                    }}>{t.title}</h3>
                    <p style={{ color: 'var(--muted)', fontSize: 14.5, lineHeight: 1.6, maxWidth: '62ch' }}>
                      {t.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VALEURS / PRINCIPES ============ */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div style={{ maxWidth: 720, marginBottom: 56 }}>
            <Reveal>
              <div className="eyebrow" style={{ marginBottom: 18 }}>
                <span style={{ color: 'var(--blue)' }}>·</span>&nbsp;&nbsp;Principes
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-lg" style={{ textWrap: 'balance' }}>
                Comment je travaille.
              </h2>
            </Reveal>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {PRINCIPLES.map((p, i) => (
              <Reveal key={i} variant={i % 2 === 0 ? 'left' : 'right'} delay={i * 100}>
                <div style={{
                  background: 'white',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  padding: 32,
                  display: 'flex',
                  gap: 24,
                  alignItems: 'start',
                  height: '100%',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 12,
                    color: 'var(--blue)',
                    paddingTop: 4,
                    minWidth: 32,
                  }}>0{i+1}</div>
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 500,
                      fontSize: 22,
                      letterSpacing: '-0.015em',
                      marginBottom: 10,
                    }}>{p.title}</h3>
                    <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.65 }}>{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA strip (dark) ============ */}
      <section className="dark-section section">
        <div className="mesh-bg"/>
        <div className="grain"/>
        <div className="container" style={{ position: 'relative' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: 80,
            alignItems: 'center',
          }}>
            <Reveal>
              <h2 className="display-lg" style={{ color: 'white', textWrap: 'balance' }}>
                Envie de travailler ensemble ?<br/>
                <span style={{ color: '#94A3B8' }}>Première consultation gratuite, 30 minutes.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'flex-end' }}>
                <button className="btn btn-primary" onClick={() => onNavigate('contact')}>
                  Prendre rendez-vous
                  <Icon.arrow/>
                </button>
                <button className="btn btn-ghost-dark" onClick={() => onNavigate('domains')}>
                  Voir les expertises
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
