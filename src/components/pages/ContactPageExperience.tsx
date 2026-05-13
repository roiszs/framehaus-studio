"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Camera,
  Check,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Reveal from "@/components/motion/Reveal";
import Container from "@/components/shared/Container";
import { packages } from "@/lib/data/packages";
import { services } from "@/lib/data/services";
import { useLang } from "@/lib/i18n/LanguageProvider";

export default function ContactPageExperience() {
  const { lang } = useLang();
  const [submitted, setSubmitted] = useState(false);

  const fieldClass =
    "border-[#F5F1EA]/10 bg-[#0D0D0D]/60 text-[#F5F1EA] placeholder:text-[#B9B2A8]/60 focus-visible:ring-[#C8A96A]/60";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#F5F1EA]/10 bg-[#0D0D0D] py-14 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(200,169,106,0.18),transparent_32%),radial-gradient(circle_at_82%_10%,rgba(245,241,234,0.08),transparent_30%),linear-gradient(135deg,#0D0D0D,#120F0D,#0D0D0D)]" />

        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal>
              <div>
                <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#C8A96A]">
                  {lang === "en" ? "Request a Session" : "Solicitar sesión"}
                </p>

                <h1 className="max-w-5xl font-editorial framehaus-mobile-safe-title text-4xl font-semibold leading-[1] tracking-[-0.048em] text-[#F5F1EA] sm:text-5xl md:text-6xl lg:text-6xl">
                  {lang === "en"
                    ? "Tell us what you want to create."
                    : "Cuéntanos qué quieres crear."}
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-8 text-[#B9B2A8] sm:text-lg">
                  {lang === "en"
                    ? "Share the project details, session type, timeline, and visual needs. FrameHaus will use this information to recommend the right service, package, or custom production plan."
                    : "Comparte los detalles del proyecto, tipo de sesión, tiempos y necesidades visuales. FrameHaus usará esta información para recomendar el servicio, paquete o plan de producción adecuado."}
                </p>

                <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
                  {[
                    {
                      icon: Camera,
                      label: lang === "en" ? "Photo" : "Foto",
                    },
                    {
                      icon: Sparkles,
                      label: lang === "en" ? "Creative Direction" : "Dirección creativa",
                    },
                    {
                      icon: CalendarDays,
                      label: lang === "en" ? "Booking" : "Reserva",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-3 rounded-2xl border border-[#F5F1EA]/10 bg-[#F5F1EA]/5 p-4 text-sm text-[#F5F1EA]"
                      >
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#C8A96A]/10 text-[#C8A96A]">
                          <Icon size={16} />
                        </div>
                        {item.label}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="relative min-h-[360px] sm:min-h-[500px] overflow-hidden rounded-[2rem] border border-[#F5F1EA]/10 bg-[#181410]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg,rgba(13,13,13,0.1),rgba(13,13,13,0.76)), url('/framehaus/content-day.webp')",
                  }}
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(200,169,106,0.28),transparent_34%)]" />

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#C8A96A]">
                    FrameHaus Studio
                  </p>

                  <h2 className="mt-4 font-editorial text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#F5F1EA] sm:text-5xl">
                    {lang === "en"
                      ? "A guided request flow for real creative projects."
                      : "Un flujo guiado de solicitud para proyectos creativos reales."}
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-[#B9B2A8]">
                    {lang === "en"
                      ? "Built to capture enough context before the first conversation."
                      : "Construido para capturar suficiente contexto antes de la primera conversación."}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FORM */}
      <section className="bg-[#0D0D0D] py-14 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <div className="rounded-[2rem] border border-[#F5F1EA]/10 bg-[#F5F1EA]/5 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.16)] sm:p-8">
                {submitted ? (
                  <div className="flex min-h-[640px] flex-col justify-center rounded-[1.5rem] border border-[#C8A96A]/30 bg-[#C8A96A]/10 p-8 text-center">
                    <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-[#C8A96A] text-[#0D0D0D]">
                      <Check size={28} />
                    </div>

                    <h2 className="font-editorial text-5xl font-semibold leading-none tracking-[-0.05em] text-[#F5F1EA]">
                      {lang === "en"
                        ? "Request received."
                        : "Solicitud recibida."}
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#B9B2A8]">
                      {lang === "en"
                        ? "This is a portfolio simulation. In a production website, this form could connect to email, CRM, WhatsApp, or a booking workflow."
                        : "Esta es una simulación de portafolio. En un website de producción, este formulario podría conectarse a email, CRM, WhatsApp o un flujo de reservas."}
                    </p>

                    <Button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="framehaus-white-button mx-auto mt-8 rounded-full bg-[#F5F1EA] text-[#0D0D0D] hover:bg-[#F5F1EA]"
                    >
                      {lang === "en" ? "Send another request" : "Enviar otra solicitud"}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid gap-5 sm:gap-6">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C8A96A]">
                        {lang === "en" ? "Session Details" : "Detalles de la sesión"}
                      </p>

                      <h2 className="mt-5 font-editorial text-4xl font-semibold leading-none tracking-[-0.04em] text-[#F5F1EA] sm:text-5xl">
                        {lang === "en"
                          ? "Start with the essentials."
                          : "Comienza con lo esencial."}
                      </h2>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="grid gap-2">
                        <Label htmlFor="name" className="text-[#F5F1EA]">
                          {lang === "en" ? "Full name" : "Nombre completo"}
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          className={fieldClass}
                          placeholder={lang === "en" ? "Your name" : "Tu nombre"}
                        />
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="email" className="text-[#F5F1EA]">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className={fieldClass}
                          placeholder="hello@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="grid gap-2">
                        <Label htmlFor="phone" className="text-[#F5F1EA]">
                          {lang === "en" ? "Phone" : "Teléfono"}
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          className={fieldClass}
                          placeholder={lang === "en" ? "Optional" : "Opcional"}
                        />
                      </div>

                      <div className="grid gap-2">
                        <Label className="text-[#F5F1EA]">
                          {lang === "en" ? "Preferred language" : "Idioma preferido"}
                        </Label>
                        <Select>
                          <SelectTrigger className={fieldClass}>
                            <SelectValue
                              placeholder={lang === "en" ? "Select language" : "Selecciona idioma"}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="english">English</SelectItem>
                            <SelectItem value="spanish">Español</SelectItem>
                            <SelectItem value="both">
                              {lang === "en" ? "Both" : "Ambos"}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="grid gap-2">
                        <Label className="text-[#F5F1EA]">
                          {lang === "en" ? "Type of session" : "Tipo de sesión"}
                        </Label>
                        <Select>
                          <SelectTrigger className={fieldClass}>
                            <SelectValue
                              placeholder={lang === "en" ? "Select service" : "Selecciona servicio"}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.slug} value={service.slug}>
                                {service.title[lang]}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid gap-2">
                        <Label className="text-[#F5F1EA]">
                          {lang === "en" ? "Package interest" : "Paquete de interés"}
                        </Label>
                        <Select>
                          <SelectTrigger className={fieldClass}>
                            <SelectValue
                              placeholder={lang === "en" ? "Select package" : "Selecciona paquete"}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            {packages.map((item) => (
                              <SelectItem key={item.slug} value={item.slug}>
                                {item.name[lang]}
                              </SelectItem>
                            ))}
                            <SelectItem value="custom">
                              {lang === "en" ? "Custom quote" : "Cotización personalizada"}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="grid gap-2">
                        <Label className="text-[#F5F1EA]">
                          {lang === "en" ? "Tentative timeline" : "Fecha tentativa"}
                        </Label>
                        <Select>
                          <SelectTrigger className={fieldClass}>
                            <SelectValue
                              placeholder={lang === "en" ? "Select timeline" : "Selecciona fecha"}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="this-month">
                              {lang === "en" ? "This month" : "Este mes"}
                            </SelectItem>
                            <SelectItem value="next-month">
                              {lang === "en" ? "Next month" : "Próximo mes"}
                            </SelectItem>
                            <SelectItem value="2-3-months">
                              {lang === "en" ? "In 2–3 months" : "En 2–3 meses"}
                            </SelectItem>
                            <SelectItem value="not-sure">
                              {lang === "en" ? "Not sure yet" : "Aún no estoy seguro"}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid gap-2">
                        <Label className="text-[#F5F1EA]">
                          {lang === "en" ? "Estimated budget" : "Presupuesto estimado"}
                        </Label>
                        <Select>
                          <SelectTrigger className={fieldClass}>
                            <SelectValue
                              placeholder={lang === "en" ? "Select range" : "Selecciona rango"}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-500">
                              {lang === "en" ? "Under $500" : "Menos de $500"}
                            </SelectItem>
                            <SelectItem value="500-1000">$500 – $1,000</SelectItem>
                            <SelectItem value="1000-2000">$1,000 – $2,000</SelectItem>
                            <SelectItem value="2000-plus">$2,000+</SelectItem>
                            <SelectItem value="not-sure">
                              {lang === "en" ? "Not sure yet" : "Aún no estoy seguro"}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label className="text-[#F5F1EA]">
                        {lang === "en"
                          ? "Do you need photo, video, or both?"
                          : "¿Necesitas foto, video o ambos?"}
                      </Label>
                      <Select>
                        <SelectTrigger className={fieldClass}>
                          <SelectValue
                            placeholder={
                              lang === "en"
                                ? "Select visual needs"
                                : "Selecciona necesidades visuales"
                            }
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="photo">
                            {lang === "en" ? "Photography only" : "Solo fotografía"}
                          </SelectItem>
                          <SelectItem value="video">
                            {lang === "en" ? "Video only" : "Solo video"}
                          </SelectItem>
                          <SelectItem value="both">
                            {lang === "en" ? "Photo and video" : "Foto y video"}
                          </SelectItem>
                          <SelectItem value="not-sure">
                            {lang === "en" ? "Not sure yet" : "Aún no estoy seguro"}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="message" className="text-[#F5F1EA]">
                        {lang === "en" ? "Project details" : "Detalles del proyecto"}
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        className={`${fieldClass} min-h-36 resize-none`}
                        placeholder={
                          lang === "en"
                            ? "Tell us about the brand, event, product, location, goals, and any visual references."
                            : "Cuéntanos sobre la marca, evento, producto, locación, objetivos y cualquier referencia visual."
                        }
                      />
                    </div>

                    <Button
                      type="submit"
                      className="framehaus-white-button h-12 rounded-full bg-[#F5F1EA] text-[#0D0D0D] hover:bg-[#F5F1EA]"
                    >
                      {lang === "en" ? "Submit request" : "Enviar solicitud"}
                      <Send size={16} />
                    </Button>
                  </form>
                )}
              </div>
            </Reveal>

            <div className="space-y-5">
              <Reveal delay={0.08}>
                <div className="rounded-[2rem] border border-[#F5F1EA]/10 bg-[#F5F1EA]/5 p-6 sm:p-8">
                  <p className="text-xs uppercase tracking-[0.32em] text-[#C8A96A]">
                    {lang === "en" ? "What happens next" : "Qué pasa después"}
                  </p>

                  <div className="mt-7 grid gap-5">
                    {[
                      {
                        step: "01",
                        en: "FrameHaus reviews your project details.",
                        es: "FrameHaus revisa los detalles de tu proyecto.",
                      },
                      {
                        step: "02",
                        en: "The best service or package is recommended.",
                        es: "Se recomienda el mejor servicio o paquete.",
                      },
                      {
                        step: "03",
                        en: "A creative direction and production plan is prepared.",
                        es: "Se prepara una dirección creativa y plan de producción.",
                      },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-4">
                        <p className="font-editorial text-3xl font-semibold text-[#C8A96A]">
                          {item.step}
                        </p>
                        <p className="pt-1 text-sm leading-7 text-[#B9B2A8]">
                          {item[lang]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="rounded-[2rem] border border-[#F5F1EA]/10 bg-[#120F0D] p-6 sm:p-8">
                  <p className="text-xs uppercase tracking-[0.32em] text-[#C8A96A]">
                    {lang === "en" ? "Contact options" : "Opciones de contacto"}
                  </p>

                  <div className="mt-7 grid gap-4">
                    {[
                      {
                        icon: Mail,
                        label: "hello@framehaus.studio",
                      },
                      {
                        icon: Phone,
                        label: "+1 (555) 018-2045",
                      },
                      {
                        icon: MessageCircle,
                        label:
                          lang === "en"
                            ? "Response within 1–2 business days"
                            : "Respuesta en 1–2 días hábiles",
                      },
                    ].map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.label}
                          className="flex items-center gap-4 rounded-2xl border border-[#F5F1EA]/10 bg-[#0D0D0D]/50 p-4 text-sm text-[#F5F1EA]"
                        >
                          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#C8A96A]/10 text-[#C8A96A]">
                            <Icon size={16} />
                          </div>
                          {item.label}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="rounded-[2rem] border border-[#C8A96A]/25 bg-[#C8A96A]/10 p-6 sm:p-8">
                  <p className="text-xs uppercase tracking-[0.32em] text-[#C8A96A]">
                    {lang === "en" ? "Portfolio note" : "Nota de portafolio"}
                  </p>

                  <h3 className="mt-5 font-editorial text-4xl font-semibold leading-none tracking-[-0.04em] text-[#F5F1EA]">
                    {lang === "en"
                      ? "This flow is built like a real lead intake system."
                      : "Este flujo está construido como un sistema real de captación de prospectos."}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-[#B9B2A8]">
                    {lang === "en"
                      ? "For a production client, this form could send data to email, WhatsApp, a CRM, Google Sheets, or a custom dashboard."
                      : "Para un cliente en producción, este formulario podría enviar datos a email, WhatsApp, CRM, Google Sheets o un dashboard personalizado."}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-[#F5F1EA]/10 bg-[#120F0D] py-14 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,169,106,0.18),transparent_35%)]" />

        <Container className="relative z-10">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C8A96A]">
                {lang === "en" ? "Not ready yet?" : "¿Aún no estás listo?"}
              </p>

              <h2 className="mt-6 font-editorial text-5xl font-semibold leading-[0.9] tracking-[-0.05em] text-[#F5F1EA] sm:text-5xl lg:text-6xl">
                {lang === "en"
                  ? "Explore the services before requesting a session."
                  : "Explora los servicios antes de solicitar una sesión."}
              </h2>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  className="framehaus-white-button h-12 rounded-full bg-[#F5F1EA] px-7 text-[#0D0D0D] shadow-[0_18px_50px_rgba(245,241,234,0.10)] hover:bg-[#F5F1EA]"
                >
                  <Link href="/services">
                    {lang === "en" ? "View services" : "Ver servicios"}
                    <ArrowRight size={16} />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full border-[#F5F1EA]/15 bg-transparent px-7 text-[#F5F1EA] hover:bg-[#F5F1EA]/10 hover:text-[#F5F1EA]"
                >
                  <Link href="/work">
                    {lang === "en" ? "View portfolio" : "Ver portafolio"}
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
