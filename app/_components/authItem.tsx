"use client"

import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { LogInIcon, LogOutIcon, UserIcon } from "lucide-react";
import { Button } from "./ui/button";

const AuthItemComponent = () => {
    const { data } = useSession();

    const handleLogInClick = () => signIn("google");
    const handleLogOutClick = () => signOut();

    return (
    <div>
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
    </div>
    );
}
export default AuthItemComponent;