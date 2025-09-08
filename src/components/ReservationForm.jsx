import { useState } from "react";
import axios from "axios";

export default function ReservationForm() {
  const [reservation, setReservation] = useState({
    name: "",
    email: "",
    people: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  };

  const handleReservation = async (e) => {
    e.preventDefault();

    try {
      // Guardar en backend
      await axios.post("http://localhost:4000/api/reservations", reservation);

      // Abrir WhatsApp
      const phone = "56912345678"; // tu número de WhatsApp
      const text = `📅 *Nueva Reserva Sabrotita* 🍽️
👤 Nombre: ${reservation.name}
📧 Correo: ${reservation.email}
👥 Personas: ${reservation.people}
📆 Fecha: ${reservation.date}
⏰ Hora: ${reservation.time}

✅ ¡Confirmar disponibilidad!`;

      const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank");

      alert("✅ Reserva enviada y guardada correctamente");
    } catch (error) {
      alert("❌ Error al guardar la reserva");
      console.error(error);
    }
  };

  return (
    <section id="reservation" className="py-24 container mx-auto px-6">
      <h3 className="text-4xl font-extrabold text-center mb-14 animate-fadeIn">
        Reserva tu Mesa 🍷
      </h3>
      <form
        onSubmit={handleReservation}
        className="max-w-lg mx-auto bg-white p-10 rounded-2xl shadow-xl space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Tu Nombre"
          value={reservation.name}
          onChange={handleChange}
          className="w-full border p-4 rounded-lg focus:ring-2 focus:ring-primary outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu Correo"
          value={reservation.email}
          onChange={handleChange}
          className="w-full border p-4 rounded-lg focus:ring-2 focus:ring-primary outline-none"
          required
        />
        <input
          type="number"
          name="people"
          placeholder="Número de personas"
          value={reservation.people}
          onChange={handleChange}
          className="w-full border p-4 rounded-lg focus:ring-2 focus:ring-primary outline-none"
          required
        />
        <input
          type="date"
          name="date"
          value={reservation.date}
          onChange={handleChange}
          className="w-full border p-4 rounded-lg focus:ring-2 focus:ring-primary outline-none"
          required
        />
        <input
          type="time"
          name="time"
          value={reservation.time}
          onChange={handleChange}
          className="w-full border p-4 rounded-lg focus:ring-2 focus:ring-primary outline-none"
          required
        />
        <button className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition animate-bouncePop">
          Reservar Mesa
        </button>
      </form>
    </section>
  );
}
