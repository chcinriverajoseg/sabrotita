// backend/controllers/reservationController.js
import Reservation from "../models/reservationModel.js";

// Crear una reserva
export const createReservation = async (req, res) => {
  try {
    const { name, email, people, date, time } = req.body;
    const reservation = new Reservation({ name, email, people, date, time });
    await reservation.save();
    res.status(201).json({ message: "✅ Reserva guardada con éxito", reservation });
  } catch (error) {
    res.status(500).json({ message: "❌ Error al guardar la reserva", error });
  }
};

// Obtener todas las reservas (solo para admin)
export const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ date: 1, time: 1 });
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: "❌ Error al obtener reservas", error });
  }
};
