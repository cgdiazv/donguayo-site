"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Clock, 
  Users, 
  ChefHat, 
  X, 
  Utensils,
  CheckCircle2,
  BookOpen
} from "lucide-react";

interface Recipe {
  id: string;
  title: string;
  productTag: string;
  productName: string;
  imageSrc: string;
  prepTime: string;
  servings: string;
  difficulty: "Fácil" | "Intermedio" | "Avanzado";
  description: string;
  ingredients: string[];
  instructions: string[];
}

const RECIPES: Recipe[] = [
  {
    id: "enchiladas-crema",
    title: "Enchiladas Catrachas con Crema Pura",
    productTag: "Crema Don Guayo",
    productName: "Crema Don Guayo",
    imageSrc: "/recetas/receta-enchiladas-catrachas.png",
    prepTime: "25 min",
    servings: "4 personas",
    difficulty: "Fácil",
    description: "Tortillas doradas de maíz servidas con carne sofrita, repollo fresco, huevo duro y abundante Crema Don Guayo.",
    ingredients: [
      "2 tazas de Crema Don Guayo",
      "8 tortillas de maíz recién fritas",
      "1 lb de carne molida sazonada",
      "2 tazas de repollo finamente picado",
      "2 huevos duros rodajados",
      "Salsa de tomate casera y queso rallado"
    ],
    instructions: [
      "Fríe las tortillas de maíz en aceite caliente hasta que estén bien crujientes y escurre el exceso.",
      "Cocina la carne molida con cebolla, chile dulce, ajo y tus especias favoritas.",
      "Sobre cada tortilla crujiente, coloca una capa de repollo picado y carne sofrita.",
      "Agrega rodajas de huevo duro y salsa de tomate casera.",
      "Baña generosamente con Crema Don Guayo y sirve de inmediato."
    ]
  },
  {
    id: "baleadas-especiales",
    title: "Baleadas Especiales con Crema Don Guayo",
    productTag: "Crema Don Guayo",
    productName: "Crema Don Guayo",
    imageSrc: "/recetas/receta-baleadas-especiales.png",
    prepTime: "15 min",
    servings: "2 personas",
    difficulty: "Fácil",
    description: "La tradición en su máxima expresión: tortilla de harina caliente con frijoles refritos, huevo picado y Crema Don Guayo.",
    ingredients: [
      "1/2 taza de Crema Don Guayo",
      "4 tortillas de harina grandes",
      "1.5 tazas de frijoles rojos refritos",
      "3 huevos revueltos con un toque de sal",
      "1/2 taza de Queso Crema Blanco desmenuzado"
    ],
    instructions: [
      "Calienta las tortillas de harina en un comal a fuego medio hasta que estén suaves y infladitas.",
      "Unta una capa generosa de frijoles rojos refritos calientes sobre la mitad de cada tortilla.",
      "Agrega los huevos revueltos y el Queso Crema Blanco.",
      "Corona con una abundante cucharada de Crema Don Guayo.",
      "Dobla a la mitad y disfruta calientita."
    ]
  },
  {
    id: "pupusas-cuajada",
    title: "Pupusas de Cuajada Fresca Tradicional",
    productTag: "Cuajada Fresca",
    productName: "Cuajada Fresca",
    imageSrc: "/recetas/receta-pupusas-cuajada.png",
    prepTime: "30 min",
    servings: "6 personas",
    difficulty: "Intermedio",
    description: "Pupusas suaves de maíz rellenas con nuestra Cuajada Fresca sazonada con finas hierbas y chicharrón.",
    ingredients: [
      "2 tazas de Cuajada Fresca Don Guayo desmenuzada",
      "3 tazas de masa de maíz",
      "1/2 taza de chicharrón molido o loroco picado",
      "1 cucharadita de sal",
      "Curtido de repollo y salsa roja para acompañar"
    ],
    instructions: [
      "Mezcla la Cuajada Fresca desmenuzada con el loroco o chicharrón hasta formar una pasta homogénea.",
      "Prepara la masa de maíz con agua tibia y sal hasta obtener una consistencia suave.",
      "Toma una bola de masa, haz una hendidura al centro y rellena con la mezcla de cuajada.",
      "Sella cuidadosamente y da forma de disco empalmando con las palmas de las manos.",
      "Cocina en el comal bien caliente durante 3 a 4 minutos por lado hasta dorar."
    ]
  },
  {
    id: "ensalada-cuajada-fresca",
    title: "Ensalada Campestre con Cuajada Fresca",
    productTag: "Cuajada Fresca",
    productName: "Cuajada Fresca",
    imageSrc: "/recetas/receta-ensalada-cuajada.png",
    prepTime: "10 min",
    servings: "3 personas",
    difficulty: "Fácil",
    description: "Ensalada fresca y nutritiva de tomates maduros, aguacate jugoso, cilantro y cubos frescos de Cuajada Don Guayo.",
    ingredients: [
      "1.5 tazas de Cuajada Fresca Don Guayo en cubos",
      "2 tomates maduros firmes picados",
      "1 aguacate grande en trozos",
      "1/4 taza de cilantro fresco picado",
      "Jugo de 2 limones, aceite de oliva, sal y pimienta"
    ],
    instructions: [
      "En un tazón grande, combina los tomates picados, el aguacate en trozos y el cilantro.",
      "Incorpora delicadamente los cubos de Cuajada Fresca Don Guayo.",
      "Adereza con jugo de limón fresco, un chorrito de aceite de oliva, sal y pimienta al gusto.",
      "Mezcla con cuidado para mantener la estructura de la cuajada y sirve frío."
    ]
  },
  {
    id: "dip-queso-crema-blanco",
    title: "Dip Cremoso de Queso Blanco & Ajo Asado",
    productTag: "Queso Crema Blanco",
    productName: "Queso Crema Blanco",
    imageSrc: "/recetas/receta-dip-queso-crema.png",
    prepTime: "10 min",
    servings: "6 personas",
    difficulty: "Fácil",
    description: "Entrada irresistible: Queso Crema Blanco batido con ajo horneado, cebollín fresco y un toque de limón.",
    ingredients: [
      "2 tazas de Queso Crema Blanco Don Guayo",
      "1 cabeza de ajo asada al horno",
      "3 cucharadas de ciboulette o cebollín picado",
      "1 cucharada de jugo de limón",
      "Totopos de maíz o galletas saladas para acompañar"
    ],
    instructions: [
      "Extrae los dientes de ajo suavemente presionando la cabeza de ajo asada.",
      "En un procesador o tazón, bate el Queso Crema Blanco Don Guayo con los ajos asados hasta suavizar.",
      "Agrega el cebollín picado y el jugo de limón.",
      "Mezcla bien y decora con ciboulette extra por encima.",
      "Sirve acompañado de totopos crocantes o baguette tostado."
    ]
  },
  {
    id: "tacos-dorados-queso-blanco",
    title: "Tacos Dorados con Queso Crema Blanco",
    productTag: "Queso Crema Blanco",
    productName: "Queso Crema Blanco",
    imageSrc: "/recetas/receta-tacos-dorados.png",
    prepTime: "20 min",
    servings: "4 personas",
    difficulty: "Fácil",
    description: "Flautas crujientes de pollo espolvoreadas con lechuga fresca y capas generosas de Queso Crema Blanco.",
    ingredients: [
      "1.5 tazas de Queso Crema Blanco Don Guayo",
      "12 tortillas de maíz rellenas de pollo desmenuzado",
      "2 tazas de lechuga finamente tirada",
      "Crema Don Guayo al gusto",
      "Salsa verde o roja de mesa"
    ],
    instructions: [
      "Enrolla las tortillas con el pollo desmenuzado y dóralas en aceite bien caliente hasta que estén crujientes.",
      "Escurre el exceso de aceite sobre papel absorbente.",
      "Acomoda los tacos en un plato y cubre con lechuga fresca.",
      "Desmorona abundante Queso Crema Blanco Don Guayo sobre los tacos.",
      "Añade salsa de mesa al gusto y sirve inmediatamente."
    ]
  },
  {
    id: "quesadillas-queso-con-chile",
    title: "Quesadillas Picantes con Queso con Chile",
    productTag: "Queso con Chile",
    productName: "Queso con Chile",
    imageSrc: "/recetas/receta-quesadillas-picantes.png",
    prepTime: "15 min",
    servings: "2 personas",
    difficulty: "Fácil",
    description: "Tortillas doraditas al comal rellenas de Queso Crema con Chile derretido y pollo a las brasas.",
    ingredients: [
      "1.5 tazas de Queso Crema con Chile Don Guayo",
      "4 tortillas de harina o maíz",
      "1 taza de pechuga de pollo a la parrilla en tiras",
      "Cilantro fresco y aguacate en rodajas"
    ],
    instructions: [
      "Coloca una tortilla en el comal a fuego medio-bajo.",
      "Extiende abundante Queso Crema con Chile Don Guayo sobre la superficie.",
      "Agrega las tiras de pollo a la parrilla y un toque de cilantro.",
      "Cubre con otra tortilla o dobla a la mitad y cocina hasta que el queso se derrita y la tortilla quede bien doradita.",
      "Corta en triángulos y acompaña con guacamole."
    ]
  },
  {
    id: "nachos-supremos-chile",
    title: "Nachos Supremos Don Guayo con Chile",
    productTag: "Queso con Chile",
    productName: "Queso con Chile",
    imageSrc: "/recetas/receta-nachos-supremos.png",
    prepTime: "20 min",
    servings: "4 personas",
    difficulty: "Fácil",
    description: "Montaña de totopos con frijoles refritos, carne sazonada, jalapeños y Queso Crema con Chile fundido.",
    ingredients: [
      "2 tazas de Queso Crema con Chile Don Guayo",
      "1 bolsa grande de totopos de maíz",
      "1.5 tazas de carne picada sazonada",
      "1 taza de frijoles negros o rojos enteros",
      "Rodajas de jalapeño en conserva y pico de gallo"
    ],
    instructions: [
      "En una bandeja apta para horno o fuente grande, coloca una capa de totopos de maíz.",
      "Distribuye la carne sazonada caliente y los frijoles.",
      "Fundes ligeramente el Queso Crema con Chile Don Guayo y viértelo sobre todos los nachos.",
      "Decora con rodajas de jalapeño, pico de gallo y un hilo de Crema Don Guayo.",
      "Sirve al centro de la mesa para compartir."
    ]
  }
];

const PRODUCTS_FILTER = [
  "Todos",
  "Crema Don Guayo",
  "Cuajada Fresca",
  "Queso Crema Blanco",
  "Queso con Chile"
];

export default function RecetasPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [activeRecipe, setActiveRecipe] = useState<Recipe | null>(null);

  const filteredRecipes = selectedCategory === "Todos" 
    ? RECIPES 
    : RECIPES.filter((r) => r.productTag === selectedCategory);

  return (
    <main className="min-h-screen bg-brand-white flex flex-col overflow-x-hidden pb-24">
      
      {/* SECCIÓN HERO / BANNER */}
      <section className="w-full bg-brand-blue text-brand-white py-16 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 bg-brand-white/10 text-brand-white font-black text-xs md:text-sm uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Recetario Don Guayo
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none mb-4">
            CATÁLOGO DE RECETAS
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-brand-white/85 font-medium leading-relaxed">
            Explora las mejores combinaciones culinarias preparadas con nuestros productos estrella: Crema Don Guayo, Cuajada Fresca, Queso Crema Blanco y Queso con Chile.
          </p>
        </div>
      </section>

      {/* FILTROS POR PRODUCTO */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-12 pt-12">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {PRODUCTS_FILTER.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-full text-xs md:text-sm font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive 
                    ? "bg-brand-blue text-brand-white shadow-lg scale-105" 
                    : "bg-brand-blue/5 text-brand-blue hover:bg-brand-blue/10 border border-brand-blue/15"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* GRILLA DE RECETAS */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-12 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <div 
              key={recipe.id}
              className="bg-white rounded-3xl border border-brand-blue/10 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Contenedor de Imagen del Platillo Terminado */}
              <div className="relative w-full h-56 bg-brand-blue/5 overflow-hidden">
                <span className="absolute top-4 left-4 z-10 bg-brand-blue/90 text-brand-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
                  {recipe.productTag}
                </span>
                
                <Image 
                  src={recipe.imageSrc} 
                  alt={recipe.title} 
                  fill 
                  className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Contenido de la Receta */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                <div>
                  {/* Título */}
                  <h3 className="text-xl font-black text-brand-blue uppercase tracking-tight mb-2 leading-tight">
                    {recipe.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-xs text-brand-blue/75 font-medium leading-relaxed line-clamp-3 mb-4">
                    {recipe.description}
                  </p>

                  {/* Meta de cocina */}
                  <div className="flex items-center gap-4 text-xs font-bold text-brand-blue/70 pt-2 border-t border-brand-blue/10">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-brand-blue" />
                      {recipe.prepTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-brand-blue" />
                      {recipe.servings}
                    </span>
                    <span className="flex items-center gap-1">
                      <ChefHat className="w-3.5 h-3.5 text-brand-blue" />
                      {recipe.difficulty}
                    </span>
                  </div>
                </div>

                {/* Botón Ver Receta */}
                <button 
                  onClick={() => setActiveRecipe(recipe)}
                  className="w-full mt-2 rounded-2xl bg-brand-blue/10 hover:bg-brand-blue text-brand-blue hover:text-brand-white py-3 font-bold text-xs uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Ver Receta Completa</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* MODAL DETALLE DE RECETA */}
      {activeRecipe && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative my-8 border border-brand-blue/20">
            
            {/* Header del Modal */}
            <div className="bg-brand-blue text-brand-white p-6 md:p-8 relative">
              <button 
                onClick={() => setActiveRecipe(null)}
                className="absolute top-6 right-6 text-brand-white/80 hover:text-brand-white bg-brand-white/10 hover:bg-brand-white/20 p-2 rounded-full transition-colors cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="inline-block bg-brand-white/20 text-brand-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                {activeRecipe.productTag}
              </span>
              
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight pr-8">
                {activeRecipe.title}
              </h2>

              <div className="flex items-center gap-4 text-xs font-bold text-brand-white/80 mt-4">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {activeRecipe.prepTime}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  {activeRecipe.servings}
                </span>
                <span className="flex items-center gap-1.5">
                  <ChefHat className="w-4 h-4" />
                  {activeRecipe.difficulty}
                </span>
              </div>
            </div>

            {/* Cuerpo del Modal */}
            <div className="p-6 md:p-8 max-h-[65vh] overflow-y-auto flex flex-col gap-6">
              
              {/* Ingredientes */}
              <div>
                <h3 className="text-base font-black text-brand-blue uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-brand-blue" />
                  Ingredientes Necesarios
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm font-semibold text-brand-blue/80">
                  {activeRecipe.ingredients.map((ing, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-brand-blue/5 p-2.5 rounded-xl border border-brand-blue/10">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Paso a Paso */}
              <div>
                <h3 className="text-base font-black text-brand-blue uppercase tracking-wider mb-3 flex items-center gap-2">
                  <ChefHat className="w-5 h-5 text-brand-blue" />
                  Instrucciones de Preparación
                </h3>
                <ol className="flex flex-col gap-3">
                  {activeRecipe.instructions.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-brand-white p-3.5 rounded-2xl border border-brand-blue/15 text-xs md:text-sm font-medium text-brand-blue">
                      <span className="w-6 h-6 rounded-full bg-brand-blue text-brand-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

            </div>

            {/* Footer del Modal */}
            <div className="p-4 bg-brand-blue/5 border-t border-brand-blue/10 flex justify-end">
              <button 
                onClick={() => setActiveRecipe(null)}
                className="bg-brand-blue text-brand-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-brand-blue/90 transition-colors cursor-pointer"
              >
                Cerrar Receta
              </button>
            </div>

          </div>
        </div>
      )}

    </main>
  );
}