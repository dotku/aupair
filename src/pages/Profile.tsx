import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { supabase } from '../lib/supabase';
import type { User } from '@supabase/supabase-js';
import type { AuPairReferral, HostFamilyReferral, EnglishStudentReferral } from '../types/referral';
import ReferralForm from '../components/ReferralForm';

type ReferralType = AuPairReferral | HostFamilyReferral | EnglishStudentReferral;

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [showReferralForm, setShowReferralForm] = useState(false);
  const [referrals, setReferrals] = useState<ReferralType[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const { t } = useTranslation('common');
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          navigate('/login');
          return;
        }
        setUser(user);
        await loadReferrals(user.id);
      } catch (error) {
        console.error('Error checking user:', error);
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, [navigate]);

  const loadReferrals = async (userId: string) => {
    try {
      const [auPairs, hostFamilies, students] = await Promise.all([
        supabase
          .from('au_pair_referrals')
          .select('*')
          .eq('referred_by', userId)
          .order('created_at', { ascending: false }),
        supabase
          .from('host_family_referrals')
          .select('*')
          .eq('referred_by', userId)
          .order('created_at', { ascending: false }),
        supabase
          .from('english_student_referrals')
          .select('*')
          .eq('referred_by', userId)
          .order('created_at', { ascending: false })
      ]);

      const allReferrals = [
        ...(auPairs.data || []),
        ...(hostFamilies.data || []),
        ...(students.data || [])
      ].sort((a, b) => 
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );

      setReferrals(allReferrals);
    } catch (error) {
      console.error('Error loading referrals:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleSubmit = async (data: Partial<ReferralType>) => {
    if (!user) return;
    setSubmitting(true);
    
    try {
      const { error } = await supabase
        .from(`${data.type}_referrals`)
        .insert([data]);

      if (error) throw error;
      await loadReferrals(user.id);
      setShowReferralForm(false);
    } catch (error) {
      console.error('Error submitting referral:', error);
      throw error;
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">{t('common.loading')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-gray-900">
              {t('profile.title')}
            </h1>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              {t('auth.signOut')}
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {t('profile.emailTitle')}
              </h3>
              <p className="text-gray-600">{user?.email}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {t('profile.accountStatus')}
              </h3>
              <div className="flex items-center">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    user?.confirmed_at
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {user?.confirmed_at
                    ? t('profile.verified')
                    : t('profile.pendingVerification')}
                </span>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                {t('profile.actions')}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <button
                  onClick={() => navigate('/profile/edit')}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  {t('profile.editProfile')}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              {t('referral.title')}
            </h2>
            <button
              onClick={() => setShowReferralForm(!showReferralForm)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              {showReferralForm ? t('referral.cancel') : t('referral.add')}
            </button>
          </div>

          {showReferralForm && user && (
            <div className="mb-6">
              <ReferralForm
                userId={user.id}
                onSubmit={handleSubmit}
                loading={submitting}
              />
            </div>
          )}

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">
              {t('referral.yourReferrals')}
            </h3>
            {referrals.length === 0 ? (
              <p className="text-gray-500">{t('referral.noReferrals')}</p>
            ) : (
              <div className="grid gap-4">
                {referrals.map((referral) => (
                  <div
                    key={referral.id}
                    className="border rounded-lg p-4 hover:bg-gray-50"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">
                          {referral.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {referral.type === 'au_pair' && (
                            <>
                              {referral.nationality}, {referral.age} {t('referral.yearsOld')}
                            </>
                          )}
                          {referral.type === 'host_family' && (
                            <>
                              {referral.location}, {referral.childrenCount} {t('referral.children')}
                            </>
                          )}
                          {referral.type === 'english_student' && (
                            <>
                              {t('referral.level')}: {t(`referral.levels.${referral.currentLevel}`)}
                            </>
                          )}
                        </p>
                      </div>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          referral.status === 'approved'
                            ? 'bg-green-100 text-green-800'
                            : referral.status === 'rejected'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {t(`referral.status.${referral.status}`)}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      {referral.type === 'au_pair' && referral.experience}
                      {referral.type === 'host_family' && referral.requirements}
                      {referral.type === 'english_student' && referral.learningGoals}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
