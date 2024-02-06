-- CreateTable
CREATE TABLE "Category" (
    "CategoryId" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "CreationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(3) NOT NULL,
    "serviceServiceId" INTEGER,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("CategoryId")
);

-- CreateTable
CREATE TABLE "ServiceNote" (
    "ServiceNoteId" SERIAL NOT NULL,
    "ServiceId" INTEGER NOT NULL,
    "BusinessUnitId" INTEGER NOT NULL,
    "CouponId" INTEGER NOT NULL,
    "InitialValue" DECIMAL(10,2) NOT NULL,
    "CreationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ServiceNote_pkey" PRIMARY KEY ("ServiceNoteId")
);

-- CreateTable
CREATE TABLE "Booking" (
    "BookingId" SERIAL NOT NULL,
    "UserId" INTEGER NOT NULL,
    "BusinessUnitId" INTEGER NOT NULL,
    "ServiceNoteId" INTEGER NOT NULL,
    "InitialValue" DECIMAL(10,2) NOT NULL,
    "PrincipalValue" DECIMAL(10,2) NOT NULL,
    "WasConsolidatedCoupon" BOOLEAN NOT NULL,
    "CouponId" INTEGER NOT NULL,
    "CreationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("BookingId")
);

-- CreateTable
CREATE TABLE "Coupon" (
    "CouponId" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "BusinessUnitId" INTEGER NOT NULL,
    "ServiceId" INTEGER NOT NULL,
    "CreationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Coupon_pkey" PRIMARY KEY ("CouponId")
);

-- CreateTable
CREATE TABLE "Avaliation" (
    "AvaliationId" SERIAL NOT NULL,
    "UserId" INTEGER NOT NULL,
    "BusinessUnitId" INTEGER NOT NULL,
    "Message" TEXT NOT NULL,
    "Rating" DECIMAL(10,2) NOT NULL,
    "CreationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Avaliation_pkey" PRIMARY KEY ("AvaliationId")
);

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_BusinessUnitId_fkey" FOREIGN KEY ("BusinessUnitId") REFERENCES "BusinessUnit"("BusinessUnitId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_serviceServiceId_fkey" FOREIGN KEY ("serviceServiceId") REFERENCES "Service"("ServiceId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceNote" ADD CONSTRAINT "ServiceNote_ServiceId_fkey" FOREIGN KEY ("ServiceId") REFERENCES "Service"("ServiceId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceNote" ADD CONSTRAINT "ServiceNote_BusinessUnitId_fkey" FOREIGN KEY ("BusinessUnitId") REFERENCES "BusinessUnit"("BusinessUnitId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceNote" ADD CONSTRAINT "ServiceNote_CouponId_fkey" FOREIGN KEY ("CouponId") REFERENCES "Coupon"("CouponId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("UserId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_BusinessUnitId_fkey" FOREIGN KEY ("BusinessUnitId") REFERENCES "BusinessUnit"("BusinessUnitId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_ServiceNoteId_fkey" FOREIGN KEY ("ServiceNoteId") REFERENCES "ServiceNote"("ServiceNoteId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_CouponId_fkey" FOREIGN KEY ("CouponId") REFERENCES "Coupon"("CouponId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coupon" ADD CONSTRAINT "Coupon_BusinessUnitId_fkey" FOREIGN KEY ("BusinessUnitId") REFERENCES "BusinessUnit"("BusinessUnitId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coupon" ADD CONSTRAINT "Coupon_ServiceId_fkey" FOREIGN KEY ("ServiceId") REFERENCES "Service"("ServiceId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliation" ADD CONSTRAINT "Avaliation_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("UserId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliation" ADD CONSTRAINT "Avaliation_BusinessUnitId_fkey" FOREIGN KEY ("BusinessUnitId") REFERENCES "BusinessUnit"("BusinessUnitId") ON DELETE RESTRICT ON UPDATE CASCADE;
