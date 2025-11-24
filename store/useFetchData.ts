"use client";

import { create } from "zustand";

interface Category {
  id: number;
  category_title: string;
  icon: string;
  total_subCategories: string;
  total_duas: string;
  subcategories_id: number[];
}

interface SubCategory {
  id: number;
  category_id: number;
  title: string;
  duas_id: number[];
  category_title: string;
}

interface Dua {
  id: number;
  subCategory_id: number;
  category_id: number;
  title: string;
  category_title: string;
  description: string;
  arabic: string;
  transliteration: string;
  translation: string;
  reference: {
    hadith: string;
    ref_no: number;
  };
}

interface Data {
  categories: Category[];
  subCategories: SubCategory[];
  duas: Dua[];
  loading: boolean;

  fetchAll: () => Promise<void>;

  getCategory: (id: number) => Category | undefined;
  getSubCategories: (id: number) => SubCategory[];
  getDuas: (id: number | null) => Dua[];
}

export const useFetchData = create<Data>((set, get) => ({
  categories: [],
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
        fetch(
          `https://api.jsonbin.io/v3/b/${process.env.NEXT_PUBLIC_CATEGORY_BIN_ID}`,
          {
            headers: {
              "X-Master-Key": `${process.env.NEXT_PUBLIC_X_MASTER_KEY}`,
            },
          }
        ),
        fetch(
          `https://api.jsonbin.io/v3/b/${process.env.NEXT_PUBLIC_SUBCATEGORY_BIN_ID}`,
          {
            headers: {
              "X-Master-Key": `${process.env.NEXT_PUBLIC_X_MASTER_KEY}`,
            },
          }
        ),
        fetch(
          `https://api.jsonbin.io/v3/b/${process.env.NEXT_PUBLIC_DUA_BIN_ID}`,
          {
            headers: {
              "X-Master-Key": `${process.env.NEXT_PUBLIC_X_MASTER_KEY}`,
            },
          }
        ),
      ]);

      const categories = await categoriesData.json();
      const subCategories = await subCategoriesData.json();
      const duas = await duasData.json();

      set({
        categories: categories.record,
        subCategories: subCategories.record,
        duas: duas.record,
      });
    } catch (err) {
      console.log(err);
    } finally {
      set({ loading: false });
    }
  },

  getCategory: (id) => {
    return get().categories.find((item) => item.id === id);
  },

  getSubCategories: (id) => {
    return get().subCategories.filter((item) => item.category_id === id);
  },

  getDuas: (id) => {
    return get().duas.filter((item) => item.subCategory_id === id);
  },
}));
