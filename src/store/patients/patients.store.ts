import { createJSONStorage, persist } from 'zustand/middleware';
import { create } from 'zustand';

import { PatientsStore } from './patients.entity';

export const usePatientsStore = create(
  persist<PatientsStore>(
    (set) => ({
      patients: [],

      setPatients(patients) {
        set((state) => ({ ...state, patients }));
      },
    }),
    {
      name: 'patients-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
