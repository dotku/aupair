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

const LEVEL_OPTIONS = [
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
  { value: 'fluent', label: 'Fluent' }
];

const FORMAT_OPTIONS = [
  { value: 'online', label: 'Online' },
  { value: 'in_person', label: 'In Person' },
  { value: 'both', label: 'Both' }
];

export default function EnglishStudentReferralForm({ onSubmit, submitting }: ReferralTypeFormProps) {
  const { t } = useTranslation('common');
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    nationality: '',
    age: '',
    currentLevel: 'beginner' as const,
    learningGoals: '',
    preferredSchedule: '',
    preferredFormat: 'both' as const,
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
    if (!formData.learningGoals) {
      newErrors.learningGoals = t('error.required');
    }
    if (!formData.preferredSchedule) {
      newErrors.preferredSchedule = t('error.required');
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
        type: 'english_student',
        age: parseInt(formData.age),
        nationality: formData.nationality === 'Other' ? formData.otherNationality : formData.nationality
      });
      setMessage(t('referral.success'));
    } catch (error) {
      setMessage(error instanceof Error ? error.message : t('error.unknown'));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {message && (
        <div className={`p-4 rounded ${message === t('referral.success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {message}
        </div>
      )}

      <FormField
        label={t('referral.student.name')}
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
        label={t('referral.student.age')}
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        error={errors.age}
        disabled={submitting}
        required
      />

      <FormField
        label={t('referral.student.currentLevel')}
        name="currentLevel"
        value={formData.currentLevel}
        onChange={handleChange}
        error={errors.currentLevel}
        disabled={submitting}
        options={LEVEL_OPTIONS}
        required
      />

      <FormField
        label={t('referral.student.learningGoals')}
        name="learningGoals"
        value={formData.learningGoals}
        onChange={handleChange}
        error={errors.learningGoals}
        disabled={submitting}
        multiline
        required
      />

      <FormField
        label={t('referral.student.preferredSchedule')}
        name="preferredSchedule"
        value={formData.preferredSchedule}
        onChange={handleChange}
        error={errors.preferredSchedule}
        disabled={submitting}
        multiline
        required
      />

      <FormField
        label={t('referral.student.preferredFormat')}
        name="preferredFormat"
        value={formData.preferredFormat}
        onChange={handleChange}
        error={errors.preferredFormat}
        disabled={submitting}
        options={FORMAT_OPTIONS}
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
