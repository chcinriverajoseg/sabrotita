import { createContext, useContext, useState } from "react";

// Creamos el contexto
const CartContext = createContext();

// Hook para usar el contexto en cualquier componente
export function useCart() {
  return useContext(CartContext);
}

// Proveedor del carrito
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); // 🛒 lista de productos
  const [isCartOpen, setIsCartOpen] = useState(false); // 👈 estado del panel lateral

  // Agregar producto
  const addToCart = (item) => {
    setCart([...cart, item]);
    setIsCartOpen(true); // cuando agregamos, se abre el carrito automáticamente
  };

  // Eliminar un producto por índice
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  // Vaciar carrito
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
