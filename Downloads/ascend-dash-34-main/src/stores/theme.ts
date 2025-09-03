import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDark: false,
      toggleTheme: () => set((state) => {
        const newTheme = !state.isDark;
        document.documentElement.classList.toggle('dark', newTheme);
        return { isDark: newTheme };
      }),
      setTheme: (theme) => set(() => {
        const isDark = theme === 'dark';
        document.documentElement.classList.toggle('dark', isDark);
        return { isDark };
      }),
    }),
    {
      name: 'theme-storage',
      onRehydrateStorage: () => (state) => {
        if (state) {
          document.documentElement.classList.toggle('dark', state.isDark);
        }
      },
    }
  )
);

// Initialize theme on module load
const { isDark } = useThemeStore.getState();
document.documentElement.classList.toggle('dark', isDark);