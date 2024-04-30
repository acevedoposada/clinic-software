export interface Patient {
  id: string;
  name: string;
  address: string;
  identificationType: string;
  identification: number;
  phone: string;
  email: string;
  birthday: string;
  eps: string;
  lastUpdate: string;
}

export interface PatientData {
  patients: Patient[];
}

export interface PatientActions {
  setPatients: (patients: Patient[]) => void;
}

export type PatientsStore = PatientData & PatientActions;
