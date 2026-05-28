import Link from "next/link";
import Image from "next/image";
import ProductSlider from "@/components/ProductSlider";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-white flex flex-col overflow-x-hidden">
       
      {/* Hero Section Asimétrica con Fondo de Imagen */}
      <section 
        className="w-full relative bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('/campo-vacas.webp')" }}
      >
        {/* Overlay difuminado hacia la derecha */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fffcf0]/90 via-[#fffcf0]/60 to-transparent z-0"></div>

        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pt-8 lg:pt-16 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Columna Izquierda: Mensaje Monumental */}
          <div className="lg:col-span-7 flex flex-col items-start relative z-10">
            
            {/* Badge pequeño */}
            <span className="animate-slide-up-fast text-brand-green font-black text-sm uppercase tracking-widest mb-4 bg-brand-green/10 px-3 py-1 rounded" style={{ animationDelay: '50ms' }}>
              Calidad Premium desde el Origen
            </span>

            {/* Título Estilo Tillamook */}
            <h1 className="animate-slide-up-fast text-[10vw] sm:text-6xl md:text-8xl lg:text-[7.5rem] font-black text-brand-blue uppercase leading-[0.8] tracking-[-0.05em] text-left mb-8" style={{ animationDelay: '100ms' }}>
              ELABORADOS CON <br />
              LECHE 100% FRESCA
            </h1>

            {/* Botón de Acción */}
            <Link 
              href="/productos" 
              className="animate-slide-up-fast relative z-20 inline-block rounded-full bg-brand-blue px-10 py-4 text-lg font-bold uppercase tracking-wider text-brand-white transition-colors duration-200 hover:bg-brand-accent hover:text-brand-blue shadow-lg"
              style={{ animationDelay: '150ms' }}
            >
              Conocer Más »
            </Link>
          </div>

          {/* Columna Derecha: El Producto al Frente con Sombra Acoplada Nativamente */}
          <div className="animate-slide-up-fast lg:col-span-5 relative w-full h-[350px] lg:h-[500px] z-10 pointer-events-none overflow-visible" style={{ animationDelay: '200ms' }}>
            <Image
              src="/hero-cheese.webp" 
              alt="Brochetas de Queso Fresco Don Guayo"
              fill
              priority
              /* 
                1. Regresamos el escalado y traslación exactos que te funcionaban visualmente.
                2. drop-shadow-[0_25px_20px_rgba(0,0,0,0.3)] genera un sombreado pesado, oscuro y difuminado
                   justo en la base del objeto real, dando el peso de superficie que buscas.
              */
              className="object-contain object-right origin-right scale-125 lg:scale-150 translate-x-4 lg:translate-x-12 transform transition-transform duration-700 pointer-events-auto hover:scale-[1.3] lg:hover:scale-[1.55] drop-shadow-[0_25px_20px_rgba(1,90,133,0.35)] saturate-110"
            />
          </div>
        </div>
      </section>

      {/* Sección Secundaria con Fondo Verde */}
<section className="w-full bg-brand-green/10 py-24 relative overflow-hidden">
  {/* Este es el contenedor maestro que se alinea con el Navbar (1280px) */}
  <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
    
    {/* BLOQUE DE TEXTO: Se mantiene en max-w-4xl para que queden solo 2 líneas */}
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
      <p className="text-lg md:text-[42px] font-semibold md:leading-[1.2] text-brand-blue mb-10">
        Nuestros quesos y lácteos son elaborados con la leche más fresca.
      </p>
    </div>
    
    {/* ─── EL SLIDER SE MUEVE AQUÍ AFUERA ─── */}
    {/* Al estar aquí, aprovecha el max-w-7xl completo del contenedor superior */}
    <ProductSlider />

  </div>
</section>
    </main>
  );
}