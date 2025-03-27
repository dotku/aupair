import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { EnglishStudentReferral } from '../types/referral';

interface EnglishStudentReferralFormProps {
  onSubmit: (data: Partial<EnglishStudentReferral>) => Promise<void>;
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
];

export default function EnglishStudentReferralForm({ onSubmit, loading }: EnglishStudentReferralFormProps) {
  const { t } = useTranslation('common');
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const submitData = {
      ...formData,
      nationality: formData.nationality === 'Other' ? formData.otherNationality : formData.nationality,
      age: parseInt(formData.age),
      currentLevel: formData.currentLevel,
      preferredFormat: formData.preferredFormat
    };
    await onSubmit(submitData);
  };

  const validateAge = (value: string) => {
    const age = parseInt(value);
    return age >= 3;
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^[+]?[\d\s-]{8,}$/.test(phone);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            {t('referral.student.name')} <span className="text-red-500">*</span>
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="name"
              id="name"
              required
              minLength={2}
              value={formData.name}
              onChange={handleChange}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            />
            <p className="mt-1 text-xs text-gray-500">{t('referral.student.nameHelp')}</p>
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            {t('referral.email')} <span className="text-red-500">*</span>
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              required
              pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
              value={formData.email}
              onChange={handleChange}
              className={`block w-full rounded-md shadow-sm sm:text-sm ${
                formData.email && !validateEmail(formData.email)
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:border-primary focus:ring-primary'
              }`}
            />
            {formData.email && !validateEmail(formData.email) && (
              <p className="mt-1 text-xs text-red-500">{t('referral.emailError')}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            {t('referral.phone')} <span className="text-red-500">*</span>
          </label>
          <div className="mt-1">
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className={`block w-full rounded-md shadow-sm sm:text-sm ${
                formData.phone && !validatePhone(formData.phone)
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:border-primary focus:ring-primary'
              }`}
              placeholder="+86 123 4567 8901"
            />
            <p className="mt-1 text-xs text-gray-500">{t('referral.phoneHelp')}</p>
          </div>
        </div>

        <div>
          <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">
            {t('referral.nationality')} <span className="text-red-500">*</span>
          </label>
          <div className="mt-1">
            <select
              name="nationality"
              id="nationality"
              required
              value={formData.nationality}
              onChange={handleChange}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            >
              <option value="">{t('referral.selectNationality')}</option>
              {NATIONALITY_OPTIONS.map(option => (
                <option key={option} value={option}>
                  {t(`referral.nationalities.${option.toLowerCase()}`)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {formData.nationality === 'Other' && (
          <div>
            <label htmlFor="otherNationality" className="block text-sm font-medium text-gray-700">
              {t('referral.specifyNationality')} <span className="text-red-500">*</span>
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="otherNationality"
                id="otherNationality"
                required
                value={formData.otherNationality}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              />
            </div>
          </div>
        )}

        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">
            {t('referral.student.age')} <span className="text-red-500">*</span>
          </label>
          <div className="mt-1">
            <input
              type="number"
              name="age"
              id="age"
              required
              min="3"
              value={formData.age}
              onChange={handleChange}
              className={`block w-full rounded-md shadow-sm sm:text-sm ${
                formData.age && !validateAge(formData.age)
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:border-primary focus:ring-primary'
              }`}
            />
            <p className="mt-1 text-xs text-gray-500">{t('referral.student.ageHelp')}</p>
            {formData.age && !validateAge(formData.age) && (
              <p className="mt-1 text-xs text-red-500">{t('referral.student.ageError')}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="currentLevel" className="block text-sm font-medium text-gray-700">
            {t('referral.student.currentLevel')} <span className="text-red-500">*</span>
          </label>
          <div className="mt-1">
            <select
              name="currentLevel"
              id="currentLevel"
              required
              value={formData.currentLevel}
              onChange={handleChange}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            >
              {['beginner', 'intermediate', 'advanced', 'fluent'].map(level => (
                <option key={level} value={level}>
                  {t(`referral.englishLevels.${level}`)}
                </option>
              ))}
            </select>
            <p className="mt-1 text-xs text-gray-500">{t('referral.student.currentLevelHelp')}</p>
          </div>
        </div>

        <div>
          <label htmlFor="preferredFormat" className="block text-sm font-medium text-gray-700">
            {t('referral.student.preferredFormat')} <span className="text-red-500">*</span>
          </label>
          <div className="mt-1">
            <select
              name="preferredFormat"
              id="preferredFormat"
              required
              value={formData.preferredFormat}
              onChange={handleChange}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            >
              {['online', 'in-person', 'both'].map(format => (
                <option key={format} value={format}>
                  {t(`referral.student.formats.${format}`)}
                </option>
              ))}
            </select>
            <p className="mt-1 text-xs text-gray-500">{t('referral.student.preferredFormatHelp')}</p>
          </div>
        </div>

        <div>
          <label htmlFor="preferredSchedule" className="block text-sm font-medium text-gray-700">
            {t('referral.student.preferredSchedule')} <span className="text-red-500">*</span>
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="preferredSchedule"
              id="preferredSchedule"
              required
              value={formData.preferredSchedule}
              onChange={handleChange}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              placeholder={t('referral.student.schedulePlaceholder')}
            />
            <p className="mt-1 text-xs text-gray-500">{t('referral.student.scheduleHelp')}</p>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="learningGoals" className="block text-sm font-medium text-gray-700">
            {t('referral.student.learningGoals')} <span className="text-red-500">*</span>
          </label>
          <div className="mt-1">
            <textarea
              name="learningGoals"
              id="learningGoals"
              rows={3}
              required
              minLength={50}
              value={formData.learningGoals}
              onChange={handleChange}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              placeholder={t('referral.student.learningGoalsPlaceholder')}
            />
            <p className="mt-1 text-xs text-gray-500">{t('referral.student.learningGoalsHelp')}</p>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
            {t('referral.notes')}
          </label>
          <div className="mt-1">
            <textarea
              name="notes"
              id="notes"
              rows={3}
              value={formData.notes}
              onChange={handleChange}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              placeholder={t('referral.notesPlaceholder')}
            />
            <p className="mt-1 text-xs text-gray-500">{t('referral.notesHelp')}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
        >
          {loading ? t('referral.submitting') : t('referral.submit')}
        </button>
      </div>
    </form>
  );
}
