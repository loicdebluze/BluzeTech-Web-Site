import { motion } from "motion/react";

const logos = [
  { src: "/images/EULaval.png", alt: "Université Laval" },
  { src: "/images/Eggenius.png", alt: "Eggenius" },
];

export function PartnersSection() {
  const track = [...logos, ...logos];

  return (
    <div className="py-16 px-6 bg-[#061225]" style={{ borderTop: "1px solid #12304b", borderBottom: "1px solid #12304b" }}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-2xl md:text-3xl text-[#f8fafc] mb-10"
        >
          Nos partenaires de confiance
        </motion.h2>

        <div style={{ overflow: "hidden", position: "relative" }}>
          <div
            style={{
              display: "flex",
              gap: "4rem",
              alignItems: "center",
              animation: "partners-scroll 12s linear infinite",
              width: "max-content",
            }}
          >
            {track.map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                aria-hidden={i >= logos.length ? true : undefined}
                style={{
                  height: "52px",
                  width: "auto",
                  objectFit: "contain",
                  filter: "brightness(0) invert(1)",
                  opacity: 0.75,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes partners-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
