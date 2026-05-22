import { useState, useMemo } from 'react';
import { Icon, Reveal, BlueDivider } from './SharedComponents';
import { ALL_ARTICLES } from './data';
import imgRgpd from '../../assets/article-rgpd.jpg';
import imgIa from '../../assets/article-ia.jpg';
import imgPi from '../../assets/article-pi.jpg';

const ARTICLE_IMAGES: Record<string, string> = {
  rgpd: imgRgpd,
  ia: imgIa,
  pi: imgPi,
};

const FILTERS = [
  { id: 'all', label: 'Tous', count: ALL_ARTICLES.length },
  { id: 'ia', label: 'IA & Numérique', count: ALL_ARTICLES.filter(a => a.filter === 'ia').length },
  { id: 'rgpd', label: 'RGPD & Données', count: ALL_ARTICLES.filter(a => a.filter === 'rgpd').length },
  { id: 'pi', label: 'Propriété intellectuelle', count: ALL_ARTICLES.filter(a => a.filter === 'pi').length },
];

function ArticleCardLarge({ art }: { art: typeof ALL_ARTICLES[number] }) {
  return (
    <article className="article-card" style={{ cursor: 'pointer', padding: 0 }}>
      <div style={{ height: 180, overflow: 'hidden', borderRadius: '12px 12px 0 0' }}>
        <img
          src={ARTICLE_IMAGES[art.filter]}
          alt={art.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .4s cubic-bezier(.2,.8,.2,1)' }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        />
      </div>
      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
      <span className={'tag ' + art.tagClass} style={{ alignSelf: 'flex-start' }}>{art.tag}</span>
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: 21,
        lineHeight: 1.22,
        letterSpacing: '-0.018em',
        color: 'var(--ink)',
        textWrap: 'balance',
      }}>{art.title}</h3>
      <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.6, flex: 1 }}>
        {art.excerpt}
      </p>
      <div style={{
        marginTop: 'auto',
        paddingTop: 16,
        borderTop: '1px solid var(--border-soft)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: 'var(--font-mono)',
        fontSize: 11.5,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'var(--muted)',
      }}>
        <span>{art.date}</span>
        <span style={{ color: 'var(--blue)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
          Lire <Icon.arrowUpRight/>
        </span>
      </div>
      </div>
    </article>
  );
}

export function ArticlesPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    let list = ALL_ARTICLES.filter(a => filter === 'all' || a.filter === filter);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(a =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.tag.toLowerCase().includes(q)
      );
    }
    return list;
  }, [filter, query]);

  const heroArticle = filtered.find(a => a.hero) || filtered[0];
  const rest = filtered.filter(a => a !== heroArticle);

  return (
    <div className="page">
      {/* HERO */}
      <section className="dark-section" style={{ paddingTop: 132, paddingBottom: 80 }}>
        <div className="mesh-bg"/>
        <div className="grain"/>
        <div className="container" style={{ position: 'relative' }}>
          <Reveal>
            <div className="eyebrow eyebrow-dark" style={{ marginBottom: 24 }}>
              <span style={{ color: 'var(--blue)' }}>·</span>&nbsp;&nbsp;Articles & veille juridique
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80, alignItems: 'end' }}>
            <Reveal delay={80}>
              <h1 className="display-xl" style={{ color: 'white', textWrap: 'balance' }}>
                Lecture longue,<br/>
                <span style={{ color: '#94A3B8' }}>conséquences</span>{' '}
                <span style={{ color: 'var(--blue)' }}>directes</span>.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p style={{ color: '#CBD5E1', fontSize: 17.5, lineHeight: 1.6 }}>
                Analyses, jurisprudence commentée et veille mensuelle sur l'évolution du droit du numérique. Pour comprendre, anticiper et décider — pas pour cocher des cases.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="container"><BlueDivider/></div>

      {/* FILTERS + SEARCH */}
      <section style={{ padding: '48px 0 32px', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 32,
          flexWrap: 'wrap',
        }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '10px 16px',
                  borderRadius: 999,
                  background: filter === f.id ? 'var(--ink)' : 'white',
                  color: filter === f.id ? 'white' : 'var(--ink)',
                  border: `1px solid ${filter === f.id ? 'var(--ink)' : 'var(--border)'}`,
                  fontSize: 14,
                  fontWeight: 500,
                  transition: 'all .2s',
                }}
              >
                {f.label}
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: filter === f.id ? 'rgba(255,255,255,0.6)' : 'var(--muted)',
                }}>{f.count}</span>
              </button>
            ))}
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '8px 14px',
            border: '1px solid var(--border)',
            borderRadius: 10,
            background: 'white',
            minWidth: 280,
          }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: 'var(--muted)' }}>
              <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.4"/>
              <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Rechercher un article…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                background: 'transparent',
                fontSize: 14,
              }}
            />
            {query && (
              <button onClick={() => setQuery('')} style={{ color: 'var(--muted)', fontSize: 13 }}>×</button>
            )}
          </div>
        </div>
      </section>

      {/* MAGAZINE GRID */}
      <section className="section">
        <div className="container">
          {filtered.length === 0 ? (
            <Reveal>
              <div style={{
                textAlign: 'center',
                padding: '80px 24px',
                color: 'var(--muted)',
                fontSize: 16,
              }}>
                Aucun article ne correspond à cette recherche.
              </div>
            </Reveal>
          ) : (
            <>
              {/* Hero article — dark inverted card */}
              {heroArticle && (
                <Reveal>
                  <article
                    onClick={() => {}}
                    className="dark-section"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1.1fr 1fr',
                      gap: 0,
                      marginBottom: 56,
                      borderRadius: 16,
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'transform .3s cubic-bezier(.2,.8,.2,1)',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div className="mesh-bg" style={{ opacity: 0.7 }}/>
                    <div className="grain"/>

                    {/* Left: copy */}
                    <div style={{
                      padding: 56,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: 40,
                      position: 'relative',
                    }}>
                      <div>
                        <div style={{ display: 'flex', gap: 12, marginBottom: 28, alignItems: 'center' }}>
                          <span className={'tag ' + heroArticle.tagClass}>{heroArticle.tag}</span>
                          <span className="tag tag-dark">
                            <span style={{
                              width: 6, height: 6, borderRadius: '50%',
                              background: 'var(--blue)', marginRight: 6, display: 'inline-block',
                            }}/>
                            À la une
                          </span>
                        </div>
                        <h2 style={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 600,
                          fontSize: 'clamp(32px, 3.6vw, 44px)',
                          lineHeight: 1.1,
                          letterSpacing: '-0.025em',
                          color: 'white',
                          textWrap: 'balance',
                        }}>
                          {heroArticle.title}
                        </h2>
                        <p style={{
                          marginTop: 24,
                          color: '#CBD5E1',
                          fontSize: 16,
                          lineHeight: 1.65,
                          maxWidth: '48ch',
                        }}>{heroArticle.excerpt}</p>
                      </div>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: 24,
                        borderTop: '1px solid rgba(255,255,255,0.10)',
                      }}>
                        <div style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 11.5,
                          color: '#94A3B8',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                        }}>
                          {heroArticle.date} · {heroArticle.read} de lecture
                        </div>
                        <button className="btn-link" style={{ color: 'white' }}>
                          Lire l'analyse
                          <span className="arrow"><Icon.arrow/></span>
                        </button>
                      </div>
                    </div>

                    {/* Right: cover image */}
                    <div style={{ position: 'relative', minHeight: 480 }}>
                      <img
                        src={ARTICLE_IMAGES[heroArticle.filter]}
                        alt={heroArticle.title}
                        style={{
                          position: 'absolute',
                          inset: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                  </article>
                </Reveal>
              )}

              {/* Grid of rest */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: 24,
              }}>
                {rest.map((a, i) => (
                  <Reveal key={i} delay={i * 80}>
                    <ArticleCardLarge art={a}/>
                  </Reveal>
                ))}
              </div>

              {/* Result count */}
              <Reveal delay={200}>
                <div style={{
                  textAlign: 'center',
                  marginTop: 64,
                  paddingTop: 32,
                  borderTop: '1px solid var(--border)',
                  color: 'var(--muted)',
                  fontSize: 14,
                }}>
                  {filtered.length} article{filtered.length > 1 ? 's' : ''} affiché{filtered.length > 1 ? 's' : ''}
                  {filter !== 'all' && ` dans la catégorie "${FILTERS.find(f => f.id === filter)?.label}"`}
                </div>
              </Reveal>
            </>
          )}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div style={{
            background: 'white',
            border: '1px solid var(--border)',
            borderRadius: 16,
            padding: 56,
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: 64,
            alignItems: 'center',
          }}>
            <div>
              <Reveal>
                <div className="eyebrow" style={{ marginBottom: 18 }}>Newsletter mensuelle</div>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-md" style={{ textWrap: 'balance', marginBottom: 16 }}>
                  La veille juridique du numérique,<br/>
                  <span style={{ color: 'var(--blue)' }}>une fois par mois.</span>
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p style={{ color: 'var(--muted)', fontSize: 15.5, lineHeight: 1.65, maxWidth: '52ch' }}>
                  Sélection commentée des décisions, lignes directrices et publications du mois. Format court, lecture en 5 minutes — pas de pub, pas de tracker, pas de revente d'adresse.
                </p>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <form
                onSubmit={(e) => e.preventDefault()}
                style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
              >
                <div className="field">
                  <input type="email" placeholder="email@entreprise.fr"/>
                </div>
                <button className="btn btn-primary" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
                  S'abonner
                  <Icon.arrow/>
                </button>
                <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>
                  Une seule édition par mois. Désinscription en un clic.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
