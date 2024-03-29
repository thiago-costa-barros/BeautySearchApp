"use client"

import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet";
import { BusinessUnit, Service } from "@prisma/client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import SideBookingComponent from "./sideBookingButton";
import { useState } from "react";

interface ServiceItemProps {
    businessUnit: BusinessUnit,
    service: Service,
    isAuthenticated: boolean;
}

const ServiceItem = ({ businessUnit, service, isAuthenticated }: ServiceItemProps) => {

    const handleIsAuthenticated = () => {
        if (!isAuthenticated) {
            return signIn("google")
        }
    }
    const [sheetIsOpen, setSheetIsOpen] = useState(false);

    //TODO: abrir modal de agendamento


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
                            <Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
                                <SheetTrigger asChild>
                                    <Button variant="secondary" className="mt-3 w-24" onClick={handleIsAuthenticated}>
                                        Reservar
                                    </Button>
                                </SheetTrigger>
                                <SideBookingComponent
                                    businessUnit={businessUnit}
                                    service={service}
                                    sheetIsOpen={sheetIsOpen}
                                    setSheetIsOpen={setSheetIsOpen}
                                />
                            </Sheet>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default ServiceItem;