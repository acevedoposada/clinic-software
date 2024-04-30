import { Patient } from 'store/patients/patients.entity';

export interface AppointmentApi {
  patient: string;
  date: string;
  reason: string;
}

export interface Appointment extends Omit<AppointmentApi, 'patient'> {
  patient: Patient;
}
