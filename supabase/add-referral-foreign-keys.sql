-- Add foreign key constraints for referredBy and accountManager fields
ALTER TABLE "public"."Referral"
  ADD CONSTRAINT "Referral_referredBy_fkey" FOREIGN KEY ("referredBy") REFERENCES auth.users(id) ON DELETE CASCADE,
  ADD CONSTRAINT "Referral_accountManager_fkey" FOREIGN KEY ("accountManager") REFERENCES auth.users(id) ON DELETE SET NULL;

-- Add RLS policies for referral access
ALTER TABLE "public"."Referral" ENABLE ROW LEVEL SECURITY;

-- Policy for viewing referrals (users can see referrals they created or are assigned to manage)
CREATE POLICY "Users can view their own referrals or assigned ones" ON "public"."Referral"
  FOR SELECT
  USING (auth.uid() = "referredBy" OR auth.uid() = "accountManager");

-- Policy for creating referrals (authenticated users can create)
CREATE POLICY "Users can create referrals" ON "public"."Referral"
  FOR INSERT
  WITH CHECK (auth.uid() = "referredBy");

-- Policy for updating referrals (users can update their own or assigned ones)
CREATE POLICY "Users can update their own referrals or assigned ones" ON "public"."Referral"
  FOR UPDATE
  USING (auth.uid() = "referredBy" OR auth.uid() = "accountManager")
  WITH CHECK (auth.uid() = "referredBy" OR auth.uid() = "accountManager");