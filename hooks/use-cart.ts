import { create } from "zustand";

import { IProduct } from "@/types";
import { persist, createJSONStorage } from "zustand/middleware";
import toast from "react-hot-toast";
interface CartStore {
  items: IProduct[];
  addItem: (data: IProduct) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: IProduct) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);
        if (existingItem) {
          return toast("Item already in cart");
        }
        set({ items: [...get().items, data] });
        toast.success("Item Added to Cart");
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success("Item Removed from Cart");
      },
      removeAll: () => {
        set({ items: [] });
        toast.success("All Items Removed from Cart");
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
