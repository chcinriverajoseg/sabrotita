import { useEffect } from "react";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 4000); // ⏱️ Dura 4 segundos
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-400">
      {/* Logo SVG animado */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className="w-32 h-32 animate-pulse drop-shadow-lg"
      >
        {/* Fondo circular */}
        <circle cx="100" cy="100" r="90" fill="white" className="animate-bounce" />

        {/* 🍔 Hamburguesa */}
        <text x="50%" y="45%" textAnchor="middle" fontSize="36" dy=".3em">
          🍔
        </text>

        {/* 🍕 Pizza */}
        <text x="35%" y="70%" textAnchor="middle" fontSize="32" dy=".3em">
          🍕
        </text>

        {/* 🍣 Sushi */}
        <text x="65%" y="70%" textAnchor="middle" fontSize="32" dy=".3em">
          🍣
        </text>

        {/* 🍹 Trago */}
        <text x="50%" y="90%" textAnchor="middle" fontSize="30" dy=".3em">
          🍹
        </text>
      </svg>

      {/* Texto Sabrotita */}
      <h1 className="mt-6 text-5xl font-extrabold text-white animate-fadeIn">
        Sabrotita
      </h1>

      {/* Subtexto */}
      <p className="text-white mt-2 text-lg animate-slideUp">
        Sabor y diversión en un solo lugar ✨
      </p>
    </div>
  );
}
