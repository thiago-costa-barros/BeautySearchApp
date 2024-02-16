"use client"

import { LogInIcon, LogOutIcon, MenuIcon, UserIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

const Header = () => {
    const { data, status } = useSession();

    const handleLogInClick = () => signIn();
    const handleLogOutClick = () => signOut();

    return (
        <>
            <Card>
                <CardContent className="p-5  justify-between flex items-center flex-row">
                    <Image src="/logo_teste.png" width={120} height={45} alt={""} />
                    <Sheet>
                        <SheetTrigger>
                            <Button variant={"outline"} size={"icon"} className="h-8 w-8">
                                <MenuIcon />
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="p-0">
                            <SheetHeader className="text-left border-b border-solid p-5">
                                <SheetTitle>
                                    Menu
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
                                    <Button variant="secondary" className="w-full" onClick={handleLogInClick}>
                                        <LogInIcon className="mr-2" size={18} />
                                        Fazer Login
                                    </Button>
                                </div>
                            )}
                        </SheetContent>
                    </Sheet>
                </CardContent>
            </Card>
        </>
    );
}

export default Header;