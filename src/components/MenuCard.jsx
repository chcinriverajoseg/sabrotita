import { useCart } from "../context/CartContext";

export default function MenuCard({ title, image, description, price }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({ title, price });

    // reproducir sonido si existe
    const audio = new Audio("/sounds/add.mp3");
    audio.play().catch(() => {
      console.warn("El navegador bloqueó el autoplay o no encontró el audio.");
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition flex flex-col">
      {/* Imagen */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Contenido */}
      <div className="p-5 flex flex-col flex-grow">
        <h4 className="text-xl font-bold mb-2">{title}</h4>
        <p className="text-gray-600 flex-grow">{description}</p>
        <p className="text-lg font-semibold text-primary mt-4">💲{price}</p>

        {/* Botón */}
        <button
          onClick={handleAdd}
          className="mt-4 w-full bg-primary text-white py-2 rounded-lg hover:bg-purple-700 transition animate-bouncePop"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
