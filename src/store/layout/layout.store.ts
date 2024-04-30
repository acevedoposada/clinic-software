import { create } from 'zustand';
import { LayoutStore } from './layout.entity';

export const useLayoutStore = create<LayoutStore>((set) => ({
  navigation: {
    title: '',
  },

  setNavigationTitle(title) {
    set((state) => ({
      ...state,
      navigation: {
        ...state.navigation,
        title,
      },
    }));
  },
}));
