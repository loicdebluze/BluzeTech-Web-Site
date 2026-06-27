import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface ServiceSectionProps {
  id?: string;
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean;
  imagePosition?: string;
  imageFilter?: string;
  learnMoreUrl?: string;
}

export function ServiceSection({
  id,
  title,
  description,
  features,
  imageUrl,
  imageAlt,
  reverse = false,
  imagePosition = "center",
  imageFilter = "none",
  learnMoreUrl = "services.html",
}: ServiceSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reverse ? [100, 0, -100] : [-100, 0, 100]
  );
  const textX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reverse ? [-100, 0, 100] : [100, 0, -100]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div id={id} ref={ref} className="min-h-screen flex items-center py-20 px-6 bg-[#061225]" style={{ overflow: 'hidden' }}>
      <div className="max-w-7xl mx-auto w-full">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? "md:grid-flow-dense" : ""}`}>
          <motion.div
            style={{ x: imageX, opacity }}
            className={`relative ${reverse ? "md:col-start-2" : ""}`}
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#061225]/40 to-transparent z-10" />
              <img src={imageUrl} alt={imageAlt} className="w-full h-full object-cover" style={{ objectPosition: imagePosition, filter: imageFilter }} />
            </div>
          </motion.div>

          <motion.div
            style={{ x: textX, opacity }}
            className={reverse ? "md:col-start-1 md:row-start-1" : ""}
          >
            <motion.h2 className="text-4xl md:text-6xl mb-6 text-[#f8fafc]">
              {title}
            </motion.h2>

            <p className="text-xl text-[#94a3b8] mb-8 leading-relaxed">
              {description}
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-[#f8fafc]"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] mt-2 flex-shrink-0" />
                  <span className="text-lg">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  background: 'rgba(26,140,255,0.22)',
                  color: '#fff',
                  border: '1px solid rgba(96,165,250,0.45)',
                  borderRadius: '999px',
                  padding: '10px 22px',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  transition: '0.25s ease',
                  fontFamily: 'inherit',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(26,140,255,0.38)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(26,140,255,0.22)'; }}
              >
                Discutons de votre projet
              </button>

              <a
                href={learnMoreUrl}
                style={{
                  color: '#f1f5f9',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px',
                  cursor: 'pointer',
                  transition: '0.2s ease',
                  fontFamily: 'inherit',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#93c5fd'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#f1f5f9'; }}
              >
                En savoir plus
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
