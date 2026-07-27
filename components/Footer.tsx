"use client";

import { useActionState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { subscribeNewsletter, SubscribeFormState } from "@/app/actions/subscribe";

// Iconos de Redes Sociales estilizados tipo Lucide React
function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
    </svg>
  );
}

function TiktokIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

const SOCIAL_NETWORKS = [
  { name: "Facebook", href: "https://facebook.com", Icon: FacebookIcon },
  { name: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
  { name: "YouTube", href: "https://youtube.com", Icon: YoutubeIcon },
  { name: "TikTok", href: "https://tiktok.com", Icon: TiktokIcon },
];

export default function Footer() {
  const [state, formAction, isPending] = useActionState<SubscribeFormState | null, FormData>(
    subscribeNewsletter,
    null
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <footer className="w-full bg-brand-blue text-brand-white pt-16 pb-12 px-6 md:px-12 border-t border-brand-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* BLOQUE SUPERIOR: Newsletter y Redes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-brand-white/10 items-center">
          
          {/* Izquierda: Mensaje Monumental */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-[0.9] mb-4">
              SUSCRÍBETE PARA MÁS <br />
              SABOR NATURAL
            </h2>
            <p className="text-sm md:text-base font-medium max-w-md leading-relaxed">
              Mantente al tanto de nuestros lanzamientos especiales, recetas de la casa, descuentos y más frescura directa del campo.
            </p>
          </div>

          {/* Derecha: Formulario e Iconos */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full lg:items-end">
            <div className="w-full max-w-md flex flex-col gap-2">
              <form ref={formRef} action={formAction} className="relative w-full">
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="Ingresa tu correo electrónico" 
                  className="w-full bg-[#fffcf0] text-brand-blue placeholder-brand-blue/60 font-bold px-6 py-4 rounded-full text-sm pr-12 focus:outline-none shadow-inner"
                  disabled={isPending}
                />
                <button 
                  type="submit" 
                  disabled={isPending}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-blue hover:text-brand-green transition-colors p-2 font-bold cursor-pointer flex items-center justify-center disabled:opacity-50"
                  aria-label="Suscribirse"
                >
                  {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                </button>
              </form>

              {state?.message && (
                <div 
                  className={`p-3 rounded-2xl flex items-center gap-2.5 text-xs font-bold transition-all ${
                    state.success 
                      ? "bg-emerald-500/20 text-emerald-200 border border-emerald-500/30" 
                      : "bg-red-500/20 text-red-200 border border-red-500/30"
                  }`}
                >
                  {state.success ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  )}
                  <span>{state.message}</span>
                </div>
              )}
            </div>

            {/* Redes Sociales Estilo Círculo con Iconos Lucide */}

            {/* Redes Sociales Estilo Círculo con Iconos Lucide */}
            <div className="flex gap-3 lg:justify-end">
              {SOCIAL_NETWORKS.map(({ name, href, Icon }) => (
                <a 
                  key={name} 
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-10 h-10 rounded-full border border-brand-white flex items-center justify-center text-brand-white hover:bg-brand-white hover:text-brand-blue transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* BLOQUE INFERIOR: Logo y Enlaces */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-start">
          
          {/* Logo Corporativo Grande */}
          <div className="lg:col-span-4 flex flex-col items-start gap-3">
            <div className="relative w-[180px] h-[90px]">
              <Image 
                src="/logo.webp" 
                alt="Lácteos Don Guayo" 
                fill
                className="object-contain brightness-110"
              />
            </div>
            <p className="text-xs font-bold tracking-widest uppercase">
              Sabor Puro, Tradición Familiar ™
            </p>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Lacteos+Don+Guayo+San+Pedro+Sula"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-brand-white/80 hover:text-brand-white hover:underline font-medium leading-relaxed max-w-xs transition-colors"
            >
              Barrio Los Andes, 7 calle, entre 12 y 13 avenida, San Pedro Sula, Honduras
            </a>
          </div>

          {/* Columnas de Enlaces de Navegación con peso reducido */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 w-full">
            
            {/* Columna 1: Empresa */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-black uppercase tracking-wider mb-1">
                Conócenos
              </h3>
              <ul className="flex flex-col gap-2 text-sm font-medium">
                <li>
                  <Link href="/empresa" className="hover:opacity-65 transition-all">
                    Nuestra Historia
                  </Link>
                </li>
                <li>
                  <Link href="/empresa" className="hover:opacity-65 transition-all">
                    El Origen
                  </Link>
                </li>
                <li>
                  <Link href="/contactenos" className="hover:opacity-65 transition-all">
                    Contacto Directo
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna 2: Productos */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-black uppercase tracking-wider mb-1">
                Productos
              </h3>
              <ul className="flex flex-col gap-2 text-sm font-medium">
                <li>
                  <Link href="/productos" className="hover:opacity-65 transition-all">
                    Quesos Frescos
                  </Link>
                </li>
                <li>
                  <Link href="/productos" className="hover:opacity-65 transition-all">
                    Línea Cremosa
                  </Link>
                </li>
                <li>
                  <Link href="/productos" className="hover:opacity-65 transition-all">
                    Ver Todo
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna 3: Enlaces de Utilidad */}
            <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
              <h3 className="text-xs font-black uppercase tracking-wider mb-1">
                Recursos
              </h3>
              <ul className="flex flex-col gap-2 text-sm font-medium">
                <li>
                  <Link href="/recetas" className="hover:opacity-65 transition-all">
                    Recetas de la Casa
                  </Link>
                </li>
                <li>
                  <Link href="/preguntas" className="hover:opacity-65 transition-all">
                    Preguntas Frecuentes
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Derechos Reservados final */}
        <div className="mt-12 pt-8 border-t border-brand-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-normal tracking-wider">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4">
            <div>
              © {new Date().getFullYear()} Lácteos Don Guayo. Todos los derechos reservados.
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:underline hover:opacity-65 transition-colors">Privacidad</a>
              <a href="#" className="hover:underline hover:opacity-65 transition-colors">Términos</a>
            </div>
          </div>
          <div>
            <a href="https://indevasa.com" target="_blank" rel="noopener noreferrer" className="hover:underline hover:opacity-65 transition-colors">
              Indeva Websites
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}