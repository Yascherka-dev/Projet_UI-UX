import { Icon } from './SharedComponents';

export function LinkedInPostPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="page" style={{
      background: '#F3F2EF',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      paddingTop: 0,
    }}>
      {/* Mobile container - 390px */}
      <div style={{
        width: 390,
        minHeight: '100vh',
        background: 'white',
        position: 'relative',
        boxShadow: '0 0 60px rgba(0,0,0,0.15)',
      }}>
        {/* iOS Status Bar */}
        <div style={{
          height: 44,
          background: 'white',
          borderBottom: '1px solid #E0E0E0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 16px',
          fontSize: 15,
          fontWeight: 600,
        }}>
          <span>9:41</span>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor">
              <path d="M0 0h3v12H0zM5 0h3v12H5zM10 0h3v12h-3zM15 2h2v8h-2z"/>
            </svg>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
              <path d="M1 6a5 5 0 0110 0 5 5 0 01-5 5 5 5 0 01-5-5zm14-4v8a2 2 0 01-2 2h-1a6 6 0 000-12h1a2 2 0 012 2z"/>
            </svg>
            <svg width="25" height="12" viewBox="0 0 25 12" fill="currentColor">
              <rect x="0" y="0" width="22" height="12" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1"/>
              <rect x="23" y="4" width="2" height="4" rx="0.5"/>
              <rect x="2" y="2" width="18" height="8" rx="1"/>
            </svg>
          </div>
        </div>

        {/* LinkedIn Top Nav */}
        <div style={{
          height: 52,
          background: 'white',
          borderBottom: '1px solid #E0E0E0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 16px',
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="#0A66C2">
            <path d="M34 2.5v29A2.5 2.5 0 0131.5 34h-29A2.5 2.5 0 010 31.5v-29A2.5 2.5 0 012.5 0h29A2.5 2.5 0 0134 2.5zM10 13H5v16h5V13zm.45-5.5A2.88 2.88 0 007.59 4.6 2.85 2.85 0 004.8 7.48 2.84 2.84 0 007.61 10.4a2.85 2.85 0 002.84-2.9zM29 19.28c0-4.81-1.66-7.28-5.3-7.28-2.45 0-4 1.17-4.7 2.32V13h-4.5v16h4.5v-8.48c0-2 .38-3.94 2.86-3.94 2.46 0 2.64 2.3 2.64 4.06V29H29v-9.72z"/>
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
          </svg>
        </div>

        {/* Post Card */}
        <div style={{
          background: 'white',
          borderBottom: '8px solid #F3F2EF',
          padding: '12px 0',
          paddingBottom: 80,
        }}>
          {/* Author Header */}
          <div style={{ padding: '0 16px', marginBottom: 12 }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'start' }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: '#0F172A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 600,
                fontSize: 18,
                flexShrink: 0,
              }}>CG</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 14, color: '#000000DE', lineHeight: 1.3 }}>
                  Charlotte Galichet
                </div>
                <div style={{ fontSize: 12, color: '#00000099', lineHeight: 1.4, marginTop: 2 }}>
                  Avocate • Droit de l'IA • RGPD • Propriété intellectuelle • Barreau de Paris
                </div>
                <div style={{ fontSize: 12, color: '#00000099', marginTop: 2 }}>
                  1er • 847 abonnés
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
                <button style={{
                  padding: '4px 16px',
                  borderRadius: 16,
                  border: '1px solid #0A66C2',
                  color: '#0A66C2',
                  fontWeight: 600,
                  fontSize: 14,
                  background: 'transparent',
                }}>Suivre</button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#00000099">
                  <circle cx="12" cy="5" r="2"/>
                  <circle cx="12" cy="12" r="2"/>
                  <circle cx="12" cy="19" r="2"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Post Content */}
          <div style={{ padding: '0 16px', marginBottom: 12 }}>
            <div style={{ fontSize: 14, lineHeight: 1.5, color: '#000000E6' }}>
              <p style={{ fontWeight: 600, marginBottom: 12 }}>
                L'AI Act entre en vigueur. Voici ce que votre entreprise doit avoir mis en place avant le 2 août 2026.
              </p>
              <p style={{ marginBottom: 12 }}>
                Depuis hier, les premières obligations de l'AI Act s'appliquent aux systèmes IA à haut risque.
              </p>
              <p style={{ marginBottom: 12 }}>
                Ce que beaucoup d'entreprises ignorent encore :
              </p>
              <p style={{ marginBottom: 8 }}>
                → Une évaluation de conformité obligatoire<br/>
                → Une documentation technique détaillée<br/>
                → Un système de supervision humaine<br/>
                → Des logs conservés minimum 6 mois
              </p>
              <p style={{ marginBottom: 12 }}>
                Si vous déployez de l'IA dans vos process RH, votre scoring crédit ou vos systèmes médicaux — vous êtes concernés.
              </p>
              <p style={{ marginBottom: 12 }}>
                J'accompagne les entreprises B2B sur ces sujets depuis 2006.
              </p>
              <p>
                Vous avez des questions ? Le lien en commentaire.
              </p>
              <button style={{ color: '#00000099', fontSize: 14, marginTop: 4 }}>
                ...voir plus
              </button>
            </div>
          </div>

          {/* Post Image Card */}
          <div style={{
            margin: '0 16px 12px',
            background: '#0F172A',
            borderRadius: 8,
            padding: 40,
            position: 'relative',
            overflow: 'hidden',
            minHeight: 200,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            {/* Geometric accent */}
            <div style={{
              position: 'absolute',
              right: -40,
              bottom: -40,
              width: 160,
              height: 160,
              background: '#1847F0',
              opacity: 0.15,
              borderRadius: 4,
            }}/>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 42,
              fontWeight: 700,
              color: 'white',
              letterSpacing: '-0.02em',
              marginBottom: 12,
            }}>AI Act</div>
            <div style={{
              fontSize: 16,
              color: '#CBD5E1',
              marginBottom: 24,
            }}>Ce que votre entreprise doit faire maintenant</div>
            <div style={{
              position: 'absolute',
              bottom: 20,
              right: 20,
              fontSize: 12,
              color: '#1847F0',
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}>CG AVOCAT</div>
          </div>

          {/* Engagement Bar */}
          <div style={{
            padding: '0 16px',
            marginBottom: 8,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 12,
            color: '#00000099',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <div style={{ display: 'flex', marginRight: 4 }}>
                <span style={{ fontSize: 14 }}>👍</span>
                <span style={{ fontSize: 14, marginLeft: -4 }}>❤️</span>
                <span style={{ fontSize: 14, marginLeft: -4 }}>💡</span>
              </div>
              124 réactions
            </div>
            <div>18 commentaires • 7 republications</div>
          </div>

          {/* Action Bar */}
          <div style={{
            padding: '8px 16px',
            borderTop: '1px solid #E0E0E0',
            borderBottom: '1px solid #E0E0E0',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gap: 4,
          }}>
            {[
              { icon: '👍', label: 'J\'aime' },
              { icon: '💬', label: 'Commenter' },
              { icon: '🔄', label: 'Republier' },
              { icon: '📤', label: 'Envoyer' },
            ].map((action, i) => (
              <button key={i} style={{
                padding: '8px 4px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
                color: '#00000099',
                fontSize: 12,
                fontWeight: 600,
              }}>
                <span style={{ fontSize: 20 }}>{action.icon}</span>
                {action.label}
              </button>
            ))}
          </div>

          {/* Comment Preview */}
          <div style={{
            padding: '12px 16px',
            display: 'flex',
            gap: 8,
          }}>
            <div style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: '#0F172A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 600,
              fontSize: 12,
              flexShrink: 0,
            }}>CG</div>
            <div style={{ fontSize: 14, lineHeight: 1.5, color: '#000000E6' }}>
              <span style={{ fontWeight: 600 }}>Charlotte Galichet: </span>
              Article complet →{' '}
              <button
                onClick={() => onNavigate('home')}
                style={{
                  color: '#0A66C2',
                  fontWeight: 600,
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                avocatspi.com/articles/ai-act-obligations
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Tab Bar */}
        <div style={{
          position: 'fixed',
          bottom: 0,
          width: 390,
          height: 56,
          background: 'white',
          borderTop: '1px solid #E0E0E0',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        }}>
          {[
            { icon: '🏠', label: 'Accueil', active: true },
            { icon: '👥', label: 'Réseau', active: false },
            { icon: '➕', label: 'Publier', active: false },
            { icon: '🔔', label: 'Notifications', active: false },
            { icon: '👤', label: 'Moi', active: false },
          ].map((tab, i) => (
            <button key={i} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              color: tab.active ? '#000000DE' : '#00000099',
              fontSize: 10,
            }}>
              <span style={{ fontSize: 20 }}>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Annotation */}
        <div style={{
          position: 'absolute',
          top: 100,
          left: -200,
          background: '#A855F7',
          color: 'white',
          padding: '12px 16px',
          borderRadius: 8,
          fontSize: 13,
          fontWeight: 600,
          boxShadow: '0 4px 12px rgba(168,85,247,0.3)',
          maxWidth: 180,
        }}>
          PARCOURS 1 — Point d'entrée LinkedIn
          <div style={{
            position: 'absolute',
            right: -8,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 0,
            height: 0,
            borderTop: '8px solid transparent',
            borderBottom: '8px solid transparent',
            borderLeft: '8px solid #A855F7',
          }}/>
        </div>
      </div>
    </div>
  );
}
