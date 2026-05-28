export default function EmpresaPage() {
  return (
    <main className="min-h-[70vh] bg-brand-white flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        {/* Ícono de construcción (usando SVG) */}
        <div className="text-brand-green mb-6 bg-brand-green/10 p-4 rounded-full">
          <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black text-brand-blue uppercase tracking-tight mb-4">
          Página en Construcción
        </h1>
        
        <p className="text-lg text-brand-blue/80 mb-8 font-medium">
          Estamos preparando algo muy especial. Muy pronto podrás conocer toda la historia y tradición detrás de Lácteos Don Guayo.
        </p>

        <a 
          href="/" 
          className="inline-block rounded-full bg-brand-blue px-8 py-3 text-base font-bold uppercase tracking-wider text-brand-white transition-colors duration-200 hover:bg-brand-accent hover:text-brand-blue shadow-md"
        >
          Volver al Inicio
        </a>
      </div>
    </main>
  );
}