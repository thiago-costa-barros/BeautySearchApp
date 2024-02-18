import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card"
import { ptBR } from "date-fns/locale";
import { format, isFuture } from "date-fns"
import { Booking, Prisma } from "@prisma/client";


interface BookingItemProps {
    booking: Prisma.BookingGetPayload<{
        include: {
            service: true,
            businessUnit: true,
        },
    }>;
};

const BookingItem = ({ booking }: BookingItemProps) => {
    const isConfirmedBooking = isFuture(booking.date)

    return (
        <Card >
            <CardContent className="flex px-3 py-0 items-center" >
                <div className="flex flex-col gap-2 py-3 flex-[3]">
                    <Badge variant={isConfirmedBooking ? 'default' : 'secondary'} className="w-fit">
                        {isConfirmedBooking ? 'Confirmado' : 'Finalizado'}
                    </Badge>
                    <h2 className="font-bold">
                        {booking.service.name}
                    </h2>
                    <div className="flex items-center gap-2">
                        {booking.businessUnit.imageUrl && (<Avatar className="h-6 w-6">
                            <AvatarImage src={booking.businessUnit.imageUrl} />
                            <AvatarFallback>{booking.businessUnit.name}</AvatarFallback>
                        </Avatar>
                        )}
                        <h3 className="text-sm">
                            {booking.businessUnit.name}
                        </h3>
                    </div>
                </div>
                <div className="flex flex-col py-3 items-center flex-1 border-l-2 border-solid">
                    <p className="text-sm font-semibold capitalize">
                        {format(booking.date, 'MMMM', {locale: ptBR})}
                    </p>
                    <p className="text-2xl font-bold">
                    {format(booking.date, 'dd')}
                    </p>
                    <p className="text-sm font-semibold">
                    {format(booking.date, 'HH:mm')}
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}

export default BookingItem;