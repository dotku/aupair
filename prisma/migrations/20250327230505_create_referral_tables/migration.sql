-- CreateTable
CREATE TABLE "public"."Referral" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "referredBy" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "englishLevel" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "availability" TEXT NOT NULL,
    "notes" TEXT,

    CONSTRAINT "Referral_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AuPairDetails" (
    "id" TEXT NOT NULL,
    "referralId" TEXT NOT NULL,
    "childCareExperience" TEXT NOT NULL,
    "drivingLicense" BOOLEAN NOT NULL,
    "preferredCountries" TEXT[],

    CONSTRAINT "AuPairDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."HostFamilyDetails" (
    "id" TEXT NOT NULL,
    "referralId" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "childrenCount" INTEGER NOT NULL,
    "requirements" TEXT NOT NULL,

    CONSTRAINT "HostFamilyDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."EnglishStudentDetails" (
    "id" TEXT NOT NULL,
    "referralId" TEXT NOT NULL,
    "goals" TEXT NOT NULL,
    "schedule" TEXT NOT NULL,

    CONSTRAINT "EnglishStudentDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AuPairDetails_referralId_key" ON "public"."AuPairDetails"("referralId");

-- CreateIndex
CREATE UNIQUE INDEX "HostFamilyDetails_referralId_key" ON "public"."HostFamilyDetails"("referralId");

-- CreateIndex
CREATE UNIQUE INDEX "EnglishStudentDetails_referralId_key" ON "public"."EnglishStudentDetails"("referralId");

-- AddForeignKey
ALTER TABLE "public"."AuPairDetails" ADD CONSTRAINT "AuPairDetails_referralId_fkey" FOREIGN KEY ("referralId") REFERENCES "public"."Referral"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."HostFamilyDetails" ADD CONSTRAINT "HostFamilyDetails_referralId_fkey" FOREIGN KEY ("referralId") REFERENCES "public"."Referral"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EnglishStudentDetails" ADD CONSTRAINT "EnglishStudentDetails_referralId_fkey" FOREIGN KEY ("referralId") REFERENCES "public"."Referral"("id") ON DELETE CASCADE ON UPDATE CASCADE;
