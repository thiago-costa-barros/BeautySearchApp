import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { BusinessUnit } from "@prisma/client";

interface BusinessUnitItemProps {
    businessUnit: BusinessUnit;
}

const BusinessUnitItem = ({ businessUnit }: BusinessUnitItemProps) => {
    return (
        <Card>
            <CardContent>
                <Image
                    src={businessUnit.ImageUrl}
                    width={0}
                    height={0}
                />
                <h1>
                    {businessUnit.Name}
                </h1>
            </CardContent>
        </Card>
    );
}

export default BusinessUnitItem;