import { useState, useEffect, useRef } from 'react';
import portraitImg from '../../imports/IMG_0633Bw-732x1024.jpg';

/* ============================================
   HOOKS
   ============================================ */

export function useReveal(options: IntersectionObserverInit = {}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;

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
  }, [shown, options]);

  return [ref, shown] as const;
}

/* ============================================
   SHARED COMPONENTS
   ============================================ */

export function Reveal({
  as = 'div',
  variant = 'up',
  delay = 0,
  className = '',
  style = {},
  children
}: {
  as?: any;
  variant?: 'up' | 'left' | 'right';
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  const [ref, shown] = useReveal();
  const Tag = as;
  const cls =
    'reveal ' +
    (variant === 'left' ? 'reveal-left ' : variant === 'right' ? 'reveal-right ' : '') +
    (shown ? 'in ' : '') +
    className;
  return (
    <Tag
      ref={ref}
      className={cls}
      style={{ animationDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}

export function CountUp({ to, duration = 1400, suffix = '', prefix = '' }: { to: number; duration?: number; suffix?: string; prefix?: string }) {
  const [ref, shown] = useReveal({ threshold: 0.5 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!shown) return;
    const start = performance.now();
    let raf: number;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(eased * to));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [shown, to, duration]);

  return <span ref={ref as any}>{prefix}{val}{suffix}</span>;
}

export function BlueDivider({ delay = 0, style = {} }: { delay?: number; style?: React.CSSProperties }) {
  const [ref, shown] = useReveal({ threshold: 0.5 });
  return (
    <div
      ref={ref as any}
      className={'divider-line ' + (shown ? 'in ' : '')}
      style={{ animationDelay: `${delay}ms`, ...style }}
    />
  );
}

export function Magnetic({ children, strength = 14 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf: number;
    const move = (e: MouseEvent) => {
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
      el.style.transform = 'translate(0,0)';
    };
    el.addEventListener('mousemove', move as any);
    el.addEventListener('mouseleave', reset);
    return () => {
      el.removeEventListener('mousemove', move as any);
      el.removeEventListener('mouseleave', reset);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength]);

  return <span ref={ref} className="magnetic">{children}</span>;
}

/* ============================================
   ICONS
   ============================================ */

export const Icon = {
  arrow: (p?: any) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...p}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  arrowUpRight: (p?: any) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...p}>
      <path d="M4 10L10 4M10 4H5M10 4V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  plus: (p?: any) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...p}>
      <path d="M7 1.5v11M1.5 7h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
  calendar: (p?: any) => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...p}>
      <rect x="2.5" y="3.5" width="13" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M2.5 7h13M6 2v3M12 2v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  mail: (p?: any) => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...p}>
      <rect x="2.5" y="4" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M3 5l6 5 6-5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    </svg>
  ),
  upload: (p?: any) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...p}>
      <path d="M8 11V3M5 6l3-3 3 3M3 11v2h10v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  check: (p?: any) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...p}>
      <path d="M3 8.5L6.5 12L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  linkedin: (p?: any) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" {...p}>
      <path d="M3.6 5h2.2v8.5H3.6V5zM4.7 1.7a1.3 1.3 0 110 2.6 1.3 1.3 0 010-2.6zM7.4 5h2.1v1.2h.03c.3-.55 1.03-1.13 2.12-1.13 2.27 0 2.69 1.49 2.69 3.43v4.97h-2.2V8.96c0-1.05-.02-2.4-1.46-2.4-1.46 0-1.69 1.14-1.69 2.32v4.62H7.4V5z"/>
    </svg>
  ),
  twitter: (p?: any) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" {...p}>
      <path d="M12.2 2h2.13l-4.65 5.32L15 14h-4.27l-3.35-4.38L3.6 14H1.47l4.97-5.68L1 2h4.37l3.03 4.01L12.2 2zm-.75 10.7h1.18L4.6 3.23H3.34l8.11 9.47z"/>
    </svg>
  ),
  doc: (p?: any) => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...p}>
      <path d="M4 2h6l4 4v10H4V2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M10 2v4h4M6.5 10h5M6.5 13h3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  ai: (p?: any) => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" {...p}>
      <rect x="3" y="3" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="8" cy="9" r="1.2" fill="currentColor"/>
      <circle cx="14" cy="9" r="1.2" fill="currentColor"/>
      <path d="M7 14c1.2 1.2 2.6 1.8 4 1.8s2.8-.6 4-1.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  shield: (p?: any) => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" {...p}>
      <path d="M11 2l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V5l8-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M7.5 11l2.5 2.5L15 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  copyright: (p?: any) => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" {...p}>
      <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M14 8.5c-.7-.8-1.7-1.2-2.8-1.2-2.2 0-3.7 1.6-3.7 3.7s1.5 3.7 3.7 3.7c1.1 0 2.1-.4 2.8-1.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  quote: (p?: any) => (
    <svg viewBox="0 0 80 64" fill="none" {...p}>
      <path d="M0 64V40C0 22 11 6 30 0L36 12C24 17 18 24 17 32H30V64H0zM44 64V40C44 22 55 6 74 0L80 12C68 17 62 24 61 32H74V64H44z" fill="currentColor"/>
    </svg>
  ),
};

export function HeadshotFrame({ floating = true }: { floating?: boolean }) {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: 420,
      aspectRatio: '4/5',
      margin: '0 auto',
    }}>
      {/* Geometric accent block behind */}
      <div style={{
        position: 'absolute',
        right: -24, bottom: -24,
        width: '60%', height: '60%',
        background: 'var(--blue)',
        borderRadius: 4,
        opacity: 0.95,
      }}/>
      <div style={{
        position: 'absolute',
        left: -16, top: -16,
        width: 80, height: 80,
        border: '1px solid rgba(255,255,255,0.35)',
        borderRadius: 4,
      }}/>
      {/* The frame itself */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: 4,
          overflow: 'hidden',
          animation: floating ? 'float 6s ease-in-out infinite' : 'none',
        }}
      >
        <img
          src={portraitImg}
          alt="Charlotte Galichet, Avocate spécialisée en droit de l'IA"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        {/* Soft vertical light overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(115deg, transparent 45%, rgba(255,255,255,0.04) 55%, transparent 65%)',
          pointerEvents: 'none',
        }}/>
      </div>
    </div>
  );
}

export function ImgPlaceholder({ label, ratio = '16/10', dark = false }: { label?: string; ratio?: string; dark?: boolean }) {
  return (
    <div style={{
      width: '100%',
      aspectRatio: ratio,
      background: dark
        ? 'repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0 8px, rgba(255,255,255,0.02) 8px 16px), #1E293B'
        : 'repeating-linear-gradient(135deg, rgba(0,0,0,0.04) 0 8px, rgba(0,0,0,0.015) 8px 16px), #E2E8F0',
      border: `1px solid ${dark ? 'rgba(255,255,255,0.10)' : 'var(--border)'}`,
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: dark ? 'rgba(255,255,255,0.6)' : 'var(--muted)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.08em',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'relative', zIndex: 1 }}>{label || 'IMAGE'}</div>
    </div>
  );
}
