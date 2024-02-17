/*
  Warnings:

  - You are about to drop the column `cpdateDate` on the `Booking` table. All the data in the column will be lost.
  - Added the required column `date` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "cpdateDate",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updateDate" TIMESTAMP(3),
ALTER COLUMN "wasConsolidatedCoupon" DROP NOT NULL;
