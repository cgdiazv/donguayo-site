import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-brand-blue shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-center">
        
        {/* Lado Izquierdo: Color Crema (#ffefc6) */}
        <div className="flex-1 flex justify-end items-center gap-1 text-brand-cream font-semibold text-sm">
          <Link 
            href="/productos" 
            className="px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Productos
          </Link>
          <Link 
            href="/acerca" 
            className="px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Acerca
          </Link>
          <Link 
            href="/recetas" 
            className="px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Recetas
          </Link>
        </div>

        {/* Centro: Logo con filtro para igualar el color crema */}
        <div className="px-8 flex-shrink-0">
          <Link href="/">
            <Image 
              src="/logo.webp" 
              alt="Lácteos Don Guayo" 
              width={130} 
              height={65} 
              priority
              className="object-contain"
              /* 
                 Si el logo original no es crema, podemos usar filtros CSS. 
                 Si ya subiste una versión crema, puedes quitar este estilo.
              */
              style={{ 
                filter: 'sepia(100%) border-element brightness(110%) saturate(150%) hue-rotate(350deg)' 
              }}
            />
          </Link>
        </div>

        {/* Lado Derecho: Color Crema (#ffefc6) */}
        <div className="flex-1 flex justify-start items-center gap-1 text-brand-cream font-semibold text-sm">
          <Link 
            href="/visita" 
            className="px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Visita
          </Link>
          <Link 
            href="/donde-comprar" 
            className="px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Dónde Comprar
          </Link>
          <Link 
            href="/tienda" 
            className="px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Tienda Online
          </Link>
        </div>

      </div>
    </nav>
  );
}