import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";

export const useAuthStore = create((set) => ({
  authUser: null,
  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
      
    } catch (err) {
      console.log("Error in auth check: ", err);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
}));
