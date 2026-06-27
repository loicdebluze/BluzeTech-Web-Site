import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ServiceSection } from "./components/ServiceSection";
import { StatsSection } from "./components/StatsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { PartnersSection } from "./components/PartnersSection";
import { CtaBand } from "./components/CtaBand";

export default function App() {
  return (
    <div className="bg-[#061225]">
      <Navbar />
      <Hero />

      {/* <PartnersSection /> */}

      <ServiceSection
        id="services"
        title="Vélos en carbone"
        description="Du cadre fissuré au hauban brisé, nous restituons l’intégrité structurale
        de votre vélo en carbone avec des méthodes de réparation inspirées de l’aérospatiale."
        features={[
          "Diagnostic précis par tap-test et inspection visuelle",
          "Réparation structurale par stratification orientée",
          "Traitement sous vide avec chauffe contrôlée",
          "Finition et peinture locale pour un résultat invisible",
          "Inspection finale et recommandations d’usage",
        ]}
        imageUrl="/images/velo_photo.jpg"
        imageAlt="Cadre de vélo en fibre de carbone haute performance"
        imagePosition="center 65%"
        reverse={false}
        learnMoreUrl="service-reparation-velo-carbone.html"
      />

      <ServiceSection
        title="Véhicules de prestige"
        description="Avant chaque intervention, nous établissons un diagnostic structurel précis du composant.
        Vous savez exactement ce qui sera fait, dans quel ordre, et avec quels matériaux.

Nos fibres de carbone proviennent des mêmes filières que l’industrie aérospatiale."
        features={[
          "Réparation de pièces aérodynamiques en carbone",
          "Correspondance de fini et de tressage pour résultat homogène",
          "Préservation de la valeur de revente du véhicule",
          "Fabrication de pièces de remplacement sur mesure",
          "Zéro compromis sur la qualité structurale",
        ]}
        imageUrl="/images/logo_mclaren.jpg"
        imageAlt="Véhicule de prestige avec composants en carbone"
        imageFilter="saturate(0.55) brightness(1.08) contrast(1.05)"
        reverse={true}
        learnMoreUrl="prestige-vehicules-react/index.html"
      />

      <ServiceSection
        title="Fabrication & Prototypage"
        description="De l’idée à la pièce finale, nous concevons et fabriquons des composants en composite pour prototypes fonctionnels, pièces de remplacement et petites séries, avec une approche d’ingénierie rigoureuse."
        features={[
          "Design et fabrication de moules sur mesure",
          "Scan 3D pour rétroingénierie et reproduction de pièces",
          "Calcul de stratifié : rigidité, masse et performance",
          "Procédés : pre-preg, vacuum bagging, forged carbon",
          "Matériaux : fibre de carbone, fibre de verre, Kevlar, hybrides",
        ]}
        imageUrl="/images/design_photo.jpg"
        imageAlt="Fabrication et ingénierie de pièces en matériaux composites"
        reverse={false}
        learnMoreUrl="service-prototypage-petite-fabrication.html"
      />

      <StatsSection />

      <ProjectsSection />

      {/* <CtaBand /> */}

      <ContactSection />

      <footer className="py-10 px-6 bg-[#05101a] border-t border-[#12304b]">
        <div className="max-w-6xl mx-auto">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
            <p className="text-[#94a3b8]">&copy; 2026 BluzeTech | Matériaux composites</p>
            <nav style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              {[
                { label: "Accueil", href: "index.html" },
                { label: "Services", href: "services.html" },
                { label: "Projets", href: "projets.html" },
                { label: "À propos", href: "about.html" },
                { label: "Contact", href: "contact.html" },
              ].map(({ label, href }) => (
                <a key={label} href={href} style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#f1f5f9")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}
                >{label}</a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
