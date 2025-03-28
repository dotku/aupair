-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Enable RLS
ALTER TABLE "public"."Referral" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."AuPairDetails" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."HostFamilyDetails" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."EnglishStudentDetails" ENABLE ROW LEVEL SECURITY;

-- Grant schema usage
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT USAGE ON SCHEMA public TO anon;

-- Update table columns to use UUID
ALTER TABLE "public"."Referral" ALTER COLUMN "id" TYPE UUID USING id::uuid;
ALTER TABLE "public"."Referral" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4();
ALTER TABLE "public"."Referral" ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE "public"."Referral" ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE "public"."AuPairDetails" ALTER COLUMN "id" TYPE UUID USING id::uuid;
ALTER TABLE "public"."AuPairDetails" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4();
ALTER TABLE "public"."AuPairDetails" ALTER COLUMN "referralId" TYPE UUID USING referralId::uuid;

ALTER TABLE "public"."HostFamilyDetails" ALTER COLUMN "id" TYPE UUID USING id::uuid;
ALTER TABLE "public"."HostFamilyDetails" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4();
ALTER TABLE "public"."HostFamilyDetails" ALTER COLUMN "referralId" TYPE UUID USING referralId::uuid;

ALTER TABLE "public"."EnglishStudentDetails" ALTER COLUMN "id" TYPE UUID USING id::uuid;
ALTER TABLE "public"."EnglishStudentDetails" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4();
ALTER TABLE "public"."EnglishStudentDetails" ALTER COLUMN "referralId" TYPE UUID USING referralId::uuid;

-- Policies for Referral table
CREATE POLICY "Enable read access for users own referrals" ON "public"."Referral"
    FOR SELECT
    TO authenticated
    USING (auth.uid() = "referredBy");

CREATE POLICY "Enable insert for authenticated users" ON "public"."Referral"
    FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = "referredBy");

CREATE POLICY "Enable update for own referrals" ON "public"."Referral"
    FOR UPDATE
    TO authenticated
    USING (auth.uid() = "referredBy")
    WITH CHECK (auth.uid() = "referredBy");

-- Policies for AuPairDetails table
CREATE POLICY "Enable read for own au pair details" ON "public"."AuPairDetails"
    FOR SELECT
    TO authenticated
    USING (EXISTS (
        SELECT 1 FROM "public"."Referral"
        WHERE "Referral"."id" = "referralId"
        AND "Referral"."referredBy" = auth.uid()
    ));

CREATE POLICY "Enable insert for own au pair details" ON "public"."AuPairDetails"
    FOR INSERT
    TO authenticated
    WITH CHECK (EXISTS (
        SELECT 1 FROM "public"."Referral"
        WHERE "Referral"."id" = "referralId"
        AND "Referral"."referredBy" = auth.uid()
    ));

-- Policies for HostFamilyDetails table
CREATE POLICY "Enable read for own host family details" ON "public"."HostFamilyDetails"
    FOR SELECT
    TO authenticated
    USING (EXISTS (
        SELECT 1 FROM "public"."Referral"
        WHERE "Referral"."id" = "referralId"
        AND "Referral"."referredBy" = auth.uid()
    ));

CREATE POLICY "Enable insert for own host family details" ON "public"."HostFamilyDetails"
    FOR INSERT
    TO authenticated
    WITH CHECK (EXISTS (
        SELECT 1 FROM "public"."Referral"
        WHERE "Referral"."id" = "referralId"
        AND "Referral"."referredBy" = auth.uid()
    ));

-- Policies for EnglishStudentDetails table
CREATE POLICY "Enable read for own english student details" ON "public"."EnglishStudentDetails"
    FOR SELECT
    TO authenticated
    USING (EXISTS (
        SELECT 1 FROM "public"."Referral"
        WHERE "Referral"."id" = "referralId"
        AND "Referral"."referredBy" = auth.uid()
    ));

CREATE POLICY "Enable insert for own english student details" ON "public"."EnglishStudentDetails"
    FOR INSERT
    TO authenticated
    WITH CHECK (EXISTS (
        SELECT 1 FROM "public"."Referral"
        WHERE "Referral"."id" = "referralId"
        AND "Referral"."referredBy" = auth.uid()
    ));

-- Grant table privileges to authenticated users
GRANT ALL ON "public"."Referral" TO authenticated;
GRANT ALL ON "public"."AuPairDetails" TO authenticated;
GRANT ALL ON "public"."HostFamilyDetails" TO authenticated;
GRANT ALL ON "public"."EnglishStudentDetails" TO authenticated;
