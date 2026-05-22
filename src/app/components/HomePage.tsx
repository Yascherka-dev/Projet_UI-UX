import { useState, useRef, useEffect } from 'react';

// Import Icon and other shared components
import { Icon, Reveal, CountUp, HeadshotFrame, BlueDivider, Magnetic, ImgPlaceholder } from './SharedComponents';
import { HOME_ARTICLES } from './data';

type ArticleType = typeof HOME_ARTICLES[number];

export function HomePage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="page">
      {/* ============ HERO ============ */}
      <section className="dark-section" style={{ paddingTop: 132, paddingBottom: 100, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div className="mesh-bg"/>
        <div className="grain"/>

        <div className="container" style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: 80,
            alignItems: 'center',
          }}>
            {/* Left: copy */}
            <div>
              <Reveal>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  padding: '6px 12px 6px 8px',
                  borderRadius: 999,
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: 'rgba(255,255,255,0.04)',
                  marginBottom: 32,
                }}>
                  <span style={{
                    width: 8, height: 8, borderRadius: '50%',
                    background: '#34D399',
                    boxShadow: '0 0 8px rgba(52,211,153,0.7)',
                  }}/>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)' }}>
                    Disponible pour de nouvelles missions — juin 2026
                  </span>
                </div>
              </Reveal>

              <h1 className="display-xl" style={{ color: 'white' }}>
                <Reveal as="span" delay={0} style={{ display: 'block' }}>
                  Avocate en droit
                </Reveal>
                <Reveal as="span" delay={120} style={{ display: 'block' }}>
                  de l'<span className="ia-highlight">IA</span>, RGPD &amp;
                </Reveal>
                <Reveal as="span" delay={240} style={{ display: 'block' }}>
                  propriété intellectuelle.
                </Reveal>
              </h1>

              <Reveal delay={520}>
                <p style={{
                  marginTop: 32,
                  fontSize: 19,
                  lineHeight: 1.55,
                  color: '#CBD5E1',
                  maxWidth: 560,
                }}>
                  Conseil juridique et contentieux pour les <span style={{ color: 'white' }}>entreprises B2B</span> qui déploient l'IA, traitent de la donnée à grande échelle ou construisent des produits numériques.
                </p>
              </Reveal>

              <Reveal delay={640}>
                <div style={{ display: 'flex', gap: 14, marginTop: 40, flexWrap: 'wrap' }}>
                  <Magnetic strength={10}>
                    <button className="btn btn-primary" onClick={() => onNavigate('contact')}>
                      Prendre rendez-vous
                      <Icon.arrow/>
                    </button>
                  </Magnetic>
                  <button className="btn btn-ghost-dark" onClick={() => onNavigate('domains')}>
                    Découvrir les expertises
                  </button>
                </div>
              </Reveal>

              <Reveal delay={780}>
                <div style={{
                  marginTop: 56,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  color: 'rgba(255,255,255,0.5)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}>
                  <div style={{ width: 32, height: 1, background: 'rgba(255,255,255,0.2)' }}/>
                  <span>Cabinet · 4 place de Valois, 75001 Paris</span>
                </div>
              </Reveal>
            </div>

            {/* Right: headshot */}
            <Reveal variant="right" delay={400}>
              <HeadshotFrame floating />
            </Reveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="container" style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginTop: 40 }}>
          <div className="scroll-indicator">
            <span>Scroll</span>
            <div className="track"/>
          </div>
        </div>
      </section>

      {/* ============ CREDIBILITY BAR (glassmorphism over dark) ============ */}
      <section className="dark-section" style={{ paddingTop: 0, paddingBottom: 100 }}>
        <div className="mesh-bg" style={{ opacity: 0.6 }}/>
        <div className="grain"/>
        <div className="container" style={{ position: 'relative' }}>
          <Reveal>
            <div className="glass" style={{
              padding: '44px 56px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: 0,
              alignItems: 'stretch',
            }}>
              {[
                { num: 10, suffix: '+', label: 'ans au Barreau de Paris', sub: 'Cabinet fondé en juillet 2016' },
                { num: 47, suffix: '+', label: 'publications Dalloz IP/IT', sub: 'Veille mensuelle depuis 2018' },
                { num: 100, suffix: '%', label: 'clientèle B2B', sub: 'Startups, scale-ups & corporates' },
              ].map((stat, i, arr) => (
                <div key={i} style={{
                  padding: '0 32px',
                  borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.10)' : 'none',
                  display: 'flex', flexDirection: 'column', justifyContent: 'center',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: 56,
                    lineHeight: 1,
                    color: 'white',
                    letterSpacing: '-0.025em',
                  }}>
                    <CountUp to={stat.num} suffix={stat.suffix}/>
                  </div>
                  <div style={{
                    marginTop: 14,
                    color: 'white',
                    fontWeight: 500,
                    fontSize: 14,
                  }}>{stat.label}</div>
                  <div style={{
                    marginTop: 4,
                    color: '#94A3B8',
                    fontSize: 12.5,
                  }}>{stat.sub}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Divider line between sections */}
      <div className="container"><BlueDivider/></div>

      {/* ============ EXPERTISE CARDS ============ */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.3fr',
            gap: 80,
            alignItems: 'end',
            marginBottom: 64,
          }}>
            <div>
              <Reveal>
                <div className="eyebrow" style={{ marginBottom: 18 }}>
                  <span style={{ color: 'var(--blue)' }}>·</span>&nbsp;&nbsp;01 — Expertises
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg" style={{ textWrap: 'balance' }}>
                  Trois domaines.<br/>Une seule logique :<br/>
                  <span style={{ color: 'var(--blue)' }}>protéger ce qui crée de la valeur.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <p className="lead" style={{ paddingBottom: 8 }}>
                Charlotte intervient en conseil et en contentieux sur les questions juridiques qui touchent au cœur des modèles tech : algorithmes, données, marques, logiciels et contrats associés.
              </p>
            </Reveal>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 24,
          }}>
            {[
              {
                tag: 'IA', tagClass: 'tag-ia',
                accent: '#1D4ED8',
                icon: Icon.ai,
                title: 'Droit de l\'IA',
                desc: 'Conformité AI Act, audit des algorithmes et systèmes d\'intelligence artificielle, rédaction et négociation de contrats IA (licences, prestation de services IA, clauses de responsabilité).',
                items: ['AI Act', 'Audit d\'algorithmes', 'Contrats IA', 'Responsabilité'],
              },
              {
                tag: 'RGPD', tagClass: 'tag-rgpd',
                accent: '#166534',
                icon: Icon.shield,
                title: 'RGPD & Données',
                desc: 'Mise en conformité RGPD, DPO externalisé, audits de conformité, accompagnement dans les relations avec la CNIL, gestion des violations de données, formation des équipes.',
                items: ['Mise en conformité', 'DPO externalisé', 'Audit CNIL', 'Data breach'],
              },
              {
                tag: 'PI', tagClass: 'tag-pi',
                accent: '#5B21B6',
                icon: Icon.copyright,
                title: 'Propriété intellectuelle',
                desc: 'Protection et défense des marques, droits d\'auteur sur les logiciels et contenus numériques, contrats de cession et de licence, contentieux PI.',
                items: ['Marques', 'Logiciels', 'Contrats PI', 'Contentieux'],
              },
            ].map((card, i) => {
              const I = card.icon;
              return (
                <Reveal key={i} variant={i % 2 === 0 ? 'left' : 'right'} delay={i * 120}>
                  <div className="card-expertise" style={{ borderLeftColor: card.accent, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
                      <div style={{
                        width: 48, height: 48, borderRadius: 10,
                        background: card.accent + '15',
                        color: card.accent,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <I/>
                      </div>
                      <span className={'tag ' + card.tagClass}>{card.tag}</span>
                    </div>
                    <h3 className="display-sm" style={{ marginBottom: 14 }}>{card.title}</h3>
                    <p style={{ color: 'var(--muted)', fontSize: 14.5, lineHeight: 1.65, marginBottom: 24 }}>
                      {card.desc}
                    </p>
                    <ul style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 6,
                      marginBottom: 28,
                    }}>
                      {card.items.map((it, j) => (
                        <li key={j} style={{
                          fontSize: 12,
                          padding: '4px 10px',
                          borderRadius: 6,
                          background: 'var(--bg-soft)',
                          color: 'var(--ink-2)',
                          border: '1px solid var(--border-soft)',
                        }}>{it}</li>
                      ))}
                    </ul>
                    <button
                      onClick={() => onNavigate('domains')}
                      className="btn-link"
                      style={{ marginTop: 'auto', color: card.accent }}
                    >
                      En savoir plus
                      <span className="arrow"><Icon.arrow/></span>
                    </button>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Continue with more sections... */}
      
    </div>
  );
}
