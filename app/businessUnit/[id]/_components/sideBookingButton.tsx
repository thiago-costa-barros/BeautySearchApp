"use client"

import { useSession } from "next-auth/react";
import Link from "next/link";
import { SheetContent, SheetHeader, SheetTitle } from "@/app/_components/ui/sheet";
import { CalendarDaysIcon, HomeIcon } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import AuthItemComponent from "@/app/_components/auth_item";


const SideBookingComponent = () => {
    const { data } = useSession();

    return (
            <SheetContent className="p-0">
                <SheetHeader className="text-left border-b border-solid p-5">
                    <SheetTitle>
                        <h2 className="font-bold">
                            Fazer Agendamento
                        </h2>
                    </SheetTitle>
                </SheetHeader>
                <AuthItemComponent/>
                <div className="flex flex-col gap-3 px-5">
                    <Button variant="outline" className="justify-start" asChild>
                        <Link href="/">
                            <HomeIcon className="mr-2" size={18} />
                            Início
                        </Link>
                    </Button>
                    {data?.user && (
                        <Button variant="outline" className="justify-start" asChild>
                            <Link href="/bookings">
                                <CalendarDaysIcon className="mr-2" size={18} />
                                Agendamentos
                            </Link>
                        </Button>
                    )}
                </div>
            </SheetContent>
    );
}

export default SideBookingComponent;