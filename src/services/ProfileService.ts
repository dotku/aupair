import { supabase } from "../lib/supabase";
import { Profile, ProfileFormData } from "../types/profile";
import { ApiClient } from "./ApiClient";

// Define API response interface
interface ProfileApiResponse {
  success: boolean;
  message?: string;
  error?: string;
  data?: Profile;
  id?: string;
}

export class ProfileService {
  /**
   * 获取指定用户的个人资料
   */
  static async getProfile(userId: string): Promise<Profile | null> {
    // 检查当前会话
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session && !userId) {
      console.error("No active session and no userId provided");
      return null;
    }

    try {
      // Use API endpoint instead of direct Supabase call
      const response = await ApiClient.get<ProfileApiResponse>(`/profile?userId=${userId}`);
      
      if (!response.success || !response.data) {
        console.error("Error fetching profile:", response.error);
        return null;
      }
      
      return response.data;
    } catch (error) {
      console.error("Error fetching profile:", error);
      return null;
    }
  }

  /**
   * 创建或更新用户的个人资料
   */
  static async upsertProfile(
    userId: string,
    profile: ProfileFormData
  ): Promise<{ success: boolean; error?: Error | null }> {
    // 检查当前会话
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) {
      console.error("No active session");
      return { success: false, error: new Error("User not authenticated") };
    }

    // 确保 userId 与当前登录用户相符
    if (session.user.id !== userId) {
      console.error("User ID mismatch");
      return { success: false, error: new Error("Unauthorized operation") };
    }

    try {
      // Use API endpoint to update profile - this endpoint handles both create and update
      const response = await ApiClient.post<ProfileApiResponse>('/profile', {
        userId,
        profileData: {
          full_name: profile.full_name,
          phone_number: profile.phone_number,
          address: profile.address,
          city: profile.city,
          country: profile.country,
          postal_code: profile.postal_code,
          bio: profile.bio
        }
      });

      if (!response.success) {
        console.error("Error updating profile:", response.error);
        return { success: false, error: new Error(response.error) };
      }

      return { success: true };
    } catch (error) {
      console.error("Exception during profile update:", error);
      return { success: false, error: error as Error };
    }
  }

  /**
   * 创建空的个人资料
   */
  static async createEmptyProfile(userId: string): Promise<{ success: boolean; error?: Error | null }> {
    try {
      // Use API endpoint to create empty profile
      const response = await ApiClient.post<ProfileApiResponse>('/profile', {
        userId
      });

      if (!response.success) {
        console.error("Error creating empty profile:", response.error);
        return { success: false, error: new Error(response.error) };
      }

      return { success: true };
    } catch (error) {
      console.error("Exception during profile creation:", error);
      return { success: false, error: error as Error };
    }
  }

  /**
   * 更新用户的头像
   */
  static async updateAvatar(
    userId: string,
    avatarUrl: string
  ): Promise<{ success: boolean; error?: Error | null }> {
    // 检查当前会话
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) {
      console.error("No active session");
      return { success: false, error: new Error("User not authenticated") };
    }

    // 确保 userId 与当前登录用户相符
    if (session.user.id !== userId) {
      console.error("User ID mismatch");
      return { success: false, error: new Error("Unauthorized operation") };
    }

    try {
      // Use API endpoint to update avatar
      const response = await ApiClient.post<ProfileApiResponse>('/profile', {
        userId,
        profileData: {
          avatar_url: avatarUrl
        }
      });

      if (!response.success) {
        console.error("Error updating avatar:", response.error);
        return { success: false, error: new Error(response.error) };
      }

      return { success: true };
    } catch (error) {
      console.error("Exception during avatar update:", error);
      return { success: false, error: error as Error };
    }
  }
}
