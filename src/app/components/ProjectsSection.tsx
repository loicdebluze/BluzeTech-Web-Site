import { motion } from "motion/react";

const projects = [
  {
    image: "/images/Avant-Apres.png",
    title: "Réparation cadre de vélo de montagne",
    description: "Réparation structurelle d'un cadre endommagé après impact.",
  },
  {
    image: "/images/projet-3.jpg",
    title: "Réparation cadre de vélo de route",
    description: "Réparation de fissure et remplacement de matériaux.",
  },
  {
    image: "/images/projet-4c.png",
    title: "Réparation de fatbike",
    description: "Réparation d'une fissure sur le bras oscillant d'un fatbike double suspension.",
  },
];

export function ProjectsSection() {
  return (
    <div className="py-20 px-6 bg-[#071a2b]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl mb-4 text-[#f8fafc]">Nos réalisations</h2>
          <p className="text-xl text-[#94a3b8]">Des résultats concrets, projet après projet</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href="projets.html"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                display: "block",
                background: "#05101a",
                border: "1px solid #12304b",
                borderRadius: "14px",
                overflow: "hidden",
                textDecoration: "none",
                transition: "0.25s ease",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1e40af"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#12304b"; (e.currentTarget as HTMLAnchorElement).style.transform = ""; }}
            >
              <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div style={{ padding: "1.25rem 1.5rem" }}>
                <h3 style={{ color: "#f8fafc", fontSize: "1rem", fontWeight: 600, marginBottom: "0.5rem" }}>
                  {project.title}
                </h3>
                <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.6 }}>
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="projets.html"
            style={{
              display: "inline-block",
              background: "#05101a",
              color: "#dbe7ff",
              border: "1px solid #253049",
              borderRadius: "10px",
              padding: "11px 24px",
              fontWeight: 600,
              fontSize: "1rem",
              textDecoration: "none",
              transition: "0.25s ease",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1.08)"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.filter = ""; (e.currentTarget as HTMLAnchorElement).style.transform = ""; }}
          >
            Voir plus de projets
          </a>
        </div>
      </div>
    </div>
  );
}
