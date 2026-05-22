import { useState, useEffect } from 'react';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { DomainsPage } from './components/DomainsPage';
import { ArticlesPage } from './components/ArticlesPage';
import { ContactPage } from './components/ContactPage';
import { ConfirmationPage } from './components/ConfirmationPage';
import { LinkedInPostPage } from './components/LinkedInPostPage';
import { LinkedInPostPage2 } from './components/LinkedInPostPage2';
import { GoogleSearchPage } from './components/GoogleSearchPage';
import { Icon, Magnetic } from './components/SharedComponents';

/* ============================================
   TYPES
   ============================================ */

type PageId = 'home' | 'about' | 'domains' | 'articles' | 'contact' | 'confirmation' | 'linkedin' | 'linkedin2' | 'google';

type Submission = {
  type: 'rdv' | 'message';
  date?: { day: number; month: number; year: number };
  slot?: string;
  form?: any;
};

const NAV_ITEMS = [
  { id: 'about', label: 'À propos' },
  { id: 'domains', label: 'Domaines' },
  { id: 'articles', label: 'Articles' },
  { id: 'contact', label: 'Contact' },
];

/* ============================================
   NAVIGATION & FOOTER
   ============================================ */

function Nav({ page, onNavigate }: { page: PageId; onNavigate: (id: PageId) => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        background: scrolled ? 'rgba(15,23,42,0.85)' : 'rgba(15,23,42,0.92)',
        backdropFilter: scrolled ? 'blur(14px) saturate(180%)' : 'blur(14px) saturate(180%)',
        WebkitBackdropFilter: scrolled ? 'blur(14px) saturate(180%)' : 'blur(14px) saturate(180%)',
        borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.06)' : 'transparent'}`,
        transition: 'background .25s, border-color .25s, backdrop-filter .25s',
      }}
    >
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 72,
      }}>
        {/* Logo */}
        <button
          onClick={() => onNavigate('home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            color: 'white',
          }}
        >
          <div style={{
            width: 32, height: 32,
            background: 'var(--blue)',
            borderRadius: 6,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 14,
            color: 'white',
            letterSpacing: '-0.02em',
          }}>cg</div>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: 16,
            letterSpacing: '-0.01em',
          }}>
            Charlotte Galichet
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'rgba(255,255,255,0.45)',
            paddingLeft: 10,
            marginLeft: 4,
            borderLeft: '1px solid rgba(255,255,255,0.15)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>
            Avocate
          </span>
        </button>

        {/* Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id as PageId)}
              className={'nav-link ' + (page === item.id ? 'active' : '')}
            >
              {item.label}
            </button>
          ))}
          <Magnetic strength={8}>
            <button
              className="btn btn-primary"
              style={{ height: 40, padding: '0 18px', fontSize: 14 }}
              onClick={() => onNavigate('contact')}
            >
              Prendre rendez-vous
              <Icon.arrow />
            </button>
          </Magnetic>
        </nav>
      </div>
    </header>
  );
}

function Footer({ onNavigate }: { onNavigate: (id: PageId) => void }) {
  return (
    <footer className="footer">
      <div className="mesh-bg" style={{ opacity: 0.6 }}/>
      <div className="grain"/>
      <div className="container" style={{ position: 'relative' }}>
        {/* Top */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
          gap: 48,
          paddingBottom: 56,
        }}>
          <div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18,
            }}>
              <div style={{
                width: 32, height: 32, background: 'var(--blue)', borderRadius: 6,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white',
              }}>cg</div>
              <span style={{
                fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 18,
              }}>Charlotte Galichet</span>
            </div>
            <p style={{
              color: '#94A3B8', fontSize: 14, lineHeight: 1.7, maxWidth: 320,
            }}>
              Avocate au Barreau de Paris. Conseil et contentieux en droit de l'IA, RGPD et propriété intellectuelle pour les entreprises B2B qui avancent vite.
            </p>
          </div>

          <div>
            <div className="eyebrow eyebrow-dark" style={{ marginBottom: 18 }}>Cabinet</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { id: 'about', label: 'À propos' },
                { id: 'domains', label: 'Domaines d\'expertise' },
                { id: 'articles', label: 'Articles & veille' },
                { id: 'contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => onNavigate(l.id as PageId)}
                    style={{ color: '#CBD5E1', fontSize: 14, transition: 'color .2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#CBD5E1')}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow eyebrow-dark" style={{ marginBottom: 18 }}>Coordonnées</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, color: '#CBD5E1', fontSize: 14 }}>
              <li>4 place de Valois</li>
              <li>75001 Paris</li>
              <li style={{ marginTop: 6 }}>charlotte.galichet@avocatsp.com</li>
            </ul>
          </div>

          <div>
            <div className="eyebrow eyebrow-dark" style={{ marginBottom: 18 }}>Suivre</div>
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { icon: Icon.linkedin, label: 'LinkedIn' },
                { icon: Icon.twitter, label: 'Twitter / X' },
              ].map((s, i) => {
                const I = s.icon;
                return (
                  <a key={i} href="#" aria-label={s.label} style={{
                    width: 40, height: 40, borderRadius: 8,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: '#CBD5E1', transition: 'all .2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--blue)';
                    e.currentTarget.style.borderColor = 'var(--blue)';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                    e.currentTarget.style.color = '#CBD5E1';
                  }}
                  >
                    <I/>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="divider-dark"/>

        {/* Bottom */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 24,
          color: '#64748B',
          fontSize: 13,
        }}>
          <div>© 2026 Charlotte Galichet · Tous droits réservés</div>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#" style={{ color: '#94A3B8' }}>Mentions légales</a>
            <a href="#" style={{ color: '#94A3B8' }}>Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [page, setPage] = useState<PageId>('home');
  const [submission, setSubmission] = useState<Submission | null>(null);

  const navigate = (id: PageId | string) => {
    setPage(id as PageId);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    try { history.replaceState(null, '', '#' + id); } catch (e) {}
  };

  useEffect(() => {
    const h = window.location.hash.replace('#', '');
    if (h && ['home','about','domains','articles','contact','confirmation','linkedin','linkedin2','google'].includes(h)) {
      setPage(h as PageId);
    }
  }, []);

  const pageLabel = (p: PageId) => {
    return ({
      home: '01 Home',
      about: '02 À propos',
      domains: '03 Domaines & FAQ',
      articles: '04 Articles',
      contact: '05 Contact',
      confirmation: '06 Confirmation',
      linkedin: '07 LinkedIn Post — AI Act',
      linkedin2: '07b LinkedIn Post — RGPD',
      google: '08 Google Search',
    })[p] || p;
  };

  const showNavFooter = !['confirmation', 'linkedin', 'linkedin2', 'google'].includes(page);

  return (
    <div data-screen-label={pageLabel(page)}>
      {showNavFooter && <Nav page={page} onNavigate={navigate}/>}
      <main key={page}>
        {page === 'home' && <HomePage onNavigate={navigate}/>}
        {page === 'about' && <AboutPage onNavigate={navigate}/>}
        {page === 'domains' && <DomainsPage onNavigate={navigate}/>}
        {page === 'articles' && <ArticlesPage onNavigate={navigate}/>}
        {page === 'contact' && <ContactPage onNavigate={navigate} onSubmit={setSubmission}/>}
        {page === 'confirmation' && <ConfirmationPage onNavigate={navigate} submission={submission}/>}
        {page === 'linkedin' && <LinkedInPostPage onNavigate={navigate}/>}
        {page === 'linkedin2' && <LinkedInPostPage2 onNavigate={navigate}/>}
        {page === 'google' && <GoogleSearchPage onNavigate={navigate}/>}
      </main>
      {showNavFooter && <Footer onNavigate={navigate}/>}

      {/* Prototype Navigation Menu */}
      <div style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 9999,
        background: 'rgba(15,23,42,0.95)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 12,
        padding: 16,
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        minWidth: 220,
      }}>
        <div style={{
          fontSize: 11,
          fontWeight: 600,
          color: '#94A3B8',
          marginBottom: 12,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          Navigation Prototype
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[
            { id: 'linkedin', label: '📱 LinkedIn — AI Act', color: '#0A66C2' },
            { id: 'linkedin2', label: '📱 LinkedIn — RGPD', color: '#10B981' },
            { id: 'google', label: '🔍 Google SERP', color: '#4285F4' },
            { id: 'home', label: '🏠 Site — Home', color: '#1847F0' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.id as PageId)}
              style={{
                padding: '8px 12px',
                borderRadius: 6,
                background: page === item.id ? item.color : 'rgba(255,255,255,0.05)',
                color: page === item.id ? 'white' : '#CBD5E1',
                fontSize: 13,
                fontWeight: page === item.id ? 600 : 400,
                textAlign: 'left',
                transition: 'all 0.2s',
                border: page === item.id ? 'none' : '1px solid transparent',
              }}
              onMouseEnter={(e) => {
                if (page !== item.id) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (page !== item.id) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'transparent';
                }
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
