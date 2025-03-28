export interface Profile {
  id: string;
  full_name?: string;
  phone_number?: string;
  address?: string;
  city?: string;
  country?: string;
  postal_code?: string;
  bio?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface ProfileFormData {
  full_name?: string;
  phone_number?: string;
  address?: string;
  city?: string;
  country?: string;
  postal_code?: string;
  bio?: string;
}