import MenuCard from "../components/MenuCard";

export default function Promotions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 pt-28">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-14 text-secondary animate-fadeIn">
          🎉 Promociones de la Semana
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          <MenuCard
            title="Combo Hamburguesa + Cerveza"
            image="https://source.unsplash.com/400x300/?burger,beer"
            description="Incluye una hamburguesa Sabrotita y una cerveza artesanal."
            price={12} // Precio con descuento
          />
          <MenuCard
            title="Pizza + 2 Refrescos"
            image="https://source.unsplash.com/400x300/?pizza,cola"
            description="Pizza artesanal grande más 2 refrescos a elección."
            price={15}
          />
          <MenuCard
            title="Pack de Tacos (x5)"
            image="https://source.unsplash.com/400x300/?tacos"
            description="5 tacos especiales al precio de 4. ¡Oferta imperdible!"
            price={10}
          />
          <MenuCard
            title="2 Mojitos por 1"
            image="https://source.unsplash.com/400x300/?mojito"
            description="Disfruta el sabor caribeño en compañía con este 2x1."
            price={8}
          />
          <MenuCard
            title="Combo Familiar"
            image="https://source.unsplash.com/400x300/?family,food"
            description="Incluye pizza grande, 2 hamburguesas y 4 refrescos."
            price={30}
          />
          <MenuCard
            title="Tequila Shots (x3)"
            image="https://source.unsplash.com/400x300/?tequila"
            description="Promoción especial en shots de tequila, ¡anímate!"
            price={9}
          />
        </div>
      </div>
    </div>
  );
}
