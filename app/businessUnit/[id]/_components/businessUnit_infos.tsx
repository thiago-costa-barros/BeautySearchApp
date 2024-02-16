"use client"
import MenuIconComponent from "@/app/_components/menuIcon";
import { Button } from "@/app/_components/ui/button";
import { BusinessUnit } from "@prisma/client";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BusinessUnitInfosProps {
    businessUnit:BusinessUnit
}
const BusinessUnitInfos = ({businessUnit} : BusinessUnitInfosProps) => {
    const router = useRouter();

    const handleReturnClick = () => {
        router.back();
    }

    return (
        <div >
            <div className="h-[250px] w-full relative">
                <Button className="z-50 absolute top-3 left-3" size="icon" variant="outline">
                    <ChevronLeftIcon onClick={handleReturnClick}/>
                </Button>
                <Button className="z-50 absolute top-3 right-3" size="icon" variant="outline">
                    <MenuIconComponent/>
                </Button>
                {businessUnit.imageUrl && (
                    <Image
                        src={businessUnit.imageUrl}
                        alt={businessUnit.name}
                        fill
                        style={{
                            objectFit: "cover"
                        }}
                        className="opacity-90"
                    />
                )}
            </div>
            <div className="px-5 py-3">
                <h1 className="text-2xl font-bold ">
                    {businessUnit.name}
                </h1>
                <div className="flex items-center gap-2 mt-2">
                    <MapPinIcon className="text-primary size-5" />
                    <p className="text-sm ">
                        {businessUnit.adress}
                    </p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                    <StarIcon className=" text-primary size-5" />
                    <p className="text-sm ">
                        {businessUnit.avgRating !== null
                            ? businessUnit.avgRating.toString().replace('.', ',')
                            : 'N/A'} (qnt avaliações)
                    </p>
                </div>

            </div>
            <div className="mx-5 mt-5 border-b border-solid border-secondary">

            </div>
            <div className="flex items-center px-5 py-3 mt-5 gap-2">
                <Button>
                    Serviços
                </Button>
                <Button variant="outline">
                    Informações
                </Button>
            </div>

        </div>
    );
}

export default BusinessUnitInfos;