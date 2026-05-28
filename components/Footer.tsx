import Image from "next/image";
import Link from "next/link";
import { Resend } from "resend";

// Inicializamos Resend fuera del componente con la variable de entorno
const resend = new Resend(process.env.RESEND_API_KEY);

export default function Footer() {
  // Server Action para procesar el envío de forma segura en el servidor
async function handleSubscribe(formData: FormData) {
  "use server";
  const email = formData.get("email") as string;
  
  if (!email) return;

  try {
    await resend.emails.send({
      // Usamos el correo verificado de tu agencia/servidor para despachar la notificación
      from: "Lácteos Don Guayo Portal <notifications@indevasa.com>",
      to: ["contacto@lacteosdonguayo.com"],
      subject: "¡Nuevo Suscriptor al Newsletter!",
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #015a85; border-radius: 8px; max-w-md; margin: 0 auto;">
          <h2 style="color: #015a85; text-transform: uppercase; margin-bottom: 5px; font-size: 20px;">¡Nuevo registro de correo!</h2>
          <p style="color: #666; font-size: 14px; margin-top: 0;">Un usuario ha solicitado unirse al newsletter desde el sitio web.</p>
          
          <div style="background-color: #fffcf0; padding: 15px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #015a85;">
            <span style="font-size: 12px; text-transform: uppercase; color: #015a85; font-weight: bold; display: block; margin-bottom: 2px;">Correo del Suscriptor</span>
            <a href="mailto:${email}" style="font-size: 16px; font-weight: bold; color: #015a85; text-decoration: none;">${email}</a>
          </div>
          
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p style="font-size: 11px; color: #999; text-align: center; margin-bottom: 0;">
            Este es un mensaje automático generado para Lácteos Don Guayo a través de Indeva Websites.
          </p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Error enviando el correo a través de Resend:", error);
  }
}

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
            <form action={handleSubscribe} className="relative w-full max-w-md">
              <input 
                type="email" 
                name="email" 
                required 
                placeholder="Ingresa tu correo electrónico" 
                className="w-full bg-[#fffcf0] text-brand-blue placeholder-brand-blue/60 font-bold px-6 py-4 rounded-full text-sm pr-12 focus:outline-none shadow-inner"
              />
              <button 
                type="submit" 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-blue hover:text-brand-green transition-colors p-2 font-bold text-lg cursor-pointer"
                aria-label="Suscribirse"
              >
                ➔
              </button>
            </form>

            {/* Redes Sociales Estilo Círculo */}
            <div className="flex gap-3 lg:justify-end">
              {["FB", "IG", "YT", "TK"].map((red) => (
                <a 
                  key={red} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-brand-white flex items-center justify-center text-xs font-black hover:bg-brand-white hover:text-brand-blue transition-all duration-300"
                >
                  {red}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* BLOQUE INFERIOR: Logo y Enlaces */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-start">
          
          {/* Logo Corporativo Grande */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
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