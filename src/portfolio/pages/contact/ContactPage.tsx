import React, { useState } from "react";
import {
  Mail,
  Send,
  Copy,
  Check,
  Clock,
  MapPin,
  MessageSquare,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Por favor indica tu nombre.";
    if (!formData.email.trim()) {
      newErrors.email = "Por favor indica tu correo electrónico.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un correo electrónico válido.";
    }
    if (!formData.message.trim()) newErrors.message = "Por favor escribe tu mensaje.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate async submission with pleasant feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleOpenMailto = () => {
    const subject = encodeURIComponent(formData.subject || `Contacto desde portfolio de ${formData.name}`);
    const body = encodeURIComponent(
      `Hola Javier,\n\nSoy ${formData.name} (${formData.email}).\n\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSuccess(false);
    setErrors({});
  };

  return (
    <section className="py-16 md:py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
            Contacto
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            ¿Tienes un proyecto en mente?
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Ya sea una propuesta de trabajo, colaboración o simplemente intercambiar ideas sobre React y desarrollo web, ¡me encantará escucharte!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Contact Details & Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Email Card */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Mail className="size-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-border bg-secondary hover:bg-primary/10 hover:text-primary transition-all cursor-pointer"
                  title="Copiar email al portapapeles"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="size-3.5 text-emerald-500" />
                      <span className="text-emerald-500">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Correo Electrónico Directo
              </h2>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-lg font-bold text-foreground hover:text-primary transition-colors block mt-1"
              >
                {personalInfo.email}
              </a>
              <p className="text-xs text-muted-foreground mt-2">
                Haz clic para enviar un correo directamente o cópialo para tu gestor favorito.
              </p>
            </div>

            {/* Social channels */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all flex items-center gap-4"
              >
                <div className="p-2.5 rounded-lg bg-secondary text-muted-foreground group-hover:text-primary transition-colors">
                  <GithubIcon className="size-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                    GitHub
                  </div>
                  <div className="text-xs text-muted-foreground">Explora mi código</div>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all flex items-center gap-4"
              >
                <div className="p-2.5 rounded-lg bg-secondary text-muted-foreground group-hover:text-primary transition-colors">
                  <LinkedinIcon className="size-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                    LinkedIn
                  </div>
                  <div className="text-xs text-muted-foreground">Conectemos</div>
                </div>
              </a>
            </div>

            {/* Availability details */}
            <div className="bg-secondary/30 border border-border rounded-xl p-5 space-y-3 text-sm">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="size-4 text-primary shrink-0" />
                <span>Tiempo de respuesta habitual: <strong>&lt; 24 horas</strong></span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="size-4 text-primary shrink-0" />
                <span>Ubicación: <strong>{personalInfo.location} (Remoto / Híbrido)</strong></span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Sparkles className="size-4 text-emerald-500 shrink-0" />
                <span>Disponibilidad: <strong className="text-emerald-500">Inmediata</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
              {isSuccess ? (
                <div className="text-center py-10 space-y-4">
                  <div className="size-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/20">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    ¡Mensaje preparado con éxito!
                  </h2>
                  <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
                    Gracias por ponerte en contacto, {formData.name}. Puedes abrir directamente tu cliente de correo con el mensaje listo para enviar, o enviarme otro mensaje.
                  </p>

                  <div className="flex flex-wrap justify-center gap-3 pt-4">
                    <Button onClick={handleOpenMailto} className="gap-2">
                      <Send className="size-4" />
                      Abrir en mi gestor de correo
                    </Button>
                    <Button variant="outline" onClick={resetForm}>
                      Enviar otro mensaje
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="size-5 text-primary" />
                    <h2 className="text-lg font-bold text-foreground">
                      Envíame un mensaje
                    </h2>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground uppercase tracking-wider">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 text-sm bg-background border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors ${
                          errors.name ? "border-destructive" : "border-border"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground uppercase tracking-wider">
                        Email *
                      </label>
                      <input
                        type="email"
                        placeholder="tu-correo@ejemplo.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 text-sm bg-background border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors ${
                          errors.email ? "border-destructive" : "border-border"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground uppercase tracking-wider">
                      Asunto
                    </label>
                    <input
                      type="text"
                      placeholder="Propuesta de proyecto, oferta o consulta..."
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-sm bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground uppercase tracking-wider">
                      Mensaje *
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Cuéntame sobre tu proyecto, objetivos o requerimientos..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 text-sm bg-background border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-y ${
                        errors.message ? "border-destructive" : "border-border"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full gap-2 cursor-pointer shadow-md shadow-primary/20"
                  >
                    {isSubmitting ? (
                      <span>Preparando mensaje...</span>
                    ) : (
                      <>
                        <Send className="size-4" />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
