import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // flechas
import MenuCard from "../components/MenuCard";

export default function ShopPage() {
  // Lista de promociones
  const promos = [
    "🎉 ¡Promoción especial! 🍺 2x1 en cervezas este fin de semana 🎉",
    "🍷 20% de descuento en vinos seleccionados 🍷",
    "🍹 Happy Hour: Mojitos y Pisco Sour a mitad de precio 🍹",
    "🥂 Compra 2 tequilas y recibe un ron gratis 🥂",
  ];

  const [currentPromo, setCurrentPromo] = useState(0);
  const [fade, setFade] = useState(true);

  // Cambio automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextPromo();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Función para ir a la siguiente promo
  const nextPromo = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentPromo((prev) => (prev + 1) % promos.length);
      setFade(true);
    }, 500);
  };

  // Función para ir a la promo anterior
  const prevPromo = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentPromo((prev) => (prev - 1 + promos.length) % promos.length);
      setFade(true);
    }, 500);
  };

  // Función para saltar a una promo específica (cuando hagan clic en un puntito)
  const goToPromo = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrentPromo(index);
      setFade(true);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20">
      <div className="container mx-auto px-6">
        {/* Banner de Promociones con controles */}
        <div className="relative mb-10">
          {/* Texto promocional con animación fade */}
          <div
            className={`bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-bold text-lg md:text-xl py-4 px-6 rounded-xl shadow-lg text-center transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {promos[currentPromo]}
          </div>

          {/* Flechas izquierda y derecha */}
          <button
            onClick={prevPromo}
            className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200 transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextPromo}
            className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200 transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Puntitos indicadores */}
          <div className="flex justify-center mt-4 space-x-2">
            {promos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToPromo(index)}
                className={`w-3 h-3 rounded-full ${
                  currentPromo === index ? "bg-yellow-500" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Título de la tienda */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-secondary animate-fadeIn">
          🛒 Tienda Sabrotita - Licores
        </h2>

        <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto animate-slideUp">
          Disfruta nuestra selección de licores premium. Perfectos para acompañar tus comidas o
          celebrar en grande 🎊.
        </p>

        {/* Catálogo de Licores */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          <MenuCard
            title="Vino Tinto"
            image="https://source.unsplash.com/400x300/?wine"
            description="Un clásico vino tinto de uvas seleccionadas."
            price={18}
          />
          <MenuCard
            title="Cerveza Artesanal"
            image="https://source.unsplash.com/400x300/?beer"
            description="Refrescante cerveza artesanal, sabor único."
            price={5}
          />
          <MenuCard
            title="Pisco Sour"
            image="https://source.unsplash.com/400x300/?pisco"
            description="Cóctel peruano-chileno con un toque cítrico."
            price={8}
          />
          <MenuCard
            title="Ron Añejo"
            image="https://source.unsplash.com/400x300/?rum"
            description="Ron de calidad, perfecto para cócteles."
            price={15}
          />
          <MenuCard
            title="Mojito"
            image="https://source.unsplash.com/400x300/?mojito"
            description="Refrescante mojito con hierbabuena fresca."
            price={10}
          />
          <MenuCard
            title="Tequila"
            image="https://source.unsplash.com/400x300/?tequila"
            description="Auténtico tequila mexicano para celebrar."
            price={12}
          />
        </div>
      </div>
    </div>
  );
}
