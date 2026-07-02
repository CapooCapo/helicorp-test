import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/types";

interface FavoriteState {
  items: Product[];
  toggleFavorite: (product: Product) => void;
  isFavorite: (productId: string) => boolean;
}

export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set, get) => ({
      items: [],
      toggleFavorite: (product) => {
        set((state) => {
          const isExist = state.items.some((item) => item.id === product.id);
          if (isExist) {
            return { items: state.items.filter((item) => item.id !== product.id) };
          }
          return { items: [...state.items, product] };
        });
      },
      isFavorite: (productId) => {
        return get().items.some((item) => item.id === productId);
      },
    }),
    {
      name: "helicorp-favorite-storage",
    }
  )
);
