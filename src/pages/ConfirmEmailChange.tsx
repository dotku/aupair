import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { supabase } from "../lib/supabase";

export default function ConfirmEmailChange() {
  const navigate = useNavigate();
  const { t } = useTranslation("common");
  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(true);
  const [newEmail, setNewEmail] = useState("");

  useEffect(() => {
    const checkUserEmailChange = async () => {
      try {
        // 1️⃣ 获取最新的用户
        const { data, error } = await supabase.auth.getUser();
        if (error || !data?.user) {
          console.error("❌ 获取用户信息失败:", error);
          throw new Error("请重新登录以验证邮箱更新。");
        }

        console.log("✅ 获取到用户信息:", data.user);

        // 2️⃣ 获取新的邮箱地址
        const updatedEmail = data.user.email || ""; // Provide a fallback to an empty string
        setNewEmail(updatedEmail);

        // 3️⃣ 跳转到 profile，并附带 email 更新成功的状态
        navigate("/profile?emailChanged=true");
      } catch (error: unknown) {
        console.error("❌ 邮箱变更失败:", error);
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError(t("error.unknown"));
        }
      } finally {
        setIsProcessing(false);
      }
    };

    checkUserEmailChange();
  }, [navigate, t]);

  const handleLoginAgain = async () => {
    if (!newEmail) return;

    try {
      console.log("🔄 发送 OTP 登录请求:", newEmail);
      await supabase.auth.signInWithOtp({ email: newEmail });

      alert("📩 请检查您的邮箱，点击登录链接以恢复会话。");
    } catch (error: unknown) {
      console.error("❌ 登录失败:", error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError(t("error.unknown"));
      }
    }
  };

  if (isProcessing) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">
            {t("profile.confirmingEmailChange")}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        {error ? (
          <>
            <div className="text-red-600 mb-4">
              <svg
                className="h-12 w-12 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h1 className="text-xl font-semibold text-gray-900 mb-2">
              {t("profile.emailChangeError")}
            </h1>
            <p className="text-gray-600 mb-4">{error}</p>
            {newEmail && (
              <button
                onClick={handleLoginAgain}
                className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark"
              >
                📩 重新登录
              </button>
            )}
          </>
        ) : (
          <h1 className="text-xl font-semibold text-green-600">
            {t("profile.emailChangeSuccess")}
          </h1>
        )}
      </div>
    </div>
  );
}
