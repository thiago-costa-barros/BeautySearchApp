/*
  Warnings:

  - You are about to drop the column `serviceServiceId` on the `Category` table. All the data in the column will be lost.
  - Added the required column `ServiceId` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_CouponId_fkey";

-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_serviceServiceId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceNote" DROP CONSTRAINT "ServiceNote_CouponId_fkey";

-- AlterTable
ALTER TABLE "Avaliation" ALTER COLUMN "UpdateDate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Booking" ALTER COLUMN "CouponId" DROP NOT NULL,
ALTER COLUMN "UpdateDate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "BusinessUnit" ALTER COLUMN "Adress" DROP NOT NULL,
ALTER COLUMN "Phone" DROP NOT NULL,
ALTER COLUMN "ImageUrl" DROP NOT NULL,
ALTER COLUMN "AvgRating" DROP NOT NULL,
ALTER COLUMN "UpdateDate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "serviceServiceId",
ADD COLUMN     "ServiceId" INTEGER NOT NULL,
ALTER COLUMN "UpdateDate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Coupon" ALTER COLUMN "UpdateDate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Service" ALTER COLUMN "ImageUrl" DROP NOT NULL,
ALTER COLUMN "Description" DROP NOT NULL,
ALTER COLUMN "UpdateDate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ServiceNote" ALTER COLUMN "CouponId" DROP NOT NULL,
ALTER COLUMN "UpdateDate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "UpdateDate" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_ServiceId_fkey" FOREIGN KEY ("ServiceId") REFERENCES "Service"("ServiceId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceNote" ADD CONSTRAINT "ServiceNote_CouponId_fkey" FOREIGN KEY ("CouponId") REFERENCES "Coupon"("CouponId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_CouponId_fkey" FOREIGN KEY ("CouponId") REFERENCES "Coupon"("CouponId") ON DELETE SET NULL ON UPDATE CASCADE;
