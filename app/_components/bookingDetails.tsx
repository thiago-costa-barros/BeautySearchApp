
import { Prisma } from "@prisma/client";
import { Card, CardContent } from "./ui/card";
import { SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { format } from "date-fns/format";
import Image from "next/image";
import { Avatar, AvatarImage } from "./ui/avatar";

interface BookingDetailsProps {
    booking: Prisma.BookingGetPayload<{
        include: {
            service: true,
            businessUnit: true,
        },
    }>;
};

const BookingDetails = ({ booking }: BookingDetailsProps) => {
    return (
        <SheetContent>
            <SheetHeader className="text-left border-b border-solid py-5">
                <SheetTitle>
                    <h2 className="font-bold">
                        Detalhes do Agendamento
                    </h2>
                </SheetTitle>
            </SheetHeader>
            <div className="">
                    <Card>
                        <CardContent className="flex flex-col p-3 gap-3">
                            <div className="flex justify-between">
                                <h2 className="font-bold">
                                    {booking.service.name}
                                </h2>
                                <h2 className="font-bold">
                                    {Intl.NumberFormat(
                                        "pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    }).format(Number(booking.service.price))}
                                </h2>
                            </div>
                            <div className="flex justify-between">
                                <h3 className="text-gray-400 text-sm">
                                    Data
                                </h3>
                                <h3 className="text-sm">
                                    {format(booking.date, "dd'/'MM'/'yy")}
                                </h3>
                            </div>
                            <div className="flex justify-between">
                                <h3 className="text-gray-400 text-sm">
                                    Horário
                                </h3>
                                <h3 className="text-sm">
                                    {format(booking.date, "HH:mm")}
                                </h3>
                            </div>
                            <div className="flex justify-between">
                                <h3 className="text-gray-400 text-sm">
                                    Estabelecimento
                                </h3>
                                <h3 className="text-sm">
                                    {booking.businessUnit.name}
                                </h3>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            <div className="flex flex-col mt-6 gap-6">
                <div className="relative h-[180px] border w-full">
                    <Image
                        src="/mockUpMap.png"
                        fill
                        style={{
                            objectFit: "contain"
                        }}
                        alt={booking.businessUnit.name}
                    />
                    <div className="w-full absolute bottom-4 px-5 ">
                        <Card>
                            <CardContent className="flex p-2 gap-3 items-center">
                                <Avatar>
                                    <AvatarImage src={(booking?.businessUnit.imageUrl) as any} />
                                </Avatar>
                                <div className="flex flex-col">
                                    <h2 className="font-bold">
                                        {booking.businessUnit.name}
                                    </h2>
                                    <h3 className="text-xs overflow-hidden text-nowrap text-ellipsis">
                                        {booking.businessUnit.adress}
                                    </h3>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                
            </div>
        </SheetContent>
    );
}

export default BookingDetails;