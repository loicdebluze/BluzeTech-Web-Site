import { useEffect, useState } from "react";

const LINKS = [
  { label: "Accueil", href: "index.html" },
  { label: "Services", href: "services.html" },
  { label: "Projets", href: "projets.html" },
  { label: "À propos", href: "about.html" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const ctaStyle = {
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
    whiteSpace: "nowrap" as const,
  };

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
        background: scrolled || open ? "rgba(6,18,37,0.92)" : "transparent",
        backdropFilter: scrolled || open ? "blur(8px)" : "none",
        boxShadow: scrolled ? "0 10px 26px rgba(0,0,0,0.28)" : "none",
        borderBottom: scrolled ? "1px solid #12304b" : "1px solid transparent",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "20px 0",
          gap: "16px",
        }}
      >
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

        <nav className="hidden md:flex" style={{ gap: "8px", alignItems: "center" }}>
          {LINKS.map(({ label, href }) => (
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
            style={ctaStyle}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(26,140,255,0.38)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(26,140,255,0.22)"; }}
          >
            Contactez-nous
          </a>
        </nav>

        <div className="md:hidden flex items-center" style={{ gap: "10px" }}>
          <a
            href="contact.html"
            style={{ ...ctaStyle, fontSize: "0.85rem", padding: "7px 14px" }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(26,140,255,0.38)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(26,140,255,0.22)"; }}
          >
            Contactez-nous
          </a>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "5px",
            width: "32px",
            height: "28px",
            background: "transparent",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <span
            style={{
              display: "block",
              height: "2px",
              width: "100%",
              background: "#f1f5f9",
              borderRadius: "2px",
              transition: "transform 0.25s ease, opacity 0.25s ease",
              transform: open ? "translateY(7px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              height: "2px",
              width: "100%",
              background: "#f1f5f9",
              borderRadius: "2px",
              transition: "opacity 0.25s ease",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              height: "2px",
              width: "100%",
              background: "#f1f5f9",
              borderRadius: "2px",
              transition: "transform 0.25s ease, opacity 0.25s ease",
              transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
            }}
          />
        </button>
        </div>
      </div>

      {open && (
        <nav
          className="md:hidden"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "4px 0 20px",
            borderTop: "1px solid #12304b",
          }}
        >
          {LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                padding: "12px 14px",
                borderRadius: "10px",
                color: "#f1f5f9",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              {label}
            </a>
          ))}

          <a
            href="contact.html"
            onClick={() => setOpen(false)}
            style={{ ...ctaStyle, textAlign: "center", marginTop: "8px" }}
          >
            Contactez-nous
          </a>
        </nav>
      )}
    </header>
  );
}
