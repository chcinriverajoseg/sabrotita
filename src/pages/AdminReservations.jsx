import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminReservations() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/reservations");
        setReservations(res.data);
      } catch (error) {
        console.error("❌ Error cargando reservas:", error);
      }
    };
    fetchReservations();
  }, []);

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6">
      <h2 className="text-4xl font-extrabold text-center mb-12">
        📋 Reservas Sabrotita
      </h2>

      {reservations.length === 0 ? (
        <p className="text-center text-gray-400">
          No hay reservas registradas aún.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-700 rounded-lg shadow-lg">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-4 py-2">Nombre</th>
                <th className="px-4 py-2">Correo</th>
                <th className="px-4 py-2">Personas</th>
                <th className="px-4 py-2">Fecha</th>
                <th className="px-4 py-2">Hora</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((res, i) => (
                <tr
                  key={i}
                  className="border-t border-gray-700 hover:bg-gray-800 transition"
                >
                  <td className="px-4 py-2">{res.name}</td>
                  <td className="px-4 py-2">{res.email}</td>
                  <td className="px-4 py-2">{res.people}</td>
                  <td className="px-4 py-2">{res.date}</td>
                  <td className="px-4 py-2">{res.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
