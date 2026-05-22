/* ============================================
   Shared React components & helpers
   Globals: Nav, Footer, Reveal, useReveal, CountUp,
            HeadshotFrame, BlueDivider, etc.
   ============================================ */

const { useEffect, useRef, useState, useMemo, useCallback } = React;

/* -------- Routing context (very small) -------- */

const NAV_ITEMS = [
  { id: "about",    label: "À propos" },
  { id: "domains",  label: "Domaines" },
  { id: "articles", label: "Articles" },
  { id: "contact",  label: "Contact" },
];

/* -------- Reveal hook (IntersectionObserver) -------- */

function useReveal(options = {}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (shown) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.18, ...options }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);
  return [ref, shown];
}

/* -------- Reveal wrapper -------- */

function Reveal({ as = "div", variant = "up", delay = 0, className = "", style = {}, children, ...rest }) {
  const [ref, shown] = useReveal();
  const Tag = as;
  const cls =
    "reveal " +
    (variant === "left" ? "reveal-left " : variant === "right" ? "reveal-right " : "") +
    (shown ? "in " : "") +
    className;
  return (
    <Tag
      ref={ref}
      className={cls}
      style={{ animationDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* -------- Stagger group -------- */

function Stagger({ children, step = 90, startDelay = 0, variant = "up", className = "", style = {} }) {
  const items = React.Children.toArray(children);
  return (
    <div className={className} style={style}>
      {items.map((child, i) => (
        <Reveal key={i} delay={startDelay + i * step} variant={variant}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}

/* -------- Count-up number -------- */

function CountUp({ to, duration = 1400, suffix = "", prefix = "" }) {
  const [ref, shown] = useReveal({ threshold: 0.5 });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!shown) return;
    const start = performance.now();
    let raf;
    const step = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(eased * to));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [shown, to, duration]);
  return <span ref={ref}>{prefix}{val}{suffix}</span>;
}

/* -------- Animated blue rule -------- */

function BlueDivider({ delay = 0, style = {} }) {
  const [ref, shown] = useReveal({ threshold: 0.5 });
  return (
    <div
      ref={ref}
      className={"divider-line " + (shown ? "in " : "")}
      style={{ animationDelay: `${delay}ms`, ...style }}
    />
  );
}

/* -------- Magnetic CTA wrapper (subtle) -------- */

function Magnetic({ children, strength = 14 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf;
    const move = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      const dx = (x / rect.width) * strength;
      const dy = (y / rect.height) * strength;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${dx}px, ${dy}px)`;
      });
    };
    const reset = () => {
      if (raf) cancelAnimationFrame(raf);
      el.style.transform = "translate(0,0)";
    };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", reset);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength]);
  return <span ref={ref} className="magnetic">{children}</span>;
}

/* -------- Icons (tiny inline SVGs, original) -------- */

const Icon = {
  arrow: (p) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...p}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  arrowUpRight: (p) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...p}>
      <path d="M4 10L10 4M10 4H5M10 4V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  plus: (p) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...p}>
      <path d="M7 1.5v11M1.5 7h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
  calendar: (p) => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...p}>
      <rect x="2.5" y="3.5" width="13" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M2.5 7h13M6 2v3M12 2v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  mail: (p) => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...p}>
      <rect x="2.5" y="4" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M3 5l6 5 6-5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    </svg>
  ),
  upload: (p) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...p}>
      <path d="M8 11V3M5 6l3-3 3 3M3 11v2h10v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  check: (p) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...p}>
      <path d="M3 8.5L6.5 12L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  linkedin: (p) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" {...p}>
      <path d="M3.6 5h2.2v8.5H3.6V5zM4.7 1.7a1.3 1.3 0 110 2.6 1.3 1.3 0 010-2.6zM7.4 5h2.1v1.2h.03c.3-.55 1.03-1.13 2.12-1.13 2.27 0 2.69 1.49 2.69 3.43v4.97h-2.2V8.96c0-1.05-.02-2.4-1.46-2.4-1.46 0-1.69 1.14-1.69 2.32v4.62H7.4V5z"/>
    </svg>
  ),
  twitter: (p) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" {...p}>
      <path d="M12.2 2h2.13l-4.65 5.32L15 14h-4.27l-3.35-4.38L3.6 14H1.47l4.97-5.68L1 2h4.37l3.03 4.01L12.2 2zm-.75 10.7h1.18L4.6 3.23H3.34l8.11 9.47z"/>
    </svg>
  ),
  doc: (p) => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...p}>
      <path d="M4 2h6l4 4v10H4V2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M10 2v4h4M6.5 10h5M6.5 13h3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  scale: (p) => (
    // abstract "balance" geometric — not a literal scale
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" {...p}>
      <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M3 11h16M11 3v16" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  ),
  ai: (p) => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" {...p}>
      <rect x="3" y="3" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="8" cy="9" r="1.2" fill="currentColor"/>
      <circle cx="14" cy="9" r="1.2" fill="currentColor"/>
      <path d="M7 14c1.2 1.2 2.6 1.8 4 1.8s2.8-.6 4-1.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  shield: (p) => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" {...p}>
      <path d="M11 2l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V5l8-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M7.5 11l2.5 2.5L15 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  copyright: (p) => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" {...p}>
      <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M14 8.5c-.7-.8-1.7-1.2-2.8-1.2-2.2 0-3.7 1.6-3.7 3.7s1.5 3.7 3.7 3.7c1.1 0 2.1-.4 2.8-1.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  quote: (p) => (
    <svg viewBox="0 0 80 64" fill="none" {...p}>
      <path d="M0 64V40C0 22 11 6 30 0L36 12C24 17 18 24 17 32H30V64H0zM44 64V40C44 22 55 6 74 0L80 12C68 17 62 24 61 32H74V64H44z" fill="currentColor"/>
    </svg>
  ),
};

/* -------- Headshot placeholder -------- */

function HeadshotFrame({ floating = true }) {
  return (
    <div style={{
      position: "relative",
      width: "100%",
      maxWidth: 420,
      aspectRatio: "4/5",
      margin: "0 auto",
    }}>
      {/* Geometric accent block behind */}
      <div style={{
        position: "absolute",
        right: -24, bottom: -24,
        width: "60%", height: "60%",
        background: "var(--blue)",
        borderRadius: 4,
        opacity: 0.95,
      }}/>
      <div style={{
        position: "absolute",
        left: -16, top: -16,
        width: 80, height: 80,
        border: "1px solid rgba(255,255,255,0.35)",
        borderRadius: 4,
      }}/>
      {/* The frame itself */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          background:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0 8px, rgba(255,255,255,0.02) 8px 16px), #1E293B",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 4,
          overflow: "hidden",
          animation: floating ? "float 6s ease-in-out infinite" : "none",
        }}
      >
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          color: "rgba(255,255,255,0.55)",
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          letterSpacing: "0.08em",
        }}>
          <div style={{
            width: 64, height: 64,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.25)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-display)",
            fontSize: 24,
            color: "rgba(255,255,255,0.7)",
          }}>CG</div>
          <div>HEADSHOT / 1200×1500</div>
          <div style={{ opacity: 0.7 }}>charlotte_portrait.jpg</div>
        </div>
        {/* Soft vertical light */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(115deg, transparent 45%, rgba(255,255,255,0.04) 55%, transparent 65%)",
        }}/>
      </div>
    </div>
  );
}

/* -------- Image placeholder (light, for articles, about, etc) -------- */

function ImgPlaceholder({ label, ratio = "16/10", dark = false, accent = false }) {
  return (
    <div style={{
      width: "100%",
      aspectRatio: ratio,
      background: dark
        ? "repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0 8px, rgba(255,255,255,0.02) 8px 16px), #1E293B"
        : "repeating-linear-gradient(135deg, rgba(0,0,0,0.04) 0 8px, rgba(0,0,0,0.015) 8px 16px), #F1F5F9",
      border: `1px solid ${dark ? "rgba(255,255,255,0.10)" : "var(--border)"}`,
      borderRadius: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: dark ? "rgba(255,255,255,0.6)" : "var(--muted)",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.08em",
      position: "relative",
      overflow: "hidden",
    }}>
      {accent && (
        <div style={{
          position: "absolute",
          right: -20, bottom: -20,
          width: 110, height: 110,
          background: "var(--blue)",
          opacity: 0.9,
          borderRadius: 2,
        }}/>
      )}
      <div style={{ position: "relative", zIndex: 1 }}>{label || "IMAGE"}</div>
    </div>
  );
}

/* -------- Nav -------- */

function Nav({ page, onNavigate, transparent = false }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        background: scrolled
          ? "rgba(15,23,42,0.85)"
          : transparent
            ? "transparent"
            : "rgba(15,23,42,0.92)",
        backdropFilter: scrolled || !transparent ? "blur(14px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled || !transparent ? "blur(14px) saturate(180%)" : "none",
        borderBottom: `1px solid ${scrolled ? "rgba(255,255,255,0.06)" : "transparent"}`,
        transition: "background .25s, border-color .25s, backdrop-filter .25s",
      }}
    >
      <div className="container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 72,
      }}>
        {/* Logo */}
        <button
          onClick={() => onNavigate("home")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "white",
          }}
        >
          <div style={{
            width: 32, height: 32,
            background: "var(--blue)",
            borderRadius: 6,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 14,
            color: "white",
            letterSpacing: "-0.02em",
          }}>cg</div>
          <span style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: 16,
            letterSpacing: "-0.01em",
          }}>
            Charlotte Galichet
          </span>
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "rgba(255,255,255,0.45)",
            paddingLeft: 10,
            marginLeft: 4,
            borderLeft: "1px solid rgba(255,255,255,0.15)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}>
            Avocate
          </span>
        </button>

        {/* Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 36 }}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={"nav-link " + (page === item.id ? "active" : "")}
            >
              {item.label}
            </button>
          ))}
          <Magnetic strength={8}>
            <button
              className="btn btn-primary"
              style={{ height: 40, padding: "0 18px", fontSize: 14 }}
              onClick={() => onNavigate("contact")}
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

/* -------- Footer -------- */

function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="mesh-bg" style={{ opacity: 0.6 }}/>
      <div className="grain"/>
      <div className="container" style={{ position: "relative" }}>
        {/* Top */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
          gap: 48,
          paddingBottom: 56,
        }}>
          <div>
            <div style={{
              display: "flex", alignItems: "center", gap: 10, marginBottom: 18,
            }}>
              <div style={{
                width: 32, height: 32, background: "var(--blue)", borderRadius: 6,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-display)", fontWeight: 700, color: "white",
              }}>cg</div>
              <span style={{
                fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 18,
              }}>Charlotte Galichet</span>
            </div>
            <p style={{
              color: "#94A3B8", fontSize: 14, lineHeight: 1.7, maxWidth: 320,
            }}>
              Avocate au Barreau de Paris. Conseil et contentieux en droit de l'IA, RGPD et propriété intellectuelle pour les entreprises B2B qui avancent vite.
            </p>
          </div>

          <div>
            <div className="eyebrow eyebrow-dark" style={{ marginBottom: 18 }}>Cabinet</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { id: "about", label: "À propos" },
                { id: "domains", label: "Domaines d'expertise" },
                { id: "articles", label: "Articles & veille" },
                { id: "contact", label: "Contact" },
              ].map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => onNavigate(l.id)}
                    style={{ color: "#CBD5E1", fontSize: 14, transition: "color .2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#CBD5E1")}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow eyebrow-dark" style={{ marginBottom: 18 }}>Coordonnées</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, color: "#CBD5E1", fontSize: 14 }}>
              <li>4 place de Valois</li>
              <li>75001 Paris</li>
              <li style={{ marginTop: 6 }}>charlotte.galichet@avocatsp.com</li>
            </ul>
          </div>

          <div>
            <div className="eyebrow eyebrow-dark" style={{ marginBottom: 18 }}>Suivre</div>
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { icon: Icon.linkedin, label: "LinkedIn" },
                { icon: Icon.twitter, label: "Twitter / X" },
              ].map((s, i) => {
                const I = s.icon;
                return (
                  <a key={i} href="#" aria-label={s.label} style={{
                    width: 40, height: 40, borderRadius: 8,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#CBD5E1", transition: "all .2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--blue)";
                    e.currentTarget.style.borderColor = "var(--blue)";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                    e.currentTarget.style.color = "#CBD5E1";
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
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 24,
          color: "#64748B",
          fontSize: 13,
        }}>
          <div>© 2026 Charlotte Galichet · Tous droits réservés</div>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="#" style={{ color: "#94A3B8" }}>Mentions légales</a>
            <a href="#" style={{ color: "#94A3B8" }}>Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* -------- Section header -------- */

function SectionHeader({ eyebrow, title, lead, dark = false, align = "left" }) {
  return (
    <div style={{ maxWidth: 720, marginLeft: align === "center" ? "auto" : 0, marginRight: align === "center" ? "auto" : 0, textAlign: align }}>
      <Reveal>
        <div className={"eyebrow " + (dark ? "eyebrow-dark" : "")} style={{ marginBottom: 18 }}>{eyebrow}</div>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="display-md" style={{ color: dark ? "white" : "var(--ink)", textWrap: "balance" }}>{title}</h2>
      </Reveal>
      {lead && (
        <Reveal delay={160}>
          <p className={"lead " + (dark ? "lead-dark" : "")} style={{ marginTop: 20 }}>{lead}</p>
        </Reveal>
      )}
    </div>
  );
}

/* Expose globals */
Object.assign(window, {
  NAV_ITEMS,
  Reveal, Stagger, useReveal, CountUp, BlueDivider, Magnetic,
  Icon, HeadshotFrame, ImgPlaceholder,
  Nav, Footer, SectionHeader,
});
