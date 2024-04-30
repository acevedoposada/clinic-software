import _ from 'lodash';

import { fetchPatientsApi } from 'store/patients/patient.api';
import { fetchAppointmentsApi } from './appointments.api';
import { Appointment } from './appointments.entity';

export const fetchAppointments = async (): Promise<Appointment[]> => {
  try {
    const appointments = await fetchAppointmentsApi();
    const patients = await fetchPatientsApi();

    if (appointments.length > 0) {
      const response: Appointment[] = _.map(appointments, (appointment) => ({
        ...appointment,
        patient: _.find(
          patients,
          (patient) => patient.id === appointment.patient
        ),
      })) as Appointment[];
      return response;
    } else {
      return [];
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
