/* Domaines & FAQ page */

const DOMAINS = [
  {
    id: "ia",
    tag: "IA",
    tagClass: "tag-ia",
    accent: "#1D4ED8",
    accentBg: "#DBEAFE",
    icon: Icon.ai,
    title: "Droit de l'IA",
    intro: "Accompagnement sur la conformité AI Act, audit des algorithmes et systèmes d'intelligence artificielle, rédaction et négociation de contrats IA (licences, prestation de services IA, clauses de responsabilité).",
    deliverables: [
      "Audit de conformité AI Act (cartographie, classification des systèmes, gap analysis)",
      "Rédaction de politique d'usage de l'IA & charte interne pour vos équipes",
      "Négociation de contrats avec vos fournisseurs de modèles fondationnels",
      "Clauses de responsabilité, garantie d'éviction, propriété des sorties IA",
      "Représentation devant les juridictions et autorités de contrôle",
    ],
    faqs: [
      {
        q: "Que couvre l'AI Act pour mon entreprise ?",
        a: "L'AI Act s'applique à tout système d'IA mis sur le marché ou utilisé dans l'Union européenne. Pour une entreprise utilisatrice, les obligations dépendent du niveau de risque du système (interdit, haut risque, risque limité, risque minimal). Nous établissons d'abord une cartographie de vos usages, puis classifions chaque système pour identifier les obligations applicables : documentation technique, transparence, surveillance humaine, registre des incidents.",
      },
      {
        q: "Suis-je concerné par les obligations IA ?",
        a: "Si vous déployez un système d'IA dans votre activité — même fourni par un tiers — vous êtes a minima « déployeur » au sens de l'AI Act. Vos obligations sont allégées par rapport au fournisseur, mais réelles : information des personnes concernées, surveillance humaine, formation des utilisateurs internes. Pour les systèmes à haut risque (RH, scoring, biométrie), des obligations supplémentaires s'appliquent.",
      },
      {
        q: "Comment se passe un audit d'algorithme ?",
        a: "L'audit se déroule en trois étapes : (1) entretiens avec vos équipes produit, data et juridique pour comprendre le fonctionnement et les finalités du système, (2) analyse de la documentation technique et juridique existante, (3) note d'audit identifiant les écarts de conformité et plan de remédiation hiérarchisé. Durée typique : 3 à 6 semaines selon la complexité.",
      },
      {
        q: "Qui est responsable en cas de dommage causé par l'IA ?",
        a: "Le régime de responsabilité dépend du rôle joué (fournisseur, déployeur, utilisateur final), du type de système et du dommage. La directive européenne sur la responsabilité de l'IA, articulée avec le droit français de la responsabilité civile, permet de répartir clairement les risques. Cette répartition se prépare en amont dans les contrats — c'est précisément l'objet des clauses IA que je rédige.",
      },
    ],
  },
  {
    id: "rgpd",
    tag: "RGPD",
    tagClass: "tag-rgpd",
    accent: "#166534",
    accentBg: "#DCFCE7",
    icon: Icon.shield,
    title: "RGPD & Données personnelles",
    intro: "Mise en conformité RGPD, DPO externalisé, audits de conformité, accompagnement dans les relations avec la CNIL, gestion des violations de données, formation des équipes.",
    deliverables: [
      "Mise en conformité complète : registre, analyses d'impact, politiques internes",
      "Mission DPO externalisée pour PME et scale-ups (forfait mensuel)",
      "Rédaction des mentions, formulaires de consentement et contrats DPA",
      "Gestion d'une violation de données : notification CNIL 72h, communication clients",
      "Représentation et défense en cas de contrôle ou de procédure de sanction",
    ],
    faqs: [
      {
        q: "Ai-je besoin d'un DPO ?",
        a: "La désignation d'un DPO est obligatoire dans trois cas : autorité publique, traitement à grande échelle de catégories particulières de données (santé, biométrie…), ou suivi régulier et systématique des personnes à grande échelle. Pour les autres, la désignation reste vivement recommandée dès lors que vous traitez des données à un rythme soutenu. Le DPO peut être interne ou externalisé.",
      },
      {
        q: "Comment se passe un audit RGPD ?",
        a: "L'audit débute par un atelier de cadrage avec les équipes concernées, puis une revue des traitements existants (registre, finalités, bases légales, durées de conservation). Nous identifions les écarts et établissons un plan d'action priorisé en fonction du risque et de l'effort. Le livrable final est exploitable directement par votre équipe produit ou DPO interne.",
      },
      {
        q: "Que faire en cas de violation de données ?",
        a: "Premier réflexe : qualifier l'incident. Toute violation entraînant un risque pour les droits et libertés des personnes doit être notifiée à la CNIL dans les 72h. En cas de risque élevé, les personnes concernées doivent aussi être informées. Je vous accompagne en urgence pour qualifier, documenter et notifier — et pour préparer la communication interne et externe.",
      },
      {
        q: "Comment se déroule un contrôle CNIL ?",
        a: "Les contrôles peuvent être sur pièces, sur place ou en ligne. Vous disposez d'un droit d'opposition limité et d'un droit d'assistance par un avocat. Mon rôle est de cadrer les échanges avec les contrôleurs, sécuriser les pièces communiquées, formaliser les observations en réponse au procès-verbal et, le cas échéant, défendre le dossier devant la formation restreinte.",
      },
    ],
  },
  {
    id: "pi",
    tag: "PI",
    tagClass: "tag-pi",
    accent: "#5B21B6",
    accentBg: "#EDE9FE",
    icon: Icon.copyright,
    title: "Propriété intellectuelle",
    intro: "Protection et défense des marques, droits d'auteur sur les logiciels et contenus numériques, contrats de cession et de licence, contentieux PI.",
    deliverables: [
      "Stratégie de dépôt et gestion de portefeuille de marques (France, UE, international)",
      "Protection des logiciels : audits de chaîne de titularité, contrats de cession",
      "Licences open source : analyse de compatibilité, conformité GPL/AGPL/MIT",
      "Contentieux : action en contrefaçon, opposition, action en nullité, défense",
      "Audit PI dans le cadre d'opérations de levée de fonds ou de M&A",
    ],
    faqs: [
      {
        q: "Comment protéger mon logiciel ?",
        a: "Le logiciel est protégé par le droit d'auteur dès sa création — aucune formalité n'est requise. La vraie question est celle de la titularité : qui détient les droits ? L'audit consiste à reconstituer la chaîne de titularité (salariés, freelances, prestataires, contributions open source) et à corriger les zones d'ombre par des cessions formelles. C'est une étape critique avant toute levée de fonds.",
      },
      {
        q: "Qu'est-ce qu'une violation de marque ?",
        a: "Il y a contrefaçon de marque dès lors qu'un tiers utilise un signe identique ou similaire à votre marque, pour des produits ou services identiques ou similaires, sans votre autorisation, et qu'il existe un risque de confusion dans l'esprit du public. Plusieurs actions sont possibles : mise en demeure, opposition, saisie-contrefaçon, action en contrefaçon devant le tribunal judiciaire.",
      },
      {
        q: "Marques et IA générative : quels risques ?",
        a: "L'IA générative pose deux questions distinctes. Côté entrée : l'entraînement sur des données protégées peut soulever des questions de contrefaçon. Côté sortie : les contenus générés peuvent reproduire involontairement des œuvres ou des marques protégées. Les cabinets qui utilisent l'IA générative doivent encadrer ces deux risques par des clauses contractuelles précises.",
      },
      {
        q: "Quels droits sur les contenus créés par IA ?",
        a: "En l'état du droit français, seule une création humaine ouvre droit à la protection par le droit d'auteur. Les contenus purement générés par IA, sans intervention créative humaine substantielle, ne sont pas protégés. La frontière est subtile et évolutive — la doctrine s'oriente vers une protection des œuvres « assistées » par IA si l'apport humain reste déterminant.",
      },
    ],
  },
];

function DomainsPage({ onNavigate }) {
  const [activeDomain, setActiveDomain] = useState("ia");
  const [openFaq, setOpenFaq] = useState("ia-0");

  return (
    <div className="page">
      {/* HERO */}
      <section className="dark-section" style={{ paddingTop: 132, paddingBottom: 80 }}>
        <div className="mesh-bg"/>
        <div className="grain"/>
        <div className="container" style={{ position: "relative" }}>
          <Reveal>
            <div className="eyebrow eyebrow-dark" style={{ marginBottom: 24 }}>
              <span style={{ color: "var(--blue)" }}>·</span>&nbsp;&nbsp;Domaines d'expertise
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 80, alignItems: "end" }}>
            <Reveal delay={80}>
              <h1 className="display-xl" style={{ color: "white", textWrap: "balance" }}>
                Trois domaines.<br/>
                <span style={{ color: "#94A3B8" }}>Trois manières de</span>{" "}
                <span style={{ color: "var(--blue)" }}>sécuriser</span>{" "}
                <span style={{ color: "#94A3B8" }}>votre activité.</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p style={{ color: "#CBD5E1", fontSize: 17.5, lineHeight: 1.6 }}>
                IA, RGPD et propriété intellectuelle sont les trois colonnes du droit du numérique en 2026. Charlotte intervient sur chacune — en conseil, en contractuel et en contentieux.
              </p>
            </Reveal>
          </div>

          {/* Domain quick-tabs */}
          <Reveal delay={320}>
            <div style={{
              marginTop: 56,
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
            }}>
              {DOMAINS.map((d) => (
                <button
                  key={d.id}
                  onClick={() => {
                    setActiveDomain(d.id);
                    document.getElementById("domain-" + d.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "10px 18px",
                    borderRadius: 999,
                    background: activeDomain === d.id ? "white" : "rgba(255,255,255,0.05)",
                    border: `1px solid ${activeDomain === d.id ? "white" : "rgba(255,255,255,0.12)"}`,
                    color: activeDomain === d.id ? "var(--ink)" : "rgba(255,255,255,0.85)",
                    fontSize: 14,
                    fontWeight: 500,
                    transition: "all .2s",
                  }}
                >
                  <span className={"tag " + d.tagClass} style={{ padding: "2px 7px", fontSize: 10.5 }}>{d.tag}</span>
                  {d.title}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="container"><BlueDivider/></div>

      {/* DOMAIN BLOCKS */}
      {DOMAINS.map((d, idx) => {
        const I = d.icon;
        return (
          <section key={d.id} id={"domain-" + d.id} className="section" style={{ background: idx % 2 === 1 ? "var(--bg-soft)" : "white" }}>
            <div className="container">
              {/* Header row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, alignItems: "start", marginBottom: 64 }}>
                <div>
                  <Reveal>
                    <div style={{
                      display: "flex", alignItems: "center", gap: 14, marginBottom: 28,
                    }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 12,
                        background: d.accentBg,
                        color: d.accent,
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <I/>
                      </div>
                      <div>
                        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                          0{idx + 1} / 03
                        </div>
                        <span className={"tag " + d.tagClass + " tag-pulse"} style={{ marginTop: 6 }}>{d.tag}</span>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal delay={80}>
                    <h2 className="display-lg" style={{ textWrap: "balance" }}>
                      {d.title}
                    </h2>
                  </Reveal>
                </div>
                <Reveal delay={160}>
                  <div>
                    <p className="lead" style={{ marginBottom: 28 }}>{d.intro}</p>
                    <div>
                      <div className="eyebrow" style={{ marginBottom: 16, color: d.accent }}>Livrables types</div>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                        {d.deliverables.map((dv, j) => (
                          <li key={j} style={{ display: "flex", gap: 12, alignItems: "start", fontSize: 15, color: "var(--ink-2)", lineHeight: 1.55 }}>
                            <span style={{
                              minWidth: 18, height: 18, borderRadius: "50%",
                              background: d.accentBg, color: d.accent,
                              display: "flex", alignItems: "center", justifyContent: "center",
                              marginTop: 2,
                            }}>
                              <Icon.check style={{ width: 11, height: 11 }}/>
                            </span>
                            {dv}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* FAQ */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.6fr",
                gap: 80,
                alignItems: "start",
              }}>
                <Reveal>
                  <div style={{ position: "sticky", top: 110 }}>
                    <div className="eyebrow" style={{ marginBottom: 14 }}>Questions fréquentes</div>
                    <h3 className="display-sm" style={{ marginBottom: 18, textWrap: "balance" }}>
                      Les questions qu'on me pose le plus.
                    </h3>
                    <p style={{ color: "var(--muted)", fontSize: 14.5, lineHeight: 1.65, marginBottom: 24 }}>
                      Pas la réponse exacte à votre situation ? La consultation initiale est gratuite — 30 minutes pour cadrer votre besoin précisément.
                    </p>
                    <button className="btn-link" onClick={() => onNavigate("contact")}>
                      Poser ma question
                      <span className="arrow"><Icon.arrow/></span>
                    </button>
                  </div>
                </Reveal>

                <div>
                  {d.faqs.map((f, j) => {
                    const id = d.id + "-" + j;
                    const open = openFaq === id;
                    return (
                      <Reveal key={j} delay={j * 60}>
                        <div className={"faq-item " + (open ? "open" : "")}>
                          <button
                            className="faq-button"
                            onClick={() => setOpenFaq(open ? null : id)}
                            aria-expanded={open}
                          >
                            <span>{f.q}</span>
                            <span className="faq-icon">
                              <Icon.plus/>
                            </span>
                          </button>
                          <div className="faq-body">
                            <div className="faq-body-inner">
                              <div className="faq-content">{f.a}</div>
                            </div>
                          </div>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ============ HONORAIRES ============ */}
      <section className="section" style={{ background: "var(--bg-soft)" }}>
        <div className="container">
          <div style={{
            background: "white",
            border: "1px solid var(--border)",
            borderRadius: 16,
            padding: 56,
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 64,
            alignItems: "start",
          }}>
            <div>
              <Reveal>
                <div className="eyebrow" style={{ marginBottom: 18 }}>Transparence</div>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-md" style={{ textWrap: "balance" }}>
                  Fonctionnement<br/>des honoraires.
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p style={{ marginTop: 24, color: "var(--muted)", fontSize: 15.5, lineHeight: 1.65 }}>
                  Les honoraires sont établis sur devis, après examen gratuit de votre dossier. Chaque mission fait l'objet d'une lettre de mission précisant le périmètre d'intervention, les modalités de facturation, et une estimation du budget.
                </p>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { label: "Consultation initiale", price: "Gratuite", note: "30 minutes · visioconférence ou cabinet" },
                  { label: "Taux horaire", price: "À partir de 350€ HT", note: "Conseil ponctuel, audit, rédaction d'avis" },
                  { label: "Forfait", price: "Sur devis", note: "Audit RGPD, mise en conformité AI Act, dépôt de marque" },
                  { label: "Retainer mensuel", price: "À partir de 1 500€ HT", note: "DPO externalisé, accompagnement continu" },
                ].map((p, i) => (
                  <div key={i} style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: 16,
                    padding: "18px 22px",
                    border: "1px solid var(--border)",
                    borderRadius: 10,
                    alignItems: "center",
                  }}>
                    <div>
                      <div style={{ fontWeight: 500, fontSize: 15, marginBottom: 4 }}>{p.label}</div>
                      <div style={{ color: "var(--muted)", fontSize: 13 }}>{p.note}</div>
                    </div>
                    <div style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: 17,
                      color: "var(--blue)",
                      letterSpacing: "-0.01em",
                    }}>{p.price}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ CTA dark ============ */}
      <section className="dark-section section">
        <div className="mesh-bg"/>
        <div className="grain"/>
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <Reveal>
            <h2 className="display-lg" style={{ color: "white", maxWidth: 800, margin: "0 auto", textWrap: "balance" }}>
              Une question précise ?<br/>
              <span style={{ color: "#94A3B8" }}>30 minutes suffisent.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 40 }}>
              <Magnetic>
                <button className="btn btn-primary" onClick={() => onNavigate("contact")}>
                  Prendre rendez-vous
                  <Icon.arrow/>
                </button>
              </Magnetic>
              <button className="btn btn-ghost-dark" onClick={() => onNavigate("articles")}>
                Articles & veille
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { DomainsPage });
