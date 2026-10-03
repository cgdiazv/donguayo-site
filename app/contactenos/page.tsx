"use client";

import { useActionState, useRef, useEffect } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  User, 
  Tag, 
  MessageSquare,
  Loader2,
  ExternalLink
} from "lucide-react";
import { sendContactEmail, ContactFormState } from "./actions";

export default function ContactoPage() {
  const [state, formAction, isPending] = useActionState<ContactFormState | null, FormData>(
    sendContactEmail,
    null
  );

  const formRef = useRef<HTMLFormElement>(null);

  // Resetear el formulario si el envío fue exitoso
  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <main className="min-h-screen bg-brand-white flex flex-col overflow-x-hidden pb-20">
      
      {/* SECCIÓN HERO / ENCABEZADO */}
      <section 
        className="w-full relative bg-cover bg-center bg-no-repeat py-20 md:py-28 px-6 md:px-12 text-brand-white border-b border-brand-white/10"
        style={{ backgroundImage: "url('/campo-vacas.webp')" }}
      >
        {/* Overlay sutil para resaltar la imagen del campo */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/65 via-brand-blue/35 to-black/30 z-0" />

        <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-2 bg-brand-white/15 text-brand-white font-black text-xs md:text-sm uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-brand-white/20 shadow-sm backdrop-blur-md">
            Atención al Cliente
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] mb-6 drop-shadow-md text-center">
            CONTÁCTENOS
          </h1>
          <p className="text-xl md:text-2xl font-bold italic text-brand-white/90 max-w-2xl leading-relaxed text-center">
            &ldquo;Estamos encantados de atenderte. Escríbenos para pedidos, distribución o cualquier consulta.&rdquo;
          </p>
        </div>
      </section>

      {/* SECCIÓN PRINCIPAL: INFORMACIÓN DE CONTACTO + FORMULARIO */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-12 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* COLUMNA IZQUIERDA: INFORMACIÓN Y TARJETAS */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-brand-blue/5 p-8 rounded-3xl border border-brand-blue/10">
            <h2 className="text-2xl font-black text-brand-blue uppercase tracking-tight mb-6">
              Información de Contacto
            </h2>
            
            <div className="flex flex-col gap-6">
              {/* Correo Electrónico */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue text-brand-white flex items-center justify-center shrink-0 shadow-md">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-black text-brand-blue/60 uppercase tracking-wider mb-1">
                    Correo Electrónico
                  </h3>
                  <a 
                    href="mailto:contacto@lacteosdonguayo.com" 
                    className="text-base font-bold text-brand-blue hover:underline break-all"
                  >
                    contacto@lacteosdonguayo.com
                  </a>
                </div>
              </div>

              {/* Teléfono & WhatsApp */}
              <div className="flex items-start gap-4">
                <a 
                  href="https://wa.me/50496991325" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Contactar por WhatsApp"
                  className="w-12 h-12 rounded-2xl bg-brand-blue text-brand-white flex items-center justify-center shrink-0 shadow-md hover:bg-brand-white hover:text-brand-blue border-2 border-brand-blue transition-all duration-200 group"
                >
                  <Phone className="w-6 h-6 transition-transform group-hover:scale-110" />
                </a>
                <div>
                  <h3 className="text-xs font-black text-brand-blue/60 uppercase tracking-wider mb-1">
                    Teléfono & WhatsApp
                  </h3>
                  <a 
                    href="https://wa.me/50496991325" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-base font-bold text-brand-blue hover:underline inline-flex items-center gap-1.5 group"
                  >
                    <span>+504 9699-1325</span>
                    <ExternalLink className="w-4 h-4 text-brand-blue/70 group-hover:text-brand-blue shrink-0" />
                  </a>
                </div>
              </div>

              {/* Ubicación / Dirección */}
              <div className="flex items-start gap-4">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Lacteos+Don+Guayo+San+Pedro+Sula" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Ver en Google Maps"
                  className="w-12 h-12 rounded-2xl bg-brand-blue text-brand-white flex items-center justify-center shrink-0 shadow-md hover:bg-brand-white hover:text-brand-blue border-2 border-brand-blue transition-all duration-200 group"
                >
                  <MapPin className="w-6 h-6 transition-transform group-hover:scale-110" />
                </a>
                <div>
                  <h3 className="text-xs font-black text-brand-blue/60 uppercase tracking-wider mb-1">
                    Visítanos en
                  </h3>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Lacteos+Don+Guayo+San+Pedro+Sula" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-base font-bold text-brand-blue hover:underline leading-snug inline-flex flex-wrap items-center gap-1.5 group"
                  >
                    <span>Barrio Los Andes, 7 calle, entre 12 y 13 avenida, San Pedro Sula, Honduras</span>
                    <ExternalLink className="w-4 h-4 text-brand-blue/70 group-hover:text-brand-blue shrink-0" />
                  </a>
                </div>
              </div>

              {/* Horario */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue text-brand-white flex items-center justify-center shrink-0 shadow-md">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-black text-brand-blue/60 uppercase tracking-wider mb-1">
                    Horario de Atención
                  </h3>
                  <p className="text-base font-bold text-brand-blue leading-snug">
                    Lunes a Viernes: 7:00 AM - 6:00 PM <br />
                    Sábados: 7:00 AM - 3:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta Promocional Sabor Natural */}
          <div className="bg-brand-green/10 p-8 rounded-3xl border border-brand-green/20 text-brand-blue">
            <h3 className="text-lg font-black uppercase mb-2">
              Sabor Puro y Frescura Directa
            </h3>
            <p className="text-sm font-medium text-brand-blue/80 leading-relaxed">
              Todos nuestros productos son preparados con estándares de calidad premium a partir de leche 100% fresca de vacas centroamericanas.
            </p>
          </div>
        </div>

        {/* COLUMNA DERECHA: FORMULARIO DE CONTACTO */}
        <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl border border-brand-blue/10 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-black text-brand-blue uppercase tracking-tight mb-2">
            Envíanos un Mensaje
          </h2>
          <p className="text-sm md:text-base text-brand-blue/70 font-medium mb-8">
            Completa el siguiente formulario y nuestro equipo te responderá a la brevedad.
          </p>

          {/* Mensajes de Notificación */}
          {state?.message && (
            <div 
              className={`p-4 mb-8 rounded-2xl flex items-center gap-3 text-sm font-bold ${
                state.success 
                  ? "bg-emerald-50 text-emerald-800 border border-emerald-200" 
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {state.success ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
              ) : (
                <AlertCircle className="w-6 h-6 text-red-600 shrink-0" />
              )}
              <span>{state.message}</span>
            </div>
          )}

          <form ref={formRef} action={formAction} className="flex flex-col gap-6">
            
            {/* Campo: Nombre Completo */}
            <div className="flex flex-col gap-2">
              <label htmlFor="nombre" className="text-xs font-black uppercase text-brand-blue tracking-wider flex items-center gap-2">
                <User className="w-4 h-4 text-brand-blue" />
                Nombre Completo <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                id="nombre" 
                name="nombre" 
                required 
                placeholder="Ej. María Rodríguez" 
                className="w-full bg-[#fffcf0] border border-brand-blue/20 text-brand-blue placeholder-brand-blue/50 font-semibold px-5 py-3.5 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
              />
            </div>

            {/* Fila: Correo y Teléfono */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Campo: Correo Electrónico */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-black uppercase text-brand-blue tracking-wider flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-blue" />
                  Correo Electrónico <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="ejemplo@correo.com" 
                  className="w-full bg-[#fffcf0] border border-brand-blue/20 text-brand-blue placeholder-brand-blue/50 font-semibold px-5 py-3.5 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
                />
              </div>

              {/* Campo: Teléfono */}
              <div className="flex flex-col gap-2">
                <label htmlFor="telefono" className="text-xs font-black uppercase text-brand-blue tracking-wider flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand-blue" />
                  Teléfono / WhatsApp
                </label>
                <input 
                  type="tel" 
                  id="telefono" 
                  name="telefono" 
                  placeholder="+503 7000-0000" 
                  className="w-full bg-[#fffcf0] border border-brand-blue/20 text-brand-blue placeholder-brand-blue/50 font-semibold px-5 py-3.5 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
                />
              </div>
            </div>

            {/* Campo: Asunto */}
            <div className="flex flex-col gap-2">
              <label htmlFor="asunto" className="text-xs font-black uppercase text-brand-blue tracking-wider flex items-center gap-2">
                <Tag className="w-4 h-4 text-brand-blue" />
                Motivo de Consulta
              </label>
              <select 
                id="asunto" 
                name="asunto" 
                className="w-full bg-[#fffcf0] border border-brand-blue/20 text-brand-blue font-semibold px-5 py-3.5 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40 cursor-pointer"
              >
                <option value="Consulta General">Consulta General</option>
                <option value="Ventas y Pedidos">Ventas y Pedidos de Productos</option>
                <option value="Distribución y Mayoristas">Distribución / Ser Mayorista</option>
                <option value="Comentarios y Sugerencias">Comentarios y Sugerencias</option>
              </select>
            </div>

            {/* Campo: Mensaje */}
            <div className="flex flex-col gap-2">
              <label htmlFor="mensaje" className="text-xs font-black uppercase text-brand-blue tracking-wider flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-brand-blue" />
                Mensaje <span className="text-red-500">*</span>
              </label>
              <textarea 
                id="mensaje" 
                name="mensaje" 
                rows={5} 
                required 
                placeholder="Escribe aquí tu consulta o detalles de tu mensaje..." 
                className="w-full bg-[#fffcf0] border border-brand-blue/20 text-brand-blue placeholder-brand-blue/50 font-semibold p-5 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40 resize-y"
              />
            </div>

            {/* Botón de Enviar */}
            <button 
              type="submit" 
              disabled={isPending}
              className="mt-2 w-full rounded-full bg-brand-blue py-4 px-8 text-base font-bold uppercase tracking-wider text-brand-white transition-all duration-200 hover:bg-brand-white/90 hover:text-brand-blue border-2 border-brand-blue shadow-lg flex items-center justify-center gap-3 disabled:opacity-60 cursor-pointer"
            >
              {isPending ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Enviando Mensaje...</span>
                </>
              ) : (
                <>
                  <span>Enviar Mensaje</span>
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>

          </form>
        </div>

      </section>

    </main>
  );
}