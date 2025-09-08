import { useState } from "react";
import { MapPin } from "lucide-react";

export default function ShareLocationButton() {
  const [loading, setLoading] = useState(false);

  const handleShareLocation = () => {
    if (!navigator.geolocation) {
      alert("Tu navegador no soporta geolocalización");
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLoading(false);
        const { latitude, longitude } = position.coords;
        const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
        // Copia la URL al portapapeles
        navigator.clipboard.writeText(googleMapsUrl);
        alert("📍 Ubicación copiada: " + googleMapsUrl);
      },
      () => {
        setLoading(false);
        alert("❌ No se pudo obtener tu ubicación");
      }
    );
  };

  return (
    <button
      onClick={handleShareLocation}
      className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition animate-bouncePop"
    >
      {loading ? "..." : <MapPin className="w-6 h-6" />}
    </button>
  );
}
