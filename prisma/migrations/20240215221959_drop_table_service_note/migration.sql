/*
  Warnings:

  - You are about to drop the column `ServiceNoteId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the `ServiceNote` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ServiceId` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_ServiceNoteId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceNote" DROP CONSTRAINT "ServiceNote_BusinessUnitId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceNote" DROP CONSTRAINT "ServiceNote_CouponId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceNote" DROP CONSTRAINT "ServiceNote_ServiceId_fkey";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "ServiceNoteId",
ADD COLUMN     "ServiceId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "InitialValue" DECIMAL(10,2);

-- DropTable
DROP TABLE "ServiceNote";

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_ServiceId_fkey" FOREIGN KEY ("ServiceId") REFERENCES "Service"("ServiceId") ON DELETE RESTRICT ON UPDATE CASCADE;
