import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Fortune {
  id: string;
  text: string;
  collectedAt: number;
}

interface FortuneState {
  collectedFortunes: Fortune[];
  actions: {
    addFortune: (text: string) => void;
    removeFortune: (id: string) => void;
    clearAllFortunes: () => void;
  };
}

// ⬇️ not exported, so that no one can subscribe to the entire store
const useFortuneStore = create<FortuneState>()(
  persist(
    (set) => ({
      collectedFortunes: [],
      // ⬇️ separate "namespace" for actions
      actions: {
        addFortune: (text: string) =>
          set((state) => ({
            collectedFortunes: [
              ...state.collectedFortunes,
              {
                id: crypto.randomUUID(),
                text,
                collectedAt: Date.now(),
              },
            ],
          })),
        removeFortune: (id: string) =>
          set((state) => ({
            collectedFortunes: state.collectedFortunes.filter(
              (fortune) => fortune.id !== id
            ),
          })),
        clearAllFortunes: () =>
          set({
            collectedFortunes: [],
          }),
      },
    }),
    {
      name: 'fortune-storage', // name of item in localStorage
      partialize: (state) => ({ collectedFortunes: state.collectedFortunes }),
    }
  )
);

// 💡 exported - consumers don't need to write selectors
export const useCollectedFortunes = () =>
  useFortuneStore((state) => state.collectedFortunes);

export const useCollectedFortunesCount = () =>
  useFortuneStore((state) => state.collectedFortunes.length);

// 🎉 one selector for all our actions
export const useFortuneActions = () =>
  useFortuneStore((state) => state.actions);
