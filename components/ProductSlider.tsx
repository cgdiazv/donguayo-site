"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface SlideItem {
  id: number;
  title: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  bgColor: string;
}

const SLIDES: SlideItem[] = [
  {
    id: 1,
    title: "QUESO CREMA\nCON CHILE",
    buttonText: "Ver Detalles del Queso",
    imageSrc: "/queso-crema-con-chile.webp", 
    imageAlt: "Queso Cream con Chile Don Guayo",
    bgColor: "rgba(16, 124, 65, 0.1)", 
  },
  {
    id: 2,
    title: "CUAJADA\nFRESCA",
    buttonText: "Explorar Cuajada",
    imageSrc: "/cuajada-fresca.webp", 
    imageAlt: "Cuajada Tradicional",
    bgColor: "#cbd0c2", 
  },
  {
    id: 3,
    title: "CREMA\nESPECIAL",
    buttonText: "Ver Línea Cremosa",
    imageSrc: "/crema-especial.webp",
    imageAlt: "Crema Pura Don Guayo",
    bgColor: "rgba(1, 90, 133, 0.08)", 
  },
  {
    id: 4,
    title: "QUESO\nCREMA BLANCO",
    buttonText: "Descubrir Más",
    imageSrc: "/queso-crema.webp",
    imageAlt: "Queso Crema Don Guayo",
    bgColor: "#cbd0c2", 
  },
];

export default function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // Estado para controlar la pausa táctil/mouse

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  // LÓGICA DE AUTOPLAY AUTOMÁTICO
  useEffect(() => {
    // Si el usuario tiene el mouse encima, no hacemos nada
    if (isPaused) return;

    // Configura el cambio automático cada 3000ms (3 segundos)
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    // Limpieza del temporizador al desmontar o cambiar de estado para evitar fugas de memoria
    return () => clearInterval(interval);
  }, [isPaused, currentIndex]); // Se dispara cada vez que cambia el índice o el estado de pausa

  const currentSlide = SLIDES[currentIndex];

  return (
    <div className="w-full mt-16 max-w-7xl mx-auto px-0">
      {/* Añadimos onMouseEnter y onMouseLeave para pausar el slider al interactuar 
        y reanudarlo al quitar el cursor de la sección.
      */}
      <div 
        className="rounded-[32px] grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[550px] md:h-[650px] relative p-8 md:p-0 overflow-visible transition-colors duration-500 ease-in-out"
        style={{ backgroundColor: currentSlide.bgColor }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* LADO IZQUIERDO: Imagen Asimétrica */}
        <div className="col-span-1 md:col-span-6 relative w-full h-[400px] md:h-full flex items-end justify-center overflow-visible">
          <div className="relative w-full h-[115%] md:h-[125%] bottom-0 transform translate-y-[5%] md:translate-y-[-5%] transition-all duration-500">
            <Image
              src={currentSlide.imageSrc}
              alt={currentSlide.imageAlt}
              fill
              priority
              className="object-contain object-bottom drop-shadow-[0_30px_25px_rgba(1,90,133,0.22)] scale-110 md:scale-115"
            />
          </div>
        </div>

        {/* LADO DERECHO: Textos y Controles Centrados */}
        <div className="col-span-1 md:col-span-6 flex flex-col items-center text-center px-6 md:px-12 z-10 gap-8">
          
          {/* Título Monumental en Mayúsculas Centrado */}
          <h3 className="text-4xl sm:text-5xl md:text-[58px] font-black text-brand-blue leading-[0.95] tracking-tight uppercase whitespace-pre-line">
            {currentSlide.title}
          </h3>

          {/* Botón Estilo Píldora Ancha Centrado */}
          <button className="bg-brand-blue text-[#fffcf0] text-xs md:text-sm font-black uppercase tracking-wider px-10 py-4 rounded-full hover:bg-brand-accent hover:text-brand-blue transition-colors duration-200 shadow-md cursor-pointer">
            {currentSlide.buttonText}
          </button>

          {/* Paginador e Indicador Centrado */}
          <div className="flex items-center gap-4 text-brand-blue select-none">
            <button 
              onClick={handlePrev}
              className="w-8 h-8 rounded-full bg-brand-blue text-[#fffcf0] flex items-center justify-center font-bold text-sm hover:bg-brand-accent transition-colors cursor-pointer"
              aria-label="Anterior"
            >
              ❮
            </button>
            
            <span className="font-black text-sm tracking-widest min-w-[40px] text-center">
              {currentIndex + 1} / {SLIDES.length}
            </span>

            <button 
              onClick={handleNext}
              className="w-8 h-8 rounded-full bg-brand-blue text-[#fffcf0] flex items-center justify-center font-bold text-sm hover:bg-brand-accent transition-colors cursor-pointer"
              aria-label="Siguiente"
            >
              ❯
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}