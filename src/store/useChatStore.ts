import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ChatState {
  isOpen: boolean;
  toggleChat: () => void;
  setIsOpen: (isOpen: boolean) => void;
}

export const useChatStore = create<ChatState>()(
  persist(
    (set) => ({
      isOpen: false,
      toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
      setIsOpen: (isOpen) => set({ isOpen }),
    }),
    {
      name: "helicorp-chat-ui-storage",
    }
  )
);
