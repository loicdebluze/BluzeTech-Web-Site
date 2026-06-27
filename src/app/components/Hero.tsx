import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const fadeOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const fadeScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity: fadeOpacity, scale: fadeScale }}
    >
      <div style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        background: "#061225",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}>
        <picture style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <source srcSet="/images/hero-bg.webp" type="image/webp" />
          <img
            src="/images/hero-bg.jpg"
            alt=""
            fetchPriority="high"
            loading="eager"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 42%",
              filter: "contrast(1.05)",
              zIndex: 0,
            }}
          />
        </picture>

        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(6,18,37,0.64) 0%, rgba(6,18,37,0.30) 32%, rgba(6,18,37,0.36) 56%, rgba(6,18,37,0.74) 80%, rgba(6,18,37,0.97) 100%)",
          zIndex: 1,
        }} />

        {/* Content — aligned to top, like prestige hero */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          style={{
            position: "relative",
            zIndex: 2,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
            maxWidth: "860px",
            margin: "0 auto",
            padding: "160px 24px 40px",
            color: "#f8fafc",
            textAlign: "center",
          }}
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 500 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#93c5fd",
              background: "rgba(26,140,255,0.22)",
              display: "inline-block",
              padding: "0.3rem 0.85rem",
              borderRadius: "20px",
              border: "1px solid rgba(96,165,250,0.45)",
              marginBottom: "1.25rem",
            }}
          >
            Réparation · Fabrication · Prototypage
          </motion.span>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
            style={{
              margin: 0,
              fontSize: "clamp(2.1rem, 5.2vw, 3.8rem)",
              lineHeight: 1.15,
              fontWeight: 500,
              color: "#f8fafc",
            }}
          >
            Matériaux composites.
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
            style={{
              margin: "18px 0 0",
              fontSize: "clamp(1.05rem, 2vw, 1.4rem)",
              fontWeight: 400,
              color: "#f1f5f9",
              textShadow: "0 1px 8px rgba(0,0,0,0.55)",
            }}
          >
          Conception, réparation et fabrication de pièces en fibre de carbone pour vélos haute performance, véhicules de prestige et projets d'ingénierie avancée.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
          >
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                display: "inline-block",
                marginTop: "32px",
                padding: "14px 30px",
                borderRadius: "999px",
                border: "1.5px solid rgba(255,255,255,0.85)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.95rem",
                background: "transparent",
                cursor: "pointer",
                transition: "0.25s ease",
                fontFamily: "inherit",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.12)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
            >
              Demander une évaluation gratuite
            </button>
          </motion.div>
        </motion.div>

        {/* Tagline at the bottom — identical to prestige hero */}
        <div style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 24px 56px",
        }}>
          <p style={{
            margin: 0,
            fontSize: "clamp(1.05rem, 2.1vw, 1.4rem)",
            fontWeight: 600,
            color: "#fff",
          }}>
            Précision aéronautique. Expertise éprouvée.
          </p>
          <p style={{
            margin: "6px 0 0",
            fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
            color: "#cbd5e1",
          }}>
            Réparation et fabrication de pièces en fibre de carbone
          </p>
        </div>
      </div>
    </motion.div>
  );
}
