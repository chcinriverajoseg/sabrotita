import { createContext, useContext, useState } from "react";

// 1️⃣ Creamos el contexto
const CartContext = createContext();

// 2️⃣ Proveedor del contexto
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); // Productos en el carrito
  const [isCartOpen, setIsCartOpen] = useState(false); // Estado abierto/cerrado

  // ➕ Agregar producto
  const addToCart = (item) => {
    setCart([...cart, item]);
    setIsCartOpen(true); // abre el carrito al agregar
  };

  // ❌ Eliminar un producto por índice
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  // 🗑️ Vaciar carrito
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// 3️⃣ Hook para usarlo en componentes
export function useCart() {
  return useContext(CartContext);
}
