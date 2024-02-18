import BookingItem from "../_components/bookingItem";
import BusinessUnitItem from "../_components/businessUnitItem";
import Header from "../_components/header";
import Search from "./_components/search";
import Welcome from "./_components/welcome";
import { db } from "../_lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { isFuture } from "date-fns";
import { Badge } from "../_components/ui/badge";
import { Button } from "../_components/ui/button";
import Link from "next/link";


export default async function Home() {
  const session = await getServerSession(authOptions)
  const bookings = session?.user ? await db.booking.findMany({
    where: {
      AND: [
        {
          userId: (session.user as any).id
        },
        {
          date: {
            gte: new Date()
          }
        } // Filtrar para data maior ou igual à data atual
      ]
    },
    include: {
      service: true,
      businessUnit: true,
    },
    orderBy: {
      date: 'asc', // ou 'desc' para ordem decrescente
    },
    take: 3,
  }) : [];

  const nextBooking = bookings.filter((booking) => isFuture(booking.date))

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
        {session?.user ? (
          <>
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-bold text-sm text-gray-400 uppercase">
                Próximos Agendamentos
              </h2>
              <Link href="/bookings">
                <Button size="sm" variant="outline" className="w-fit rounded-2xl text-sm bg-secondary hover:bg-slate-600">
                  Ver todos
                </Button>
              </Link>
            </div>
            {bookings.length === 0 ? (
              <div>
                <p className="font-bold text-sm text-gray-500">
                  Você não possui agendamentos
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {nextBooking.map((booking) => (
                  <BookingItem key={booking.id} booking={booking} />
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            
          </>
        )}
      </div>
      <div className="px-5 mt-6">
        <h2 className=" mb-3 font-bold text-sm text-gray-400 uppercase">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {businessUnits.map((businessUnit) => (
            <BusinessUnitItem key={businessUnit.id} businessUnit={businessUnit} />
          ))}
        </div>
      </div>
      <div className="px-5 mt-6">
        <h2 className=" mb-3 font-bold text-sm text-gray-400 uppercase">
          Populares
        </h2>
        <div className=" flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {businessUnitsAvgOrderBy.map((businessUnit) => (
            <BusinessUnitItem key={businessUnit.id} businessUnit={businessUnit} />
          ))}
        </div>
      </div>
    </div>
  );
}
