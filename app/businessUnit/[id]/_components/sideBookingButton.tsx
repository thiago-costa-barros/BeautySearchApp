"use client"

import { useSession } from "next-auth/react";
import Link from "next/link";
import { SheetContent, SheetHeader, SheetTitle } from "@/app/_components/ui/sheet";
import { CalendarDaysIcon, HomeIcon } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import AuthItemComponent from "@/app/_components/auth_item";
import { Calendar } from "@/app/_components/ui/calendar";
import { useState } from "react";
import { ptBR } from "date-fns/locale";


const SideBookingComponent = () => {
    const { data } = useSession();
    const [date, setDate] = useState<Date | undefined>(new Date())
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
                    onSelect={setDate}
                    className="rounded-md border"
                    locale={ptBR}
                    styles={{
                        head_cell:{
                            width:"100%",
                            textTransform:"capitalize",
                        },
                        cell:{
                            width:"100%",
                        },
                        nav_button_next:{
                            width:"fit-content"
                        },
                        nav_button_previous:{
                            width:"fit-content"
                        },
                        caption:{
                            textTransform:"capitalize"
                        },
                    }}
                />
            </div>
        </SheetContent>
    );
}

export default SideBookingComponent;