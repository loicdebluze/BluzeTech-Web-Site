import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

interface StatItemProps {
  value: string;
  label: string;
  delay: number;
}

function StatItem({ value, label, delay }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, ""));

  useEffect(() => {
    if (isInView && numericValue) {
      let start = 0;
      const duration = 2000;
      const increment = numericValue / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl mb-3 text-[#1e40af]">
        {numericValue ? count : value}
        {value.includes('+') && '+'}
      </div>
      <div className="text-[#94a3b8] text-lg">{label}</div>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <div className="py-20 px-6 bg-[#071a2b] relative">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, #ff6b5f, #1e40af, transparent)', opacity: 0.55 }} />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-4 text-[#f8fafc]">
            La précision au service de vos projets
          </h2>
          <p className="text-xl text-[#94a3b8]">
            Une expertise composite reconnue
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatItem value="50+" label="Projets réalisés" delay={0} />
          <StatItem value="4+" label="Années d'expérience" delay={0.1} />
          <StatItem value="100" label="% Satisfaction client" delay={0.2} />
          <StatItem value="24" label="Heures de disponibilité" delay={0.3} />
        </div>
      </div>
    </div>
  );
}
