"use server"

import { db } from "@/app/_lib/prisma"
import { endOfDay, startOfDay } from "date-fns"
import { revalidatePath } from "next/cache";

export const getDateBookings = async (businessUnitId: number, date: Date) => {
    const bookings = await db.booking.findMany({
        where: {
            businessUnitId,
            date: {
                lte : endOfDay(date),
                gte : startOfDay(date),
            },
        },
    });
    revalidatePath("/")
    revalidatePath("/bookings")
    return bookings;
};