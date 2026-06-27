import { motion } from "motion/react";

export function CtaBand() {
  return (
    <div className="py-20 px-6 bg-[#05101a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            background: "linear-gradient(135deg, rgba(30,64,175,0.35) 0%, rgba(26,140,255,0.18) 100%)",
            border: "1px solid #12304b",
            borderRadius: "14px",
            padding: "2.5rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h2 style={{ color: "#f8fafc", fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontWeight: 700, margin: "0 0 0.5rem", lineHeight: 1.35 }}>
              Une pièce de composite endommagée ?
            </h2>
            <p style={{ color: "#94a3b8", margin: 0, fontSize: "1rem" }}>
              Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
            </p>
          </div>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: "linear-gradient(90deg,#1e40af,#3b82f6 60%)",
              color: "#dbe7ff",
              border: "none",
              borderRadius: "18px",
              padding: "14px 28px",
              fontWeight: 700,
              fontSize: "1rem",
              boxShadow: "0 8px 24px rgba(59,130,246,0.28)",
              cursor: "pointer",
              transition: "0.25s ease",
              whiteSpace: "nowrap",
              fontFamily: "inherit",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.08)"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.filter = ""; (e.currentTarget as HTMLButtonElement).style.transform = ""; }}
          >
            Discutons de votre projet
          </button>
        </motion.div>
      </div>
    </div>
  );
}
