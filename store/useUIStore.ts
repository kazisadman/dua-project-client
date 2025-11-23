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

  duaRefId: number | null;
  setDuaRefId: (id: number) => void;
}

export const useUIState = create<UIState>((set) => ({
  isSettingOpen: false,
  isCategoryPanelOpen: false,
  categoryAccordianId: 1,
  subCategoryAccordianId: 11,
  subCategoryRefId: 11,
  duaRefId: 101,

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
    set((status) => ({ subCategoryRefId: (status.subCategoryRefId = id) })),

  setDuaRefId: (id) => set((status) => ({ duaRefId: (status.duaRefId = id) })),
}));
