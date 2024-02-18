"use server"

import { db } from "@/app/_lib/prisma"
import { endOfDay, startOfDay } from "date-fns"

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
    return bookings;
};