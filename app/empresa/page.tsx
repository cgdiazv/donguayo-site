import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  TrendingUp, 
  Award, 
  HeartHandshake, 
  CheckCircle2, 
  ArrowRight,
  Milk
} from "lucide-react";

export default function EmpresaPage() {
  return (
    <main className="min-h-screen bg-brand-white flex flex-col overflow-x-hidden pb-24">
      
      {/* 1. HERO BANNER PRINCIPAL */}
      <section 
        className="w-full relative bg-cover bg-center bg-no-repeat py-20 md:py-28 px-6 md:px-12 text-brand-white"
        style={{ backgroundImage: "url('/campo-vacas.webp')" }}
      >
        {/* Overlay sutil para resaltar la imagen del campo */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/65 via-brand-blue/35 to-black/30 z-0" />

        <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
          
          <span className="inline-flex items-center gap-2 bg-brand-white/15 text-brand-white font-black text-xs md:text-sm uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-brand-white/20 shadow-sm backdrop-blur-md">
            Tradición Familiar desde 1989
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] mb-6 drop-shadow-md text-center">
            NUESTRA HISTORIA
          </h1>

          <p className="text-xl md:text-2xl font-bold italic text-brand-white/90 max-w-2xl leading-relaxed mb-8 text-center">
            &ldquo;El sabor puro de la tradición, desde 1989 a tu mesa.&rdquo;
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            <Link 
              href="/productos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand-white px-8 py-4 text-base font-black uppercase tracking-wider text-brand-blue transition-all duration-200 hover:bg-brand-white/20 hover:text-brand-white border border-transparent hover:border-brand-white/40 backdrop-blur-md shadow-lg group text-center"
            >
              <span>Ver Productos</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link 
              href="/contactenos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand-white/10 hover:bg-brand-white/20 border border-brand-white/30 px-8 py-4 text-base font-bold uppercase tracking-wider text-brand-white transition-all duration-200 backdrop-blur-sm text-center"
            >
              <span>Contáctenos</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 2. DECLARACIÓN DE MANIFIESTO */}
      <section className="w-full bg-brand-green/10 py-16 px-6 md:px-12 border-y border-brand-green/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xs font-black uppercase tracking-widest text-brand-blue/70 mb-3">
            El Compromiso Don Guayo
          </h2>
          <p className="text-2xl md:text-3xl font-black text-brand-blue leading-snug">
            &ldquo;Llevar a la mesa de los hogares hondureños el sabor auténtico, puro y fresco del campo, producido con el esmero y la dedicación de una verdadera tradición familiar.&rdquo;
          </p>
        </div>
      </section>

      {/* 3. LÍNEA DE TIEMPO INTERACTIVA (TIMELINE) CON PRODUCTOS ARTÍSTICOS */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-12 pt-20 relative overflow-hidden">
        
        {/* ELEMENTOS ARTÍSTICOS FLOTANTES DE FONDO (SIN CORTES) */}
        <div className="hidden lg:block absolute top-12 right-6 w-56 h-56 opacity-15 pointer-events-none select-none transform rotate-12 z-0">
          <Image src="/crema-especial.webp" alt="Decorativo Crema" fill className="object-contain" />
        </div>
        <div className="hidden lg:block absolute top-1/2 left-6 w-56 h-56 opacity-15 pointer-events-none select-none transform -rotate-12 z-0">
          <Image src="/cuajada-fresca.webp" alt="Decorativo Cuajada" fill className="object-contain" />
        </div>
        <div className="hidden lg:block absolute bottom-12 right-6 w-56 h-56 opacity-15 pointer-events-none select-none transform rotate-45 z-0">
          <Image src="/queso-crema.webp" alt="Decorativo Queso" fill className="object-contain" />
        </div>

        <div className="text-center mb-16 relative z-10">
          <span className="bg-brand-blue/10 text-brand-blue font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full">
            Evolución & Pasión
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-brand-blue uppercase tracking-tight mt-3">
            HITOS DE NUESTRA HISTORIA
          </h2>
          <p className="text-base text-brand-blue/75 font-medium max-w-xl mx-auto mt-3">
            Un recorrido de esfuerzo, calidad e innovación constante manteniendo siempre intacta nuestra esencia artesanal.
          </p>
        </div>

        {/* TIMELINE ITEMS */}
        <div className="relative border-l-4 border-brand-blue/20 ml-4 md:ml-32 space-y-12 pl-6 md:pl-12 z-10">
          
          {/* HITO 1: 1989 */}
          <div className="relative group">
            {/* Círculo indicador */}
            <div className="absolute -left-[31px] md:-left-[55px] top-0 w-12 h-12 rounded-2xl bg-brand-blue text-brand-white flex items-center justify-center font-black text-lg shadow-lg group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-brand-blue transition-all duration-300">
              01
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl border border-brand-blue/10 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                <div className="md:col-span-8 flex flex-col">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="text-2xl font-black text-brand-blue tracking-tight">
                      1989 — El Origen (Nace una Tradición)
                    </span>
                    <span className="bg-brand-blue/10 text-brand-blue text-xs font-black uppercase px-3 py-1 rounded-full">
                      Procesos Artesanales
                    </span>
                  </div>
                  
                  <blockquote className="text-base md:text-lg font-bold text-brand-blue/90 italic leading-relaxed mb-4 border-l-2 border-brand-blue/30 pl-4">
                    &ldquo;Lácteos Don Guayo nació en 1989 con un propósito claro: llevar a la mesa de los hogares hondureños el sabor auténtico, puro y fresco del campo, producido con el esmero y la dedicación de una verdadera tradición familiar.&rdquo;
                  </blockquote>
                  
                  <p className="text-sm text-brand-blue/75 font-medium leading-relaxed">
                    Desde nuestros primeros días, la pasión por los procesos artesanales y el respeto innegociable por las recetas tradicionales le dieron vida a nuestra marca, asegurando que cada corte de queso y cada porción de crema conservaran la verdadera esencia del campo.
                  </p>
                </div>

                {/* Fotografía Artística Flotante del Producto */}
                <div className="md:col-span-4 flex justify-center items-center relative py-4">
                  <div className="relative w-36 h-36 md:w-44 md:h-44 transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 drop-shadow-[0_20px_20px_rgba(1,90,133,0.22)]">
                    <Image 
                      src="/crema-especial.webp" 
                      alt="Crema Don Guayo Origen" 
                      fill 
                      className="object-contain" 
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* HITO 2: COMPROMISO Y CALIDAD */}
          <div className="relative group">
            {/* Círculo indicador */}
            <div className="absolute -left-[31px] md:-left-[55px] top-0 w-12 h-12 rounded-2xl bg-brand-blue text-brand-white flex items-center justify-center font-black text-lg shadow-lg group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-brand-blue transition-all duration-300">
              02
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl border border-brand-blue/10 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                <div className="md:col-span-8 flex flex-col">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="text-2xl font-black text-brand-blue tracking-tight">
                      Calidad e Higiene — El Corazón del Proceso
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-black uppercase px-3 py-1 rounded-full flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Materia Prima 100% Fresca
                    </span>
                  </div>

                  <blockquote className="text-base md:text-lg font-bold text-brand-blue/90 italic leading-relaxed mb-4 border-l-2 border-brand-blue/30 pl-4">
                    &ldquo;Desde nuestros primeros lotes, nos impusimos un estándar: no comprometer jamás la calidad. Combinamos técnicas artesanales con rigurosos controles de higiene y selección de materia prima 100% fresca de productores locales.&rdquo;
                  </blockquote>

                  <p className="text-sm text-brand-blue/75 font-medium leading-relaxed">
                    Para nosotros, transmitir confianza es fundamental. Nuestro queso crema, cuajada fresca y cremas son elaborados bajo estrictas normas higiénicas y sanitarias, trabajando mano a mano con productores ganaderos de nuestra región.
                  </p>
                </div>

                {/* Fotografía Artística Flotante del Producto */}
                <div className="md:col-span-4 flex justify-center items-center relative py-4">
                  <div className="relative w-36 h-36 md:w-44 md:h-44 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 drop-shadow-[0_20px_20px_rgba(16,124,65,0.22)]">
                    <Image 
                      src="/cuajada-fresca.webp" 
                      alt="Cuajada Fresca Don Guayo" 
                      fill 
                      className="object-contain" 
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* HITO 3: CRECIMIENTO */}
          <div className="relative group">
            {/* Círculo indicador */}
            <div className="absolute -left-[31px] md:-left-[55px] top-0 w-12 h-12 rounded-2xl bg-brand-blue text-brand-white flex items-center justify-center font-black text-lg shadow-lg group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-brand-blue transition-all duration-300">
              03
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl border border-brand-blue/10 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                <div className="md:col-span-8 flex flex-col">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="text-2xl font-black text-brand-blue tracking-tight">
                      Crecimiento & Modernización — Evolución sin Perder la Esencia
                    </span>
                    <span className="bg-brand-blue/10 text-brand-blue text-xs font-black uppercase px-3 py-1 rounded-full flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5" />
                      Modernización & Cercanía
                    </span>
                  </div>

                  <blockquote className="text-base md:text-lg font-bold text-brand-blue/90 italic leading-relaxed mb-4 border-l-2 border-brand-blue/30 pl-4">
                    &ldquo;Con el paso de los años y la confianza de nuestros clientes, fuimos consolidando nuestra presencia, ampliando nuestra variedad de productos e integrando nuevas herramientas para estar más cerca de cada familia.&rdquo;
                  </blockquote>

                  <p className="text-sm text-brand-blue/75 font-medium leading-relaxed">
                    Nos adaptamos a los nuevos tiempos conectando a través de plataformas digitales y optimizando nuestra cadena de distribución en San Pedro Sula y la región, todo sin alterar la receta ni el cuidado artesanal que nos distingue.
                  </p>
                </div>

                {/* Fotografía Artística Flotante del Producto */}
                <div className="md:col-span-4 flex justify-center items-center relative py-4">
                  <div className="relative w-36 h-36 md:w-44 md:h-44 transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 drop-shadow-[0_20px_20px_rgba(1,90,133,0.22)]">
                    <Image 
                      src="/queso-crema.webp" 
                      alt="Queso Crema Blanco Don Guayo" 
                      fill 
                      className="object-contain" 
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* HITO 4: HOY */}
          <div className="relative group">
            {/* Círculo indicador */}
            <div className="absolute -left-[31px] md:-left-[55px] top-0 w-12 h-12 rounded-2xl bg-brand-blue text-brand-white flex items-center justify-center font-black text-lg shadow-lg group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-brand-blue transition-all duration-300">
              04
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl border border-brand-blue/10 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                <div className="md:col-span-8 flex flex-col">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="text-2xl font-black text-brand-blue tracking-tight">
                      Hoy — Nuestra Misión Actual
                    </span>
                    <span className="bg-amber-100 text-amber-900 text-xs font-black uppercase px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-600" />
                      Orgullo Catracho
                    </span>
                  </div>

                  <blockquote className="text-base md:text-lg font-bold text-brand-blue/90 italic leading-relaxed mb-4 border-l-2 border-brand-blue/30 pl-4">
                    &ldquo;Hoy, Lácteos Don Guayo sigue impulsado por la misma visión de 1989: ser el acompañante infaltable en el desayuno y la cena catracha, garantizando frescura, pureza y el sabor de nuestra tierra en cada producto.&rdquo;
                  </blockquote>

                  <p className="text-sm text-brand-blue/75 font-medium leading-relaxed">
                    Desde la primera baleada de la mañana hasta la cena en familia, nos llena de orgullo saber que formamos parte de los momentos más sabrosos en la mesa de miles de hogares.
                  </p>
                </div>

                {/* Fotografía Artística Flotante del Producto */}
                <div className="md:col-span-4 flex justify-center items-center relative py-4">
                  <div className="relative w-36 h-36 md:w-44 md:h-44 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 drop-shadow-[0_20px_20px_rgba(234,179,8,0.22)]">
                    <Image 
                      src="/queso-crema-con-chile.webp" 
                      alt="Queso con Chile Don Guayo" 
                      fill 
                      className="object-contain" 
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. PILARES FUNDAMENTALES */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-12 pt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-brand-blue uppercase tracking-tight">
            NUESTROS PILARES FUNDAMENTALES
          </h2>
          <p className="text-sm text-brand-blue/75 font-medium max-w-lg mx-auto mt-2">
            Principios que guían cada uno de nuestros procesos desde hace más de 35 años.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-3xl border border-brand-blue/10 shadow-md text-center flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-brand-blue text-brand-white flex items-center justify-center shadow-md">
              <Milk className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-black text-brand-blue uppercase tracking-tight">
              Materia Prima 100% Fresca
            </h3>
            <p className="text-xs text-brand-blue/75 font-medium leading-relaxed">
              Seleccionamos la mejor leche pura recolectada diariamente de productores ganaderos locales.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-brand-blue/10 shadow-md text-center flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-brand-blue text-brand-white flex items-center justify-center shadow-md">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-black text-brand-blue uppercase tracking-tight">
              Control e Higiene
            </h3>
            <p className="text-xs text-brand-blue/75 font-medium leading-relaxed">
              Estándares rigurosos que garantizan productos seguros, limpios y saludables para tu familia.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-brand-blue/10 shadow-md text-center flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-brand-blue text-brand-white flex items-center justify-center shadow-md">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-black text-brand-blue uppercase tracking-tight">
              Tradición Familiar
            </h3>
            <p className="text-xs text-brand-blue/75 font-medium leading-relaxed">
              Elaborados con la dedicación, pasión y calidez de una verdadera receta tradicional.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-brand-blue/10 shadow-md text-center flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-brand-blue text-brand-white flex items-center justify-center shadow-md">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-black text-brand-blue uppercase tracking-tight">
              Sabor Inconfundible
            </h3>
            <p className="text-xs text-brand-blue/75 font-medium leading-relaxed">
              El toque rico, cremoso y autóctono que convierte cada tiempo de comida en un festín.
            </p>
          </div>

        </div>
      </section>

      {/* 5. CALL TO ACTION LLAMADO A LA ACCIÓN */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-12 pt-24">
        <div className="bg-brand-blue text-brand-white p-8 md:p-14 rounded-3xl text-center relative overflow-hidden shadow-2xl flex flex-col items-center">
          <span className="bg-brand-white/10 text-brand-white font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Disfruta la Frescura
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-4 max-w-2xl">
            LLEVA EL VERDADERO SABOR DEL CAMPO A TU MESA
          </h2>
          <p className="text-sm md:text-base text-brand-white/80 font-medium max-w-xl mb-8">
            Conoce nuestra variedad de quesos, cuajadas y cremas o contáctanos para realizar tus pedidos directamente en San Pedro Sula.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            <Link 
              href="/productos" 
              className="w-full sm:w-auto text-center bg-brand-white text-brand-blue hover:bg-brand-white/20 hover:text-brand-white border border-transparent hover:border-brand-white/40 backdrop-blur-md font-black text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-200 shadow-lg"
            >
              Explorar Productos
            </Link>
            <Link 
              href="/contactenos" 
              className="w-full sm:w-auto text-center bg-brand-white/10 hover:bg-brand-white/20 border border-brand-white/30 text-brand-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-colors"
            >
              Hacer un Pedido
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}