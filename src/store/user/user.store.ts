import { createJSONStorage, persist } from 'zustand/middleware';
import { create } from 'zustand';

import { UserStore } from './user.entity';

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      id: null,
      name: null,
      email: null,
      specialization: null,
      isLogged: false,

      setUser(user) {
        set((state) => ({ ...state, ...user }));
      },
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
