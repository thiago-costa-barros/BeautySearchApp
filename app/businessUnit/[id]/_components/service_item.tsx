import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Service } from "@prisma/client";
import Image from "next/image";

interface ServiceItemProps {
    service: Service
}

const ServiceItem = ({ service }: ServiceItemProps) => {
    return (
        <Card >
            <CardContent className="p-3">
                <div className="flex gap-4 items-center">
                    <div className="relative min-h-32 min-w-32 max-h-32 max-w-32">
                        {service.imageUrl && (
                            <Image
                                className="rounded-lg"
                                src={service.imageUrl}
                                alt={service.name}
                                fill
                                style={{
                                    objectFit: "contain"
                                }}
                            />
                        )}
                    </div>
                    <div className=" flex flex-col w-full">
                        <h1 className="text-lg font-bold">
                            {service.name}
                        </h1>
                        <p className="text-sm text-gray-400">
                            {service.description}
                        </p>
                        <div className=" flex items-center justify-between">
                            <p className="text-lg font-bold text-primary">
                                {Intl.NumberFormat(
                                    "pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    }).format(Number(service.price))}
                            </p>
                            <Button variant="secondary" className="mt-3 w-24">
                                Reservar
                            </Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default ServiceItem;