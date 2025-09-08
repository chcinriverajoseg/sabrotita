// backend/routes/reservationRoutes.js
import express from "express";
import { createReservation, getReservations } from "../controllers/reservationController.js";

const router = express.Router();

router.post("/", createReservation); // guardar nueva reserva
router.get("/", getReservations);   // listar reservas (admin)

export default router;
