export type ReferralType = 'au_pair' | 'host_family' | 'english_student';

export interface BaseReferral {
  id: string;
  created_at: string;
  referred_by: string;
  name: string;
  email: string;
  phone: string;
  nationality: string;
  notes?: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface AuPairReferral extends BaseReferral {
  type: 'au_pair';
  age: number;
  experience: string;
  englishLevel: 'beginner' | 'intermediate' | 'advanced' | 'fluent';
  availability: string;
}

export interface HostFamilyReferral extends BaseReferral {
  type: 'host_family';
  location: string;
  childrenCount: number;
  childrenAges: string;
  requirements: string;
  preferredNationalities?: string[];
  startDate: string;
  duration: string;
}

export interface EnglishStudentReferral extends BaseReferral {
  type: 'english_student';
  age: number;
  currentLevel: 'beginner' | 'intermediate' | 'advanced' | 'fluent';
  learningGoals: string;
  preferredSchedule: string;
  preferredFormat: 'online' | 'in-person' | 'both';
}
