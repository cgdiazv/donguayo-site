"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { 
  Search, 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Thermometer, 
  Utensils, 
  BookOpen, 
  Phone, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Milk, 
  Layers, 
  Flame, 
  Package, 
  Truck, 
  ChefHat,
  Award,
  Heart
} from "lucide-react";

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: "quesos-frescos" | "linea-cremosa" | "especialidades";
  categoryLabel: string;
  badge: string;
  badgeType: "picante" | "tradicion" | "crema" | "queso";
  imageSrc: string;
  imageAlt: string;
  bgColor: string;
  accentColor: string;
  description: string;
  longDescription: string;
  presentation: string;
  packaging: string;
  texture: string;
  flavorProfile: string;
  ingredients: string[];
  idealFor: string[];
  storageTemp: string;
  shelfLife: string;
  nutrition: {
    servingSize: string;
    calories: string;
    protein: string;
    totalFat: string;
    saturatedFat: string;
    carbs: string;
    sodium: string;
    calcium: string;
  };
  recipeTag: string;
  whatsappMessage: string;
}

const PRODUCTS: Product[] = [
  {
    id: "queso-crema-con-chile",
    name: "Queso Crema con Chile",
    subtitle: "El balance perfecto entre cremosidad artesanal y picor catracho",
    category: "especialidades",
    categoryLabel: "Especialidad con Chile",
    badge: "Favorito de la Casa",
    badgeType: "picante",
    imageSrc: "/queso-crema-con-chile.webp",
    imageAlt: "Queso Crema con Chile Lácteos Don Guayo",
    bgColor: "rgba(234, 88, 12, 0.08)",
    accentColor: "#ea580c",
    description: "Queso crema de leche entera fresca mezclado con una selección exclusiva de chiles criollos finamente picados que aportan una explosión de sabor inolvidable.",
    longDescription: "Nuestro Queso Crema con Chile es un orgullo de la tradición Don Guayo. Elaborado con leche 100% de vaca pasteurizada sin conservantes químicos añadidos, fusiona la textura untuosa y tersa del queso crema blanco con un toque vivo y crujiente de chiles naturales seleccionados a mano. Ideal para quienes disfrutan de los sabores audaces y la calidez de la cocina hondureña.",
    presentation: "1 lb (16 oz / 454 g)",
    packaging: "Bloque empacado al vacío para máxima frescura",
    texture: "Cremosa, untable y con trocitos crocantes de chile fresco",
    flavorProfile: "Lácteo cremoso suave con retrogusto vibrante y picor equilibrado",
    ingredients: [
      "Leche entera de vaca 100% pura y fresca",
      "Chiles frescos seleccionados finamente troceados",
      "Cuajo natural",
      "Sal pura de mesa yodada",
      "Cultivos lácticos naturales"
    ],
    idealFor: [
      "Quesadillas y baleadas gourmet",
      "Nachos supremos con frijoles y carne",
      "Dip cremoso para totopos y botanas",
      "Acompañamiento de carnes asadas y parrilladas"
    ],
    storageTemp: "Refrigerar permanentemente entre 2°C y 4°C",
    shelfLife: "30 días refrigerado (consumir antes de 7 días tras abrir)",
    nutrition: {
      servingSize: "30 g (aprox. 2 cdas)",
      calories: "95 kcal",
      protein: "5.2 g",
      totalFat: "7.8 g",
      saturatedFat: "4.8 g",
      carbs: "1.2 g",
      sodium: "190 mg",
      calcium: "16% VD"
    },
    recipeTag: "Queso con Chile",
    whatsappMessage: "Hola Don Guayo! Me gustaría ordenar Queso Crema con Chile de 1 lb."
  },
  {
    id: "cuajada-fresca",
    name: "Cuajada Fresca Tradicional",
    subtitle: "El alma del desayuno hondureño elaborada al estilo de campo",
    category: "quesos-frescos",
    categoryLabel: "Quesos Frescos",
    badge: "100% Artesanal",
    badgeType: "tradicion",
    imageSrc: "/cuajada-fresca.webp",
    imageAlt: "Cuajada Fresca Tradicional Lácteos Don Guayo",
    bgColor: "rgba(16, 124, 65, 0.08)",
    accentColor: "#107c41",
    description: "Cuajada artesanal de consistencia tierna y quebradiza, cuajada a mano con la leche más pura del día y la medida perfecta de sal.",
    longDescription: "La Cuajada Fresca Don Guayo representa más de 35 años de experiencia ganadera. Cada pieza es elaborada respetando los tiempos naturales de reposo y prensado liviano tradicional, conservando toda la humedad nutritiva y el inconfundible aroma a rancho. Es suave al paladar, desmoronable y el compañero irreemplazable de las tortillas recién bajadas del comal.",
    presentation: "1 lb (16 oz / 454 g)",
    packaging: "Porción redonda tradicional termosellada",
    texture: "Quebradiza, tierna, húmeda y suave al tacto",
    flavorProfile: "Lácteo fresco, suavemente salado con notas dulces de leche pura",
    ingredients: [
      "Leche 100% fresca de vaca pasteurizada",
      "Cuajo natural",
      "Sal yodada",
      "Sin aditivos ni colorantes artificiales"
    ],
    idealFor: [
      "Desayuno y cena catracha con frijoles y plátano",
      "Pupusas y empanadas artesanales",
      "Ensaladas campesinas con tomate y aguacate",
      "Tortillas calientes con mantequilla y cuajada"
    ],
    storageTemp: "Mantener en refrigeración de 2°C a 4°C",
    shelfLife: "25 días refrigerado (conservar en suero natural o recipiente hermético)",
    nutrition: {
      servingSize: "30 g (aprox. 1 porción)",
      calories: "85 kcal",
      protein: "6.0 g",
      totalFat: "6.5 g",
      saturatedFat: "4.0 g",
      carbs: "0.8 g",
      sodium: "160 mg",
      calcium: "18% VD"
    },
    recipeTag: "Cuajada Fresca",
    whatsappMessage: "Hola Don Guayo! Me gustaría hacer un pedido de Cuajada Fresca Tradicional."
  },
  {
    id: "crema-especial",
    name: "Crema Especial Don Guayo",
    subtitle: "Rica, densa y aterciopelada: la mantequilla crema por excelencia",
    category: "linea-cremosa",
    categoryLabel: "Línea Cremosa",
    badge: "Sabor Inconfundible",
    badgeType: "crema",
    imageSrc: "/crema-especial.webp",
    imageAlt: "Crema Especial Pura Lácteos Don Guayo",
    bgColor: "rgba(1, 90, 133, 0.08)",
    accentColor: "#015a85",
    description: "Crema pura de leche de vaca con una consistencia espesa inigualable y un toque ligeramente ácido tradicional que baña cualquier platillo.",
    longDescription: "Nuestra Crema Especial Don Guayo (conocida y amada en Honduras como mantequilla crema) es obtenida mediante el descremado natural de leche fresca de primera calidad. Posee un cuerpo espeso y sedoso que no se diluye sobre la comida caliente. Es el ingrediente legendario que le da vida a las baleadas, sopas de frijoles, plátanos maduros y enchiladas catrachas.",
    presentation: "1 lb (16 oz / 454 g)",
    packaging: "Bolsa tradicional hermética de grado alimenticio",
    texture: "Espesa, aterciopelada, sedosa y sumamente untuosa",
    flavorProfile: "Rico sabor a grasa natural de leche con el balance ácido perfecto",
    ingredients: [
      "Crema pura de leche de vaca pasteurizada",
      "Cultivos lácticos seleccionados",
      "Pizca de sal yodada",
      "Cero almidones o grasas vegetales sustitutas"
    ],
    idealFor: [
      "Baleadas sencillas y con todo",
      "Frijoles refritos con plátano frito y huevo",
      "Enchiladas catrachas y tacos dorados",
      "Pastas cremosas y aderezos caseros"
    ],
    storageTemp: "Refrigerar permanentemente entre 2°C y 4°C (No congelar)",
    shelfLife: "35 días refrigerado (mantener bien cerrada la bolsa)",
    nutrition: {
      servingSize: "20 g (1 cucharada sopera)",
      calories: "70 kcal",
      protein: "1.5 g",
      totalFat: "7.0 g",
      saturatedFat: "4.5 g",
      carbs: "1.0 g",
      sodium: "45 mg",
      calcium: "8% VD"
    },
    recipeTag: "Crema Don Guayo",
    whatsappMessage: "Hola Don Guayo! Deseo comprar Crema Especial Don Guayo de 1 lb."
  },
  {
    id: "queso-crema-blanco",
    name: "Queso Crema Blanco",
    subtitle: "Puro, suave y versátil para tus recetas favoritas del día a día",
    category: "quesos-frescos",
    categoryLabel: "Quesos Frescos",
    badge: "Clásico Familiar",
    badgeType: "queso",
    imageSrc: "/queso-crema.webp",
    imageAlt: "Queso Crema Blanco Lácteos Don Guayo",
    bgColor: "rgba(202, 138, 4, 0.08)",
    accentColor: "#ca8a04",
    description: "Queso crema tradicional de consistencia sedosa y delicada, con el punto exacto de sal para desmoronar, untar o gratinar sutilmente.",
    longDescription: "El Queso Crema Blanco Don Guayo es un clásico en la alacena hondureña. Elaborado meticulosamente a base de leche entera, brinda un aroma lácteo limpio y una textura que se corta con facilidad y se desmorona suavemente sobre la comida recién preparada. Su versatilidad lo hace indispensable para desayunos nutritivos, tostadas, bocadillos o para enriquecer salsas y dips.",
    presentation: "1 lb (16 oz / 454 g)",
    packaging: "Bloque tradicional empacado al vacío para máxima higiene",
    texture: "Firme pero suave, maleable y ligeramente untable",
    flavorProfile: "Lácteo cremoso balanceado, fresco y de sal moderada",
    ingredients: [
      "Leche 100% pura entera de vaca pasteurizada",
      "Cuajo natural de alta pureza",
      "Sal yodada de mesa",
      "Cultivos lácticos lácteos activos"
    ],
    idealFor: [
      "Espolvoreado sobre frijoles refritos y tostadas",
      "Relleno de flautas, tacos dorados y enchiladas",
      "Dips de queso con ajo asado y hierbas finas",
      "Sándwiches calientes y tostadas de aguacate"
    ],
    storageTemp: "Conservar en refrigeración de 2°C a 4°C",
    shelfLife: "30 días refrigerado",
    nutrition: {
      servingSize: "30 g (aprox. 2 cdas)",
      calories: "90 kcal",
      protein: "5.5 g",
      totalFat: "7.2 g",
      saturatedFat: "4.5 g",
      carbs: "1.0 g",
      sodium: "175 mg",
      calcium: "17% VD"
    },
    recipeTag: "Queso Crema Blanco",
    whatsappMessage: "Hola Don Guayo! Me interesa hacer un pedido de Queso Crema Blanco."
  }
];

const CATEGORIES = [
  { id: "todos", label: "Todos los Productos" },
  { id: "quesos-frescos", label: "Quesos Frescos" },
  { id: "linea-cremosa", label: "Línea Cremosa" },
  { id: "especialidades", label: "Especialidades con Chile" }
];

const CONSERVATION_TIPS = [
  {
    number: "1",
    title: "Recipientes Herméticos",
    description: "Una vez abierto el empaque original, guarda el queso o cuajada en un táper de vidrio o plástico con tapa hermética para evitar que absorba olores.",
    imageSrc: "/recetas/receta-dip-queso-crema.png"
  },
  {
    number: "2",
    title: "Cubiertos Limpios y Secos",
    description: "Usa siempre un cuchillo o cuchara limpio al momento de servir la crema o cortar el queso. La humedad ajena o restos de comida aceleran la fermentación.",
    imageSrc: "/recetas/receta-baleadas-especiales.png"
  },
  {
    number: "3",
    title: "No Congelar",
    description: "Los lácteos frescos pierden su emulsión natural al congelarse. Consérvalos refrigerados para mantener su cremosidad aterciopelada original.",
    imageSrc: "/recetas/receta-ensalada-cuajada.png"
  },
  {
    number: "4",
    title: "Consumo Oportuno",
    description: "Para disfrutar del punto óptimo de sabor, recomendamos consumir el producto dentro de los 7 días posteriores a la apertura del empaque.",
    imageSrc: "/recetas/receta-nachos-supremos.png"
  }
];

const FAQS = [
  {
    question: "¿Dónde puedo comprar los productos Lácteos Don Guayo?",
    answer: "Nuestros productos están disponibles en los principales supermercados, mercaditos y pulperías aliadas de San Pedro Sula y alrededores. También atendemos pedidos directos con entrega y entregas comerciales a través de nuestro canal de WhatsApp (+504 9699-1325)."
  },
  {
    question: "¿Venden productos al por mayor para restaurantes, cafeterías o taquerías?",
    answer: "¡Sí, totalmente! Brindamos atención especializada a restaurantes, panaderías, cafeterías, negocios de comida típica y distribuidores con precios de mayoreo, abastecimiento constante y entregas refrigeradas programadas en San Pedro Sula."
  },
  {
    question: "¿Sus productos contienen almidones, sueros añadidos o conservantes químicos?",
    answer: "No. En Lácteos Don Guayo mantenemos la pureza desde 1989. Todos nuestros quesos, cuajadas y cremas son 100% de leche fresca de vaca, sin féculas, sin espesantes artificiales y sin grasas vegetales hidrogenadas."
  },
  {
    question: "¿Cuál es la forma correcta de conservar los productos en casa?",
    answer: "Recomendamos mantenerlos siempre en el área más fría del refrigerador (entre 2°C y 4°C). Una vez abierto el empaque original, conserva el producto en un recipiente hermético limpio y utiliza siempre cubiertos limpios y secos para servir, evitando la contaminación cruzada."
  },
  {
    question: "¿Se pueden congelar los quesos o la crema?",
    answer: "No recomendamos congelarlos. La congelación casera altera la estructura del agua y grasa natural en los lácteos frescos, lo que puede romper la textura aterciopelada de la crema y dejar la cuajada con una textura gomosa o arenosa al descongelar."
  }
];

function ProductsContent() {
  const searchParams = useSearchParams();
  const paramCat = searchParams.get("categoria");
  const validParamCat = paramCat && (paramCat === "quesos-frescos" || paramCat === "linea-cremosa" || paramCat === "especialidades") ? paramCat : null;

  const [selectedCategoryState, setSelectedCategoryState] = useState<string | null>(null);
  const selectedCategory = selectedCategoryState ?? validParamCat ?? "todos";

  const initialProductId = searchParams.get("id");
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(() => {
    return initialProductId ? PRODUCTS.find((p) => p.id === initialProductId) ?? null : null;
  });

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Manejar tecla ESC para cerrar modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalProduct(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevenir scroll en body cuando el modal está abierto
  useEffect(() => {
    if (activeModalProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeModalProduct]);

  // Filtrado reactivo de productos
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = 
        selectedCategory === "todos" ? true : product.category === selectedCategory;

      const cleanQuery = searchTerm.toLowerCase().trim();
      const matchesSearch = 
        cleanQuery === "" ||
        product.name.toLowerCase().includes(cleanQuery) ||
        product.subtitle.toLowerCase().includes(cleanQuery) ||
        product.description.toLowerCase().includes(cleanQuery) ||
        product.idealFor.some((item) => item.toLowerCase().includes(cleanQuery)) ||
        product.ingredients.some((ing) => ing.toLowerCase().includes(cleanQuery));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-brand-white flex flex-col overflow-x-hidden">
      
      {/* 1. SECCIÓN HERO PRINCIPAL */}
      <section 
        className="w-full relative bg-cover bg-center bg-no-repeat py-20 md:py-28 px-6 md:px-12 text-brand-white border-b border-brand-white/10"
        style={{ backgroundImage: "url('/campo-vacas.webp')" }}
      >
        {/* Overlay sutil para resaltar la imagen del campo */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/65 via-brand-blue/35 to-black/30 z-0" />

        <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
          
          <span className="inline-flex items-center gap-2 bg-brand-white/15 text-brand-white font-black text-xs md:text-sm uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-brand-white/20 shadow-sm backdrop-blur-md">
            100% Leche Fresca de Vaca · Desde 1989
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] mb-6 drop-shadow-md text-center">
            NUESTROS PRODUCTOS
          </h1>

          <p className="text-xl md:text-2xl font-bold italic text-brand-white/90 max-w-2xl leading-relaxed text-center">
            &ldquo;El auténtico sabor, textura y frescura del campo en tu mesa.&rdquo;
          </p>

        </div>
      </section>

      {/* 2. BARRA DE HERRAMIENTAS: BÚSQUEDA Y FILTROS POR CATEGORÍA */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-12 -mt-7 relative z-20">
        <div className="bg-white rounded-3xl p-4 md:p-6 shadow-xl border border-brand-blue/15 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Buscador Interactivo */}
          <div className="relative w-full md:w-64 lg:w-72 shrink-0">
            <Search className="w-4 h-4 text-brand-blue/50 absolute left-4 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por queso, crema o uso..."
              className="w-full bg-brand-white text-brand-blue placeholder-brand-blue/50 text-xs sm:text-sm font-semibold pl-11 pr-9 py-2.5 sm:py-3 rounded-full border border-brand-blue/15 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-blue/50 hover:text-brand-blue p-1 rounded-full hover:bg-brand-blue/10 transition-colors"
                aria-label="Limpiar búsqueda"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Filtros de Categoría */}
          <div className="flex flex-wrap xl:flex-nowrap items-center justify-center md:justify-end gap-1.5 sm:gap-2 w-full md:w-auto">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count = cat.id === "todos" 
                ? PRODUCTS.length 
                : PRODUCTS.filter((p) => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategoryState(cat.id)}
                  className={`px-3 sm:px-3.5 py-2 rounded-full text-[11px] font-black uppercase tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "bg-brand-blue text-brand-white shadow-md scale-105"
                      : "bg-brand-blue/5 text-brand-blue hover:bg-brand-blue/10 border border-brand-blue/10"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? "bg-brand-white/20 text-brand-white" : "bg-brand-blue/10 text-brand-blue"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. CATÁLOGO PRINCIPAL: TARJETAS MONUMENTALES */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-12 py-16">
        
        {/* Encabezado del listado con conteo */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-brand-blue/10">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-brand-blue uppercase tracking-tight">
              {selectedCategory === "todos" ? "Catálogo Completo" : CATEGORIES.find(c => c.id === selectedCategory)?.label}
            </h2>
            <p className="text-xs md:text-sm text-brand-blue/70 font-semibold mt-1">
              Mostrando {filteredProducts.length} {filteredProducts.length === 1 ? "producto lácteo" : "productos lácteos"}
              {searchTerm && ` para "${searchTerm}"`}
            </p>
          </div>

          {searchTerm && (
            <button 
              onClick={() => setSearchTerm("")}
              className="text-xs font-bold text-brand-blue hover:underline cursor-pointer"
            >
              Restablecer búsqueda
            </button>
          )}
        </div>

        {/* Sin resultados */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-brand-blue/10 p-8 shadow-sm">
            <Milk className="w-16 h-16 text-brand-blue/30 mx-auto mb-4" />
            <h3 className="text-xl font-black text-brand-blue uppercase tracking-tight mb-2">
              No se encontraron productos
            </h3>
            <p className="text-sm text-brand-blue/70 font-medium max-w-md mx-auto mb-6">
              No encontramos ningún producto que coincida con tus criterios de búsqueda. Prueba con otro término o categoría.
            </p>
            <button
              onClick={() => { setSelectedCategoryState("todos"); setSearchTerm(""); }}
              className="bg-brand-blue text-brand-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider hover:bg-brand-accent hover:text-brand-blue transition-colors cursor-pointer"
            >
              Ver Todos los Productos
            </button>
          </div>
        )}

        {/* Grilla de Productos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {filteredProducts.map((product) => {
            return (
              <div 
                key={product.id}
                id={product.id}
                className="bg-white rounded-[32px] border border-brand-blue/15 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col group"
                style={{
                  background: `linear-gradient(180deg, #ffffff 65%, ${product.bgColor} 100%)`
                }}
              >
                
                {/* Cabecera de la Tarjeta con Badges */}
                <div className="p-6 md:p-8 pb-0 flex items-center justify-between gap-3">
                  <span className="bg-brand-blue/10 text-brand-blue font-black text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-brand-blue/15">
                    {product.categoryLabel}
                  </span>
                  
                  <span className="bg-amber-100 text-amber-900 border border-amber-300 font-black text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                    {product.badgeType === "picante" && <Flame className="w-3.5 h-3.5 text-amber-600" />}
                    {product.badgeType === "tradicion" && <Heart className="w-3.5 h-3.5 text-amber-600" />}
                    {product.badgeType === "crema" && <Milk className="w-3.5 h-3.5 text-amber-600" />}
                    {product.badgeType === "queso" && <Award className="w-3.5 h-3.5 text-amber-600" />}
                    {product.badge}
                  </span>
                </div>

                {/* Cuerpo Central: Imagen Monumental Flotante */}
                <div className="relative w-full h-64 sm:h-72 md:h-80 flex items-center justify-center p-4 overflow-visible">
                  <div className="relative w-full h-full max-w-[340px] transform transition-transform duration-500 group-hover:scale-105">
                    <Image 
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      fill
                      className="object-contain drop-shadow-[0_25px_25px_rgba(1,90,133,0.22)]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Información y Textos */}
                <div className="p-6 md:p-8 pt-2 flex flex-col flex-grow justify-between gap-6">
                  
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-brand-blue uppercase tracking-tight leading-tight mb-2">
                      {product.name}
                    </h3>
                    
                    <p className="text-xs sm:text-sm font-bold text-brand-blue/70 italic mb-4">
                      &ldquo;{product.subtitle}&rdquo;
                    </p>

                    <p className="text-xs sm:text-sm text-brand-blue/80 font-medium leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Especificaciones clave en píldoras */}
                    <div className="grid grid-cols-2 gap-2 text-xs font-bold text-brand-blue/80 mb-6 bg-brand-white p-4 rounded-2xl border border-brand-blue/10">
                      <div className="flex items-center gap-2">
                        <Package className="w-4 h-4 text-brand-blue shrink-0" />
                        <div>
                          <span className="block text-[10px] text-brand-blue/60 uppercase">Presentación</span>
                          <span>{product.presentation}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-brand-blue shrink-0" />
                        <div>
                          <span className="block text-[10px] text-brand-blue/60 uppercase">Textura</span>
                          <span className="truncate block" title={product.texture}>{product.texture.split(",")[0]}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 col-span-2 pt-2 border-t border-brand-blue/10">
                        <Thermometer className="w-4 h-4 text-brand-blue shrink-0" />
                        <span className="text-[11px]">{product.storageTemp}</span>
                      </div>
                    </div>

                    {/* Usos sugeridos */}
                    <div>
                      <span className="block text-[11px] font-black uppercase tracking-wider text-brand-blue/70 mb-2 flex items-center gap-1.5">
                        <Utensils className="w-3.5 h-3.5 text-brand-blue" />
                        Ideal para servir en:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.idealFor.slice(0, 3).map((useItem, idx) => (
                          <span 
                            key={idx}
                            className="bg-white/80 text-brand-blue text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-brand-blue/15"
                          >
                            {useItem}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Acciones: Ver Ficha Técnica & Pedir por WhatsApp */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-brand-blue/15">
                    
                    <button 
                      onClick={() => setActiveModalProduct(product)}
                      className="flex-1 rounded-2xl bg-brand-blue/10 hover:bg-brand-blue text-brand-blue hover:text-brand-white py-3.5 px-4 font-black text-xs uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Ficha Técnica</span>
                    </button>

                    <a 
                      href={`https://wa.me/50496991325?text=${encodeURIComponent(product.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-2xl bg-brand-blue hover:bg-brand-green text-brand-white py-3.5 px-4 font-black text-xs uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-2 shadow-md cursor-pointer group/btn"
                    >
                      <Phone className="w-4 h-4 text-emerald-300 transition-transform group-hover/btn:scale-110" />
                      <span>Pedir por WhatsApp</span>
                    </a>

                    <Link 
                      href="/recetas"
                      title="Ver recetas con este producto"
                      className="w-12 h-12 rounded-2xl bg-brand-white border border-brand-blue/20 text-brand-blue hover:bg-brand-blue hover:text-brand-white flex items-center justify-center shrink-0 transition-colors shadow-sm"
                    >
                      <ChefHat className="w-5 h-5" />
                    </Link>

                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </section>

      {/* 4. MODAL INTERACTIVO DE FICHA TÉCNICA Y DETALLES */}
      {activeModalProduct && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveModalProduct(null);
          }}
        >
          <div className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative my-8 border border-brand-blue/20 animate-slide-up-fast max-h-[90vh] flex flex-col">
            
            {/* Header del Modal */}
            <div className="bg-brand-blue text-brand-white p-6 md:p-8 relative shrink-0">
              <button 
                onClick={() => setActiveModalProduct(null)}
                className="absolute top-6 right-6 text-brand-white/80 hover:text-brand-white bg-brand-white/10 hover:bg-brand-white/20 p-2.5 rounded-full transition-colors cursor-pointer"
                aria-label="Cerrar ficha"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="bg-brand-white/20 text-brand-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                  {activeModalProduct.categoryLabel}
                </span>
                <span className="bg-amber-300 text-brand-blue text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                  {activeModalProduct.badge}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight pr-10">
                {activeModalProduct.name}
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-brand-white/85 mt-1 italic">
                {activeModalProduct.subtitle}
              </p>
            </div>

            {/* Contenido Desplazable del Modal */}
            <div className="p-6 md:p-8 overflow-y-auto flex flex-col gap-8">
              
              {/* Sección Superior: Imagen y Resumen Rápido */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                <div className="md:col-span-5 relative w-full h-56 sm:h-64 flex items-center justify-center bg-brand-white rounded-3xl p-4 border border-brand-blue/10">
                  <div className="relative w-full h-full max-w-[220px]">
                    <Image 
                      src={activeModalProduct.imageSrc}
                      alt={activeModalProduct.imageAlt}
                      fill
                      className="object-contain drop-shadow-[0_15px_15px_rgba(1,90,133,0.25)]"
                    />
                  </div>
                </div>

                <div className="md:col-span-7 flex flex-col gap-3">
                  <h4 className="text-xs font-black uppercase tracking-wider text-brand-blue/60">
                    Descripción del Producto
                  </h4>
                  <p className="text-sm text-brand-blue font-medium leading-relaxed">
                    {activeModalProduct.longDescription}
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-brand-blue/10 text-xs">
                    <div className="bg-brand-blue/5 p-3 rounded-xl">
                      <span className="block font-black text-brand-blue uppercase text-[10px]">Presentación</span>
                      <span className="font-semibold text-brand-blue/80">{activeModalProduct.presentation}</span>
                    </div>
                    <div className="bg-brand-blue/5 p-3 rounded-xl">
                      <span className="block font-black text-brand-blue uppercase text-[10px]">Empaque</span>
                      <span className="font-semibold text-brand-blue/80">{activeModalProduct.packaging}</span>
                    </div>
                    <div className="bg-brand-blue/5 p-3 rounded-xl col-span-2">
                      <span className="block font-black text-brand-blue uppercase text-[10px]">Conservación</span>
                      <span className="font-semibold text-brand-blue/80">{activeModalProduct.storageTemp}</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Ingredientes y Perfil de Sabor */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="bg-white p-5 rounded-2xl border border-brand-blue/15 shadow-sm">
                  <h4 className="text-sm font-black uppercase tracking-wider text-brand-blue mb-3 flex items-center gap-2">
                    <Milk className="w-4 h-4 text-brand-blue" />
                    Ingredientes 100% Puros
                  </h4>
                  <ul className="flex flex-col gap-2 text-xs font-semibold text-brand-blue/85">
                    {activeModalProduct.ingredients.map((ing, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                        <span>{ing}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-brand-blue/15 shadow-sm">
                  <h4 className="text-sm font-black uppercase tracking-wider text-brand-blue mb-3 flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-brand-blue" />
                    Perfil y Maridaje Gastronómico
                  </h4>
                  <p className="text-xs text-brand-blue/80 font-medium leading-relaxed mb-3">
                    <strong className="text-brand-blue">Sabor y Textura:</strong> {activeModalProduct.flavorProfile}.
                  </p>
                  <span className="block text-[10px] font-black uppercase tracking-wider text-brand-blue/60 mb-1.5">
                    Recomendado en platillos:
                  </span>
                  <ul className="flex flex-col gap-1.5 text-xs font-semibold text-brand-blue/85">
                    {activeModalProduct.idealFor.map((useItem, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                        <span>{useItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Tabla de Información Nutricional */}
              <div className="bg-brand-white p-5 md:p-6 rounded-2xl border border-brand-blue/15">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <h4 className="text-sm font-black uppercase tracking-wider text-brand-blue flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-blue" />
                    Información Nutricional Típica
                  </h4>
                  <span className="text-[11px] font-bold text-brand-blue/70">
                    Porción recomendada: {activeModalProduct.nutrition.servingSize}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 text-center">
                  <div className="bg-white p-3 rounded-xl border border-brand-blue/10">
                    <span className="block text-[10px] uppercase font-bold text-brand-blue/60">Energía</span>
                    <span className="text-sm font-black text-brand-blue">{activeModalProduct.nutrition.calories}</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-brand-blue/10">
                    <span className="block text-[10px] uppercase font-bold text-brand-blue/60">Proteína</span>
                    <span className="text-sm font-black text-brand-blue">{activeModalProduct.nutrition.protein}</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-brand-blue/10">
                    <span className="block text-[10px] uppercase font-bold text-brand-blue/60">Grasa Total</span>
                    <span className="text-sm font-black text-brand-blue">{activeModalProduct.nutrition.totalFat}</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-brand-blue/10">
                    <span className="block text-[10px] uppercase font-bold text-brand-blue/60">Grasa Sat.</span>
                    <span className="text-sm font-black text-brand-blue">{activeModalProduct.nutrition.saturatedFat}</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-brand-blue/10">
                    <span className="block text-[10px] uppercase font-bold text-brand-blue/60">Carbohidratos</span>
                    <span className="text-sm font-black text-brand-blue">{activeModalProduct.nutrition.carbs}</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-brand-blue/10">
                    <span className="block text-[10px] uppercase font-bold text-brand-blue/60">Sodio</span>
                    <span className="text-sm font-black text-brand-blue">{activeModalProduct.nutrition.sodium}</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-brand-blue/10 col-span-2 sm:col-span-1">
                    <span className="block text-[10px] uppercase font-bold text-brand-blue/60">Calcio</span>
                    <span className="text-sm font-black text-brand-blue">{activeModalProduct.nutrition.calcium}</span>
                  </div>
                </div>
                <p className="text-[10px] text-brand-blue/60 mt-3 italic text-right">
                  *Valores diarios basados en una dieta de 2,000 calorías.
                </p>
              </div>

            </div>

            {/* Footer con Acciones */}
            <div className="p-4 md:p-6 bg-brand-blue/5 border-t border-brand-blue/10 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              
              <Link
                href="/recetas"
                className="text-xs font-bold text-brand-blue hover:underline flex items-center gap-1.5"
              >
                <ChefHat className="w-4 h-4" />
                <span>Explorar recetas con este producto</span>
              </Link>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button 
                  onClick={() => setActiveModalProduct(null)}
                  className="px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-brand-blue/70 hover:bg-brand-blue/10 transition-colors cursor-pointer"
                >
                  Cerrar
                </button>

                <a 
                  href={`https://wa.me/50496991325?text=${encodeURIComponent(activeModalProduct.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-blue hover:bg-brand-green text-brand-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4 text-emerald-300" />
                  <span>Pedir por WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* 5. DISTINTIVOS DE CALIDAD: LA PROMESA DON GUAYO */}
      <section className="w-full bg-brand-green/10 py-20 px-6 md:px-12 border-y border-brand-green/20">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-brand-blue/10 text-brand-blue font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full">
              Garantía de Pureza
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-brand-blue uppercase tracking-tight mt-3">
              ¿QUÉ HACE ÚNICOS A NUESTROS LÁCTEOS?
            </h2>
            <p className="text-base text-brand-blue/75 font-medium mt-3">
              Cuatro pilares innegociables que respaldan cada bloque de queso, cuajada y bolsa de crema que sale de nuestros talleres.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-8 rounded-3xl border border-brand-blue/10 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-brand-blue text-brand-white flex items-center justify-center shadow-md mb-6">
                <Milk className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-black text-brand-blue uppercase tracking-tight mb-2">
                Leche Granjera 100%
              </h3>
              <p className="text-xs text-brand-blue/75 font-medium leading-relaxed">
                Recolectada diariamente en fincas ganaderas locales. Nunca reconstituimos leche en polvo ni empleamos sueros desgrasados.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-brand-blue/10 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-brand-blue text-brand-white flex items-center justify-center shadow-md mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-black text-brand-blue uppercase tracking-tight mb-2">
                Elaboración Artesanal
              </h3>
              <p className="text-xs text-brand-blue/75 font-medium leading-relaxed">
                Respetamos el punto exacto de coagulación, reposo y prensado manual heredado de nuestra receta familiar de 1989.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-brand-blue/10 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-brand-blue text-brand-white flex items-center justify-center shadow-md mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-black text-brand-blue uppercase tracking-tight mb-2">
                Inocuidad y Control
              </h3>
              <p className="text-xs text-brand-blue/75 font-medium leading-relaxed">
                Pasteurización rigurosa, ambiente esterilizado y empaque termosellado que protegen el sabor sin necesidad de químicos nocivos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-brand-blue/10 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-brand-blue text-brand-white flex items-center justify-center shadow-md mb-6">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-black text-brand-blue uppercase tracking-tight mb-2">
                Cadena Fría Garantizada
              </h3>
              <p className="text-xs text-brand-blue/75 font-medium leading-relaxed">
                Transporte refrigerado inmediato en San Pedro Sula y el Valle de Sula para que recibas el producto en su punto óptimo de frescura.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. GUÍA DE CONSERVACIÓN Y ALMACENAMIENTO */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-12 py-20">
        <div className="bg-white rounded-[32px] border border-brand-blue/15 p-8 md:p-12 shadow-lg">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 flex flex-col items-start">
              <span className="bg-brand-blue/10 text-brand-blue font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                Consejos del Granjero
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-brand-blue uppercase tracking-tight leading-tight mb-4">
                CÓMO CONSERVAR LA FRESCURA EN CASA
              </h2>
              <p className="text-sm text-brand-blue/80 font-medium leading-relaxed mb-6">
                Al ser productos 100% naturales libres de conservantes artificiales masivos, seguir estas simples pautas te asegurará disfrutar de todo su aroma y textura hasta la última porción.
              </p>

              <div className="flex items-center gap-3 bg-brand-blue/5 p-4 rounded-2xl border border-brand-blue/10 w-full">
                <Thermometer className="w-7 h-7 text-brand-blue shrink-0" />
                <div>
                  <span className="block text-xs font-black uppercase text-brand-blue">Temperatura Ideal</span>
                  <span className="text-xs font-bold text-brand-blue/75">Entre 2°C y 4°C en la bandeja media del refrigerador</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CONSERVATION_TIPS.map((tip) => (
                <div 
                  key={tip.number}
                  className="relative overflow-hidden p-6 rounded-3xl border border-brand-blue/15 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group min-h-[180px]"
                >
                  {/* Imagen de fondo */}
                  <Image 
                    src={tip.imageSrc}
                    alt={tip.title}
                    fill
                    className="object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                  />

                  {/* Capa de contraste y degradado para garantizar legibilidad */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-white/95 via-brand-white/90 to-brand-white/75 backdrop-blur-[1px] transition-colors duration-300 group-hover:from-brand-white/92 group-hover:via-brand-white/85 group-hover:to-brand-white/65" />

                  {/* Contenido */}
                  <div className="relative z-10 flex flex-col gap-2">
                    <span className="w-8 h-8 rounded-xl bg-brand-blue text-brand-white font-black text-xs flex items-center justify-center shadow-md">
                      {tip.number}
                    </span>
                    <h4 className="text-sm font-black text-brand-blue uppercase tracking-tight">
                      {tip.title}
                    </h4>
                    <p className="text-xs text-brand-blue/85 font-semibold leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 7. PREGUNTAS FRECUENTES (FAQ ACORDEÓN) */}
      <section className="max-w-4xl mx-auto w-full px-6 md:px-12 pb-20">
        <div className="text-center mb-12">
          <span className="bg-brand-blue/10 text-brand-blue font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full">
            Dudas Frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-blue uppercase tracking-tight mt-3">
            PREGUNTAS SOBRE NUESTROS PRODUCTOS
          </h2>
          <p className="text-xs sm:text-sm text-brand-blue/75 font-medium mt-2">
            Todo lo que necesitas saber antes de realizar tu compra o pedido especial.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-brand-blue/15 overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-black text-brand-blue uppercase text-sm sm:text-base tracking-tight hover:bg-brand-blue/5 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <span className="w-8 h-8 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-brand-blue/80 font-medium leading-relaxed border-t border-brand-blue/5 animate-slide-up-fast">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. BANNER CTA COMERCIAL Y MAYORISTAS */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-24">
        <div className="bg-brand-blue text-brand-white p-8 sm:p-12 md:p-16 rounded-[36px] shadow-2xl relative overflow-hidden text-center flex flex-col items-center">
          
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-white/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-brand-green/20 rounded-full blur-2xl pointer-events-none" />

          <span className="bg-brand-white/15 text-brand-white font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-brand-white/20 backdrop-blur-md">
            Distribución & Mayoreo
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-4 max-w-3xl">
            ¿TIENES UN RESTAURANTE, PULPERÍA O NEGOCIO GASTRONÓMICO?
          </h2>

          <p className="text-sm sm:text-base text-brand-white/85 font-medium max-w-2xl leading-relaxed mb-8">
            Abastécete directamente con los mejores lácteos de San Pedro Sula. Ofrecemos precios especiales por volumen, suministro constante y entregas refrigeradas a tiempo.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
            
            <a 
              href="https://wa.me/50496991325?text=Hola%20L%C3%A1cteos%20Don%20Guayo!%20Tengo%20un%20negocio%20y%20me%20gustar%C3%ADa%20cotizar%20precios%20de%20mayoreo."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center bg-brand-white text-brand-blue hover:bg-brand-white/20 hover:text-brand-white border border-transparent hover:border-brand-white/40 backdrop-blur-md font-black text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-200 shadow-xl flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Cotizar Pedido Mayorista</span>
            </a>

            <Link 
              href="/contactenos"
              className="w-full sm:w-auto text-center bg-brand-white/10 hover:bg-brand-white/20 border border-brand-white/30 text-brand-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-colors flex items-center justify-center gap-2"
            >
              <span>Formulario de Contacto</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}

export default function ProductosPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-brand-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-4 border-brand-blue border-t-transparent animate-spin" />
          <p className="text-sm font-black text-brand-blue uppercase tracking-wider">Cargando productos...</p>
        </div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}