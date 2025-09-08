import { Facebook, Instagram, Twitter, Music } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo */}
        <h2 className="text-2xl font-bold text-secondary">Sabrotita</h2>

        {/* Links */}
        <ul className="flex gap-6">
          <li>
            <a href="#home" className="hover:text-secondary">
              Inicio
            </a>
          </li>
          <li>
            <a href="#menu" className="hover:text-secondary">
              Menú
            </a>
          </li>
          <li>
            <a href="#benefits" className="hover:text-secondary">
              Beneficios
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-secondary">
              Contacto
            </a>
          </li>
        </ul>

        {/* Redes sociales */}
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <Facebook className="w-6 h-6 hover:text-secondary transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <Instagram className="w-6 h-6 hover:text-secondary transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <Twitter className="w-6 h-6 hover:text-secondary transition" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer">
            <Music className="w-6 h-6 hover:text-secondary transition" />
          </a>
        </div>
      </div>

      {/* Derechos */}
      <p className="text-center text-gray-400 text-sm mt-6">
        © {new Date().getFullYear()} Sabrotita. Todos los derechos reservados.
      </p>
    </footer>
  );
}
