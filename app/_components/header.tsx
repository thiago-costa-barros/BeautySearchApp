"use client"


import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import SideMenuComponent from "./sideMenuIcon";

const Header = () => {
    const { data, status } = useSession();

    const handleLogInClick = () => signIn("google");
    const handleLogOutClick = () => signOut();

    return (
        <>
            <Card>
                <CardContent className="p-5  justify-between flex items-center flex-row">
                    <Image src="/logo_teste.png" width={120} height={45} alt={""} />
                    <SideMenuComponent/>
                </CardContent>
            </Card>
        </>
    );
}

export default Header;