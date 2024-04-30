import {
  Dropdown,
  MessageBar,
  MessageBarBody,
  MessageBarTitle,
  Option,
} from '@fluentui/react-components';
import { CalendarRtlRegular } from '@fluentui/react-icons';
import _ from 'lodash';

import withTitle from 'helpers/withTitle';
import { AppointmentCard } from '../../components';

const ScheduledAppointments = () => {
  const options = ['Presencial', 'Virtual', 'Todas las citas'];

  return (
    <div className='p-4 flex flex-col gap-5 flex-shrink flex-grow'>
      <div className='flex flex-col md:items-start gap-1'>
        <label>Filtra por tipo de cita</label>
        <Dropdown clearable placeholder='Tipo de cita'>
          {_.map(options, (option) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Dropdown>
      </div>
      <div className='w-full'>
        <MessageBar intent='info' layout='multiline'>
          <MessageBarBody>
            <MessageBarTitle>Para tener en cuenta.</MessageBarTitle>
            Si no puedes asistir a tu cita,{' '}
            <b>reprograma o cancela con al menos 2 horas de anticipación</b>.
            Así otros pueden aprovechar ese horario. Las citas virtuales se
            habilitan 15 minutos antes.
          </MessageBarBody>
        </MessageBar>
      </div>
      <div className='flex flex-col gap-5'>
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
      </div>
    </div>
  );
};

export default withTitle(
  ScheduledAppointments,
  'Citas Médicas › Programadas',
  CalendarRtlRegular
);
