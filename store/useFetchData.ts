"use client";

import { create } from "zustand";

interface Category {
  id: number;
  category_title: string;
  icon: string;
  total_subcategories: string;
  total_duas: string;
  subcategories_id: number[];
}

interface SubCategory {
  id: number;
  Category_id: number;
  title: string;
  dua_id: number[];
  category_title: string;
}

interface Dua {
  id: number;
  subcategory_id: number;
  category_id: number;
  title: string;
  category_title: string;
  description: string;
  arabic: string;
  transliteration: string;
  translation: string;
  hadith: string;
  ref_no: string;
}

interface Data {
  categories: Category[];
  subCategories: SubCategory[];
  duas: Dua[];
  loading: boolean;

  fetchAll: () => Promise<void>;

  getCategory: (id: number) => Category | undefined;
  getSubCategory: (id: number | null) => SubCategory | undefined;

  getSubCategories: (id: number) => SubCategory[];
  getDuas: (id: number | null) => Dua[];
}

export const useFetchData = create<Data>((set, get) => ({
  categories: [],
  subCategory: [],

  subCategories: [],
  duas: [],
  loading: false,

  fetchAll: async () => {
    const state = get();

    if (
      state.categories.length > 0 &&
      state.subCategories.length > 0 &&
      state.duas.length > 0
    ) {
      return;
    }

    try {
      set({ loading: true });
      const [categoriesData, subCategoriesData, duasData] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/categories`),
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/subcategories`),
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/duas`),
      ]);

      const categories = await categoriesData.json();
      const subCategories = await subCategoriesData.json();
      const duas = await duasData.json();

      set({
        categories: categories,
        subCategories: subCategories,
        duas: duas,
      });
    } catch (err) {
      throw err;
    } finally {
      set({ loading: false });
    }
  },

  getSubCategory: (id) => {
    return get().subCategories?.find((item) => item.id === id);
  },

  getCategory: (id) => {
    return get().categories.find((item) => item.id === id);
  },

  getSubCategories: (id) => {
    return get().subCategories.filter((item) => item.Category_id === id);
  },

  getDuas: (id) => {
    return get().duas.filter((item) => item.subcategory_id === id);
  },
}));
