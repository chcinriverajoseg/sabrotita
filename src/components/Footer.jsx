import { Facebook, Instagram, Twitter, Music } from "lucide-react"; // ✅ íconos de lucide-react

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo */}
        <h2 className="text-2xl font-bold text-secondary">Sabrotita</h2>

        {/* Links de navegación */}
        <ul className="flex gap-6">
          <li>
            <a href="#home" className="hover:text-secondary transition">Inicio</a>
          </li>
          <li>
            <a href="#menu" className="hover:text-secondary transition">Menú</a>
          </li>
          <li>
            <a href="#benefits" className="hover:text-secondary transition">Beneficios</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-secondary transition">Contacto</a>
          </li>
        </ul>

        {/* Redes sociales */}
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <Facebook className="w-6 h-6 hover:text-blue-500 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <Instagram className="w-6 h-6 hover:text-pink-500 transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <Twitter className="w-6 h-6 hover:text-sky-400 transition" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer">
            <Music className="w-6 h-6 hover:text-gray-300 transition" />
          </a>
        </div>
      </div>

      {/* Derechos reservados */}
      <p className="text-center text-gray-400 text-sm mt-6">
        © {new Date().getFullYear()} Sabrotita. Todos los derechos reservados.
      </p>
    </footer>
  );
}
