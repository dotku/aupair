import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { AuPairReferral, HostFamilyReferral, EnglishStudentReferral } from '../types/referral';
import { AuPairReferralForm, HostFamilyReferralForm, EnglishStudentReferralForm } from './';
import { FormField, FormSelect } from './ui/FormField';

interface ReferralFormProps {
  userId: string;
  onSubmit: (data: Partial<AuPairReferral | HostFamilyReferral | EnglishStudentReferral>) => Promise<void>;
  loading: boolean;
}

export default function ReferralForm({ userId, onSubmit, loading }: ReferralFormProps) {
  const { t } = useTranslation('common');
  const [type, setType] = useState<'au_pair' | 'host_family' | 'english_student'>('au_pair');

  const handleSubmit = async (data: Partial<AuPairReferral | HostFamilyReferral | EnglishStudentReferral>) => {
    await onSubmit({
      ...data,
      referred_by: userId,
      status: 'pending',
      type
    });
  };

  const referralTypeOptions = [
    { value: 'au_pair', label: t('referral.types.auPair') },
    { value: 'host_family', label: t('referral.types.hostFamily') },
    { value: 'english_student', label: t('referral.types.student') }
  ];

  return (
    <div className="space-y-6">
      <FormField label={t('referral.type')} required>
        <FormSelect
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value as typeof type)}
          options={referralTypeOptions}
          aria-label={t('referral.selectType')}
        />
      </FormField>

      {type === 'au_pair' && (
        <AuPairReferralForm onSubmit={handleSubmit} loading={loading} />
      )}
      {type === 'host_family' && (
        <HostFamilyReferralForm onSubmit={handleSubmit} loading={loading} />
      )}
      {type === 'english_student' && (
        <EnglishStudentReferralForm onSubmit={handleSubmit} loading={loading} />
      )}
    </div>
  );
}
