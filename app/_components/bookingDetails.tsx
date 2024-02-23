"use client";

import { Prisma } from "@prisma/client";
import { Card, CardContent } from "./ui/card";
import { SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle } from "./ui/sheet";
import { format } from "date-fns/format";
import Image from "next/image";
import { Avatar, AvatarImage } from "./ui/avatar";
import { isFuture } from "date-fns";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { cancelBooking } from "../_actions/cancelBooking";
import { toast } from "sonner";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger, AlertDialogHeader, AlertDialogFooter } from "./ui/alert-dialog";



interface BookingDetailsProps {
    booking: Prisma.BookingGetPayload<{
        include: {
            service: true,
            businessUnit: true,
        },
    }>;
    sheetIsOpen: boolean,
    setSheetIsOpen: (isOpen: boolean) => void,
};

const BookingDetails = ({ booking, sheetIsOpen, setSheetIsOpen }: BookingDetailsProps) => {

    const [isDeleteIsLoading, SetIsDeleteIsLoading] = useState(false);

    const isConfirmedBooking = isFuture(booking.date);

    const handleCancelBooking = async () => {
        SetIsDeleteIsLoading(true)
        try {
            await cancelBooking(booking.id)

            toast.success("Agendamento Cancelado com sucesso!")

            setSheetIsOpen(false)
        } catch (error) {
            console.error(error)
        } finally {
            SetIsDeleteIsLoading(false)
        }
    };


    return (
        <SheetContent>
            <SheetHeader className="text-left border-b border-solid py-5">
                <SheetTitle>
                    <h2 className="font-bold">
                        Detalhes do Agendamento
                    </h2>
                </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col mt-3 gap-4">
                <div className="">
                    <Badge variant={isConfirmedBooking ? 'default' : 'secondary'} className="w-fit">
                        {isConfirmedBooking ? 'Confirmado' : 'Finalizado'}
                    </Badge>
                </div>
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
            <div className="flex flex-col mt-3 gap-6">
                <div className="relative h-[180px] w-full">
                    <Image
                        src="/mockUpMap.png"
                        fill
                        style={{
                            objectFit: "contain",
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
            <SheetFooter className="flex-row gap-3 mt-3">
                <SheetClose asChild>
                    <Button
                        variant="secondary"
                        className="w-[50%]">
                        Voltar
                    </Button>
                </SheetClose>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button
                            disabled={!isConfirmedBooking || isDeleteIsLoading}
                            variant="destructive"
                            className="w-[50%]"                            
                        >
                            {isDeleteIsLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Cancelando
                                </>
                            ) : (
                                'Cancelar Agendamento'
                            )}

                        </Button>
                        </AlertDialogTrigger>
                    <AlertDialogContent className="w-[80%]">
                        <AlertDialogHeader>
                            <AlertDialogTitle>Deseja cancelar o agendamento?</AlertDialogTitle>
                            <AlertDialogDescription>
                                Após confirmada, essa ação não pode ser desfeita
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter className="flex-row gap-3">
                            <AlertDialogCancel className="w-full mt-0">Voltar</AlertDialogCancel>
                            <AlertDialogAction 
                            className="w-full" 
                            onClick={handleCancelBooking}
                            >
                                Cancelar
                                </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </SheetFooter>
        </SheetContent>
    );
}

export default BookingDetails;