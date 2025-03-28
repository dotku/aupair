import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL!;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const TEST_EMAIL = 'dotku@pm.me';
const TEST_PASSWORD = 'password';

async function createTestUser() {
  console.log('Creating test user...');
  const { data, error } = await supabase.auth.signUp({
    email: TEST_EMAIL,
    password: TEST_PASSWORD
  });

  if (error) {
    console.error('Error creating user:', error);
    return;
  }

  console.log('User created:', data.user);
}

createTestUser().catch(console.error);
