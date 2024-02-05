-- CreateTable
CREATE TABLE "User" (
    "UserId" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "CreationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("UserId")
);

-- CreateTable
CREATE TABLE "BusinessUnit" (
    "BusinessUnitId" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Adress" TEXT NOT NULL,
    "Phone" TEXT NOT NULL,
    "ImageUrl" TEXT NOT NULL,
    "AvgRating" DECIMAL(10,2) NOT NULL,
    "CreationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BusinessUnit_pkey" PRIMARY KEY ("BusinessUnitId")
);

-- CreateTable
CREATE TABLE "Service" (
    "ServiceId" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "BusinessUnitId" INTEGER NOT NULL,
    "ImageUrl" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "CreationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("ServiceId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "BusinessUnit_Email_key" ON "BusinessUnit"("Email");
