import { config } from "dotenv";
import { createClient } from "@supabase/supabase-js";

// Load environment variables from .env.local first, then .env
config({ path: [".env.local", ".env"] });

const supabaseUrl = process.env.VITE_SUPABASE_URL!;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const TEST_EMAIL = process.env.TEST_EMAIL!;
const TEST_PASSWORD = process.env.TEST_PASSWORD!;

async function testPolicies() {
  console.log("Testing Supabase Policies...");

  // Sign in
  console.log("\nSigning in...");
  const {
    data: { user },
    error: signInError,
  } = await supabase.auth.signInWithPassword({
    email: TEST_EMAIL,
    password: TEST_PASSWORD,
  });

  if (signInError) {
    console.error("Sign in error:", signInError);
    return;
  }

  if (!user) {
    console.error("No user found");
    return;
  }

  console.log("Signed in as:", user.email);

  // Test 1: Create a referral
  console.log("\nTest 1: Creating a referral...");
  const { data: referral, error: createError } = await supabase
    .from("Referral")
    .insert([
      {
        type: "au_pair",
        name: "Test User",
        email: TEST_EMAIL,
        phone: "+1234567890",
        nationality: "US",
        age: 25,
        englishLevel: "advanced",
        experience: "Some experience",
        availability: "Immediate",
        notes: "Test notes",
        referredBy: user.id,
        status: "pending",
      },
    ])
    .select()
    .single();

  if (createError) {
    console.error("Create Error:", createError);
  } else {
    console.log("Created referral:", referral);
  }

  if (referral) {
    // Test 2: Read own referral
    console.log("\nTest 2: Reading own referral...");
    const { data: readData, error: readError } = await supabase
      .from("Referral")
      .select("*")
      .eq("id", referral.id)
      .single();

    if (readError) {
      console.error("Read Error:", readError);
    } else {
      console.log("Read referral:", readData);
    }

    // Test 3: Update own referral
    console.log("\nTest 3: Updating own referral...");
    const { data: updateData, error: updateError } = await supabase
      .from("Referral")
      .update({ notes: "Updated test notes" })
      .eq("id", referral.id)
      .select()
      .single();

    if (updateError) {
      console.error("Update Error:", updateError);
    } else {
      console.log("Updated referral:", updateData);
    }

    // Test 4: Create au pair details
    console.log("\nTest 4: Creating au pair details...");
    const { data: auPairDetails, error: auPairError } = await supabase
      .from("AuPairDetails")
      .insert([
        {
          referralId: referral.id,
          childCareExperience: "Test experience",
          drivingLicense: true,
          preferredCountries: ["US", "UK"],
        },
      ])
      .select()
      .single();

    if (auPairError) {
      console.error("Au Pair Details Error:", auPairError);
    } else {
      console.log("Created au pair details:", auPairDetails);
    }

    // Test 5: Read referral with related details
    console.log("\nTest 5: Reading referral with details...");
    const { data: fullData, error: fullError } = await supabase
      .from("Referral")
      .select(
        `
        *,
        AuPairDetails (*)
      `
      )
      .eq("id", referral.id)
      .single();

    if (fullError) {
      console.error("Full Read Error:", fullError);
    } else {
      console.log("Full referral data:", fullData);
    }

    // Test 6: Try to read someone else's referral (should fail)
    console.log("\nTest 6: Attempting to read another user's referral...");
    const { data: otherData, error: otherError } = await supabase
      .from("Referral")
      .select("*")
      .neq("referredBy", user.id)
      .single();

    if (otherError) {
      console.log(
        "Expected error when trying to read other's referral:",
        otherError.message
      );
    } else {
      console.error(
        "WARNING: Was able to read another user's referral:",
        otherData
      );
    }
  }
}

// Add a function to check specific user's records
async function checkUserRecords() {
  console.log("\nChecking records for specific user...");
  const userId = "b7f262b9-2f59-46e7-858c-97bd03a52bd3";
  
  // First sign in with the test credentials
  const { data: { user }, error: signInError } = await supabase.auth.signInWithPassword({
    email: TEST_EMAIL,
    password: TEST_PASSWORD,
  });

  if (signInError) {
    console.error("Sign in error:", signInError);
    return;
  }

  console.log("Signed in as:", user?.email);
  
  const { data: referrals, error } = await supabase
    .from("Referral")
    .select("*")
    .eq("referredBy", userId);

  if (error) {
    console.error("Error fetching records:", error);
    return;
  }

  console.log(`Found ${referrals?.length || 0} referrals for user ${userId}:`);
  console.log(JSON.stringify(referrals, null, 2));

  // If we found any referrals, check their details
  if (referrals && referrals.length > 0) {
    for (const referral of referrals) {
      console.log(`\nChecking details for referral ${referral.id}...`);
      const { data: details, error: detailsError } = await supabase
        .from("AuPairDetails")
        .select("*")
        .eq("referralId", referral.id);
      
      if (detailsError) {
        console.error("Error fetching details:", detailsError);
      } else {
        console.log("Details:", JSON.stringify(details, null, 2));
      }
    }
  }
}

// Run the checks first
async function main() {
  await checkUserRecords();

  // Then run the tests
  testPolicies().catch(console.error);
}

main();
