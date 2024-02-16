"use client"


import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import SideMenuComponent from "./sideMenuIcon";

const Header = () => {

    return (
        <>
            <Card>
                <CardContent className="p-5  justify-between flex items-center flex-row">
                    <Image src="/logo_teste.png" width={120} height={45} alt="logo" />
                    <SideMenuComponent/>
                </CardContent>
            </Card>
        </>
    );
}

export default Header;