import { motion } from "motion/react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin, Paperclip, X } from "lucide-react";
import { useState, useRef } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    const data = new FormData();
    data.append("access_key", "c72b4f75-f163-4b32-a7fa-ae4b1b05810e");
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));
    files.forEach(file => data.append("attachment[]", file));

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    });
    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", project: "", message: "" });
      setFiles([]);
    } else {
      setError(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(prev => [...prev, ...Array.from(e.target.files!)]);
      e.target.value = "";
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div id="contact" className="min-h-screen flex items-center py-20 px-6 bg-[#05101a]">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-6 text-[#f8fafc]">
            Confiez-nous <span className="text-[#94a3b8]">votre projet</span>
          </h2>
          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
            Réparation, fabrication ou diagnostic. Notre équipe vous répond rapidement avec une évaluation personnalisée.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-8 text-[#f8fafc]">Nous joindre</h3>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1e40af]/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#3b82f6]" />
                </div>
                <div>
                  <div className="text-[#94a3b8] mb-1">Courriel</div>
                  <a
                    href="mailto:service@bluzetech.com"
                    className="text-[#f8fafc] text-lg hover:text-[#ff6b5f] transition-colors"
                  >
                    service@bluzetech.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1e40af]/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#3b82f6]" />
                </div>
                <div>
                  <div className="text-[#94a3b8] mb-1">Téléphone</div>
                  <a
                    href="tel:+15813058601"
                    className="text-[#f8fafc] text-lg hover:text-[#ff6b5f] transition-colors"
                  >
                    (581) 305‑8601
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1e40af]/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#3b82f6]" />
                </div>
                <div>
                  <div className="text-[#94a3b8] mb-1">Emplacement</div>
                  <div className="text-[#f8fafc] text-lg">
                    Québec et alentours
                    <br />
                    <span className="text-[#94a3b8] text-base">Déplacements possibles partout au Québec</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-[#071a2b] border border-[#12304b]">
              <h4 className="text-[#f8fafc] mb-3">Pourquoi BluzeTech ?</h4>
              <ul className="space-y-2 text-[#94a3b8]">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#3b82f6]" />
                  Méthodes de réparation issues de l'aérospatiale
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#3b82f6]" />
                  Faire affaires avec des diplomés en génie mécanique
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#3b82f6]" />
                  Diagnostic précis avant tout engagement
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#3b82f6]" />
                  Nos valeurs : Rigueur, transparence, durabilité
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center text-center h-full py-16 gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-[#1e40af]/30 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl text-[#f8fafc] mb-2">Message envoyé !</h3>
                  <p className="text-[#94a3b8] text-lg">
                    Merci <span className="text-[#f8fafc]">{formData.name || "pour votre message"}</span>. Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    marginTop: "8px",
                    background: "transparent",
                    color: "#93c5fd",
                    border: "1px solid rgba(96,165,250,0.45)",
                    borderRadius: "999px",
                    padding: "10px 24px",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    transition: "0.25s ease",
                    fontFamily: "inherit",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(96,165,250,0.1)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-[#f8fafc] mb-2 block">
                  Nom *
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-[#071a2b] border-[#12304b] text-[#f8fafc] placeholder:text-[#94a3b8]"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-[#f8fafc] mb-2 block">
                  Courriel *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-[#071a2b] border-[#12304b] text-[#f8fafc] placeholder:text-[#94a3b8]"
                  placeholder="votre@courriel.com"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-[#f8fafc] mb-2 block">
                  Téléphone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-[#071a2b] border-[#12304b] text-[#f8fafc] placeholder:text-[#94a3b8]"
                  placeholder="(581) 305‑8601"
                />
              </div>

              <div>
                <Label htmlFor="project" className="text-[#f8fafc] mb-2 block">
                  Type de projet *
                </Label>
                <Input
                  id="project"
                  name="project"
                  required
                  value={formData.project}
                  onChange={handleChange}
                  className="bg-[#071a2b] border-[#12304b] text-[#f8fafc] placeholder:text-[#94a3b8]"
                  placeholder="Ex. : Réparation vélo carbone, Pièce de prestige, Prototype"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-[#f8fafc] mb-2 block">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-[#071a2b] border-[#12304b] text-[#f8fafc] placeholder:text-[#94a3b8] resize-none"
                  placeholder="Décrivez votre projet, la zone endommagée, ou joignez des photos nettes (proche + vue d’ensemble)"
                />
              </div>

              <div>
                <Label className="text-[#f8fafc] mb-2 block">Photos / fichiers</Label>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  style={{
                    width: "100%",
                    background: "transparent",
                    color: "#94a3b8",
                    border: "1px dashed #253049",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    transition: "0.2s ease",
                    fontFamily: "inherit",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#3b82f6"; (e.currentTarget as HTMLButtonElement).style.color = "#f1f5f9"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#253049"; (e.currentTarget as HTMLButtonElement).style.color = "#94a3b8"; }}
                >
                  <Paperclip size={16} />
                  Joindre des photos ou fichiers (JPG, PNG, PDF)
                </button>
                {files.length > 0 && (
                  <ul style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "6px" }}>
                    {files.map((file, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#071a2b", border: "1px solid #12304b", borderRadius: "8px", padding: "8px 12px" }}>
                        <span style={{ color: "#f1f5f9", fontSize: "0.85rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{file.name}</span>
                        <button type="button" onClick={() => removeFile(i)} style={{ background: "none", border: "none", cursor: "pointer", color: "#64748b", padding: "0 0 0 8px", flexShrink: 0 }}>
                          <X size={14} />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  background: 'rgba(26,140,255,0.22)',
                  color: '#fff',
                  border: '1px solid rgba(96,165,250,0.45)',
                  borderRadius: '999px',
                  padding: '14px 24px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: '0.25s ease',
                  fontFamily: 'inherit',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(26,140,255,0.38)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(26,140,255,0.22)'; }}
              >
                Envoyer le message
              </button>

              {error && (
                <p style={{ color: "#f87171", fontSize: "0.9rem", textAlign: "center" }}>
                  Une erreur est survenue. Veuillez nous contacter directement à{" "}
                  <a href="mailto:service@bluzetech.com" style={{ color: "#93c5fd" }}>
                    service@bluzetech.com
                  </a>
                </p>
              )}
            </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
