import Image from "next/image";

export default function UnderConstruction() {
  return (
    <main className="min-h-screen bg-brand-cream flex flex-col items-center justify-between p-6 text-center select-none">
      
      {/* Contenedor invisible para centrar el contenido verticalmente */}
      <div className="h-12" />

      {/* Bloque Central Principal */}
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Logo de la Marca */}
        <div className="mb-12">
          <Image 
            src="/logo.webp" 
            alt="Lácteos Don Guayo" 
            width={180} 
            height={90} 
            priority
            className="object-contain"
          />
        </div>

        {/* Título Monumental Estilo Tillamook (Usando text-brand-blue #015a85) */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-brand-blue uppercase leading-[0.85] tracking-[-0.04em] mb-8">
          ESTAMOS <br />
          EN CONSTRUCCIÓN
        </h1>

        {/* Mensaje Informativo */}
        <p className="text-brand-blue text-base md:text-lg font-semibold max-w-lg leading-relaxed opacity-90 px-4">
          Estamos preparando nuestra nueva experiencia digital para llevarte 
          la frescura de nuestros productos de una manera más fácil y{" "}
          {/* Usamos el Amarillo de Acento aquí para destacar */}
          <span className="bg-brand-accent px-2 py-0.5 rounded text-brand-blue">
            rápida.
          </span>{" "}
          ¡Nos vemos muy pronto!
        </p>
      </div>

      {/* Footer simple usando tu nuevo color Secundario (text-brand-green) */}
      <div className="text-brand-green/80 text-xs font-bold tracking-wider uppercase pt-8">
        © {new Date().getFullYear()} Lácteos Don Guayo. Todos los derechos reservados.
      </div>

    </main>
  );
}