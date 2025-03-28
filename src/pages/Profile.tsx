import { useEffect, useState, useCallback, useRef } from "react";
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
  const profileFormRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    let isMounted = true; // Track if component is mounted

    const checkUser = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        
        if (!user) {
          navigate("/login");
          return;
        }
        
        if (isMounted) {
          setUser(user);
          setNewEmail(user.email || "");
          await loadReferrals(user.id);
        }
      } catch (error) {
        console.error("Error checking user:", error);
        if (isMounted) navigate("/login");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    checkUser();

    // Cleanup function to prevent state updates after unmount
    return () => {
      isMounted = false;
    };
  }, [navigate]);

  const loadReferrals = async (userId: string) => {
    try {
      // Load referrals created by this user
      const { data: referredData, error: referredError } = await supabase
        .from("referrals")
        .select("*")
        .eq("created_by", userId);

      if (referredError) throw referredError;

      // Load referrals assigned to this user
      const { data: assignedData, error: assignedError } = await supabase
        .from("referrals")
        .select("*")
        .eq("email", user?.email);

      if (assignedError) throw assignedError;

      setReferrals({
        referred: referredData || [],
        assigned: assignedData || [],
      });
    } catch (error) {
      console.error("Error loading referrals:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleSubmit = async (data: ReferralType) => {
    if (!user) return;
    setSubmitting(true);
    try {
      const { error } = await supabase.from("referrals").insert({
        ...data,
        created_by: user.id,
      });
      if (error) throw error;
      await loadReferrals(user.id);
      setShowReferralForm(false);
    } catch (error) {
      console.error("Error creating referral:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const updateReferralInfo = async (
    referralId: string,
    updates: Partial<ReferralType>
  ) => {
    if (!user) return;
    try {
      const { error } = await supabase
        .from("referrals")
        .update(updates)
        .eq("id", referralId)
        .eq("created_by", user.id);

      if (error) throw error;
      await loadReferrals(user.id);
    } catch (error) {
      console.error("Error updating referral:", error);
    }
  };

  const handleProfileUpdate = async (field: string, value: string) => {
    if (!user) return;
    
    try {
      // Update the user's profile in the database
      const { error } = await supabase
        .from("profiles")
        .update({ [field]: value })
        .eq("id", user.id);
      
      if (error) throw error;
      
      // Show success message
      setMessageType("success");
      setEmailMessage(t("profile.updateSuccess"));
      
      // Clear message after 3 seconds
      setTimeout(() => {
        setEmailMessage("");
      }, 3000);
    } catch (error) {
      console.error(`Error updating ${field}:`, error);
      setMessageType("error");
      setEmailMessage(t("profile.updateError"));
    }
  };

  const handleUpdateEmail = async () => {
    if (!user) return;
    
    // Basic validation
    if (!newEmail || !newEmail.includes("@")) {
      setEmailError(t("profile.invalidEmail"));
      return;
    }
    
    setEmailError("");
    
    try {
      const { error } = await supabase.auth.updateUser({ email: newEmail });
      
      if (error) throw error;
      
      setIsEditingEmail(false);
      setMessageType("success");
      setEmailMessage(t("profile.emailUpdateSent"));
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setEmailMessage("");
      }, 5000);
    } catch (error) {
      console.error("Error updating email:", error);
      setEmailError(t("profile.emailUpdateError"));
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-[80vh] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6 bg-primary">
            <h2 className="text-xl font-semibold text-white">
              {t("profile.title")}
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-white">
              {t("profile.subtitle")}
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium text-gray-900">
                    {t("profile.emailTitle")}
                  </h3>
                  {emailMessage && (
                    <div
                      className={`ml-3 text-sm ${
                        messageType === "success"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {emailMessage}
                    </div>
                  )}
                </div>
                {isEditingEmail ? (
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="email"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                      className="flex-1 min-w-0 block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                      placeholder="email@example.com"
                    />
                    <button
                      type="button"
                      onClick={handleUpdateEmail}
                      className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      {t("profile.save")}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsEditingEmail(false);
                        setNewEmail(user?.email || "");
                        setEmailError("");
                      }}
                      className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      {t("profile.cancel")}
                    </button>
                  </div>
                ) : (
                  <div className="mt-1 flex items-center">
                    <span className="block w-full px-3 py-2 rounded-md border border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                      {user?.email}
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsEditingEmail(true)}
                      className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      {t("profile.edit")}
                    </button>
                  </div>
                )}
                {emailError && (
                  <p className="mt-2 text-sm text-red-600">{emailError}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mt-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              {t("profile.referrals")}
            </h3>
            <button
              type="button"
              onClick={() => setShowReferralForm(!showReferralForm)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              {showReferralForm
                ? t("profile.cancelReferral")
                : t("profile.createReferral")}
            </button>
          </div>

          {showReferralForm && (
            <div className="mb-6 p-4 border border-gray-200 rounded-md">
              <ReferralForm onSubmit={handleSubmit} submitting={submitting} />
            </div>
          )}

          <div className="mt-6">
            <h4 className="text-md font-medium text-gray-700 mb-3">
              {t("profile.yourReferrals")}
            </h4>
            {referrals.referred.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {referrals.referred.map((referral) => (
                  <ReferralCard
                    key={referral.id}
                    referral={referral}
                    onUpdate={updateReferralInfo}
                    isOwner={true}
                  />
                ))}
              </div>
            ) : (
              <p className="text-gray-500">{t("profile.noReferrals")}</p>
            )}
          </div>

          {referrals.assigned.length > 0 && (
            <div className="mt-8">
              <h4 className="text-md font-medium text-gray-700 mb-3">
                {t("profile.assignedReferrals")}
              </h4>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {referrals.assigned.map((referral) => (
                  <ReferralCard
                    key={referral.id}
                    referral={referral}
                    isOwner={false}
                  />
                ))}
              </div>
            </div>
          )}
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
        </div>
      </div>
    </div>
  );
}
