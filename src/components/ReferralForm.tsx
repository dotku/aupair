import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AuPairReferralForm, HostFamilyReferralForm, EnglishStudentReferralForm } from './';
import { ReferralType } from '../types/referral';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

interface ReferralFormProps {
  onSubmit: (data: ReferralType) => Promise<void>;
  onClose: () => void;
  submitting: boolean;
}

// Common props for all referral type forms
export interface ReferralTypeFormProps {
  onSubmit: (data: Partial<ReferralType>) => Promise<void>;
  submitting: boolean;
}

export default function ReferralForm({ onSubmit, onClose, submitting }: ReferralFormProps) {
  const { t } = useTranslation('common');
  const [type, setType] = useState<ReferralType['type']>('au_pair');
  const [error, setError] = useState<string | null>(null);
  const supabase = useSupabaseClient();

  const handleSubmit = async (data: Partial<ReferralType>) => {
    setError(null);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        throw new Error(t('error.notAuthenticated'));
      }

      await onSubmit({
        ...data,
        type,
        status: 'pending',
        referredBy: session.user.id,
      } as ReferralType);
      
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : t('error.unknown'));
    }
  };

  const referralTypeOptions = [
    { value: 'au_pair', label: t('referral.types.auPair') },
    { value: 'host_family', label: t('referral.types.hostFamily') },
    { value: 'english_student', label: t('referral.types.englishStudent') }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{t('referral.newReferral')}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('referral.type')}
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as ReferralType['type'])}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            disabled={submitting}
          >
            {referralTypeOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {type === 'au_pair' && (
          <AuPairReferralForm
            onSubmit={handleSubmit}
            submitting={submitting}
          />
        )}
        {type === 'host_family' && (
          <HostFamilyReferralForm
            onSubmit={handleSubmit}
            submitting={submitting}
          />
        )}
        {type === 'english_student' && (
          <EnglishStudentReferralForm
            onSubmit={handleSubmit}
            submitting={submitting}
          />
        )}
      </div>
    </div>
  );
}
