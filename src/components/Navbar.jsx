/*import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart, setIsCartOpen } = useCart();

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50 animate-fadeIn">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo *//*}
        <Link to="/" className="text-2xl font-bold text-primary animate-bouncePop">
          Sabrotita
        </Link>

        {/* Links desktop *//*}
        <ul className="hidden md:flex gap-8 font-medium">
          <li><a href="#home" className="hover:text-primary transition">Inicio</a></li>
          <li><a href="#menu" className="hover:text-primary transition">Menú</a></li>
          <li><a href="#benefits" className="hover:text-primary transition">Beneficios</a></li>
          <li><a href="#contact" className="hover:text-primary transition">Contacto</a></li>
          <li><Link to="/shop" className="hover:text-primary transition">🛒 Shop</Link></li>
        </ul>

        {/* Carrito *//*}
        <div
          className="relative cursor-pointer animate-bouncePop"
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingCart className="w-7 h-7 text-primary" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-secondary text-xs px-2 py-1 rounded-full">
              {cart.length}
            </span>
          )}
        </div>

        {/* Menú móvil *//*}
        <button
          className="md:hidden text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </nav>

      {/* Dropdown móvil *//*}
      {menuOpen && (
        <div className="md:hidden bg-white shadow px-6 py-4 animate-slideUp">
          <ul className="flex flex-col gap-4">
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Inicio</a></li>
            <li><a href="#menu" onClick={() => setMenuOpen(false)}>Menú</a></li>
            <li><a href="#benefits" onClick={() => setMenuOpen(false)}>Beneficios</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contacto</a></li>
            <li><Link to="/shop" onClick={() => setMenuOpen(false)}>🛒 Shop</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}*/

import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react"; // íconos
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart, setIsCartOpen } = useCart(); // usamos el contexto del carrito

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-90 text-white shadow z-50 animate-fadeIn">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-yellow-400 animate-bouncePop"
        >
          Sabrotita
        </Link>

        {/* Links (desktop) */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <a
              href="#home"
              className="hover:text-yellow-400 transition animate-slideUp"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#menu"
              className="hover:text-yellow-400 transition animate-slideUp"
            >
              Menú
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-yellow-400 transition animate-slideUp"
            >
              Contacto
            </a>
          </li>
        </ul>

        {/* Carrito */}
        <div
          className="relative cursor-pointer animate-bouncePop"
          onClick={() => setIsCartOpen(true)} // 👈 abre el carrito
        >
          <ShoppingCart className="w-7 h-7 text-yellow-400" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-1 rounded-full animate-bouncePop">
              {cart.length}
            </span>
          )}
        </div>

        {/* Menú móvil (botón hamburguesa) */}
        <button
          className="md:hidden text-yellow-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </nav>

      {/* Dropdown en móvil */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 px-6 py-4 animate-slideUp">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#menu" onClick={() => setMenuOpen(false)}>
                Menú
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
