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

export default function HostFamilyReferralForm({ onSubmit, submitting }: ReferralTypeFormProps) {
  const { t } = useTranslation('common');
  const [message, setMessage] = useState('');
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
    if (!formData.location) {
      newErrors.location = t('error.required');
    }
    if (!formData.childrenCount) {
      newErrors.childrenCount = t('error.required');
    }
    if (!formData.childrenAges) {
      newErrors.childrenAges = t('error.required');
    }
    if (!formData.requirements) {
      newErrors.requirements = t('error.required');
    }
    if (!formData.startDate) {
      newErrors.startDate = t('error.required');
    }
    if (!formData.duration) {
      newErrors.duration = t('error.required');
    }
    if (formData.preferredNationalities === 'Other' && !formData.otherNationality) {
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
        childrenCount: parseInt(formData.childrenCount),
        type: 'host_family',
        preferredNationalities: formData.preferredNationalities ? [formData.preferredNationalities] : []
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
        label={t('referral.hostFamily.name')}
        help={t('referral.hostFamily.nameHelp')}
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        disabled={submitting}
        required
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label={t('referral.email')}
          help={t('referral.emailHelp')}
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
          help={t('referral.phoneHelp')}
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          disabled={submitting}
          required
        />
      </div>

      <FormField
        label={t('referral.hostFamily.location')}
        help={t('referral.hostFamily.locationHelp')}
        name="location"
        value={formData.location}
        onChange={handleChange}
        error={errors.location}
        disabled={submitting}
        required
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label={t('referral.hostFamily.childrenCount')}
          name="childrenCount"
          value={formData.childrenCount}
          onChange={handleChange}
          error={errors.childrenCount}
          disabled={submitting}
          required
        />

        <FormField
          label={t('referral.hostFamily.childrenAges')}
          help={t('referral.hostFamily.childrenAgesHelp')}
          name="childrenAges"
          value={formData.childrenAges}
          onChange={handleChange}
          error={errors.childrenAges}
          disabled={submitting}
          required
        />
      </div>

      <FormField
        label={t('referral.hostFamily.requirements')}
        help={t('referral.hostFamily.requirementsHelp')}
        name="requirements"
        value={formData.requirements}
        onChange={handleChange}
        error={errors.requirements}
        disabled={submitting}
        required
        multiline
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label={t('referral.hostFamily.startDate')}
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          error={errors.startDate}
          disabled={submitting}
          required
        />

        <FormField
          label={t('referral.hostFamily.duration')}
          help={t('referral.hostFamily.durationHelp')}
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          error={errors.duration}
          disabled={submitting}
          required
        />
      </div>

      <FormField
        label={t('referral.hostFamily.preferredNationalities')}
        help={t('referral.hostFamily.preferredNationalitiesHelp')}
        name="preferredNationalities"
        value={formData.preferredNationalities}
        onChange={handleChange}
        error={errors.preferredNationalities}
        disabled={submitting}
        options={NATIONALITY_OPTIONS}
      />

      {formData.preferredNationalities === 'Other' && (
        <FormField
          label={t('referral.otherNationality')}
          name="otherNationality"
          value={formData.otherNationality}
          onChange={handleChange}
          error={errors.otherNationality}
          disabled={submitting}
          required
        />
      )}

      <div className="mt-8 flex justify-end">
        <FormSubmitButton loading={submitting}>
          {t('referral.submit')}
        </FormSubmitButton>
      </div>
    </form>
  );
}
