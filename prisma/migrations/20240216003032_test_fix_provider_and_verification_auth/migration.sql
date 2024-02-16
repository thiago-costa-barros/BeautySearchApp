/*
  Warnings:

  - You are about to drop the column `Provider` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `ProviderAccountId` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `Identifier` on the `VerificationToken` table. All the data in the column will be lost.
  - You are about to drop the column `Token` on the `VerificationToken` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[provider,providerAccountId]` on the table `Account` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[token]` on the table `VerificationToken` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[identifier,token]` on the table `VerificationToken` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `provider` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `providerAccountId` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `identifier` to the `VerificationToken` table without a default value. This is not possible if the table is not empty.
  - Added the required column `token` to the `VerificationToken` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Account_Provider_ProviderAccountId_key";

-- DropIndex
DROP INDEX "VerificationToken_Identifier_Token_key";

-- DropIndex
DROP INDEX "VerificationToken_Token_key";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "Provider",
DROP COLUMN "ProviderAccountId",
ADD COLUMN     "provider" TEXT NOT NULL,
ADD COLUMN     "providerAccountId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "VerificationToken" DROP COLUMN "Identifier",
DROP COLUMN "Token",
ADD COLUMN     "identifier" TEXT NOT NULL,
ADD COLUMN     "token" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");
