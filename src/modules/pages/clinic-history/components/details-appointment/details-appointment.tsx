import { Card, mergeClasses } from '@fluentui/react-components';

import { useStyles } from './details-appointment.styles';
import dayjs from 'dayjs';

interface DetailsAppointment {
  date: Date;
  reason: string;
}

const DetailsAppointment = () => {
  const classes = useStyles();

  const date = dayjs();

  return (
    <Card className={mergeClasses(classes.container, 'border-l-4 !p-0')}>
      <div className='flex items-start'>
        <div className='text-center p-8 border-r border-white border-opacity-30'>
          <p className='text-3xl font-bold'>{date.format('DD')}</p>
          <p className='text-xl uppercase font-semibold tracking-widest'>
            {date.format('MMM')}
          </p>
          <p className='text-lg font-light'>{date.format('YYYY')}</p>
        </div>
        <div className='p-4 flex flex-col gap-2'>
          <p className='font-bold'>Dolor de garganta</p>
          <p className='font-medium'>Amigdalitis aguda</p>
          <p className='opacity-50'>
            Omeprazol 1 lny 40mg. Clindamicina Amp 300mg/2ml. Tempra 500 Mg Tab
            10
          </p>
        </div>
      </div>
    </Card>
  );
};

export default DetailsAppointment;
