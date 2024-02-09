import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { BusinessUnit } from "@prisma/client";
import { Button } from "./ui/button";

interface BusinessUnitItemProps {
    businessUnit: BusinessUnit;
}

const BusinessUnitItem = ({ businessUnit }: BusinessUnitItemProps) => {

    return (
        <Card className="min-w-[168px] max-w-[168px] rounded-2xl">
            <CardContent className="p-1">
                <div className="h-40 w-full relative">
                    {businessUnit.ImageUrl && (
                        <Image
                            src={businessUnit.ImageUrl}
                            alt={businessUnit.Name}
                            fill
                            style={{
                                objectFit: "cover"
                            }}
                            className="px-1 rounded-2xl"
                        />
                    )}
                </div>
                <div className="px-3 pb-3">
                    <h2 className="mt-2 font-bold overflow-x-hidden text-nowrap text-ellipsis">
                        {businessUnit.Name}
                    </h2>
                    <p className="text-sm text-gray-400 overflow-x-hidden text-nowrap text-ellipsis">
                        {businessUnit.Adress}
                    </p>
                    <Button variant="secondary" className="mt-3 w-full">
                        Reservar
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default BusinessUnitItem;
