"use server"

import { db } from "../_lib/prisma"

export const cancelBooking = async (bookingId: any) => {
    return await db.booking.delete({
        where: {
            id: bookingId,
        },
    });
};