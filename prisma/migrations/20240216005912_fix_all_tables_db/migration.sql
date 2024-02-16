/*
  Warnings:

  - The primary key for the `Account` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `AccessToken` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `AccountId` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `ExpiresAt` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `RefreshToken` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `Scope` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `SessionState` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `TokenId` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `TokenType` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `Type` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `UserId` on the `Account` table. All the data in the column will be lost.
  - The primary key for the `Avaliation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `AvaliationId` on the `Avaliation` table. All the data in the column will be lost.
  - You are about to drop the column `BusinessUnitId` on the `Avaliation` table. All the data in the column will be lost.
  - You are about to drop the column `CreationDate` on the `Avaliation` table. All the data in the column will be lost.
  - You are about to drop the column `Message` on the `Avaliation` table. All the data in the column will be lost.
  - You are about to drop the column `Rating` on the `Avaliation` table. All the data in the column will be lost.
  - You are about to drop the column `UpdateDate` on the `Avaliation` table. All the data in the column will be lost.
  - You are about to drop the column `UserId` on the `Avaliation` table. All the data in the column will be lost.
  - The primary key for the `Booking` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `BookingId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `BusinessUnitId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `CouponId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `CreationDate` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `InitialValue` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `PrincipalValue` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `ServiceId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `UpdateDate` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `UserId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `WasConsolidatedCoupon` on the `Booking` table. All the data in the column will be lost.
  - The primary key for the `BusinessUnit` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Adress` on the `BusinessUnit` table. All the data in the column will be lost.
  - You are about to drop the column `AvgRating` on the `BusinessUnit` table. All the data in the column will be lost.
  - You are about to drop the column `BusinessUnitId` on the `BusinessUnit` table. All the data in the column will be lost.
  - You are about to drop the column `CreationDate` on the `BusinessUnit` table. All the data in the column will be lost.
  - You are about to drop the column `Email` on the `BusinessUnit` table. All the data in the column will be lost.
  - You are about to drop the column `ImageUrl` on the `BusinessUnit` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `BusinessUnit` table. All the data in the column will be lost.
  - You are about to drop the column `Phone` on the `BusinessUnit` table. All the data in the column will be lost.
  - You are about to drop the column `UpdateDate` on the `BusinessUnit` table. All the data in the column will be lost.
  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CategoryId` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `CreationDate` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `ServiceId` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `UpdateDate` on the `Category` table. All the data in the column will be lost.
  - The primary key for the `Coupon` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `BusinessUnitId` on the `Coupon` table. All the data in the column will be lost.
  - You are about to drop the column `CouponId` on the `Coupon` table. All the data in the column will be lost.
  - You are about to drop the column `CreationDate` on the `Coupon` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `Coupon` table. All the data in the column will be lost.
  - You are about to drop the column `ServiceId` on the `Coupon` table. All the data in the column will be lost.
  - You are about to drop the column `UpdateDate` on the `Coupon` table. All the data in the column will be lost.
  - The primary key for the `Service` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `BusinessUnitId` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `CreationDate` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `Description` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `ImageUrl` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `InitialValue` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `ServiceId` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `UpdateDate` on the `Service` table. All the data in the column will be lost.
  - The primary key for the `Session` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Expires` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `SessionId` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `SessionToken` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `UserId` on the `Session` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CreationDate` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `EmailVerified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Image` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `UpdateDate` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `UserId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Expires` on the `VerificationToken` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `BusinessUnit` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[sessionToken]` on the table `Session` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `Account` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `type` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `businessUnitId` to the `Avaliation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message` to the `Avaliation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Avaliation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Avaliation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `businessUnitId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `initialValue` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `principalValue` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serviceId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wasConsolidatedCoupon` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `BusinessUnit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serviceId` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `businessUnitId` to the `Coupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Coupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serviceId` to the `Coupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `businessUnitId` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expires` to the `Session` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `Session` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `sessionToken` to the `Session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expires` to the `VerificationToken` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_UserId_fkey";

-- DropForeignKey
ALTER TABLE "Avaliation" DROP CONSTRAINT "Avaliation_BusinessUnitId_fkey";

-- DropForeignKey
ALTER TABLE "Avaliation" DROP CONSTRAINT "Avaliation_UserId_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_BusinessUnitId_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_CouponId_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_ServiceId_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_UserId_fkey";

-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_ServiceId_fkey";

-- DropForeignKey
ALTER TABLE "Coupon" DROP CONSTRAINT "Coupon_BusinessUnitId_fkey";

-- DropForeignKey
ALTER TABLE "Coupon" DROP CONSTRAINT "Coupon_ServiceId_fkey";

-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_BusinessUnitId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_UserId_fkey";

-- DropIndex
DROP INDEX "BusinessUnit_Email_key";

-- DropIndex
DROP INDEX "Session_SessionToken_key";

-- DropIndex
DROP INDEX "User_Email_key";

-- AlterTable
ALTER TABLE "Account" DROP CONSTRAINT "Account_pkey",
DROP COLUMN "AccessToken",
DROP COLUMN "AccountId",
DROP COLUMN "ExpiresAt",
DROP COLUMN "RefreshToken",
DROP COLUMN "Scope",
DROP COLUMN "SessionState",
DROP COLUMN "TokenId",
DROP COLUMN "TokenType",
DROP COLUMN "Type",
DROP COLUMN "UserId",
ADD COLUMN     "access_token" TEXT,
ADD COLUMN     "expires_at" INTEGER,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "id_token" TEXT,
ADD COLUMN     "refresh_token" TEXT,
ADD COLUMN     "scope" TEXT,
ADD COLUMN     "session_state" TEXT,
ADD COLUMN     "token_type" TEXT,
ADD COLUMN     "type" TEXT NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "Account_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Avaliation" DROP CONSTRAINT "Avaliation_pkey",
DROP COLUMN "AvaliationId",
DROP COLUMN "BusinessUnitId",
DROP COLUMN "CreationDate",
DROP COLUMN "Message",
DROP COLUMN "Rating",
DROP COLUMN "UpdateDate",
DROP COLUMN "UserId",
ADD COLUMN     "avaliationId" SERIAL NOT NULL,
ADD COLUMN     "businessUnitId" INTEGER NOT NULL,
ADD COLUMN     "creationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "message" TEXT NOT NULL,
ADD COLUMN     "rating" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "updateDate" TIMESTAMP(3),
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "Avaliation_pkey" PRIMARY KEY ("avaliationId");

-- AlterTable
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_pkey",
DROP COLUMN "BookingId",
DROP COLUMN "BusinessUnitId",
DROP COLUMN "CouponId",
DROP COLUMN "CreationDate",
DROP COLUMN "InitialValue",
DROP COLUMN "PrincipalValue",
DROP COLUMN "ServiceId",
DROP COLUMN "UpdateDate",
DROP COLUMN "UserId",
DROP COLUMN "WasConsolidatedCoupon",
ADD COLUMN     "businessUnitId" INTEGER NOT NULL,
ADD COLUMN     "couponId" INTEGER,
ADD COLUMN     "cpdateDate" TIMESTAMP(3),
ADD COLUMN     "creationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "initialValue" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "principalValue" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "serviceId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD COLUMN     "wasConsolidatedCoupon" BOOLEAN NOT NULL,
ADD CONSTRAINT "Booking_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "BusinessUnit" DROP CONSTRAINT "BusinessUnit_pkey",
DROP COLUMN "Adress",
DROP COLUMN "AvgRating",
DROP COLUMN "BusinessUnitId",
DROP COLUMN "CreationDate",
DROP COLUMN "Email",
DROP COLUMN "ImageUrl",
DROP COLUMN "Name",
DROP COLUMN "Phone",
DROP COLUMN "UpdateDate",
ADD COLUMN     "adress" TEXT,
ADD COLUMN     "avgRating" DECIMAL(10,2),
ADD COLUMN     "creationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "updateDate" TIMESTAMP(3),
ADD CONSTRAINT "BusinessUnit_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Category" DROP CONSTRAINT "Category_pkey",
DROP COLUMN "CategoryId",
DROP COLUMN "CreationDate",
DROP COLUMN "Name",
DROP COLUMN "ServiceId",
DROP COLUMN "UpdateDate",
ADD COLUMN     "creationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "serviceId" INTEGER NOT NULL,
ADD COLUMN     "updateDate" TIMESTAMP(3),
ADD CONSTRAINT "Category_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Coupon" DROP CONSTRAINT "Coupon_pkey",
DROP COLUMN "BusinessUnitId",
DROP COLUMN "CouponId",
DROP COLUMN "CreationDate",
DROP COLUMN "Name",
DROP COLUMN "ServiceId",
DROP COLUMN "UpdateDate",
ADD COLUMN     "businessUnitId" INTEGER NOT NULL,
ADD COLUMN     "creationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "serviceId" INTEGER NOT NULL,
ADD COLUMN     "updateDate" TIMESTAMP(3),
ADD CONSTRAINT "Coupon_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Service" DROP CONSTRAINT "Service_pkey",
DROP COLUMN "BusinessUnitId",
DROP COLUMN "CreationDate",
DROP COLUMN "Description",
DROP COLUMN "ImageUrl",
DROP COLUMN "InitialValue",
DROP COLUMN "Name",
DROP COLUMN "ServiceId",
DROP COLUMN "UpdateDate",
ADD COLUMN     "businessUnitId" INTEGER NOT NULL,
ADD COLUMN     "creationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "price" DECIMAL(10,2),
ADD COLUMN     "updateDate" TIMESTAMP(3),
ADD CONSTRAINT "Service_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Session" DROP CONSTRAINT "Session_pkey",
DROP COLUMN "Expires",
DROP COLUMN "SessionId",
DROP COLUMN "SessionToken",
DROP COLUMN "UserId",
ADD COLUMN     "expires" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "sessionToken" TEXT NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "Session_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "CreationDate",
DROP COLUMN "Email",
DROP COLUMN "EmailVerified",
DROP COLUMN "Image",
DROP COLUMN "Name",
DROP COLUMN "UpdateDate",
DROP COLUMN "UserId",
ADD COLUMN     "creationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "emailVerified" TIMESTAMP(3),
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "updateDate" TIMESTAMP(3),
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "VerificationToken" DROP COLUMN "Expires",
ADD COLUMN     "expires" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "BusinessUnit_email_key" ON "BusinessUnit"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_businessUnitId_fkey" FOREIGN KEY ("businessUnitId") REFERENCES "BusinessUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_businessUnitId_fkey" FOREIGN KEY ("businessUnitId") REFERENCES "BusinessUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_couponId_fkey" FOREIGN KEY ("couponId") REFERENCES "Coupon"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coupon" ADD CONSTRAINT "Coupon_businessUnitId_fkey" FOREIGN KEY ("businessUnitId") REFERENCES "BusinessUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coupon" ADD CONSTRAINT "Coupon_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliation" ADD CONSTRAINT "Avaliation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliation" ADD CONSTRAINT "Avaliation_businessUnitId_fkey" FOREIGN KEY ("businessUnitId") REFERENCES "BusinessUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
