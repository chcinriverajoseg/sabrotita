import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleRemove = (index) => {
    removeFromCart(index);
    const audio = new Audio("/sounds/remove.mp3");
    audio.play();
  };

  const handleClear = () => {
    clearCart();
    const audio = new Audio("/sounds/clear.mp3");
    audio.play();
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay oscuro */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* Panel del carrito */}
      <div
        className={`relative ml-auto w-80 bg-white shadow-xl rounded-l-2xl p-5 
        transform transition-transform duration-500 ease-in-out 
        ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
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

        {/* Items */}
        {cart.length === 0 ? (
          <p className="text-gray-500">Tu carrito está vacío.</p>
        ) : (
          <>
            <ul className="mb-4 space-y-2 max-h-64 overflow-y-auto pr-2">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div className="flex items-center gap-3">
                    {/* Imagen pequeña */}
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 rounded object-cover"
                      />
                    )}
                    <span>{item.title}</span>
                  </div>
                  <span className="font-semibold">💲{item.price}</span>
                  <button
                    onClick={() => handleRemove(index)}
                    className="text-red-500 hover:underline"
                  >
                    ❌
                  </button>
                </li>
              ))}
            </ul>

            <p className="font-bold mb-4 text-lg">Total: 💲{total}</p>

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
