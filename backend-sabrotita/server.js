import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import reservationRoutes from "./routes/reservationRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// rutas
app.use("/api/reservations", reservationRoutes);

// conexión MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB conectado"))
  .catch(err => console.error("❌ Error en MongoDB", err));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
