"use server";

import { db } from "@/app/_lib/prisma";
import { revalidatePath } from "next/cache";

interface saveBookingParams{
    serviceId: number;
    userId : any;
    businessUnitId : number;
    date: Date;
    initialValue: any;
    principalValue: any;
}

export const saveBooking = async (params : saveBookingParams) => {
    await db.booking.create({
        data: {
            serviceId: params.serviceId,
            userId: params.userId,
            businessUnitId: params.businessUnitId,
            date: params.date,
            initialValue: params.initialValue,
            principalValue: params.principalValue
        },
    });
    revalidatePath("/bookings")
};