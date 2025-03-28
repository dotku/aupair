import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export type ReferralType = 'au_pair' | 'host_family' | 'english_student';

export type ReferralInput = {
  type: ReferralType;
  name: string;
  email: string;
  phone: string;
  nationality: string;
  age: number;
  englishLevel: string;
  experience: string;
  availability: string;
  notes?: string;
  auPairDetails?: {
    create: {
      childCareExperience: string;
      drivingLicense: boolean;
      preferredCountries: string[];
    }
  };
  hostFamilyDetails?: {
    create: {
      location: string;
      childrenCount: number;
      requirements: string;
    }
  };
  englishStudentDetails?: {
    create: {
      goals: string;
      schedule: string;
    }
  };
};

export async function createReferral(
  referral: ReferralInput,
  userId: string
) {
  try {
    const result = await prisma.referral.create({
      data: {
        ...referral,
        referredBy: userId,
        status: 'pending',
      },
      include: {
        hostFamilyDetails: true,
        englishStudentDetails: true,
        auPairDetails: true,
      },
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Error creating referral:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unknown error occurred',
    };
  }
}
