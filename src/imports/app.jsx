/* App router */

const { useState: appUseState, useEffect: appUseEffect } = React;

function App() {
  const [page, setPage] = appUseState("home");
  const [submission, setSubmission] = appUseState(null);

  const navigate = (id) => {
    setPage(id);
    // Smooth scroll to top on page change
    window.scrollTo({ top: 0, behavior: "instant" });
    try { history.replaceState(null, "", "#" + id); } catch (e) {}
  };

  // Restore from hash on first load
  appUseEffect(() => {
    const h = window.location.hash.replace("#", "");
    if (h && ["home","about","domains","articles","contact","confirmation"].includes(h)) {
      setPage(h);
    }
  }, []);

  return (
    <div data-screen-label={pageLabel(page)}>
      <Nav page={page} onNavigate={navigate}/>
      <main key={page}>
        {page === "home"         && <HomePage onNavigate={navigate}/>}
        {page === "about"        && <AboutPage onNavigate={navigate}/>}
        {page === "domains"      && <DomainsPage onNavigate={navigate}/>}
        {page === "articles"     && <ArticlesPage onNavigate={navigate}/>}
        {page === "contact"      && <ContactPage onNavigate={navigate} onSubmitForm={setSubmission}/>}
        {page === "confirmation" && <ConfirmationPage onNavigate={navigate} submission={submission}/>}
      </main>
      {page !== "confirmation" && <Footer onNavigate={navigate}/>}
    </div>
  );
}

function pageLabel(page) {
  return ({
    home: "01 Home",
    about: "02 À propos",
    domains: "03 Domaines & FAQ",
    articles: "04 Articles",
    contact: "05 Contact",
    confirmation: "06 Confirmation",
  })[page] || page;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
