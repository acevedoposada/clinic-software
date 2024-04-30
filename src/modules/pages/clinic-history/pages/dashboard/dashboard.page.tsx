import {
  Avatar,
  Body1,
  Button,
  Caption1,
  Card,
  CardHeader,
  Input,
  Table,
  TableBody,
  TableCell,
  TableCellLayout,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Tooltip,
  mergeClasses,
} from '@fluentui/react-components';
import {
  ContactCardRegular,
  EyeRegular,
  InfoRegular,
  MailRegular,
  SearchRegular,
} from '@fluentui/react-icons';
import { Link, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

import { AppointmentCard, DoughnutChart, LineChart } from '../../components';
import { clinicHistoryCols } from '../../constants/table';
import { useDashboardPage } from '../../hooks/dashboard';
import { useStyles } from './dashboard.styles';

const DashboardPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { appointments, patientsFiltered, searchValue, handleSearchChange } =
    useDashboardPage();

  return (
    <div className='p-8 flex flex-col gap-6 flex-1 h-full max-h-full'>
      <div className='grid grid-cols-12 gap-6'>
        <Card className='col-span-4 md:col-span-2 overflow-hidden'>
          <CardHeader
            header={
              <Body1>
                <b>Nuevos pacientes</b>
              </Body1>
            }
            description={
              <p className='text-lg'>
                <b>16</b> <span className='text-green-500 text-sm'>+5%</span>
              </p>
            }
          />
          <div className='h-[150px] w-full flex justify-center'>
            <DoughnutChart />
          </div>
        </Card>
        <Card className='col-span-4 md:col-span-2 !px-0 !pb-0 overflow-hidden'>
          <CardHeader
            className='px-3'
            header={
              <Body1>
                <b>Pacientes por mes</b>
              </Body1>
            }
            description={
              <p className='text-lg'>
                <b>32</b> <span className='text-green-500 text-sm'>+12%</span>
              </p>
            }
          />
          <div className='h-full flex items-center scale-x-110 translate-x-[-2.5%]'>
            <LineChart />
          </div>
        </Card>
        <Card
          className={mergeClasses(
            'col-span-4 md:col-span-2 border',
            classes.info
          )}
        >
          <div className={mergeClasses(classes['info-content'], 'gap-4')}>
            <div>
              <InfoRegular fontSize={22} />
            </div>
            <div>
              <p>No hay información que presentar en este momento</p>
            </div>
          </div>
        </Card>
        <Card className='col-span-12 md:col-span-6'>
          <CardHeader
            header={
              <Body1>
                <b>Próximas citas</b> - hoy
              </Body1>
            }
            description={<Caption1>Tienes 7 citas el dia de hoy</Caption1>}
          />
          <div className='flex-1 flex gap-4 overflow-x-scroll'>
            {appointments.map((appointment) => (
              <AppointmentCard
                key={appointment.patient.id}
                name={appointment.patient.name}
                date={appointment.date}
              />
            ))}
          </div>
        </Card>
      </div>
      <Card className='relative h-full !p-0 !gap-0'>
        <div className='flex p-2 justify-between items-center border-b border-gray-700'>
          <p className='font-semibold'>
            {patientsFiltered.length}{' '}
            {searchValue.trim().length > 0
              ? 'resultados encontrados'
              : 'registros'}
          </p>
          <Input
            contentBefore={<SearchRegular />}
            onChange={handleSearchChange}
          />
        </div>
        <div className='relative h-full flex-auto w-full !overflow-y-scroll !p-0'>
          <Table className='flex-auto absolute top-0 left-0 w-full'>
            <TableHeader
              className={mergeClasses(
                classes['table-header'],
                'sticky bg-[#292929] z-[1] top-0'
              )}
            >
              <TableRow>
                {clinicHistoryCols.map((column) => (
                  <TableHeaderCell key={column.columnKey} className='!py-2'>
                    <b>{column.label}</b>
                  </TableHeaderCell>
                ))}
                <TableHeader className='!py-2' />
              </TableRow>
            </TableHeader>
            <TableBody>
              {patientsFiltered.map((item) => (
                <TableRow
                  key={item.id}
                  className='cursor-pointer'
                  onClick={() => navigate(`/${item.id}/detalles`)}
                >
                  <TableCell>
                    <TableCellLayout
                      media={
                        <Avatar
                          aria-label={item.name}
                          name={item.name}
                          color='colorful'
                        />
                      }
                    >
                      <span className='font-semibold'>{item.name}</span>
                    </TableCellLayout>
                  </TableCell>
                  <TableCell>
                    <TableCellLayout media={<ContactCardRegular />}>
                      <span className='font-medium'>{item.identification}</span>
                    </TableCellLayout>
                  </TableCell>
                  <TableCell>
                    <TableCellLayout media={<MailRegular />}>
                      {item.email}
                    </TableCellLayout>
                  </TableCell>
                  <TableCell>{item.eps}</TableCell>
                  <TableCell>
                    {dayjs(item.lastUpdate).format('D [de] MMMM [del] YYYY')}
                  </TableCell>
                  <TableCell className='text-right'>
                    <Tooltip
                      content='Ver historia clínica'
                      relationship='label'
                    >
                      <Link to={`/${item.id}/detalles`}>
                        <Button icon={<EyeRegular />} />
                      </Link>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default DashboardPage;
