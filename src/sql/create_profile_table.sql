-- Create Profile table
CREATE TABLE IF NOT EXISTS public."Profile" (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  phone_number TEXT,
  address TEXT,
  city TEXT,
  country TEXT,
  postal_code TEXT,
  bio TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create Row Level Security policies
ALTER TABLE public."Profile" ENABLE ROW LEVEL SECURITY;

-- Create policy for users to view their own profile
CREATE POLICY "Users can view own profile" ON public."Profile"
  FOR SELECT USING (auth.uid() = id);

-- Create policy for users to update their own profile
CREATE POLICY "Users can update own profile" ON public."Profile"
  FOR UPDATE USING (auth.uid() = id);

-- Create policy for users to insert their own profile
CREATE POLICY "Users can insert own profile" ON public."Profile"
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Create policy for admin users to manage all profiles
CREATE POLICY "Admins can do anything with profiles" ON public."Profile" 
  USING (EXISTS (
    SELECT 1 FROM auth.users 
    WHERE auth.users.id = auth.uid() 
    AND auth.users.email LIKE '%@aupairagency.com'
  ));

-- Create trigger to automatically update 'updated_at'
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profile_timestamp
BEFORE UPDATE ON public."Profile"
FOR EACH ROW
EXECUTE FUNCTION update_modified_column();
