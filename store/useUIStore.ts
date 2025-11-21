import { create } from "zustand";

interface UIState {
  isSettingOpen: boolean;
  toggleSettings: () => void;

  isCategoryPanelOpen: boolean;
  toggleCategoryPanel: () => void;

  categoryAccordianId: string | null;
  toggleCategoryAccordian: (id: string) => void;

  subCategoryAccordianId: string | null;
  toggleSubCategoryAccordian: (id: string) => void;
}

export const useUIState = create<UIState>((set) => ({
  isSettingOpen: false,
  isCategoryPanelOpen: false,
  categoryAccordianId: "1",
  subCategoryAccordianId: "1",

  toggleSettings: () =>
    set((state) => ({
      isSettingOpen: !state.isSettingOpen,
      isCategoryPanelOpen: false,
    })),

  toggleCategoryPanel: () =>
    set((state) => ({
      isCategoryPanelOpen: !state.isCategoryPanelOpen,
      isSettingOpen: false,
    })),

  toggleCategoryAccordian: (id) =>
    set((state) => ({
      categoryAccordianId: (state.categoryAccordianId = id),
    })),

  toggleSubCategoryAccordian: (id) =>
    set((state) => ({
      subCategoryAccordianId: state.subCategoryAccordianId === id ? null : id,
    })),
}));
