import _ from 'lodash';

import { fetchPatientByIdApi, fetchPatientsApi } from './patient.api';
import { Patient } from './patients.entity';

export const fetchPatients = async (): Promise<Patient[]> => {
  try {
    const patients = await fetchPatientsApi();
    return _.map(patients, ({ 'last-update': lastUpdate, ...patient }) => ({
      ...patient,
      lastUpdate,
    }));
  } catch (error) {
    return Promise.reject(error);
  }
};

export const fetchPatientById = async (id: string): Promise<Patient> => {
  try {
    return await fetchPatientByIdApi(id);
  } catch (error) {
    return Promise.reject(error);
  }
};
