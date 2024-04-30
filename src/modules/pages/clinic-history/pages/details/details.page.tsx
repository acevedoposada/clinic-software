import {
  Avatar,
  Body1,
  Button,
  Card,
  CardHeader,
  Divider,
  Link,
  mergeClasses,
} from '@fluentui/react-components';
import { useDetailsPage } from '../../hooks/details.hook';
import { useInView } from 'react-intersection-observer';
import {
  ClipboardBulletListLtrRegular,
  DeleteRegular,
  FoodCakeRegular,
} from '@fluentui/react-icons';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';
import _ from 'lodash';

import { userInfoVariants } from '../../constants/animations';
import { DetailsAppointment, PastRegister, Vitals } from '../../components';

import { useStyles } from './details.styles';
import withTitle from 'helpers/withTitle';

const DetailsPage = () => {
  const classes = useStyles();

  const { patient, medicaments } = useDetailsPage();
  const { ref, inView } = useInView({
    threshold: 1,
  });

  return (
    <div className='w-full -mt-14'>
      <div
        className={mergeClasses(
          'sticky top-11 z-[1] overflow-y-hidden block',
          inView
            ? 'select-none pointer-events-none'
            : 'select-auto pointer-events-auto'
        )}
      >
        <motion.div
          initial='leave'
          transition={{ ease: 'circOut' }}
          animate={inView ? 'leave' : 'enter'}
          variants={userInfoVariants}
          className={mergeClasses(
            classes['fixed-user-info'],
            'flex justify-between px-4 p-2 transition-all'
          )}
        >
          <div className='flex items-center gap-2'>
            <Avatar name={patient?.name} color='colorful' />
            <div>
              <p className='font-semibold'>{patient?.name}</p>
              <p className='text-xs opacity-60'>
                {dayjs(patient?.birthday).format('DD [de] MMM [del] YYYY')} |{' '}
                <span>{dayjs().diff(patient?.birthday, 'years')} años</span>
              </p>
            </div>
          </div>
          <Button appearance='primary'>Iniciar nueva consulta</Button>
        </motion.div>
      </div>
      <div className='p-4 md:p-8 w-full flex flex-col xl:flex-row gap-6 md:gap-12'>
        <div className='w-full xl:w-3/12 flex flex-col gap-6 md:gap-8'>
          <Card ref={ref}>
            <div className='flex items-center gap-4'>
              <div>
                <Avatar
                  name={patient?.name}
                  color='colorful'
                  className='!text-3xl !w-24 !h-24'
                />
              </div>
              <div>
                <p className='text-3xl font-semibold'>{patient?.name}</p>
                <div className='opacity-60 flex items-start md:items-end gap-2'>
                  <FoodCakeRegular fontSize={18} />
                  <p className='text-sm'>
                    {dayjs(patient?.birthday).format('DD [de] MMM [del] YYYY')}{' '}
                    |{' '}
                    <span>{dayjs().diff(patient?.birthday, 'years')} años</span>
                  </p>
                </div>
                <div className='mt-2'>
                  <Link>Editar</Link> <span className='opacity-60'>|</span>{' '}
                  <Link>Mostrar datos</Link>
                </div>
              </div>
            </div>
          </Card>
          <Button className='w-full !block !md:hidden' appearance='primary'>
            Iniciar nueva consulta
          </Button>
          <div className='sticky top-32'>
            <Card>
              <CardHeader
                header={
                  <Body1>
                    <b>Últimos signos vitales</b>
                  </Body1>
                }
              />
              <Divider />
              <Vitals />
            </Card>
          </div>
        </div>
        <div className='flex flex-col gap-8 xl:flex-1'>
          <PastRegister />
          <Card>
            <CardHeader
              header={
                <Body1>
                  <b>Medicamentos activos</b>
                </Body1>
              }
            />
            <Divider />
            {_.map(medicaments, (medicament, idx) => (
              <div key={idx} className='flex justify-between'>
                <p>{medicament}</p>
                <Button icon={<DeleteRegular />} />
              </div>
            ))}
          </Card>
        </div>
        <div className='w-full xl:w-2/12 flex flex-col gap-8'>
          <Button className='w-full !hidden !md:block' appearance='primary'>
            Iniciar nueva consulta
          </Button>
          <div>
            <h3 className='font-bold mb-3'>Consultas agendadas</h3>
            <p>Aún no hay citas agendadas.</p>
            <p>
              Utiliza la <Link>agenda</Link> para programarla.
            </p>
          </div>
          <div>
            <h3 className='font-bold mb-3'>Consultas anteriores</h3>
            <div className='flex flex-col gap-5'>
              <DetailsAppointment />
              <DetailsAppointment />
              <DetailsAppointment />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTitle(
  DetailsPage,
  'Historia Clínica',
  ClipboardBulletListLtrRegular
);
