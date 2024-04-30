import { apiInstance } from 'api';
import { AppointmentApi } from './appointments.entity';

export const fetchAppointmentsApi = (): Promise<AppointmentApi[]> =>
  apiInstance
    .get<AppointmentApi[]>('/appointments')
    .then((response) => response.data);
