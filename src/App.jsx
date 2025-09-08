import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MenuCard from "./components/MenuCard";
import Cart from "./components/Cart";
import ShareLocationButton from "./components/ShareLocationButton";
import { ChevronLeft, ChevronRight } from "lucide-react"; // flechas promos

// 🎉 Promociones
const promos = [
  {
    text: "🍔 Promo Hamburguesa + Papas + Bebida a solo $5.990",
    image: "https://source.unsplash.com/600x400/?burger,fries,cola",
    link: "#burgers",
  },
  {
    text: "🍕 2x1 en Pizzas todos los viernes",
    image: "https://source.unsplash.com/600x400/?pizza",
    link: "#pizzas",
  },
  {
    text: "🍣 Sushi Night: 30% off rolls seleccionados",
    image: "https://source.unsplash.com/600x400/?sushi",
    link: "#sushi",
  },
  {
    text: "🍹 Happy Hour: Mojitos y Pisco Sour a mitad de precio",
    image: "https://source.unsplash.com/600x400/?cocktail,mojito",
    link: "#drinks",
  },
];

// 🎨 Items de menú por sección
const burgers = [
  {
    title: "Hamburguesa Sabrotita",
    image: "https://source.unsplash.com/400x300/?burger",
    description: "Jugosa, con pan artesanal y salsas únicas.",
    price: 10,
  },
  {
    title: "Hamburguesa Doble Queso",
    image: "https://source.unsplash.com/400x300/?cheeseburger",
    description: "Doble carne, doble queso y pan brioche.",
    price: 12,
  },
  {
    title: "Hamburguesa BBQ",
    image: "https://source.unsplash.com/400x300/?bbq,burger",
    description: "Con salsa barbacoa y cebolla crispy.",
    price: 11,
  },
  {
    title: "Hamburguesa Veggie",
    image: "https://source.unsplash.com/400x300/?veggie,burger",
    description: "Hecha con garbanzos y vegetales frescos.",
    price: 9,
  },
];

const pizzas = [
  {
    title: "Pizza Artesanal",
    image: "https://source.unsplash.com/400x300/?pizza",
    description: "Queso derretido y los mejores ingredientes frescos.",
    price: 12,
  },
  {
    title: "Pizza Pepperoni",
    image: "https://source.unsplash.com/400x300/?pepperoni,pizza",
    description: "La clásica favorita de todos.",
    price: 14,
  },
  {
    title: "Pizza Margarita",
    image: "https://source.unsplash.com/400x300/?margarita,pizza",
    description: "Sencilla y deliciosa con albahaca fresca.",
    price: 11,
  },
  {
    title: "Pizza Hawaiana",
    image: "https://source.unsplash.com/400x300/?hawaiian,pizza",
    description: "Piña, jamón y mucho queso.",
    price: 13,
  },
];

const sushi = [
  {
    title: "Sushi Variado",
    image: "https://source.unsplash.com/400x300/?sushi",
    description: "Rolls frescos con pescado de primera calidad.",
    price: 15,
  },
  {
    title: "Sushi Tempura",
    image: "https://source.unsplash.com/400x300/?tempura,sushi",
    description: "Crujiente por fuera, suave por dentro.",
    price: 16,
  },
  {
    title: "Sushi Veggie",
    image: "https://source.unsplash.com/400x300/?vegetarian,sushi",
    description: "Ideal para los amantes de lo verde.",
    price: 14,
  },
  {
    title: "Sushi Especial Sabrotita",
    image: "https://source.unsplash.com/400x300/?japanese,sushi",
    description: "Creación única con sabores fusionados.",
    price: 18,
  },
];

const drinks = [
  {
    title: "Mojito Fresco",
    image: "https://source.unsplash.com/400x300/?mojito",
    description: "Refrescante cóctel clásico.",
    price: 7,
  },
  {
    title: "Pisco Sour",
    image: "https://source.unsplash.com/400x300/?pisco,sour",
    description: "El trago tradicional peruano/chileno.",
    price: 8,
  },
  {
    title: "Tequila Shots",
    image: "https://source.unsplash.com/400x300/?tequila",
    description: "Shots de tequila con limón y sal.",
    price: 6,
  },
  {
    title: "Ron con Cola",
    image: "https://source.unsplash.com/400x300/?rum,cuba",
    description: "El clásico combinado.",
    price: 9,
  },
];

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPromo, setCurrentPromo] = useState(0);
  const [fade, setFade] = useState(true);

  // Estados de visibilidad por sección
  const [visibleBurgers, setVisibleBurgers] = useState(3);
  const [visiblePizzas, setVisiblePizzas] = useState(3);
  const [visibleSushi, setVisibleSushi] = useState(3);
  const [visibleDrinks, setVisibleDrinks] = useState(3);

  // Ocultar splash luego de 4s
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  // Cambio automático de promos cada 5s
  useEffect(() => {
    const interval = setInterval(() => {
      nextPromo();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextPromo = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentPromo((prev) => (prev + 1) % promos.length);
      setFade(true);
    }, 500);
  };

  const prevPromo = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentPromo((prev) => (prev - 1 + promos.length) % promos.length);
      setFade(true);
    }, 500);
  };

  const goToPromo = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrentPromo(index);
      setFade(true);
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* SPLASH SCREEN */}
      {showSplash && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-400">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white animate-bounce">
            Sabrotita 🍔🍕🍣
          </h1>
        </div>
      )}

      {/* NAVBAR */}
      <Navbar />

      {/* Carrito lateral */}
      <Cart />

      {/* HERO con carrusel */}
      <section
        id="home"
        className="relative bg-gradient-to-r from-primary to-purple-900 text-white pt-28 pb-20 overflow-hidden"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-12">
          {/* Texto */}
          <div className="max-w-xl text-center md:text-left animate-fadeIn">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Bienvenido a <span className="text-secondary">Sabrotita</span>
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-200 animate-slideUp">
              Sabores irresistibles, pedidos rápidos y la mejor experiencia
              gastronómica.
            </p>

            {/* Carrusel Promociones */}
            <div className="relative mb-8">
              <div
                className={`transition-opacity duration-500 ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              >
                <a href={promos[currentPromo].link} className="block">
                  <img
                    src={promos[currentPromo].image}
                    alt="Promo"
                    className="rounded-xl shadow-lg mb-4 w-full max-w-md mx-auto cursor-pointer hover:scale-105 transition-transform"
                  />
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg md:text-xl py-3 px-4 rounded-xl shadow-lg text-center cursor-pointer">
                    {promos[currentPromo].text}
                  </div>
                </a>
              </div>

              {/* Flechas */}
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

              {/* Puntitos */}
              <div className="flex justify-center mt-3 space-x-2">
                {promos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPromo(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentPromo === index
                        ? "bg-yellow-400"
                        : "bg-gray-400"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENÚ */}
      <section id="menu" className="py-24 container mx-auto px-6">
        <h3 className="text-4xl font-extrabold text-center mb-14 animate-fadeIn text-secondary">
          Nuestro Menú Estrella ✨
        </h3>

        {/* Hamburguesas */}
        <div id="burgers" className="mb-16">
          <h4 className="text-2xl font-bold mb-6">🍔 Hamburguesas</h4>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {burgers.slice(0, visibleBurgers).map((item, idx) => (
              <MenuCard key={idx} {...item} />
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={() =>
                setVisibleBurgers(
                  visibleBurgers === 3 ? burgers.length : 3
                )
              }
              className="bg-secondary text-black font-semibold px-6 py-2 rounded-lg hover:bg-yellow-400 transition"
            >
              {visibleBurgers === 3 ? "Ver más 👇" : "Ver menos 👆"}
            </button>
          </div>
        </div>

        {/* Pizzas */}
        <div id="pizzas" className="mb-16">
          <h4 className="text-2xl font-bold mb-6">🍕 Pizzas</h4>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {pizzas.slice(0, visiblePizzas).map((item, idx) => (
              <MenuCard key={idx} {...item} />
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={() =>
                setVisiblePizzas(
                  visiblePizzas === 3 ? pizzas.length : 3
                )
              }
              className="bg-secondary text-black font-semibold px-6 py-2 rounded-lg hover:bg-yellow-400 transition"
            >
              {visiblePizzas === 3 ? "Ver más 👇" : "Ver menos 👆"}
            </button>
          </div>
        </div>

        {/* Sushi */}
        <div id="sushi" className="mb-16">
          <h4 className="text-2xl font-bold mb-6">🍣 Sushi</h4>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {sushi.slice(0, visibleSushi).map((item, idx) => (
              <MenuCard key={idx} {...item} />
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={() =>
                setVisibleSushi(visibleSushi === 3 ? sushi.length : 3)
              }
              className="bg-secondary text-black font-semibold px-6 py-2 rounded-lg hover:bg-yellow-400 transition"
            >
              {visibleSushi === 3 ? "Ver más 👇" : "Ver menos 👆"}
            </button>
          </div>
        </div>

        {/* Drinks */}
        <div id="drinks" className="mb-16">
          <h4 className="text-2xl font-bold mb-6">🍹 Tragos</h4>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {drinks.slice(0, visibleDrinks).map((item, idx) => (
              <MenuCard key={idx} {...item} />
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={() =>
                setVisibleDrinks(
                  visibleDrinks === 3 ? drinks.length : 3
                )
              }
              className="bg-secondary text-black font-semibold px-6 py-2 rounded-lg hover:bg-yellow-400 transition"
            >
              {visibleDrinks === 3 ? "Ver más 👇" : "Ver menos 👆"}
            </button>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contact" className="py-24 container mx-auto px-6">
        <h3 className="text-4xl font-extrabold text-center mb-14 animate-fadeIn text-secondary">
          Contáctanos 📩
        </h3>
        <form className="max-w-lg mx-auto bg-white p-10 rounded-2xl shadow-xl space-y-6 text-black">
          <input
            type="text"
            placeholder="Tu Nombre"
            className="w-full border p-4 rounded-lg focus:ring-2 focus:ring-primary outline-none"
          />
          <input
            type="email"
            placeholder="Tu Correo"
            className="w-full border p-4 rounded-lg focus:ring-2 focus:ring-primary outline-none"
          />
          <textarea
            placeholder="Tu Mensaje"
            className="w-full border p-4 rounded-lg h-32 resize-none focus:ring-2 focus:ring-primary outline-none"
          ></textarea>
          <button className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition animate-bouncePop">
            Enviar
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <Footer />

      {/* Botón flotante ubicación */}
      <ShareLocationButton />
    </div>
  );
}
