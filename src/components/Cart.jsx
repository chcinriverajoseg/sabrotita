import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart, isCartOpen, setIsCartOpen } =
    useCart();

  if (!isCartOpen) return null; // si el carrito está cerrado, no se muestra

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleRemove = (index) => {
    removeFromCart(index);
    const audio = new Audio("/sounds/remove.mp3"); // 🔊 sonido eliminar
    audio.play();
  };

  const handleClear = () => {
    clearCart();
    const audio = new Audio("/sounds/clear.mp3"); // 🔊 sonido vaciar
    audio.play();
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Fondo oscuro */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* Panel lateral */}
      <div className="relative ml-auto w-80 bg-white shadow-xl rounded-l-2xl p-5 animate-slideUp text-black">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">🛒 Carrito</h3>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-red-500 hover:underline"
          >
            ❌ Cerrar
          </button>
        </div>

        {/* Lista de productos */}
        {cart.length === 0 ? (
          <p className="text-gray-500">Tu carrito está vacío.</p>
        ) : (
          <>
            <ul className="mb-4 space-y-2">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <span>{item.title}</span>
                  <span>💲{item.price}</span>
                  <button
                    onClick={() => handleRemove(index)}
                    className="text-red-500 hover:underline"
                  >
                    ❌
                  </button>
                </li>
              ))}
            </ul>

            {/* Total */}
            <p className="font-bold mb-4">Total: 💲{total}</p>

            {/* Botón vaciar */}
            <button
              onClick={handleClear}
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
            >
              Vaciar carrito
            </button>
          </>
        )}
      </div>
    </div>
  );
}
