-- AlterTable
ALTER TABLE "User" ADD COLUMN     "EmailVerified" TIMESTAMP(3),
ADD COLUMN     "Image" TEXT;

-- CreateTable
CREATE TABLE "Account" (
    "AccountId" TEXT NOT NULL,
    "UserId" INTEGER NOT NULL,
    "Type" TEXT NOT NULL,
    "Provider" TEXT NOT NULL,
    "ProviderAccountId" TEXT NOT NULL,
    "RefreshToken" TEXT,
    "AccessToken" TEXT,
    "ExpiresAt" INTEGER,
    "TokenType" TEXT,
    "Scope" TEXT,
    "TokenId" TEXT,
    "SessionState" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("AccountId")
);

-- CreateTable
CREATE TABLE "Session" (
    "SessionId" TEXT NOT NULL,
    "SessionToken" TEXT NOT NULL,
    "UserId" INTEGER NOT NULL,
    "Expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("SessionId")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "Identifier" TEXT NOT NULL,
    "Token" TEXT NOT NULL,
    "Expires" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_Provider_ProviderAccountId_key" ON "Account"("Provider", "ProviderAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_SessionToken_key" ON "Session"("SessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_Token_key" ON "VerificationToken"("Token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_Identifier_Token_key" ON "VerificationToken"("Identifier", "Token");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("UserId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("UserId") ON DELETE CASCADE ON UPDATE CASCADE;
