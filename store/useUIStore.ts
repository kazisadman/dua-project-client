import { create } from "zustand";

interface UIState {
  isSettingOpen: boolean;
  toggleSettings: () => void;
}

export const useUIState = create<UIState>((set) => ({
  isSettingOpen: false,

  toggleSettings: () =>
    set((state) => ({ isSettingOpen: !state.isSettingOpen })),
}));
