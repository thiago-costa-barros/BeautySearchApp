import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card"
import { ptBR } from "date-fns/locale";
import { format } from "date-fns"
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


    return (
        <Card >
            <CardContent className="flex px-3 pb-0 py-3 items-center" >
                <div className="flex flex-col gap-2 flex-[3]">
                    <Badge className="bg-slate-800 text-slate-300 hover:bg-slate-800 w-fit">
                        Confirmado
                    </Badge>
                    <h2 className="font-bold">
                        {booking.service.name}
                    </h2>
                    <div className="flex items-center gap-2">
                        {booking.businessUnit.imageUrl && (<Avatar className="h-6 w-6">
                            <AvatarImage src={booking.businessUnit.imageUrl} />
                            <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                        )}
                        <h3 className="text-sm">
                            {booking.businessUnit.name}
                        </h3>
                    </div>
                </div>
                <div className="flex flex-col items-center flex-1 border-l-2 border-solid">
                    <p className="text-sm font-semibold capitalize">
                        {format(booking.date, 'MMMM', {locale: ptBR})}
                    </p>
                    <p className="text-2xl font-bold">
                    {format(booking.date, 'dd', {locale: ptBR})}
                    </p>
                    <p className="text-sm font-semibold">
                    {format(booking.date, 'hh:mm', {locale: ptBR})}
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}

export default BookingItem;