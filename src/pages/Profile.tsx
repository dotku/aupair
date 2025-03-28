<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import { useEffect, useState, useCallback, useRef } from "react";
>>>>>>> ab46b4e (update profile page)
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
  const [messageType, setMessageType] = useState<"success" | "error">(
    "success"
  );
<<<<<<< HEAD
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
        await loadReferrals(user.id);
=======
  const [profileData, setProfileData] = useState<ProfileFormData>({
    full_name: "",
    phone_number: "",
    address: "",
  });
  const [profileStatus, setProfileStatus] = useState<string>("");
  const [profileStatusType, setProfileStatusType] = useState<
    "success" | "error"
  >("success");
  const { t } = useTranslation("common");
  const navigate = useNavigate();

  // Create a ref to hold debounce timers for each field
  const debounceTimers = useRef<{[key: string]: NodeJS.Timeout}>({});

  // Define loadProfileData with useCallback to prevent recreation on every render
  const loadProfileData = useCallback(async (userId: string) => {
    try {
      console.log("Loading profile data for user:", userId);
      const profile = await ProfileService.getProfile(userId);
      if (profile) {
        console.log("Profile loaded:", profile);
        setProfileData({
          full_name: profile.full_name || "",
          phone_number: profile.phone_number || "",
          address: profile.address || "",
          city: profile.city || "",
          country: profile.country || "",
          postal_code: profile.postal_code || "",
          bio: profile.bio || "",
        });
      } else {
        // Initialize from user metadata if profile doesn't exist
        const userData = await supabase.auth.getUser();
        const userMetadata = userData?.data?.user?.user_metadata || {};

        setProfileData({
          full_name: userMetadata.name || "",
          phone_number: userMetadata.phone || "",
          address: userMetadata.address || "",
        });
      }
    } catch (error) {
      console.error("Error loading profile data:", error);
      // Don't update state if there's an error to prevent infinite loops
    }
  }, []); // Remove the user dependency to prevent loops
>>>>>>> ab46b4e (update profile page)

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
        .from("Referral")
        .select(
          `
          *,
          AuPairDetails (*),
          HostFamilyDetails (*),
          EnglishStudentDetails (*)
        `
        )
        .or(`referredBy.eq.${userId},accountManager.eq.${userId}`)
        .order("createdAt", { ascending: false });

      if (error) throw error;

      // Group referrals by type (referred vs assigned)
      const referred =
        referralData?.filter((r) => r.referredBy === userId) || [];
      const assigned =
        referralData?.filter(
          (r) => r.accountManager === userId && r.referredBy !== userId
        ) || [];

      setReferrals({ referred, assigned });
    } catch (error) {
      console.error("Error loading referrals:", error);
    }
<<<<<<< HEAD
  };
=======
  }, []);

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

        // Only update state if component is still mounted
        if (isMounted) {
          setUser(user);

          // First ensure a profile exists for this user
          await ensureProfileExists(user.id);

          // Then fetch the profile data
          await loadProfileData(user.id);

          await loadReferrals(user.id);

          // Check if coming back from email change confirmation
          const emailChanged = searchParams.get("emailChanged");
          if (emailChanged === "true" && isMounted) {
            setEmailMessage(t("profile.emailConfirmationRequired"));
            setMessageType("success");
            // Remove the query parameter
            navigate("/profile", { replace: true });
          }
        }
      } catch (error) {
        console.error("Error checking user:", error);
        if (isMounted) {
          navigate("/login");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    checkUser();

    // Cleanup function to prevent state updates after unmount
    return () => {
      isMounted = false;
    };
  }, [
    navigate,
    searchParams,
    t,
    loadProfileData,
    ensureProfileExists,
    loadReferrals,
  ]);
>>>>>>> ab46b4e (update profile page)

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleSubmit = async (data: ReferralType) => {
    setSubmitting(true);

    try {
      const { error } = await supabase.from("Referral").insert([data]);

      if (error) throw error;

      await loadReferrals(user!.id);
      setShowReferralForm(false);
    } catch (error) {
      console.error("Error submitting referral:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const updateReferralInfo = async (
    referralId: string,
    updates: Partial<ReferralType>
  ) => {
    try {
      setSubmitting(true);
      const { error } = await supabase
        .from("Referral")
        .update(updates)
        .eq("id", referralId);

      if (error) throw error;

      // Reload referrals to get updated data
      await loadReferrals(user!.id);
    } catch (error) {
      console.error("Error updating referral:", error);
    } finally {
      setSubmitting(false);
    }
  };

<<<<<<< HEAD
=======
  const handleProfileUpdate = async (field: string, value: string) => {
    if (!user) return;

    try {
      // Update UI immediately for responsiveness
      setProfileData(prevData => ({
        ...prevData,
        [field]: value
      }));
      
      // Show a subtle status indicator
      setProfileStatus("Typing...");
      setProfileStatusType("success");
      
      // Clear any existing timeout for this specific field
      if (debounceTimers.current[field]) {
        console.log(`Clearing previous debounce timer for ${field}`);
        clearTimeout(debounceTimers.current[field]);
      }
      
      // Set debounce delay - longer for phone_number to make it obvious
      const delay = field === 'phone_number' ? 3000 : 800;
      console.log(`Setting debounce delay of ${delay}ms for ${field}`);
      
      // Set new debounce timer
      debounceTimers.current[field] = setTimeout(async () => {
        try {
          console.log(`Debounce complete for ${field} - sending API update`);
          setSubmitting(true);
          setProfileStatus("Updating profile...");
          
          // Get the current profile data for the update
          const updatedProfileData = { ...profileData, [field]: value };
          
          // Call the API after debounce period
          const result = await ProfileService.upsertProfile(user.id, updatedProfileData);
          
          if (result.success) {
            console.log("Profile update successful");
            setProfileStatus("Profile updated successfully!");
            setProfileStatusType("success");
            
            // Refresh data to confirm changes
            await loadProfileData(user.id);
          } else {
            console.error("Profile update error:", result.error);
            setProfileStatus("Failed to update profile. Please try again.");
            setProfileStatusType("error");
          }
        } catch (error) {
          console.error(`Error updating ${field}:`, error);
          setProfileStatus("An error occurred while updating your profile.");
          setProfileStatusType("error");
        } finally {
          // Clear the timer reference after it's done
          delete debounceTimers.current[field];
          setSubmitting(false);
          
          // Clear status after a delay
          setTimeout(() => {
            setProfileStatus("");
          }, 3000);
        }
      }, delay);
    } catch (error) {
      console.error(`Error in handleProfileUpdate for ${field}:`, error);
      setProfileStatus("An unexpected error occurred.");
      setProfileStatusType("error");
    }
  };

>>>>>>> ab46b4e (update profile page)
  const handleUpdateEmail = async () => {
    if (!newEmail) {
      setEmailError(t("error.required"));
      return;
    }
    if (!/\S+@\S+\.\S+/.test(newEmail)) {
      setEmailError(t("error.invalidEmail"));
      return;
    }

    try {
      setSubmitting(true);
      const { error } = await supabase.auth.updateUser(
        {
          email: newEmail,
        },
        {
          emailRedirectTo: `${window.location.origin}/confirm-email-change`,
        }
      );

      if (error) throw error;

      // Show success message and reset state
      setIsEditingEmail(false);
      setEmailError("");
      setEmailMessage(t("profile.emailUpdateSuccess"));
      setMessageType("success");
    } catch (error) {
      console.error("Error updating email:", error);
      setEmailError(
        error instanceof Error ? error.message : t("error.unknown")
      );
      setEmailMessage(t("profile.emailUpdateError"));
      setMessageType("error");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-[80vh] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-gray-900">
              {t("profile.title")}
            </h1>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              {t("auth.signOut")}
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
<<<<<<< HEAD
=======
                {t("profile.basicInfo")}
              </h3>

              {/* Profile status message */}
              {profileStatus && (
                <div
                  className={`p-4 mb-4 rounded ${
                    profileStatusType === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {profileStatus}
                </div>
              )}

              <div className="space-y-4">
                <FormField
                  label={t("profile.name")}
                  type="text"
                  value={
                    profileData.full_name || user?.user_metadata?.name || ""
                  }
                  onChange={(e) => {
                    handleProfileUpdate("full_name", e.target.value);
                  }}
                  disabled={submitting}
                  placeholder={t("profile.namePlaceholder")}
                />
                <FormField
                  label={t("profile.phone")}
                  type="tel"
                  value={
                    profileData.phone_number || user?.user_metadata?.phone || ""
                  }
                  onChange={(e) => {
                    handleProfileUpdate("phone_number", e.target.value);
                  }}
                  disabled={submitting}
                  placeholder={t("profile.phonePlaceholder")}
                />
                <FormField
                  label={t("profile.address")}
                  type="text"
                  value={
                    profileData.address || user?.user_metadata?.address || ""
                  }
                  onChange={(e) => {
                    handleProfileUpdate("address", e.target.value);
                  }}
                  disabled={submitting}
                  placeholder={t("profile.addressPlaceholder")}
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
>>>>>>> ab46b4e (update profile page)
                {t("profile.emailTitle")}
              </h3>
              {emailMessage && (
                <div
                  className={`p-4 mb-4 rounded ${
                    messageType === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {emailMessage}
                </div>
              )}
              {isEditingEmail ? (
                <div className="space-y-4">
                  <FormField
                    label={t("profile.newEmail")}
                    type="email"
                    value={newEmail}
                    onChange={(e) => {
                      setNewEmail(e.target.value);
                      setEmailError("");
                    }}
                    error={emailError}
                    disabled={submitting}
                    placeholder={user?.email || ""}
                    required
                  />
                  <div className="flex space-x-4">
                    <button
                      onClick={handleUpdateEmail}
                      disabled={submitting}
                      className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
                    >
                      {submitting ? t("common.saving") : t("common.save")}
                    </button>
                    <button
                      onClick={() => {
                        setIsEditingEmail(false);
                        setNewEmail("");
                        setEmailError("");
                      }}
                      disabled={submitting}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                      {t("common.cancel")}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <p className="text-gray-600">{user?.email}</p>
                  <button
                    onClick={() => {
                      setIsEditingEmail(true);
                      setNewEmail(user?.email || "");
                    }}
                    className="text-sm text-primary hover:text-primary-dark focus:outline-none"
                  >
                    {t("edit")}
                  </button>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {t("profile.accountStatus")}
              </h3>
              <div className="flex items-center">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    user?.confirmed_at
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {user?.confirmed_at
                    ? t("profile.verified")
                    : t("profile.pendingVerification")}
                </span>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                {t("profile.actions")}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <button
                  onClick={() => navigate("/profile/edit")}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  {t("profile.editProfile")}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {t("referral.yourReferrals")}
                </h3>
                <button
                  onClick={() => setShowReferralForm(true)}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  {t("referral.add")}
                </button>
              </div>

              {referrals.referred.length > 0 ? (
                <div className="space-y-6">
                  {referrals.referred.map((referral) => (
                    <ReferralCard
                      key={referral.id}
                      referral={referral}
                      onUpdate={updateReferralInfo}
                      isSubmitting={submitting}
                      isOwner={true}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">{t("referral.noReferrals")}</p>
              )}
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                {t("referral.assignedReferrals")}
              </h3>

              {referrals.assigned.length > 0 ? (
                <div className="space-y-6">
                  {referrals.assigned.map((referral) => (
                    <ReferralCard
                      key={referral.id}
                      referral={referral}
                      onUpdate={updateReferralInfo}
                      isSubmitting={submitting}
                      isOwner={false}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">
                  {t("referral.noAssignedReferrals")}
                </p>
              )}
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
