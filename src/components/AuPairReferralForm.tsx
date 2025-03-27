import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { AuPairReferral } from '../types/referral';
import { FormField, FormSelect, FormSubmitButton } from './ui/FormField';

interface AuPairReferralFormProps {
  onSubmit: (data: Partial<AuPairReferral>) => Promise<void>;
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

const ENGLISH_LEVELS = ['beginner', 'intermediate', 'advanced', 'fluent'];

export default function AuPairReferralForm({ onSubmit, loading }: AuPairReferralFormProps) {
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

    if (!validateEmail(formData.email)) {
      newErrors.email = t('referral.emailError');
    }

    if (!validatePhone(formData.phone)) {
      newErrors.phone = t('referral.phoneError');
    }

    if (!validateAge(formData.age)) {
      newErrors.age = t('referral.ageError');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    if (!validateForm()) {
      return;
    }

    try {
      await onSubmit({
        ...formData,
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

  const validateAge = (value: string) => {
    const age = parseInt(value);
    return age >= 18 && age <= 35;
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^[+]?[\d\s-]{8,}$/.test(phone);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
        <FormField
          label={t('referral.name')}
          help={t('referral.nameHelp')}
          required
        >
          <input
            type="text"
            name="name"
            required
            minLength={2}
            value={formData.name}
            onChange={handleChange}
          />
        </FormField>

        <FormField
          label={t('referral.email')}
          help={t('referral.emailHelp')}
          error={errors.email}
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
          error={errors.phone}
          required
        >
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+86 123 4567 8901"
          />
        </FormField>

        <FormField
          label={t('referral.nationality')}
          required
        >
          <FormSelect
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            options={NATIONALITY_OPTIONS}
            aria-label={t('referral.selectNationality')}
          />
        </FormField>

        {formData.nationality === 'Other' && (
          <FormField
            label={t('referral.specifyNationality')}
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

        <FormField
          label={t('referral.age')}
          help={t('referral.ageHelp')}
          error={errors.age}
          required
        >
          <input
            type="number"
            name="age"
            required
            min="18"
            max="35"
            value={formData.age}
            onChange={handleChange}
          />
        </FormField>

        <FormField
          label={t('referral.englishLevel')}
          required
        >
          <FormSelect
            name="englishLevel"
            value={formData.englishLevel}
            onChange={handleChange}
            options={ENGLISH_LEVELS.map(level => ({
              value: level,
              label: t(`referral.levels.${level}`)
            }))}
          />
        </FormField>

        <div className="sm:col-span-2">
          <FormField
            label={t('referral.availability')}
            help={t('referral.availabilityHelp')}
            required
          >
            <input
              type="text"
              name="availability"
              required
              value={formData.availability}
              onChange={handleChange}
              placeholder={t('referral.availabilityPlaceholder')}
            />
          </FormField>
        </div>

        <div className="sm:col-span-2">
          <FormField
            label={t('referral.experience')}
            help={t('referral.experienceHelp')}
            required
          >
            <textarea
              name="experience"
              required
              minLength={50}
              value={formData.experience}
              onChange={handleChange}
              placeholder={t('referral.experiencePlaceholder')}
            />
          </FormField>
        </div>

        <div className="sm:col-span-2">
          <FormField
            label={t('referral.notes')}
            help={t('referral.notesHelp')}
          >
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder={t('referral.notesPlaceholder')}
            />
          </FormField>
        </div>
      </div>

      {message && (
        <div className="mt-6 rounded-md p-4 text-sm text-center font-medium ${
          message === t('referral.successMessage')
            ? 'bg-green-50 text-green-800'
            : 'bg-red-50 text-red-800'
        }">
          <p>{message}</p>
        </div>
      )}

      <div className="mt-8 flex justify-end">
        <FormSubmitButton loading={loading}>
          {t('referral.submit')}
        </FormSubmitButton>
      </div>
    </form>
  );
}
