import { Icon } from './SharedComponents';

export function GoogleSearchPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="page" style={{
      background: '#FFFFFF',
      minHeight: '100vh',
      paddingBottom: 60,
    }}>
      {/* Browser Chrome */}
      <div style={{
        background: '#202124',
        height: 36,
        display: 'flex',
        alignItems: 'center',
        padding: '0 12px',
        gap: 8,
      }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57' }}/>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FEBC2E' }}/>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840' }}/>
        </div>
        <div style={{ flex: 1, display: 'flex', gap: 8, alignItems: 'center', marginLeft: 8 }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="#9AA0A6">
            <path d="M7 2l-1 1-1-1-1 1v10l1 1 1-1 1 1 1-1V3z"/>
            <path d="M13 4h-2v8h2V4z"/>
          </svg>
          <div style={{
            flex: 1,
            background: '#303134',
            borderRadius: 8,
            padding: '6px 12px',
            fontSize: 13,
            color: '#E8EAED',
            fontFamily: 'var(--font-body)',
          }}>
            google.com/search?q=avocat+droit+IA+RGPD+Paris
          </div>
        </div>
      </div>

      {/* Google Search Interface */}
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '20px 40px' }}>
        {/* Google Logo & Search Bar */}
        <div style={{ marginBottom: 20 }}>
          <svg width="92" height="30" viewBox="0 0 272 92" style={{ marginBottom: 20 }}>
            <path fill="#4285F4" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
            <path fill="#EA4335" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
            <path fill="#FBBC05" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
            <path fill="#4285F4" d="M225 3v65h-9.5V3h9.5z"/>
            <path fill="#34A853" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
            <path fill="#EA4335" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"/>
          </svg>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 20,
          }}>
            <div style={{
              flex: 1,
              maxWidth: 600,
              border: '1px solid #DFE1E5',
              borderRadius: 24,
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              boxShadow: '0 1px 6px rgba(32,33,36,0.08)',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9AA0A6" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
              <span style={{ fontSize: 16, color: '#202124', flex: 1 }}>
                avocat droit IA RGPD Paris
              </span>
            </div>
          </div>
          <div style={{
            display: 'flex',
            gap: 24,
            borderBottom: '1px solid #DADCE0',
            paddingBottom: 0,
            marginBottom: 12,
            fontSize: 14,
          }}>
            {['Tout', 'Images', 'Actualités', 'Maps', 'Plus'].map((tab, i) => (
              <button key={i} style={{
                padding: '12px 0',
                color: i === 0 ? '#1A73E8' : '#5F6368',
                fontWeight: i === 0 ? 600 : 400,
                borderBottom: i === 0 ? '3px solid #1A73E8' : 'none',
                marginBottom: i === 0 ? -1 : 0,
              }}>
                {tab}
              </button>
            ))}
          </div>
          <div style={{ fontSize: 14, color: '#70757A', marginBottom: 20 }}>
            Environ 2 340 000 résultats (0,42 secondes)
          </div>
        </div>

        <div style={{ display: 'flex', gap: 40 }}>
          {/* Left Column - Search Results */}
          <div style={{ flex: 1, maxWidth: 650 }}>
            {/* Featured Snippet */}
            <div style={{
              border: '1px solid #DFE1E5',
              borderRadius: 8,
              padding: 20,
              marginBottom: 24,
              background: '#F8F9FA',
            }}>
              <div style={{ fontSize: 12, color: '#70757A', marginBottom: 8 }}>
                avocatspi.com › À propos
              </div>
              <div style={{ fontSize: 20, color: '#1A0DAB', fontWeight: 400, marginBottom: 12 }}>
                Charlotte Galichet — Avocate en droit de l'IA à Paris
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'start' }}>
                <div style={{
                  width: 80,
                  height: 80,
                  background: '#E8EAED',
                  borderRadius: 4,
                  flexShrink: 0,
                }}/>
                <div style={{ fontSize: 14, color: '#4D5156', lineHeight: 1.6 }}>
                  Avocate au Barreau de Paris depuis 2006, Charlotte Galichet accompagne les entreprises B2B en droit de l'IA (AI Act), RGPD et propriété intellectuelle. Cabinet situé 4 place de Valois, Paris 1er.
                </div>
              </div>
            </div>

            {/* Result 1 - avocatspi.com (Primary) */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <div style={{
                  width: 26,
                  height: 26,
                  borderRadius: '50%',
                  background: '#0F172A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: 10,
                  fontWeight: 600,
                }}>CG</div>
                <div style={{ fontSize: 14, color: '#202124' }}>avocatspi.com</div>
              </div>
              <button
                onClick={() => onNavigate('home')}
                style={{
                  fontSize: 20,
                  color: '#1A0DAB',
                  fontWeight: 400,
                  marginBottom: 4,
                  display: 'block',
                  textAlign: 'left',
                  cursor: 'pointer',
                }}
              >
                Charlotte Galichet — Avocate IA, RGPD & Droit du numérique · Paris
              </button>
              <div style={{ fontSize: 14, color: '#4D5156', lineHeight: 1.6, marginBottom: 12 }}>
                Experte en droit de l'intelligence artificielle, conformité RGPD et propriété intellectuelle. Accompagnement des entreprises B2B. Publications Dalloz IP/IT. Cabinet Paris 1er. Prenez rendez-vous.
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '8px 24px',
                fontSize: 14,
              }}>
                {[
                  'À propos',
                  'Domaines d\'expertise',
                  'Articles & Veille',
                  'Contact — Prendre RDV',
                ].map((link, i) => (
                  <button key={i} style={{ color: '#1A0DAB', textAlign: 'left' }}>
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Result 2 - Competitor 1 */}
            <div style={{ marginBottom: 32, opacity: 0.6 }}>
              <div style={{ fontSize: 14, color: '#202124', marginBottom: 4 }}>
                dcavocat.com
              </div>
              <div style={{ fontSize: 20, color: '#1A0DAB', fontWeight: 400, marginBottom: 4 }}>
                DC Avocat — Droit du numérique & RGPD Paris
              </div>
              <div style={{ fontSize: 14, color: '#4D5156', lineHeight: 1.6 }}>
                Cabinet spécialisé en données personnelles, RGPD et nouvelles technologies...
              </div>
            </div>

            {/* Result 3 - Competitor 2 */}
            <div style={{ marginBottom: 32, opacity: 0.5 }}>
              <div style={{ fontSize: 14, color: '#202124', marginBottom: 4 }}>
                caron-avocat.fr
              </div>
              <div style={{ fontSize: 20, color: '#1A0DAB', fontWeight: 400, marginBottom: 4 }}>
                Caron Avocat — Intelligence artificielle & Transformation numérique
              </div>
              <div style={{ fontSize: 14, color: '#4D5156', lineHeight: 1.6 }}>
                Cabinet dédié à l'IA, la cybersécurité et le droit du numérique...
              </div>
            </div>

            {/* Result 4 - Competitor 3 */}
            <div style={{ marginBottom: 32, opacity: 0.4 }}>
              <div style={{ fontSize: 14, color: '#202124', marginBottom: 4 }}>
                nouveaumonde-avocats.com
              </div>
              <div style={{ fontSize: 20, color: '#1A0DAB', fontWeight: 400, marginBottom: 4 }}>
                Nouveau Monde Avocats — IT only, IT totally
              </div>
              <div style={{ fontSize: 14, color: '#4D5156', lineHeight: 1.6 }}>
                Avocats en droit du numérique et de l'innovation...
              </div>
            </div>

            {/* People Also Ask */}
            <div style={{
              border: '1px solid #DFE1E5',
              borderRadius: 8,
              overflow: 'hidden',
              marginTop: 40,
            }}>
              <div style={{
                padding: 16,
                fontSize: 16,
                fontWeight: 500,
                color: '#202124',
                background: 'white',
              }}>
                Autres questions posées
              </div>
              {[
                'Quel avocat pour le RGPD à Paris ?',
                'Qu\'est-ce que l\'AI Act ?',
                'Comment choisir un avocat en droit du numérique ?',
                'Combien coûte un avocat RGPD ?',
              ].map((question, i) => (
                <div key={i} style={{
                  padding: '16px',
                  borderTop: '1px solid #DFE1E5',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}>
                  <div style={{ fontSize: 14, color: '#202124' }}>{question}</div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#70757A" strokeWidth="2">
                    <path d="M19 9l-7 7-7-7"/>
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Knowledge Panel */}
          <div style={{ width: 400, flexShrink: 0 }}>
            <div style={{
              border: '1px solid #DFE1E5',
              borderRadius: 8,
              background: 'white',
              boxShadow: '0 1px 6px rgba(32,33,36,0.08)',
              overflow: 'hidden',
            }}>
              {/* Photo */}
              <div style={{
                width: '100%',
                height: 280,
                background: '#E8EAED',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  background: '#0F172A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: 42,
                  fontWeight: 600,
                }}>CG</div>
              </div>

              <div style={{ padding: 20 }}>
                {/* Name & Title */}
                <div style={{ fontSize: 24, fontWeight: 400, color: '#202124', marginBottom: 4 }}>
                  Charlotte Galichet
                </div>
                <div style={{ fontSize: 14, color: '#70757A', marginBottom: 20 }}>
                  Avocate • Droit de l'IA & RGPD
                </div>

                {/* Contact Info */}
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 14, color: '#202124', marginBottom: 8 }}>
                    <strong>Adresse:</strong> 4 place de Valois, 75001 Paris
                  </div>
                  <div style={{ fontSize: 14, color: '#202124', marginBottom: 8 }}>
                    <strong>Téléphone:</strong> 01.42.36.53.91
                  </div>
                  <div style={{ fontSize: 14, marginBottom: 8 }}>
                    <button style={{ color: '#1A73E8' }}>avocatspi.com</button>
                  </div>
                  <div style={{ fontSize: 14, color: '#202124' }}>
                    <strong>Horaires:</strong> Sur rendez-vous
                  </div>
                </div>

                {/* Map Thumbnail */}
                <div style={{
                  width: '100%',
                  height: 180,
                  background: '#E8EAED',
                  borderRadius: 4,
                  marginBottom: 16,
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 40,
                    height: 40,
                    background: '#EA4335',
                    clipPath: 'path("M20 0C12.3 0 6 6.3 6 14c0 10.5 14 26 14 26s14-15.5 14-26c0-7.7-6.3-14-14-14zm0 19c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z")',
                  }}/>
                </div>

                {/* CTA Button */}
                <button style={{
                  width: '100%',
                  padding: '10px 24px',
                  background: '#1A73E8',
                  color: 'white',
                  borderRadius: 4,
                  fontSize: 14,
                  fontWeight: 600,
                }}>
                  Prendre un RDV
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Annotation */}
        <div style={{
          position: 'fixed',
          top: 180,
          right: 80,
          background: '#A855F7',
          color: 'white',
          padding: '12px 16px',
          borderRadius: 8,
          fontSize: 13,
          fontWeight: 600,
          boxShadow: '0 4px 12px rgba(168,85,247,0.3)',
          maxWidth: 200,
          zIndex: 100,
        }}>
          PARCOURS 2 — Point d'entrée Google
          <div style={{
            position: 'absolute',
            left: -8,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 0,
            height: 0,
            borderTop: '8px solid transparent',
            borderBottom: '8px solid transparent',
            borderRight: '8px solid #A855F7',
          }}/>
        </div>
      </div>
    </div>
  );
}
