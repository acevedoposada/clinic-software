import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useClinicHistoryStore } from 'store/clinic-history/clinic-history.store';
import { useLayoutStore } from 'store/layout/layout.store';
import { fetchPatientById } from 'store/patients/patient.effect';
import { Patient } from 'store/patients/patients.entity';

export const useDetailsPage = () => {
  const [patient, setPatient] = useState<Patient | null>(null);
  const { id } = useParams<{ id: string }>();

  const medicaments = useClinicHistoryStore((state) => state.medicaments);
  const setClinicHistoryTitle = useLayoutStore(
    (state) => state.setNavigationTitle
  );

  useEffect(() => {
    (async () => {
      const patientRsp = await fetchPatientById(id!);
      setPatient(patientRsp);
      setClinicHistoryTitle(patientRsp.name);
    })();
  }, [id, setClinicHistoryTitle]);

  return { patient, medicaments };
};
