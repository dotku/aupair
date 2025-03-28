-- Enable RLS on tables
ALTER TABLE "public"."Referral" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."AuPairDetails" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."HostFamilyDetails" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."EnglishStudentDetails" ENABLE ROW LEVEL SECURITY;

-- Create policies for Referral table
CREATE POLICY "Enable read access for users own referrals" ON "public"."Referral"
    FOR SELECT
    USING (auth.uid() = "referredBy");

CREATE POLICY "Enable insert access for authenticated users" ON "public"."Referral"
    FOR INSERT
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable update access for users own referrals" ON "public"."Referral"
    FOR UPDATE
    USING (auth.uid() = "referredBy");

-- Create policies for AuPairDetails table
CREATE POLICY "Enable read access for users own au pair details" ON "public"."AuPairDetails"
    FOR SELECT
    USING (EXISTS (
        SELECT 1 FROM "public"."Referral"
        WHERE "Referral"."id" = "AuPairDetails"."referralId"
        AND "Referral"."referredBy" = auth.uid()
    ));

CREATE POLICY "Enable insert access for authenticated users" ON "public"."AuPairDetails"
    FOR INSERT
    WITH CHECK (auth.role() = 'authenticated');

-- Create policies for HostFamilyDetails table
CREATE POLICY "Enable read access for users own host family details" ON "public"."HostFamilyDetails"
    FOR SELECT
    USING (EXISTS (
        SELECT 1 FROM "public"."Referral"
        WHERE "Referral"."id" = "HostFamilyDetails"."referralId"
        AND "Referral"."referredBy" = auth.uid()
    ));

CREATE POLICY "Enable insert access for authenticated users" ON "public"."HostFamilyDetails"
    FOR INSERT
    WITH CHECK (auth.role() = 'authenticated');

-- Create policies for EnglishStudentDetails table
CREATE POLICY "Enable read access for users own english student details" ON "public"."EnglishStudentDetails"
    FOR SELECT
    USING (EXISTS (
        SELECT 1 FROM "public"."Referral"
        WHERE "Referral"."id" = "EnglishStudentDetails"."referralId"
        AND "Referral"."referredBy" = auth.uid()
    ));

CREATE POLICY "Enable insert access for authenticated users" ON "public"."EnglishStudentDetails"
    FOR INSERT
    WITH CHECK (auth.role() = 'authenticated');

-- Grant necessary privileges
GRANT ALL ON "public"."Referral" TO authenticated;
GRANT ALL ON "public"."AuPairDetails" TO authenticated;
GRANT ALL ON "public"."HostFamilyDetails" TO authenticated;
GRANT ALL ON "public"."EnglishStudentDetails" TO authenticated;
