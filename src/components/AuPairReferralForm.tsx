import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FormField, FormSubmitButton } from './ui/FormField';
import type { ReferralTypeFormProps } from './ReferralForm';

const NATIONALITY_OPTIONS = [
  'Chinese',
  'Filipino',
  'Indonesian',
  'Thai',
  'Vietnamese',
  'Malaysian',
  'Other'
].map(value => ({ value, label: value }));

const ENGLISH_LEVELS = [
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
  { value: 'fluent', label: 'Fluent' }
];

export default function AuPairReferralForm({ onSubmit, submitting }: ReferralTypeFormProps) {
  const { t } = useTranslation('common');
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    nationality: '',
    age: '',
    experience: '',
    englishLevel: 'intermediate' as const,
    availability: '',
    notes: '',
    otherNationality: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is changed
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name) {
      newErrors.name = t('error.required');
    }
    if (!formData.email) {
      newErrors.email = t('error.required');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('error.invalidEmail');
    }
    if (!formData.phone) {
      newErrors.phone = t('error.required');
    }
    if (!formData.nationality) {
      newErrors.nationality = t('error.required');
    }
    if (!formData.age) {
      newErrors.age = t('error.required');
    }
    if (!formData.experience) {
      newErrors.experience = t('error.required');
    }
    if (!formData.availability) {
      newErrors.availability = t('error.required');
    }
    if (formData.nationality === 'Other' && !formData.otherNationality) {
      newErrors.otherNationality = t('error.required');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await onSubmit({
        ...formData,
        type: 'au_pair',
        nationality: formData.nationality === 'Other' ? formData.otherNationality : formData.nationality,
        age: parseInt(formData.age)
      });
      setMessage(t('referral.successMessage'));
      setFormData({
        name: '',
        email: '',
        phone: '',
        nationality: '',
        age: '',
        experience: '',
        englishLevel: 'intermediate' as const,
        availability: '',
        notes: '',
        otherNationality: ''
      });
      setErrors({});
    } catch (error) {
      setMessage(error instanceof Error ? error.message : t('referral.errorMessage'));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {message && (
        <div className={`p-4 rounded ${message === t('referral.successMessage') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {message}
        </div>
      )}

      <FormField
        label={t('referral.name')}
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        disabled={submitting}
        required
      />

      <FormField
        label={t('referral.email')}
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        disabled={submitting}
        required
      />

      <FormField
        label={t('referral.phone')}
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
        disabled={submitting}
        required
      />

      <FormField
        label={t('referral.nationality')}
        name="nationality"
        value={formData.nationality}
        onChange={handleChange}
        error={errors.nationality}
        disabled={submitting}
        options={NATIONALITY_OPTIONS}
        required
      />

      {formData.nationality === 'Other' && (
        <FormField
          label={t('referral.specifyNationality')}
          name="otherNationality"
          value={formData.otherNationality}
          onChange={handleChange}
          error={errors.otherNationality}
          disabled={submitting}
          required
        />
      )}

      <FormField
        label={t('referral.age')}
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        error={errors.age}
        disabled={submitting}
        required
      />

      <FormField
        label={t('referral.experience')}
        name="experience"
        value={formData.experience}
        onChange={handleChange}
        error={errors.experience}
        disabled={submitting}
        multiline
        required
      />

      <FormField
        label={t('referral.englishLevel')}
        name="englishLevel"
        value={formData.englishLevel}
        onChange={handleChange}
        error={errors.englishLevel}
        disabled={submitting}
        options={ENGLISH_LEVELS}
        required
      />

      <FormField
        label={t('referral.availability')}
        name="availability"
        value={formData.availability}
        onChange={handleChange}
        error={errors.availability}
        disabled={submitting}
        multiline
        required
      />

      <FormField
        label={t('referral.notes')}
        name="notes"
        value={formData.notes}
        onChange={handleChange}
        error={errors.notes}
        disabled={submitting}
        multiline
      />

      <div className="mt-8 flex justify-end">
        <FormSubmitButton loading={submitting}>
          {t('referral.submit')}
        </FormSubmitButton>
      </div>
    </form>
  );
}
