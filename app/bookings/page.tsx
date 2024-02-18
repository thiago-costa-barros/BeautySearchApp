

import { getServerSession } from "next-auth";
import BookingItem from "../_components/bookingItem";
import Header from "../_components/header";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { db } from "../_lib/prisma";

const BookingsPage = async () => {
    const session = await getServerSession(authOptions)

    if (!session) {
        return redirect('/')
    }

    const bookings = await db.booking.findMany({
        where: {
            userId: (session.user as any).id,
        },
        include: {
            service: true,
            businessUnit: true,
        },
        orderBy: {
            date: 'asc', // ou 'desc' para ordem decrescente
          },
    });

    return (
        <div>
            <Header />
            <div className="px-5 mt-6">
                <h1 className="mb-3 text-xl font-bold uppercase">
                    AGENDAMENTOS
                </h1>
            </div>
            <div className="flex flex-col gap-3 px-5 mt-6">
                <h2 className="mb-3 font-bold text-sm text-gray-400 uppercase">
                    CONFIRMADOS
                </h2>
                <div className="flex flex-col gap-3">
                    {bookings.map((booking) =>
                        <BookingItem key={booking.id} booking={booking} />
                    )}
                </div>
            </div>
            <div className="flex flex-col gap-3 px-5 mt-6">
                <h2 className="mb-3 font-bold text-sm text-gray-400 uppercase">
                    FINALIZADOS
                </h2>

            </div>
        </div>
    );
}

export default BookingsPage;