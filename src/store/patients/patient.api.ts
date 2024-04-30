import { apiInstance } from 'api';
import { Patient } from './patients.entity';

type PatientApi = Patient & { 'last-update': string };

export const fetchPatientsApi = (): Promise<PatientApi[]> =>
  apiInstance.get('/patients').then((response) => response.data);

export const fetchPatientByIdApi = (id: string): Promise<PatientApi> =>
  apiInstance.get(`/patients/${id}`).then((response) => response.data);
