import { create } from "zustand";

interface UIState {
  isSettingOpen: boolean;
  toggleSettings: () => void;

  isCategoryPanelOpen: boolean;
  toggleCategoryPanel: () => void;

  categoryAccordianId: number;
  toggleCategoryAccordian: (id: number) => void;

  subCategoryAccordianId: number | null;
  toggleSubCategoryAccordian: (id: number) => void;

  subCategoryRefId: number;
  setSubCategoryRefId: (id: number) => void;
}

export const useUIState = create<UIState>((set) => ({
  isSettingOpen: false,
  isCategoryPanelOpen: false,
  categoryAccordianId: 1,
  subCategoryAccordianId: null,
  subCategoryRefId: 11,

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

  setSubCategoryRefId: (id) =>
    set((state) => ({ subCategoryRefId: (state.subCategoryRefId = id) })),
}));
