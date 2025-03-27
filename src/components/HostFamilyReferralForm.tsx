import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { HostFamilyReferral } from '../types/referral';
import { FormField, FormSelect, FormSubmitButton } from './ui/FormField';

interface HostFamilyReferralFormProps {
  onSubmit: (data: Partial<HostFamilyReferral>) => Promise<void>;
  loading: boolean;
}

const NATIONALITY_OPTIONS = [
  'Chinese',
  'Filipino',
  'Indonesian',
  'Thai',
  'Vietnamese',
  'Malaysian',
  'Other'
].map(value => ({ value, label: value }));

export default function HostFamilyReferralForm({ onSubmit, loading }: HostFamilyReferralFormProps) {
  const { t } = useTranslation('common');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    childrenCount: '',
    childrenAges: '',
    requirements: '',
    startDate: '',
    duration: '',
    preferredNationalities: '',
    otherNationality: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit({
      ...formData,
      childrenCount: parseInt(formData.childrenCount),
      type: 'host_family',
      preferredNationalities: formData.preferredNationalities ? [formData.preferredNationalities] : []
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormField
        label={t('referral.hostFamily.name')}
        help={t('referral.hostFamily.nameHelp')}
        required
      >
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </FormField>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label={t('referral.email')}
          help={t('referral.emailHelp')}
          required
        >
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </FormField>

        <FormField
          label={t('referral.phone')}
          help={t('referral.phoneHelp')}
          required
        >
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </FormField>
      </div>

      <FormField
        label={t('referral.hostFamily.location')}
        help={t('referral.hostFamily.locationHelp')}
        required
      >
        <input
          type="text"
          name="location"
          required
          placeholder={t('referral.hostFamily.locationPlaceholder')}
          value={formData.location}
          onChange={handleChange}
        />
      </FormField>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label={t('referral.hostFamily.childrenCount')}
          required
        >
          <input
            type="number"
            name="childrenCount"
            min="1"
            required
            value={formData.childrenCount}
            onChange={handleChange}
          />
        </FormField>

        <FormField
          label={t('referral.hostFamily.childrenAges')}
          help={t('referral.hostFamily.childrenAgesHelp')}
          required
        >
          <input
            type="text"
            name="childrenAges"
            required
            placeholder={t('referral.hostFamily.childrenAgesPlaceholder')}
            value={formData.childrenAges}
            onChange={handleChange}
          />
        </FormField>
      </div>

      <FormField
        label={t('referral.hostFamily.requirements')}
        help={t('referral.hostFamily.requirementsHelp')}
        required
      >
        <textarea
          name="requirements"
          required
          placeholder={t('referral.hostFamily.requirementsPlaceholder')}
          value={formData.requirements}
          onChange={handleChange}
        />
      </FormField>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label={t('referral.hostFamily.startDate')}
          required
        >
          <input
            type="date"
            name="startDate"
            required
            value={formData.startDate}
            onChange={handleChange}
          />
        </FormField>

        <FormField
          label={t('referral.hostFamily.duration')}
          help={t('referral.hostFamily.durationHelp')}
          required
        >
          <input
            type="text"
            name="duration"
            required
            placeholder={t('referral.hostFamily.durationPlaceholder')}
            value={formData.duration}
            onChange={handleChange}
          />
        </FormField>
      </div>

      <FormField
        label={t('referral.hostFamily.preferredNationalities')}
        help={t('referral.hostFamily.preferredNationalitiesHelp')}
      >
        <FormSelect
          name="preferredNationalities"
          value={formData.preferredNationalities}
          onChange={handleChange}
          options={NATIONALITY_OPTIONS}
        />
      </FormField>

      {formData.preferredNationalities === 'Other' && (
        <FormField
          label={t('referral.otherNationality')}
          required
        >
          <input
            type="text"
            name="otherNationality"
            required
            value={formData.otherNationality}
            onChange={handleChange}
          />
        </FormField>
      )}

      <div className="flex justify-end">
        <FormSubmitButton loading={loading}>
          {t('referral.submit')}
        </FormSubmitButton>
      </div>
    </form>
  );
}
