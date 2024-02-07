import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const Header = () => {
    return (
        <>
            <Card>
                <CardContent className="p-5  justify-between flex items-center flex-row">
                    <Image src="/logo_teste.png" width={120} height={45} alt={""} />
                    <Button variant={"outline"} size={"icon"} className="h-8 w-8">
                        <MenuIcon/>
                    </Button>
                </CardContent>
            </Card>
        </>
    );
}

export default Header;