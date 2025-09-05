import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MenuCard from "./components/MenuCard";
import Cart from "./components/Cart";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* NAVBAR */}
      <Navbar />

      {/* Carrito lateral global */}
      <Cart />

      {/* HERO */}
      <section
        id="home"
        className="pt-20 bg-gradient-to-r from-primary to-purple-900 text-white"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-20 px-6">
          <div className="max-w-xl">
            <h2 className="text-5xl font-bold mb-6 animate-fadeIn">
              Bienvenido a <span className="text-secondary">Sabrotita</span>
            </h2>
            <p className="text-lg mb-6 animate-slideUp">
              Sabores irresistibles, pedidos rápidos y la mejor experiencia
              gastronómica.
            </p>
            <a
              href="#menu"
              className="bg-secondary text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-400 transition animate-bouncePop"
            >
              Ver Menú
            </a>
          </div>
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=500"
            alt="Plato Sabrotita"
            className="rounded-2xl shadow-lg mt-10 md:mt-0 md:ml-10 w-80 animate-fadeIn"
          />
        </div>
      </section>

      {/* MENÚ */}
      <section id="menu" className="py-20 container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-10 animate-fadeIn">
          Nuestro Menú
        </h3>
        <div className="grid md:grid-cols-3 gap-10">
          <MenuCard
            title="Hamburguesa Sabrotita"
            image="https://source.unsplash.com/300x200/?burger"
            description="Jugosa, con pan artesanal y salsas únicas."
            price={10}
          />
          <MenuCard
            title="Pizza Artesanal"
            image="https://source.unsplash.com/300x200/?pizza"
            description="Queso derretido y los mejores ingredientes frescos."
            price={12}
          />
          <MenuCard
            title="Tacos Especiales"
            image="https://source.unsplash.com/300x200/?tacos"
            description="Deliciosos tacos al mejor estilo casero."
            price={8}
          />
        </div>
      </section>

      {/* BENEFICIOS */}
      <section id="benefits" className="bg-gray-100 py-20 px-6">
        <h3 className="text-3xl font-bold text-center mb-12 animate-fadeIn">
          ¿Por qué elegirnos?
        </h3>
        <div className="grid md:grid-cols-3 gap-10 container mx-auto">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition animate-slideUp">
            <h4 className="text-xl font-semibold mb-3">🍔 Ingredientes Frescos</h4>
            <p className="text-gray-600">
              Usamos productos locales de la mejor calidad para cada receta.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition animate-slideUp">
            <h4 className="text-xl font-semibold mb-3">⚡ Entrega Rápida</h4>
            <p className="text-gray-600">
              Tu pedido llega caliente y en el menor tiempo posible.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition animate-slideUp">
            <h4 className="text-xl font-semibold mb-3">💳 Pagos Seguros</h4>
            <p className="text-gray-600">
              Aceptamos múltiples métodos de pago, todos protegidos.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contact" className="py-20 container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-10 animate-fadeIn">
          Contáctanos
        </h3>
        <form className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-md">
          <input
            type="text"
            placeholder="Tu Nombre"
            className="w-full border p-3 rounded-lg mb-4 focus:ring-2 focus:ring-primary outline-none animate-shake"
          />
          <input
            type="email"
            placeholder="Tu Correo"
            className="w-full border p-3 rounded-lg mb-4 focus:ring-2 focus:ring-primary outline-none"
          />
          <textarea
            placeholder="Tu Mensaje"
            className="w-full border p-3 rounded-lg mb-4 h-32 resize-none focus:ring-2 focus:ring-primary outline-none"
          ></textarea>
          <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-purple-700 transition animate-bouncePop">
            Enviar
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
