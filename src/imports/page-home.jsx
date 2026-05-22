/* Home page */

function HomePage({ onNavigate }) {
  return (
    <div className="page">
      {/* ============ HERO ============ */}
      <section className="dark-section" style={{ paddingTop: 132, paddingBottom: 100, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <div className="mesh-bg"/>
        <div className="grain"/>

        <div className="container" style={{ position: "relative", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: 80,
            alignItems: "center",
          }}>
            {/* Left: copy */}
            <div>
              <Reveal>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  padding: "6px 12px 6px 8px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.04)",
                  marginBottom: 32,
                }}>
                  <span style={{
                    width: 8, height: 8, borderRadius: "50%",
                    background: "#34D399",
                    boxShadow: "0 0 8px rgba(52,211,153,0.7)",
                  }}/>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.85)" }}>
                    Disponible pour de nouvelles missions — juin 2026
                  </span>
                </div>
              </Reveal>

              <h1 className="display-xl" style={{ color: "white" }}>
                <Reveal as="span" delay={0} style={{ display: "block" }}>
                  Avocate en droit
                </Reveal>
                <Reveal as="span" delay={120} style={{ display: "block" }}>
                  de l'<span className="ia-highlight">IA</span>, RGPD &amp;
                </Reveal>
                <Reveal as="span" delay={240} style={{ display: "block" }}>
                  propriété intellectuelle.
                </Reveal>
              </h1>

              <Reveal delay={520}>
                <p style={{
                  marginTop: 32,
                  fontSize: 19,
                  lineHeight: 1.55,
                  color: "#CBD5E1",
                  maxWidth: 560,
                }}>
                  Conseil juridique et contentieux pour les <span style={{ color: "white" }}>entreprises B2B</span> qui déploient l'IA, traitent de la donnée à grande échelle ou construisent des produits numériques.
                </p>
              </Reveal>

              <Reveal delay={640}>
                <div style={{ display: "flex", gap: 14, marginTop: 40, flexWrap: "wrap" }}>
                  <Magnetic strength={10}>
                    <button className="btn btn-primary" onClick={() => onNavigate("contact")}>
                      Prendre rendez-vous
                      <Icon.arrow/>
                    </button>
                  </Magnetic>
                  <button className="btn btn-ghost-dark" onClick={() => onNavigate("domains")}>
                    Découvrir les expertises
                  </button>
                </div>
              </Reveal>

              <Reveal delay={780}>
                <div style={{
                  marginTop: 56,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}>
                  <div style={{ width: 32, height: 1, background: "rgba(255,255,255,0.2)" }}/>
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
        <div className="container" style={{ position: "relative", display: "flex", justifyContent: "center", marginTop: 40 }}>
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
        <div className="container" style={{ position: "relative" }}>
          <Reveal>
            <div className="glass" style={{
              padding: "44px 56px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gap: 0,
              alignItems: "stretch",
            }}>
              {[
                { num: 20, suffix: "", label: "ans au Barreau de Paris", sub: "Cabinet fondé en juillet 2016" },
                { num: 47, suffix: "+", label: "publications Dalloz IP/IT", sub: "Veille mensuelle depuis 2018" },
                { num: 100, suffix: "%", label: "clientèle B2B", sub: "Startups, scale-ups & corporates" },
                { num: 1, suffix: "ʳᵉ", label: "consultation gratuite", sub: "30 min · diagnostic & devis" },
              ].map((stat, i, arr) => (
                <div key={i} style={{
                  padding: "0 32px",
                  borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.10)" : "none",
                  display: "flex", flexDirection: "column", justifyContent: "center",
                }}>
                  <div style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 56,
                    lineHeight: 1,
                    color: "white",
                    letterSpacing: "-0.025em",
                  }}>
                    <CountUp to={stat.num} suffix={stat.suffix}/>
                  </div>
                  <div style={{
                    marginTop: 14,
                    color: "white",
                    fontWeight: 500,
                    fontSize: 14,
                  }}>{stat.label}</div>
                  <div style={{
                    marginTop: 4,
                    color: "#94A3B8",
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
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: 80,
            alignItems: "end",
            marginBottom: 64,
          }}>
            <div>
              <Reveal>
                <div className="eyebrow" style={{ marginBottom: 18 }}>
                  <span style={{ color: "var(--blue)" }}>·</span>&nbsp;&nbsp;01 — Expertises
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg" style={{ textWrap: "balance" }}>
                  Trois domaines.<br/>Une seule logique :<br/>
                  <span style={{ color: "var(--blue)" }}>protéger ce qui crée de la valeur.</span>
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
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 24,
          }}>
            {[
              {
                tag: "IA", tagClass: "tag-ia",
                accent: "#1D4ED8",
                icon: Icon.ai,
                title: "Droit de l'IA",
                desc: "Conformité AI Act, audit des algorithmes et systèmes d'intelligence artificielle, rédaction et négociation de contrats IA (licences, prestation de services IA, clauses de responsabilité).",
                items: ["AI Act", "Audit d'algorithmes", "Contrats IA", "Responsabilité"],
              },
              {
                tag: "RGPD", tagClass: "tag-rgpd",
                accent: "#166534",
                icon: Icon.shield,
                title: "RGPD & Données",
                desc: "Mise en conformité RGPD, DPO externalisé, audits de conformité, accompagnement dans les relations avec la CNIL, gestion des violations de données, formation des équipes.",
                items: ["Mise en conformité", "DPO externalisé", "Audit CNIL", "Data breach"],
              },
              {
                tag: "PI", tagClass: "tag-pi",
                accent: "#5B21B6",
                icon: Icon.copyright,
                title: "Propriété intellectuelle",
                desc: "Protection et défense des marques, droits d'auteur sur les logiciels et contenus numériques, contrats de cession et de licence, contentieux PI.",
                items: ["Marques", "Logiciels", "Contrats PI", "Contentieux"],
              },
            ].map((card, i) => {
              const I = card.icon;
              return (
                <Reveal key={i} variant={i % 2 === 0 ? "left" : "right"} delay={i * 120}>
                  <div className="card-expertise" style={{ borderLeftColor: card.accent, height: "100%", display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
                      <div style={{
                        width: 48, height: 48, borderRadius: 10,
                        background: card.accent + "15",
                        color: card.accent,
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <I/>
                      </div>
                      <span className={"tag " + card.tagClass}>{card.tag}</span>
                    </div>
                    <h3 className="display-sm" style={{ marginBottom: 14 }}>{card.title}</h3>
                    <p style={{ color: "var(--muted)", fontSize: 14.5, lineHeight: 1.65, marginBottom: 24 }}>
                      {card.desc}
                    </p>
                    <ul style={{
                      listStyle: "none",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      marginBottom: 28,
                    }}>
                      {card.items.map((it, j) => (
                        <li key={j} style={{
                          fontSize: 12,
                          padding: "4px 10px",
                          borderRadius: 6,
                          background: "var(--bg-soft)",
                          color: "var(--ink-2)",
                          border: "1px solid var(--border-soft)",
                        }}>{it}</li>
                      ))}
                    </ul>
                    <button
                      onClick={() => onNavigate("domains")}
                      className="btn-link"
                      style={{ marginTop: "auto", color: card.accent }}
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

      {/* ============ APPROCHE ============ */}
      <section style={{ background: "var(--bg-soft)" }} className="section">
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: 96,
            alignItems: "start",
          }}>
            <div style={{ position: "sticky", top: 100 }}>
              <Reveal>
                <div className="eyebrow" style={{ marginBottom: 18 }}>
                  <span style={{ color: "var(--blue)" }}>·</span>&nbsp;&nbsp;02 — Méthode
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg" style={{ textWrap: "balance" }}>
                  Un cabinet solo, calibré pour les équipes tech.
                </h2>
              </Reveal>
              <Reveal delay={180}>
                <p className="lead" style={{ marginTop: 24 }}>
                  Pas de stagiaires, pas d'intermédiaires. Vous parlez directement à l'avocate qui suit votre dossier — du diagnostic à la décision du juge si nécessaire.
                </p>
              </Reveal>
              <Reveal delay={260}>
                <div style={{ marginTop: 32 }}>
                  <Magnetic strength={8}>
                    <button className="btn btn-ghost-light" onClick={() => onNavigate("about")}>
                      Lire le parcours
                      <Icon.arrow/>
                    </button>
                  </Magnetic>
                </div>
              </Reveal>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                {
                  step: "01",
                  title: "Diagnostic gratuit (30 min)",
                  body: "Un échange initial sans engagement pour cadrer votre besoin, mesurer le risque et identifier ce qui doit être fait — et ce qui peut attendre.",
                },
                {
                  step: "02",
                  title: "Lettre de mission claire",
                  body: "Périmètre d'intervention, livrables, modalités de facturation et estimation budgétaire. Tout est écrit avant qu'on commence — vous savez où vous allez.",
                },
                {
                  step: "03",
                  title: "Conseil ou contentieux",
                  body: "Rédaction de contrats, audits, mise en conformité, formation des équipes ou défense devant les juridictions civiles, commerciales et administratives.",
                },
                {
                  step: "04",
                  title: "Veille & accompagnement continu",
                  body: "Pour les clients réguliers : retainer mensuel, accès direct par email, alertes sur les évolutions réglementaires qui concernent votre activité.",
                },
              ].map((it, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr",
                    gap: 32,
                    padding: "32px 0",
                    borderTop: i === 0 ? "1px solid var(--border)" : "none",
                    borderBottom: "1px solid var(--border)",
                  }}>
                    <div style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 13,
                      color: "var(--blue)",
                      letterSpacing: "0.08em",
                      paddingTop: 4,
                    }}>
                      {it.step}
                    </div>
                    <div>
                      <h3 style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 500,
                        fontSize: 22,
                        letterSpacing: "-0.015em",
                        marginBottom: 8,
                      }}>{it.title}</h3>
                      <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.65 }}>{it.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ PULL QUOTE / DALLOZ ============ */}
      <section className="section-sm">
        <div className="container">
          <Reveal>
            <div style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: 48,
              alignItems: "center",
            }}>
              <div style={{
                color: "var(--blue)",
                opacity: 0.18,
              }}>
                <Icon.quote style={{ width: 120, height: 96 }}/>
              </div>
              <div>
                <p className="pullquote">
                  « Je ne surveille pas vos pratiques —<br/>
                  <span style={{ color: "var(--blue)" }}>je les protège.</span> »
                </p>
                <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 14, color: "var(--muted)", fontSize: 14 }}>
                  <div style={{ width: 40, height: 1, background: "var(--border)" }}/>
                  Charlotte Galichet, fondatrice du cabinet
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ ARTICLES PREVIEW ============ */}
      <section className="section" style={{ background: "var(--bg-soft)" }}>
        <div className="container">
          <div style={{
            display: "flex",
            alignItems: "end",
            justifyContent: "space-between",
            marginBottom: 56,
            gap: 32,
          }}>
            <div>
              <Reveal>
                <div className="eyebrow" style={{ marginBottom: 18 }}>
                  <span style={{ color: "var(--blue)" }}>·</span>&nbsp;&nbsp;03 — Veille juridique
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg" style={{ textWrap: "balance" }}>
                  Articles récents.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <button onClick={() => onNavigate("articles")} className="btn-link">
                Toute la veille
                <span className="arrow"><Icon.arrow/></span>
              </button>
            </Reveal>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr",
            gap: 24,
          }}>
            {HOME_ARTICLES.map((art, i) => (
              <Reveal key={i} delay={i * 120}>
                <ArticleCard art={art} featured={i === 0} onClick={() => onNavigate("articles")} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="dark-section section" style={{ paddingTop: 100, paddingBottom: 120 }}>
        <div className="mesh-bg"/>
        <div className="grain"/>
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <Reveal>
            <div className="eyebrow eyebrow-dark" style={{ marginBottom: 24 }}>Prochaine étape</div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-lg" style={{ color: "white", maxWidth: 880, margin: "0 auto", textWrap: "balance" }}>
              Un projet IA, RGPD ou PI ? <br/>
              <span style={{ color: "#94A3B8" }}>Parlons-en 30 minutes.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 40 }}>
              <Magnetic>
                <button className="btn btn-primary" onClick={() => onNavigate("contact")}>
                  Prendre rendez-vous
                  <Icon.arrow/>
                </button>
              </Magnetic>
              <button className="btn btn-ghost-dark" onClick={() => onNavigate("about")}>
                À propos du cabinet
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

/* ----- Sample article card ----- */

const HOME_ARTICLES = [
  {
    tag: "RGPD & Données", tagClass: "tag-rgpd",
    title: "Pixels de tracking CNIL : ce qui change pour vos emails",
    excerpt: "La CNIL précise les règles applicables aux pixels de tracking dans les emails marketing. Analyse des nouvelles obligations et impacts concrets pour les équipes growth.",
    date: "15 mai 2026",
    read: "6 min",
    featured: true,
  },
  {
    tag: "IA & Numérique", tagClass: "tag-ia",
    title: "AI Act : vos obligations en tant qu'entreprise utilisatrice",
    excerpt: "Décryptage des obligations qui pèsent sur les entreprises qui déploient des systèmes d'IA dans leurs activités.",
    date: "8 mai 2026",
    read: "9 min",
  },
  {
    tag: "RGPD & Données", tagClass: "tag-rgpd",
    title: "CEPD et données de santé : la nouvelle recommandation",
    excerpt: "Le Comité européen de la protection des données publie de nouvelles lignes directrices sur les données de santé.",
    date: "2 mai 2026",
    read: "7 min",
  },
];

function ArticleCard({ art, featured = false, onClick }) {
  return (
    <article
      className="article-card"
      onClick={onClick}
      style={{
        cursor: "pointer",
        gridRow: featured ? "span 1" : "auto",
        background: "white",
      }}
    >
      {featured && (
        <ImgPlaceholder label="ARTICLE COVER · 16:10" ratio="16/10"/>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
        <span className={"tag " + art.tagClass} style={{ alignSelf: "flex-start" }}>{art.tag}</span>
        <h3 style={{
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize: featured ? 24 : 19,
          lineHeight: 1.25,
          letterSpacing: "-0.015em",
          color: "var(--ink)",
        }}>{art.title}</h3>
        {featured && (
          <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.6 }}>{art.excerpt}</p>
        )}
        <div style={{
          marginTop: "auto",
          paddingTop: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "var(--font-mono)",
          fontSize: 11.5,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "var(--muted)",
        }}>
          <span>{art.date} · {art.read}</span>
          <span style={{ color: "var(--blue)", display: "inline-flex", alignItems: "center", gap: 4 }}>
            Lire <Icon.arrowUpRight/>
          </span>
        </div>
      </div>
    </article>
  );
}

Object.assign(window, { HomePage, ArticleCard, HOME_ARTICLES });
