import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-cream">
      <Navbar />
      
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-16">
        {/* Título Estilo Tillamook */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-brand-blue uppercase leading-[0.8] tracking-[-0.05em] text-left">
          ELABORADOS CON <br />
          LECHE 100% FRESCA
        </h1>

        {/* Botón con hover normal */}
        <div className="mt-12 flex justify-start">
          <Link 
            href="/productos" 
            className="inline-block rounded-full bg-brand-blue px-10 py-4 text-lg font-bold uppercase tracking-wider text-brand-cream transition-colors duration-200 hover:bg-[#fffcf0] hover:text-brand-blue shadow-md"
          >
            Ver Productos
          </Link>
        </div>
      </section>
    </main>
  );
}