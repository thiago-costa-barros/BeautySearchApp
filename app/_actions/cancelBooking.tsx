"use server"

import { db } from "../_lib/prisma"

export const CancelBooking = async (bookingId: any) => {
    return await db.booking.delete({
        where: {
            id: bookingId,
        },
    });
};