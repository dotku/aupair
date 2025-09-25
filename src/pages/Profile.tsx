import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { supabase } from "../lib/supabase";
import type { User } from "@supabase/supabase-js";
import type { ReferralType } from "../types/referral";
import ReferralForm from "../components/ReferralForm";
import ReferralCard from "../components/ReferralCard";
import { FormField } from "../components/ui/FormField";

type Referrals = {
  referred: ReferralType[];
  assigned: ReferralType[];
};

export default function Profile() {
  const [searchParams] = useSearchParams();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [showReferralForm, setShowReferralForm] = useState(false);
  const [referrals, setReferrals] = useState<Referrals>({
    referred: [],
    assigned: [],
  });
  const [submitting, setSubmitting] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error">("success");
  const { t } = useTranslation("common");
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (!user) {
          navigate("/login");
          return;
        }
        setUser(user);
        setNewEmail(user.email || "");
        await loadReferrals(user.id);

        // Check if coming back from email change confirmation
        const emailChanged = searchParams.get("emailChanged");
        if (emailChanged === "true") {
          setEmailMessage(t("profile.emailConfirmationRequired"));
          setMessageType("success");
          // Remove the query parameter
          navigate("/profile", { replace: true });
        }
      } catch (error) {
        console.error("Error checking user:", error);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, [navigate, searchParams, t]);

  const loadReferrals = async (userId: string) => {
    try {
      const { data: referralData, error } = await supabase
        .from("referrals")
        .select("*")
        .eq("created_by", userId)
        .order("created_at", { ascending: false });

      if (error) throw error;

      setReferrals({
        referred: referralData || [],
        assigned: [],
      });
    } catch (error) {
      console.error("Error loading referrals:", error);
    }
  };

  const updateReferralInfo = async (referralId: string, updates: Partial<ReferralType>) => {
    try {
      const { error } = await supabase
        .from("referrals")
        .update(updates)
        .eq("id", referralId);

      if (error) throw error;

      // Update local state
      setReferrals((prev) => ({
        ...prev,
        referred: prev.referred.map((r) =>
          r.id === referralId ? { ...r, ...updates } : r
        ),
      }));
    } catch (error) {
      console.error("Error updating referral:", error);
    }
  };

  const handleSubmit = async (referralData: any) => {
    if (!user) return;

    setSubmitting(true);
    try {
      const { data, error } = await supabase
        .from("referrals")
        .insert([
          {
            ...referralData,
            created_by: user.id,
            created_at: new Date().toISOString(),
          },
        ])
        .select()
        .single();

      if (error) throw error;

      // Update local state
      setReferrals((prev) => ({
        ...prev,
        referred: [data, ...prev.referred],
      }));

      setShowReferralForm(false);
    } catch (error) {
      console.error("Error creating referral:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleEmailUpdate = async () => {
    if (!user || !newEmail) return;

    setEmailError("");
    try {
      const { error } = await supabase.auth.updateUser({
        email: newEmail,
      });

      if (error) throw error;

      setEmailMessage(t("profile.emailUpdateSent"));
      setMessageType("success");
      setIsEditingEmail(false);
    } catch (error: any) {
      setEmailError(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">{t("common.loading")}</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {t("profile.title")}
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                {t("profile.subtitle")}
              </p>
            </div>
            <button
              onClick={() => setShowReferralForm(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {t("profile.createReferral")}
            </button>
          </div>

          {emailMessage && (
            <div
              className={`mb-6 p-4 rounded-md ${
                messageType === "success"
                  ? "bg-green-50 text-green-800"
                  : "bg-red-50 text-red-800"
              }`}
            >
              {emailMessage}
            </div>
          )}

          {/* User Info Section */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              {t("profile.accountInfo")}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  {t("profile.email")}
                </label>
                <div className="mt-1 flex">
                  {isEditingEmail ? (
                    <div className="flex-1 flex space-x-2">
                      <FormField
                        type="email"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        error={emailError}
                      />
                      <button
                        onClick={handleEmailUpdate}
                        className="px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                      >
                        {t("common.save")}
                      </button>
                      <button
                        onClick={() => {
                          setIsEditingEmail(false);
                          setNewEmail(user.email || "");
                          setEmailError("");
                        }}
                        className="px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        {t("common.cancel")}
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between w-full">
                      <span className="text-gray-900">{user.email}</span>
                      <button
                        onClick={() => setIsEditingEmail(true)}
                        className="ml-2 text-blue-600 hover:text-blue-500 text-sm font-medium"
                      >
                        {t("profile.changeEmail")}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Referrals Section */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              {t("profile.myReferrals")}
            </h3>
            {referrals.referred.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {referrals.referred.map((referral) => (
                  <ReferralCard
                    key={referral.id}
                    referral={referral}
                    onUpdate={updateReferralInfo}
                    isSubmitting={false}
                    isOwner={true}
                  />
                ))}
              </div>
            ) : (
              <p className="text-gray-500">{t("profile.noReferrals")}</p>
            )}
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mt-6">
          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {t("profile.accountSettings")}
                </h3>
              </div>
              <button
                type="button"
                onClick={handleSignOut}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                {t("profile.signOut")}
              </button>
            </div>
          </div>

          {showReferralForm && (
            <ReferralForm
              onSubmit={handleSubmit}
              onClose={() => setShowReferralForm(false)}
              submitting={submitting}
            />
          )}
        </div>
      </div>
    </div>
  );
}
