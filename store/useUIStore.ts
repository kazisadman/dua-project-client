import { create } from "zustand";

interface UIState {
  isSettingOpen: boolean;
  toggleSettings: () => void;

  isCategoryPanelOpen: boolean;
  toggleCategoryPanel: () => void;
}

export const useUIState = create<UIState>((set) => ({
  isSettingOpen: false,
  isCategoryPanelOpen: false,

  toggleSettings: () =>
    set((state) => ({ isSettingOpen: !state.isSettingOpen,isCategoryPanelOpen:false })),

  toggleCategoryPanel: () =>
    set((state) => ({ isCategoryPanelOpen: !state.isCategoryPanelOpen,isSettingOpen:false })),
}));
