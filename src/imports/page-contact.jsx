/* Contact + Confirmation pages */

function ContactPage({ onNavigate, onSubmitForm }) {
  const [tab, setTab] = useState("calendly"); // calendly | message
  // Calendly state
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  // Form state
  const [form, setForm] = useState({
    firstname: "", lastname: "", email: "", phone: "",
    company: "", domain: "ia", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const updateForm = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const canConfirm = selectedDate && selectedSlot;
  const canSubmit = form.firstname && form.lastname && form.email && form.message.length > 5;

  const onConfirm = () => {
    onSubmitForm({
      type: "rdv",
      date: selectedDate,
      slot: selectedSlot,
    });
    onNavigate("confirmation");
  };

  const onSubmitMsg = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitted(true);
    setTimeout(() => {
      onSubmitForm({ type: "message", form });
      onNavigate("confirmation");
    }, 500);
  };

  return (
    <div className="page">
      <section style={{ minHeight: "100vh", paddingTop: 72 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          minHeight: "calc(100vh - 72px)",
        }}>
          {/* ============ LEFT: dark panel ============ */}
          <div className="dark-section" style={{
            padding: "80px 64px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            overflow: "hidden",
          }}>
            <div className="mesh-bg"/>
            <div className="grain"/>

            {/* Decorative giant quotation mark */}
            <div style={{
              position: "absolute",
              right: -20, top: 80,
              color: "var(--blue)",
              opacity: 0.13,
              pointerEvents: "none",
            }}>
              <Icon.quote style={{ width: 320, height: 260 }}/>
            </div>

            <div style={{ position: "relative" }}>
              <Reveal>
                <div className="eyebrow eyebrow-dark" style={{ marginBottom: 28 }}>
                  <span style={{ color: "var(--blue)" }}>·</span>&nbsp;&nbsp;Contact
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="display-lg" style={{ color: "white", textWrap: "balance" }}>
                  Parlons de votre <span style={{ color: "var(--blue)" }}>dossier</span>,<br/>
                  pas du temps qu'il fait.
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p style={{
                  marginTop: 28,
                  color: "#CBD5E1",
                  fontSize: 17,
                  lineHeight: 1.6,
                  maxWidth: "44ch",
                }}>
                  Une première consultation gratuite de 30 minutes pour cadrer votre besoin, mesurer le risque et identifier ce qui doit être fait. Sans engagement, sans baratin.
                </p>
              </Reveal>
            </div>

            <div style={{ position: "relative", marginTop: 64, display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                {
                  icon: Icon.calendar,
                  label: "Première consultation gratuite",
                  sub: "30 minutes · visioconférence ou cabinet · sans engagement",
                },
                {
                  icon: Icon.mail,
                  label: "charlotte.galichet@avocatsp.com",
                  sub: "Réponse sous 24h ouvrées",
                },
                {
                  icon: Icon.shield,
                  label: "Secret professionnel absolu",
                  sub: "Vos échanges sont couverts par le secret de l'avocat",
                },
              ].map((line, i) => {
                const I = line.icon;
                return (
                  <Reveal key={i} delay={300 + i * 80}>
                    <div style={{
                      display: "flex",
                      gap: 16,
                      alignItems: "start",
                    }}>
                      <div style={{
                        width: 40, height: 40,
                        borderRadius: 10,
                        background: "rgba(24,71,240,0.15)",
                        color: "var(--blue)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                      }}>
                        <I/>
                      </div>
                      <div>
                        <div style={{ color: "white", fontWeight: 500, fontSize: 15 }}>{line.label}</div>
                        <div style={{ color: "#94A3B8", fontSize: 13, marginTop: 2 }}>{line.sub}</div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={600}>
              <div style={{
                marginTop: 56,
                paddingTop: 32,
                borderTop: "1px solid rgba(255,255,255,0.10)",
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: "50%",
                  background: "rgba(255,255,255,0.06)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-display)",
                  color: "white",
                  fontWeight: 600,
                }}>CG</div>
                <div>
                  <div style={{ color: "white", fontSize: 14, fontWeight: 500 }}>Charlotte Galichet</div>
                  <div style={{ color: "#94A3B8", fontSize: 12.5 }}>Avocate au Barreau de Paris · Cabinet 4 place de Valois</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ============ RIGHT: white panel ============ */}
          <div style={{
            padding: "80px 64px",
            background: "white",
            display: "flex",
            flexDirection: "column",
          }}>
            <Reveal>
              <div style={{ display: "flex", gap: 4, marginBottom: 40, padding: 4, background: "var(--bg-soft)", borderRadius: 12, alignSelf: "flex-start" }}>
                <TabBtn active={tab === "calendly"} onClick={() => setTab("calendly")}>
                  <Icon.calendar/> Prendre rendez-vous
                </TabBtn>
                <TabBtn active={tab === "message"} onClick={() => setTab("message")}>
                  <Icon.mail/> Envoyer une demande
                </TabBtn>
              </div>
            </Reveal>

            {tab === "calendly" ? (
              <CalendlyMock
                selectedDate={selectedDate}
                selectedSlot={selectedSlot}
                setSelectedDate={setSelectedDate}
                setSelectedSlot={setSelectedSlot}
                onConfirm={onConfirm}
                canConfirm={canConfirm}
              />
            ) : (
              <ContactForm
                form={form}
                updateForm={updateForm}
                onSubmit={onSubmitMsg}
                canSubmit={canSubmit}
                submitted={submitted}
              />
            )}

            {/* Honoraires reassurance */}
            <Reveal delay={400}>
              <div style={{
                marginTop: 48,
                padding: "14px 18px",
                background: "var(--rgpd-bg)",
                color: "var(--rgpd-fg)",
                borderRadius: 8,
                fontSize: 13.5,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}>
                <Icon.check style={{ flexShrink: 0 }}/>
                Honoraires sur devis, selon la nature et la complexité du dossier.
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

function TabBtn({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 18px",
        borderRadius: 8,
        background: active ? "white" : "transparent",
        color: active ? "var(--ink)" : "var(--muted)",
        fontSize: 14,
        fontWeight: 500,
        boxShadow: active ? "0 1px 3px rgba(0,0,0,0.06)" : "none",
        transition: "all .2s",
      }}
    >
      {children}
    </button>
  );
}

/* -------- Calendly-style mock (original UI, not Calendly branding) -------- */

function CalendlyMock({ selectedDate, selectedSlot, setSelectedDate, setSelectedSlot, onConfirm, canConfirm }) {
  // Generate next 5 weeks of June 2026 (mock)
  const [monthOffset, setMonthOffset] = useState(0);
  const monthStart = useMemo(() => {
    const d = new Date(2026, 5, 1); // June 2026
    d.setMonth(d.getMonth() + monthOffset);
    return d;
  }, [monthOffset]);

  const monthLabel = monthStart.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
  const daysInMonth = new Date(monthStart.getFullYear(), monthStart.getMonth() + 1, 0).getDate();
  const startWeekday = (new Date(monthStart.getFullYear(), monthStart.getMonth(), 1).getDay() + 6) % 7; // Mon = 0

  // Available days (mock — not weekends, not random ones)
  const isAvailable = (day) => {
    const date = new Date(monthStart.getFullYear(), monthStart.getMonth(), day);
    const wd = date.getDay();
    if (wd === 0 || wd === 6) return false;
    if (monthOffset === 0 && day < 15) return false; // already past
    return [true, true, true, false, true, true, true][day % 7];
  };

  const slots = ["09:30", "10:30", "11:30", "14:00", "15:00", "16:00", "17:00"];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <Reveal>
        <div>
          <h2 className="display-sm" style={{ marginBottom: 6 }}>Réservez 30 minutes</h2>
          <p style={{ color: "var(--muted)", fontSize: 14.5 }}>
            Visio ou cabinet · fuseau Europe/Paris · sélectionnez un créneau dans l'agenda.
          </p>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div style={{
          border: "1px solid var(--border)",
          borderRadius: 14,
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: selectedDate ? "1.4fr 1fr" : "1fr",
          transition: "grid-template-columns .3s",
        }}>
          {/* Calendar */}
          <div style={{ padding: 24, borderRight: selectedDate ? "1px solid var(--border)" : "none" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
              <button
                onClick={() => setMonthOffset(Math.max(0, monthOffset - 1))}
                disabled={monthOffset === 0}
                style={{
                  width: 32, height: 32, borderRadius: 8,
                  border: "1px solid var(--border)",
                  background: "white",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: monthOffset === 0 ? "var(--muted-2)" : "var(--ink)",
                  cursor: monthOffset === 0 ? "not-allowed" : "pointer",
                }}
              >‹</button>
              <div style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: 16,
                letterSpacing: "-0.01em",
                textTransform: "capitalize",
              }}>{monthLabel}</div>
              <button
                onClick={() => setMonthOffset(monthOffset + 1)}
                style={{
                  width: 32, height: 32, borderRadius: 8,
                  border: "1px solid var(--border)",
                  background: "white",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >›</button>
            </div>

            {/* Weekday headers */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: 4,
              marginBottom: 8,
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "var(--muted)",
              textAlign: "center",
            }}>
              {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((d) => (
                <div key={d} style={{ padding: 6 }}>{d}</div>
              ))}
            </div>

            {/* Day cells */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: 4,
            }}>
              {Array.from({ length: startWeekday }).map((_, i) => <div key={"e" + i}/>)}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const av = isAvailable(day);
                const selected = selectedDate && selectedDate.day === day && selectedDate.month === monthStart.getMonth();
                return (
                  <button
                    key={day}
                    disabled={!av}
                    onClick={() => {
                      setSelectedDate({ day, month: monthStart.getMonth(), year: monthStart.getFullYear() });
                      setSelectedSlot(null);
                    }}
                    style={{
                      aspectRatio: "1",
                      borderRadius: 8,
                      border: selected ? "none" : "1px solid transparent",
                      background: selected ? "var(--ink)" : av ? "var(--bg-soft)" : "transparent",
                      color: selected ? "white" : av ? "var(--ink)" : "var(--muted-2)",
                      fontWeight: av ? 500 : 400,
                      fontSize: 14,
                      cursor: av ? "pointer" : "not-allowed",
                      transition: "all .15s",
                      position: "relative",
                    }}
                    onMouseEnter={(e) => {
                      if (av && !selected) e.currentTarget.style.background = "var(--blue-soft)";
                    }}
                    onMouseLeave={(e) => {
                      if (av && !selected) e.currentTarget.style.background = "var(--bg-soft)";
                    }}
                  >
                    {day}
                    {av && !selected && (
                      <span style={{
                        position: "absolute",
                        bottom: 4, left: "50%",
                        transform: "translateX(-50%)",
                        width: 4, height: 4,
                        borderRadius: "50%",
                        background: "var(--blue)",
                      }}/>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Slots */}
          {selectedDate && (
            <div style={{ padding: 24, overflowY: "auto", maxHeight: 380 }}>
              <div style={{ marginBottom: 16 }}>
                <div className="eyebrow" style={{ marginBottom: 6 }}>Créneaux disponibles</div>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: 16,
                  textTransform: "capitalize",
                }}>
                  {new Date(selectedDate.year, selectedDate.month, selectedDate.day).toLocaleDateString("fr-FR", {
                    weekday: "long", day: "numeric", month: "long",
                  })}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {slots.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSlot(s)}
                    style={{
                      padding: "12px 16px",
                      borderRadius: 8,
                      border: `1px solid ${selectedSlot === s ? "var(--blue)" : "var(--border)"}`,
                      background: selectedSlot === s ? "var(--blue)" : "white",
                      color: selectedSlot === s ? "white" : "var(--ink)",
                      fontWeight: 500,
                      fontSize: 14,
                      textAlign: "left",
                      cursor: "pointer",
                      transition: "all .15s",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                    onMouseEnter={(e) => {
                      if (selectedSlot !== s) e.currentTarget.style.borderColor = "var(--ink)";
                    }}
                    onMouseLeave={(e) => {
                      if (selectedSlot !== s) e.currentTarget.style.borderColor = "var(--border)";
                    }}
                  >
                    <span>{s}</span>
                    {selectedSlot === s && <Icon.check/>}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </Reveal>

      <Reveal delay={200}>
        <Magnetic>
          <button
            className="btn btn-primary"
            disabled={!canConfirm}
            onClick={onConfirm}
            style={{
              width: "100%",
              justifyContent: "center",
              height: 52,
              opacity: canConfirm ? 1 : 0.4,
              cursor: canConfirm ? "pointer" : "not-allowed",
            }}
          >
            {canConfirm
              ? `Confirmer le créneau du ${new Date(selectedDate.year, selectedDate.month, selectedDate.day).toLocaleDateString("fr-FR", { day: "numeric", month: "long" })} à ${selectedSlot}`
              : "Sélectionnez un créneau"}
            <Icon.arrow/>
          </button>
        </Magnetic>
      </Reveal>

      <Reveal delay={280}>
        <div style={{
          display: "flex", alignItems: "center", gap: 10,
          color: "var(--muted)", fontSize: 13,
          padding: "12px 16px",
          background: "var(--bg-soft)",
          borderRadius: 8,
        }}>
          <Icon.upload style={{ flexShrink: 0 }}/>
          <span><strong style={{ color: "var(--ink)" }}>Avant le RDV :</strong> envoyez vos documents à charlotte.galichet@avocatsp.com (couvert par le secret professionnel).</span>
        </div>
      </Reveal>
    </div>
  );
}

/* -------- Contact form -------- */

function ContactForm({ form, updateForm, onSubmit, canSubmit, submitted }) {
  const [files, setFiles] = useState([]);
  return (
    <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <Reveal>
        <div>
          <h2 className="display-sm" style={{ marginBottom: 6 }}>Décrivez votre situation</h2>
          <p style={{ color: "var(--muted)", fontSize: 14.5 }}>
            Charlotte examine votre demande et vous répond sous 24h ouvrées.
          </p>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div className="field">
            <label>Prénom <span className="req">*</span></label>
            <input type="text" value={form.firstname} onChange={(e) => updateForm("firstname", e.target.value)} required/>
          </div>
          <div className="field">
            <label>Nom <span className="req">*</span></label>
            <input type="text" value={form.lastname} onChange={(e) => updateForm("lastname", e.target.value)} required/>
          </div>
        </div>
      </Reveal>

      <Reveal delay={140}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div className="field">
            <label>Email <span className="req">*</span></label>
            <input type="email" value={form.email} onChange={(e) => updateForm("email", e.target.value)} required/>
          </div>
          <div className="field">
            <label>Téléphone</label>
            <input type="tel" placeholder="+33 …" value={form.phone} onChange={(e) => updateForm("phone", e.target.value)}/>
          </div>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div className="field">
            <label>Entreprise <span className="req">*</span></label>
            <input type="text" value={form.company} onChange={(e) => updateForm("company", e.target.value)}/>
          </div>
          <div className="field">
            <label>Domaine <span className="req">*</span></label>
            <select value={form.domain} onChange={(e) => updateForm("domain", e.target.value)}>
              <option value="ia">Droit de l'IA</option>
              <option value="rgpd">RGPD & Données</option>
              <option value="pi">Propriété intellectuelle</option>
              <option value="autre">Autre / pas encore sûr</option>
            </select>
          </div>
        </div>
      </Reveal>

      <Reveal delay={260}>
        <div className="field">
          <label>Votre besoin <span className="req">*</span></label>
          <textarea
            rows="5"
            placeholder="Décrivez votre situation, le contexte et les délais si applicables…"
            value={form.message}
            onChange={(e) => updateForm("message", e.target.value)}
            required
          />
          <div style={{
            fontSize: 11,
            color: "var(--muted)",
            textAlign: "right",
            fontFamily: "var(--font-mono)",
          }}>
            {form.message.length} caractères
          </div>
        </div>
      </Reveal>

      <Reveal delay={320}>
        <div className="field">
          <label>Documents (optionnel)</label>
          <label className="upload-zone" style={{ display: "block" }}>
            <input
              type="file"
              multiple
              style={{ display: "none" }}
              onChange={(e) => setFiles(Array.from(e.target.files || []))}
            />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: "var(--bg-soft)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--muted)",
              }}>
                <Icon.upload/>
              </div>
              <div style={{ fontSize: 14, color: "var(--ink)", fontWeight: 500 }}>
                {files.length > 0 ? `${files.length} fichier${files.length > 1 ? "s" : ""} sélectionné${files.length > 1 ? "s" : ""}` : "Ajouter des fichiers"}
              </div>
              <div style={{ fontSize: 12, color: "var(--muted)" }}>
                PDF, DOC, DOCX, TXT · 10 Mo max par fichier
              </div>
            </div>
          </label>
        </div>
      </Reveal>

      <Reveal delay={380}>
        <Magnetic>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!canSubmit || submitted}
            style={{
              width: "100%",
              justifyContent: "center",
              height: 52,
              opacity: canSubmit ? 1 : 0.4,
              cursor: canSubmit ? "pointer" : "not-allowed",
            }}
          >
            {submitted ? "Envoi en cours…" : "Envoyer ma demande"}
            <Icon.arrow/>
          </button>
        </Magnetic>
      </Reveal>

      <Reveal delay={440}>
        <p style={{ fontSize: 11.5, color: "var(--muted)", lineHeight: 1.55 }}>
          En soumettant ce formulaire, vous acceptez que les informations renseignées soient utilisées pour le traitement de votre demande, dans le respect du secret professionnel et du RGPD.
        </p>
      </Reveal>
    </form>
  );
}

/* ============ Confirmation page ============ */

function ConfirmationPage({ onNavigate, submission }) {
  const isRdv = submission?.type === "rdv";
  const dateLabel = isRdv && submission.date
    ? new Date(submission.date.year, submission.date.month, submission.date.day).toLocaleDateString("fr-FR", {
        weekday: "long", day: "numeric", month: "long", year: "numeric",
      })
    : null;

  return (
    <div className="page">
      <section className="dark-section" style={{ minHeight: "100vh", paddingTop: 132, paddingBottom: 80, display: "flex", alignItems: "center" }}>
        <div className="mesh-bg"/>
        <div className="grain"/>
        <div className="container" style={{ position: "relative", width: "100%" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <Reveal>
              <div style={{
                width: 80, height: 80,
                borderRadius: "50%",
                background: "rgba(52,211,153,0.15)",
                border: "1px solid rgba(52,211,153,0.4)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                color: "#34D399",
                marginBottom: 32,
                position: "relative",
              }}>
                <Icon.check style={{ width: 36, height: 36 }}/>
                <div style={{
                  position: "absolute",
                  inset: -10,
                  borderRadius: "50%",
                  border: "1px solid rgba(52,211,153,0.25)",
                  animation: "pulseRing 2s ease-out infinite",
                }}/>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="eyebrow eyebrow-dark" style={{ marginBottom: 18, color: "#34D399" }}>
                {isRdv ? "Rendez-vous confirmé" : "Demande reçue"}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <h1 className="display-lg" style={{ color: "white", textWrap: "balance" }}>
                {isRdv
                  ? "C'est noté, à très vite."
                  : "Merci, votre demande est arrivée."}
              </h1>
            </Reveal>

            <Reveal delay={300}>
              <p style={{
                marginTop: 24,
                color: "#CBD5E1",
                fontSize: 18,
                lineHeight: 1.6,
                maxWidth: "52ch",
                margin: "24px auto 0",
              }}>
                {isRdv
                  ? "Un email de confirmation vient d'être envoyé avec le lien visio et un rappel des modalités. Vous pouvez d'ores et déjà préparer les éléments de contexte."
                  : "Charlotte vous répond sous 24h ouvrées avec un premier diagnostic et, si pertinent, une proposition de créneau pour échanger plus en détail."}
              </p>
            </Reveal>

            {isRdv && dateLabel && (
              <Reveal delay={400}>
                <div className="glass" style={{
                  marginTop: 48,
                  padding: 32,
                  textAlign: "left",
                  maxWidth: 540,
                  margin: "48px auto 0",
                }}>
                  <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 24, alignItems: "center" }}>
                    <div style={{
                      width: 60, height: 60, borderRadius: 12,
                      background: "var(--blue)",
                      color: "white",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Icon.calendar style={{ width: 26, height: 26 }}/>
                    </div>
                    <div>
                      <div style={{ color: "white", fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500, textTransform: "capitalize", letterSpacing: "-0.015em" }}>
                        {dateLabel}
                      </div>
                      <div style={{ color: "#CBD5E1", fontSize: 15, marginTop: 4 }}>
                        à <strong style={{ color: "white" }}>{submission.slot}</strong> · 30 minutes · visioconférence
                      </div>
                    </div>
                  </div>
                  <div style={{
                    marginTop: 24, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.10)",
                    display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12,
                  }}>
                    <button className="btn btn-ghost-dark" style={{ justifyContent: "center", width: "100%" }}>
                      <Icon.calendar/> Ajouter au calendrier
                    </button>
                    <button className="btn btn-ghost-dark" style={{ justifyContent: "center", width: "100%" }}>
                      <Icon.mail/> Renvoyer l'email
                    </button>
                  </div>
                </div>
              </Reveal>
            )}

            <Reveal delay={500}>
              <div style={{
                marginTop: 56,
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 16,
                maxWidth: 720,
                margin: "56px auto 0",
              }}>
                {[
                  { num: "01", title: "Préparez le contexte", body: "Notes, screenshots, contrats existants — tout ce qui aide à cadrer rapidement." },
                  { num: "02", title: "Envoyez en amont", body: "Documents par email à charlotte.galichet@avocatsp.com (secret pro)." },
                  { num: "03", title: "30 minutes d'échange", body: "Diagnostic clair, prochaines étapes, devis si nécessaire." },
                ].map((step, i) => (
                  <div key={i} style={{
                    padding: 20,
                    border: "1px solid rgba(255,255,255,0.10)",
                    borderRadius: 12,
                    textAlign: "left",
                    background: "rgba(255,255,255,0.02)",
                  }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--blue)", marginBottom: 8 }}>{step.num}</div>
                    <div style={{ color: "white", fontWeight: 500, fontSize: 14, marginBottom: 6 }}>{step.title}</div>
                    <div style={{ color: "#94A3B8", fontSize: 12.5, lineHeight: 1.5 }}>{step.body}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={600}>
              <div style={{ marginTop: 56, display: "flex", gap: 14, justifyContent: "center" }}>
                <button className="btn btn-ghost-dark" onClick={() => onNavigate("home")}>
                  Retour à l'accueil
                </button>
                <button className="btn btn-ghost-dark" onClick={() => onNavigate("articles")}>
                  Lire les articles
                  <Icon.arrow/>
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.4); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

Object.assign(window, { ContactPage, ConfirmationPage });
