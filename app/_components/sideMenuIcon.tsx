"use client"

import { useSession } from "next-auth/react";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { CalendarDaysIcon, HomeIcon, MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import AuthItemComponent from "./authItem";

const SideMenuComponent = () => {
    const { data } = useSession();

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" >
                    <MenuIcon />
                </Button>
            </SheetTrigger>
            <SheetContent className="p-0">
                <SheetHeader className="text-left border-b border-solid p-5">
                    <SheetTitle>
                        <h2 className="font-bold">
                            Menu
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
        </Sheet>
    );
}

export default SideMenuComponent;