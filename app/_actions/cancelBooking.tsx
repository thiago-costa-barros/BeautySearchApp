"use server"

import { revalidatePath } from "next/cache";
import { db } from "../_lib/prisma"

export const cancelBooking = async (bookingId: any) => {
    await db.booking.delete({
        where: {
            id: bookingId,
        },
    });
    revalidatePath("/bookings")
};
