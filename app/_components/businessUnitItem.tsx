"use client";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { BusinessUnit } from "@prisma/client";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { StarIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface BusinessUnitItemProps {
    businessUnit: BusinessUnit;
}

const BusinessUnitItem = ({ businessUnit }: BusinessUnitItemProps) => {
    const router = useRouter();

    const handleBookingClick = () => {
        router.push(`/businessUnit/${businessUnit.id}`);
    }

    return (
        <Card className="min-w-[168px] max-w-[168px] rounded-2xl">
            <CardContent className="p-1">
                <div className="h-40 w-full relative">
                    <div className="absolute top-2 left-2 z-50">
                        <Badge variant="secondary" className=" gap-1 flex items-center opacity-90">
                            <StarIcon className="size-3 fill-primary text-primary" />
                            <span>
                            {businessUnit.avgRating !== null
                                    ? Number(businessUnit.avgRating).toFixed(2).toString().replace('.', ',')
                                    : 'N/A'}
                            </span>
                        </Badge>
                    </div>
                    {businessUnit.imageUrl && (
                        <Image 
                            className="rounded-2xl"
                            src={businessUnit.imageUrl}
                            alt={businessUnit.name}
                            fill
                            style={{
                                objectFit: "cover"
                            }}
                        />
                    )}
                </div>
                <div className="px-3 pb-3">
                    <h2 className="mt-2 font-bold overflow-x-hidden text-nowrap text-ellipsis">
                        {businessUnit.name}
                    </h2>
                    <p className="text-sm text-gray-400 overflow-x-hidden text-nowrap text-ellipsis">
                        {businessUnit.adress}
                    </p>
                    <Button variant="secondary" className="mt-3 w-full" onClick={handleBookingClick}>
                        Reservar
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default BusinessUnitItem;
