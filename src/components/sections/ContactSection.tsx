"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BRAND } from "@/lib/constants";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${BRAND.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          Nombre: formData.name,
          Correo: formData.email,
          Mensaje: formData.message,
          _subject: `Nueva consulta de proyecto: ${formData.name} — Velkode`,
          _autoresponse: `Hola ${formData.name},\n\nConfirmamos que hemos recibido tu mensaje en Velkode con éxito.\n\nNuestro equipo revisará los detalles de tu consulta y nos pondremos en contacto contigo a la brevedad para darte respuesta y evaluar los requerimientos de tu proyecto.\n\nAgradecemos tu interés y confianza en nosotros.\n\nAtentamente,\nEquipo Velkode\nSee it. Build it.\n${BRAND.email}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await response.json();

      if (response.ok && (data.success === "true" || data.success === true || response.status === 200)) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.message || "No se pudo entregar el mensaje automáticamente.");
      }
    } catch (err: unknown) {
      console.warn("Error enviando por FormSubmit, activando canal directo:", err);
      // Fallback: abrir cliente de correo directamente para que el mensaje nunca se pierda
      const subject = encodeURIComponent(`Consulta de ${formData.name} - Velkode`);
      const body = encodeURIComponent(
        `Hola equipo de Velkode,\n\nNombre: ${formData.name}\nCorreo: ${formData.email}\n\nDetalles del proyecto:\n${formData.message}`
      );
      window.open(`mailto:${BRAND.email}?subject=${subject}&body=${body}`, "_blank");
      setStatus("error");
      setErrorMessage("No se pudo conectar con el servidor de correo directo. Se ha abierto tu cliente de correo como respaldo.");
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 max-w-5xl mx-auto border-t border-[#25333D]/60 scroll-mt-24 sm:scroll-mt-28">
      <div className="flex flex-col items-center text-center mb-14 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#182028] border border-[#25333D] text-xs font-medium text-[#CBD5E1] mb-3">
          <span>Contacto Directo</span>
          <span className="text-[#40626B]">·</span>
          <span className="text-[#7892A9]">Conversemos</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-3 font-heading">
          Hablemos de tu proyecto.
        </h2>
        <p className="text-[#CBD5E1] text-xs sm:text-sm leading-relaxed max-w-lg">
          Cuéntanos qué necesitas construir. Te respondemos con claridad, estimación de tiempos y una cotización sin compromisos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-7 items-start">
        {/* Left Side: Institutional Channels */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <div className="apple-glass rounded-3xl p-6 sm:p-7 flex flex-col gap-2.5 border border-[#25333D]">
            <span className="text-xs text-[#7892A9] font-medium">
              Correo Institucional
            </span>
            <a
              href={`mailto:${BRAND.email}`}
              className="text-white hover:text-[#DBECFE] hover:underline text-xs sm:text-sm break-all font-medium font-sans transition-colors"
            >
              {BRAND.email}
            </a>
            <p className="text-xs text-[#CBD5E1] leading-relaxed mt-1">
              Atención directa y seguimiento personalizado para tu empresa.
            </p>
          </div>

          <div className="apple-glass rounded-3xl p-6 sm:p-7 flex flex-col gap-3.5 border border-[#25333D]">
            <span className="text-xs text-[#7892A9] font-medium">
              Atención Profesional
            </span>
            <div className="flex flex-col gap-2.5 text-xs text-[#CBD5E1]">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DBECFE] flex-shrink-0 shadow-[0_0_6px_#6B8C9D]" />
                <span>Respuesta en menos de 24 horas hábiles</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DBECFE] flex-shrink-0 shadow-[0_0_6px_#6B8C9D]" />
                <span>Propuesta y cotización clara por etapas</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DBECFE] flex-shrink-0 shadow-[0_0_6px_#6B8C9D]" />
                <span>Acuerdo de confidencialidad (NDA) disponible</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Direct Delivery Form */}
        <div className="md:col-span-7">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="apple-glass rounded-3xl p-7 sm:p-8 flex flex-col gap-4 border border-[#25333D] relative overflow-hidden"
          >
            {/* Success Notification Banner */}
            {status === "success" && (
              <div className="p-4 rounded-2xl bg-[#081319] border border-[#4B7784] text-xs flex flex-col gap-1.5 animate-fadeIn">
                <div className="flex items-center gap-2 text-[#DBECFE] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#DBECFE] shadow-[0_0_8px_#6B8C9D]" />
                  <span>¡Mensaje enviado con éxito!</span>
                </div>
                <p className="text-[#CBD5E1] leading-relaxed">
                  Tu consulta ha sido enviada directamente a nuestro correo <strong className="text-white">{BRAND.email}</strong>. Nos pondremos en contacto contigo a la brevedad.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-1 self-start text-[11px] text-[#DBECFE] hover:text-white underline cursor-pointer"
                >
                  Enviar otro mensaje
                </button>
              </div>
            )}

            {/* Error Notification Banner */}
            {status === "error" && (
              <div className="p-3.5 rounded-2xl bg-[#182028] border border-[#25333D] text-xs text-[#CBD5E1] flex flex-col gap-1">
                <span className="text-white font-medium">Nota de envío:</span>
                <p>{errorMessage}</p>
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-[#CBD5E1] mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                required
                disabled={status === "loading"}
                placeholder="Tu nombre y apellido"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#010508]/80 border border-[#25333D] text-white placeholder-[#7892A9] text-xs sm:text-sm focus:outline-none focus:border-[#4B7784] transition-colors disabled:opacity-50"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#CBD5E1] mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                required
                disabled={status === "loading"}
                placeholder="tu@empresa.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#010508]/80 border border-[#25333D] text-white placeholder-[#7892A9] text-xs sm:text-sm focus:outline-none focus:border-[#4B7784] transition-colors disabled:opacity-50"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#CBD5E1] mb-2">
                Detalles de tu Proyecto
              </label>
              <textarea
                rows={4}
                required
                disabled={status === "loading"}
                placeholder="Platícanos qué necesitas construir (sitio web, software de escritorio, plataforma en la nube, etc.) o cualquier duda que tengas..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#010508]/80 border border-[#25333D] text-white placeholder-[#7892A9] text-xs sm:text-sm focus:outline-none focus:border-[#4B7784] transition-colors resize-none disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="apple-btn-primary w-full py-3 text-xs sm:text-sm font-semibold tracking-wide cursor-pointer mt-1 flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  <span>Enviando mensaje a {BRAND.email}...</span>
                </>
              ) : status === "success" ? (
                "✓ Mensaje entregado"
              ) : (
                "Enviar consulta ❯"
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
