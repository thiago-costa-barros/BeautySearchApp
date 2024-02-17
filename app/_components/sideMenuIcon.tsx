"use client"

import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { CalendarDaysIcon, HomeIcon, LogInIcon, LogOutIcon, MenuIcon, UserIcon } from "lucide-react";
import { Button } from "./ui/button";

const SideMenuComponent = () => {
    const { data } = useSession();

    const handleLogInClick = () => signIn("google");
    const handleLogOutClick = () => signOut();

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
                {data?.user ? (
                    <div className="px-5 py-6 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src={data.user?.image ?? ""} />
                            </Avatar>
                            <h2 className="font-bold">
                                {data.user.name}
                            </h2>
                        </div>
                        <Button variant="secondary" size="icon">
                            <LogOutIcon
                                onClick={handleLogOutClick}
                            />
                        </Button>
                    </div>
                ) : (
                    <div className="flex flex-col gap-3 px-5 py-6">
                        <div className="flex items-center gap-3">
                            <UserIcon size={28} />
                            <h2 className="font-bold">
                                Olá, faça seu login!
                            </h2>
                        </div>
                        <Button variant="secondary" className="w-full justify-start" onClick={handleLogInClick}>
                            <LogInIcon className="mr-2" size={18} />
                            Fazer Login
                        </Button>
                    </div>
                )}
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