import { CalendarRtlRegular } from '@fluentui/react-icons';
import withTitle from 'helpers/withTitle';

const ScheduleAppointment = () => {
  return <div className='p-10 text-4xl font-bold'>Programar cita</div>;
};

export default withTitle(
  ScheduleAppointment,
  'Citas Médicas › Programar',
  CalendarRtlRegular
);
