import BookingItem from "../_components/bookingItem";
import BusinessUnitItem from "../_components/businessUnitItem";
import Header from "../_components/header";
import Search from "./_components/search";
import Welcome from "./_components/welcome";
import { db } from "../_lib/prisma";


export default async function Home(booking : any) {

  const businessUnits = await db.businessUnit.findMany({
    orderBy: {
      creationDate: 'desc'
    },
    take: 10
  });
  const businessUnitsAvgOrderBy = await db.businessUnit.findMany({
    orderBy: {
      avgRating: 'desc' // Ordenar por AvgRating em ordem decrescente
    },
    take: 5 // Limitar o resultado aos top 5
  });
  return (
    <div>
      <Header />
      <div className="px-5 pt-5">
        <Welcome />
      </div>
      <div className="px-5 mt-6">
        <Search />
      </div>
      <div className="px-5 mt-6">
        <h2 className="mb-3 font-bold text-sm text-gray-400 uppercase">
          AGENDAMENTOS
        </h2>
        <BookingItem booking={booking} />
      </div>
      <div className="mt-6">
        <h2 className="px-5 mb-3 font-bold text-sm text-gray-400 uppercase">
          Recomendados
        </h2>
        <div className="px-5 flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {businessUnits.map((businessUnit) => (
            <BusinessUnitItem key={businessUnit.id} businessUnit={businessUnit} />
          ))}
        </div>
      </div>
      <div className="mt-6">
        <h2 className="px-5 mb-3 font-bold text-sm text-gray-400 uppercase">
          Populares
        </h2>
        <div className="px-5 flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {businessUnitsAvgOrderBy.map((businessUnit) => (
            <BusinessUnitItem key={businessUnit.id} businessUnit={businessUnit} />
          ))}
        </div>
      </div>
    </div>
  );
}
