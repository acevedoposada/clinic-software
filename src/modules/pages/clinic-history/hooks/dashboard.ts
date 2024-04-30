import { ChangeEvent, useEffect, useState } from 'react';
import { fetchAppointments } from 'store/appointments/appointments.effect';
import { Appointment } from 'store/appointments/appointments.entity';
import { usePatients } from 'hooks/patients.hooks';
import { Patient } from 'store/patients/patients.entity';

export const useDashboardPage = () => {
  const patients = usePatients();

  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [patientsFiltered, setPatientsFiltered] = useState<Patient[]>(patients);
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPatientsFiltered(
      patients.filter((patient) =>
        patient.identification.toString().includes(e.target.value)
      )
    );
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    (async () => {
      setAppointments(await fetchAppointments());
    })();
  }, []);

  useEffect(() => {
    if (patients.length > 0 && patientsFiltered.length === 0) {
      setPatientsFiltered(patients);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [patients.length]);

  return {
    patients,
    appointments,
    patientsFiltered,
    searchValue,
    handleSearchChange,
  };
};
