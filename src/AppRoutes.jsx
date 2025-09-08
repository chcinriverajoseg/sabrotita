import { Routes, Route } from "react-router-dom";
import App from "./App";
import ShopPage from "./pages/ShopPage";
import AdminReservations from "./pages/AdminReservations";



export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/admin" element={<AdminReservations />} />
    </Routes>
  );
}
