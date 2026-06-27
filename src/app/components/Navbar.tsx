import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        padding: "0 16px",
        transition: "background 0.25s ease, box-shadow 0.25s ease",
        background: scrolled ? "rgba(6,18,37,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        boxShadow: scrolled ? "0 10px 26px rgba(0,0,0,0.28)" : "none",
        borderBottom: scrolled ? "1px solid #12304b" : "1px solid transparent",
      }}
    >
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "20px 0",
        gap: "16px",
      }}>
        <a
          href="index.html"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            fontWeight: 700,
            fontSize: "1.4rem",
            color: "#f1f5f9",
            textDecoration: "none",
            letterSpacing: "0.5px",
          }}
        >
          <img src="/images/Icon.png" alt="BluzeTech logo" style={{ width: "44px", height: "auto" }} />
          BluzeTech
        </a>

        <nav style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
          {[
            { label: "Accueil", href: "index.html" },
            { label: "Services", href: "services.html" },
            { label: "Projets", href: "projets.html" },
            { label: "À propos", href: "about.html" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                padding: "8px 14px",
                borderRadius: "10px",
                color: "#f1f5f9",
                textDecoration: "none",
                fontSize: "0.95rem",
                transition: "background 0.25s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#0b152a")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              {label}
            </a>
          ))}

          <a
            href="contact.html"
            style={{
              background: "rgba(26,140,255,0.22)",
              color: "#fff",
              border: "1px solid rgba(96,165,250,0.45)",
              borderRadius: "999px",
              padding: "8px 18px",
              fontWeight: 600,
              fontSize: "0.95rem",
              cursor: "pointer",
              transition: "0.25s ease",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(26,140,255,0.38)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(26,140,255,0.22)"; }}
          >
            Contactez-nous
          </a>
        </nav>
      </div>
    </header>
  );
}
