"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevenir scroll cuando el drawer está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header className="w-full bg-brand-blue shadow-md relative z-30">
        {/* Navbar Principal */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="transition-transform hover:scale-105 inline-block">
            <Image 
              src="/logo.webp" 
              alt="Lácteos Don Guayo" 
              width={160} 
              height={80} 
              priority
              className="object-contain"
            />
          </Link>

          {/* Enlaces del Menú Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-brand-white font-bold text-sm uppercase tracking-wider">
            <Link href="/empresa" className="hover:opacity-80 transition-opacity relative group py-2">
              Empresa
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-white/80 transition-all group-hover:w-full" />
            </Link>
            <Link href="/productos" className="hover:opacity-80 transition-opacity relative group py-2">
              Productos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-white/80 transition-all group-hover:w-full" />
            </Link>
            <Link href="/recetas" className="hover:opacity-80 transition-opacity relative group py-2">
              Recetas
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-white/80 transition-all group-hover:w-full" />
            </Link>
            <Link href="/contactenos" className="hover:opacity-80 transition-opacity relative group py-2">
              Contáctenos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-white/80 transition-all group-hover:w-full" />
            </Link>
          </nav>

          {/* Botón Menú Mobile (Hamburguesa) */}
          <button 
            className="md:hidden text-brand-white p-2 focus:outline-none"
            onClick={() => setIsOpen(true)}
            aria-label="Abrir menú"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Overlay del Drawer */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Menú Drawer Mobile */}
      <div 
        className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-brand-blue z-50 md:hidden transform transition-transform duration-300 ease-in-out flex flex-col shadow-2xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header del Drawer */}
        <div className="px-6 py-5 flex items-center justify-between border-b border-brand-white/10">
          <Image 
            src="/logo.webp" 
            alt="Lácteos Don Guayo" 
            width={120} 
            height={60} 
            className="object-contain"
          />
          <button 
            className="text-brand-white p-2 focus:outline-none bg-brand-white/5 rounded-full hover:bg-brand-white/10 transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Links del Drawer */}
        <div className="p-6 flex flex-col gap-6 text-brand-white font-bold text-lg uppercase tracking-wider overflow-y-auto">
          <Link href="/empresa" className="hover:opacity-80 transition-opacity border-b border-brand-white/10 pb-4" onClick={() => setIsOpen(false)}>
            Empresa
          </Link>
          <Link href="/productos" className="hover:opacity-80 transition-opacity border-b border-brand-white/10 pb-4" onClick={() => setIsOpen(false)}>
            Productos
          </Link>
          <Link href="/recetas" className="hover:opacity-80 transition-opacity border-b border-brand-white/10 pb-4" onClick={() => setIsOpen(false)}>
            Recetas
          </Link>
          <Link href="/contactenos" className="hover:opacity-80 transition-opacity" onClick={() => setIsOpen(false)}>
            Contáctenos
          </Link>
        </div>
      </div>
    </>
  );
}
