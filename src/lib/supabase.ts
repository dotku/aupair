import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (
  !supabaseUrl ||
  !supabaseAnonKey ||
  supabaseUrl === "http://localhost:3000" ||
  supabaseAnonKey === "mock-key"
) {
  console.error("Invalid or missing Supabase configuration");
  throw new Error(
    "Please check your .env.local file for proper Supabase configuration"
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: "pkce",
  },
});
