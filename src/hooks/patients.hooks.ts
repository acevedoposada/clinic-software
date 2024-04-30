import { useEffect } from 'react';

import { usePatientsStore } from 'store/patients/patients.store';
import { fetchPatients } from 'store/patients/patient.effect';

export const usePatients = () => {
  const patients = usePatientsStore((state) => state.patients);
  const setPatients = usePatientsStore((state) => state.setPatients);

  useEffect(() => {
    (async () => {
      setPatients(await fetchPatients());
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return patients;
};
