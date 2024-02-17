"use client"

import { useSession } from "next-auth/react";
import Link from "next/link";
import { SheetContent, SheetHeader, SheetTitle } from "@/app/_components/ui/sheet";
import { CalendarDaysIcon, HomeIcon } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import AuthItemComponent from "@/app/_components/auth_item";
import { Calendar } from "@/app/_components/ui/calendar";
import { useMemo, useState } from "react";
import { ptBR } from "date-fns/locale";
import { generateDayTimeList } from "../_helpers/hours";
import { Card, CardContent } from "@/app/_components/ui/card";
import { BusinessUnit, Service } from "@prisma/client";
import { format } from "date-fns/format";

interface ServiceItemProps {
    businessUnit: BusinessUnit,
    service: Service,
}

const SideBookingComponent = ({ businessUnit, service }: ServiceItemProps) => {
    const { data } = useSession();
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [hour, setHour] = useState<string | undefined>()
    const timeList = useMemo(() => {
        return date ? generateDayTimeList(date) : []
    }, [date])

    const handleDateClick = (date: Date | undefined) => {
        setDate(date);
        setHour(undefined)
    }

    const handleHourClick = (time: string) => {
        setHour(time)
    }

    return (
        <SheetContent className="p-0">
            <SheetHeader className="text-left border-b border-solid p-5">
                <SheetTitle>
                    <h2 className="font-bold">
                        Fazer Agendamento
                    </h2>
                </SheetTitle>
            </SheetHeader>
            <AuthItemComponent />
            <div className="flex flex-col gap-3 px-5">
                {data?.user && (
                    <Button variant="outline" className="justify-start" asChild>
                        <Link href="/bookings">
                            <CalendarDaysIcon className="mr-2" size={18} />
                            Meus Agendamentos
                        </Link>
                    </Button>
                )}
            </div>
            <div className="flex flex-col gap-3 px-5 mt-4">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={handleDateClick}
                    locale={ptBR}
                    fromDate={new Date()}
                    styles={{
                        head_cell: {
                            width: "100%",
                            textTransform: "capitalize",
                        },
                        cell: {
                            width: "100%",
                        },
                        nav_button_next: {
                            width: "fit-content"
                        },
                        nav_button_previous: {
                            width: "fit-content"
                        },
                        caption: {
                            textTransform: "capitalize"
                        },
                    }}
                />
            </div>
            {date && (
                <div className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden gap-3 px-5 py-6 border-y boder-solid border-secondary">
                    {timeList.map((time) => (
                        <Button
                            variant={hour === time ? "default" : "outline"}
                            key={time}
                            className="rounded-full text-base font-bold"
                            onClick={() => handleHourClick(time)}
                        >
                            {time}
                        </Button>
                    ))}
                </div>
            )}
            <div className="py-5 px-5 mt-4">
                <Card>
                    <CardContent className="flex flex-col p-3 gap-y-2">
                        <div className="flex justify-between">
                            <h2 className="font-bold">
                                {service.name}
                            </h2>
                            <h2 className="font-bold">
                                {Intl.NumberFormat(
                                    "pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                }).format(Number(service.price))}
                            </h2>
                        </div>
                        {date && (
                            <div className="flex justify-between">
                                <h3 className="text-gray-400 text-sm">
                                    Data
                                </h3>
                                <h3 className="text-sm">
                                    {format(date, "dd'/'MM'/'yy")}
                                </h3>
                            </div>
                        )}
                        {hour && (
                            <div className="flex justify-between">
                                <h3 className="text-gray-400 text-sm">
                                    Horário
                                </h3>
                                <h3 className="text-sm">
                                    {hour}
                                </h3>
                            </div>
                        )}
                        <div className="flex justify-between">
                            <h3 className="text-gray-400 text-sm">
                                Estabelecimento
                            </h3>
                            <h3 className="text-sm">
                                {businessUnit.name}
                            </h3>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </SheetContent>
    );
}

export default SideBookingComponent;