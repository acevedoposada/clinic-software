import {
  SelectTabEventHandler,
  Tab,
  TabList,
  mergeClasses,
} from '@fluentui/react-components';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import _ from 'lodash';

import { useStyles } from './appointments.styles';
import { Routes } from 'constants/routes';

const appointmentsTabs: Record<string, { title: string; value: string }> = {
  [Routes.SCHEDULED_APPOINTMENTS]: {
    title: 'Citas Programadas',
    value: Routes.SCHEDULED_APPOINTMENTS,
  },
  [Routes.SCHEDULE_APPOINTMENT]: {
    title: 'Programar Cita',
    value: Routes.SCHEDULE_APPOINTMENT,
  },
};

const AppointmentsLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const classes = useStyles();

  const handleChangeTab: SelectTabEventHandler = (_, { value }) =>
    navigate(`/${Routes.APPOINTMENTS}/${value}`);

  const getTabValue = () => {
    const path = location.pathname.split('/');
    return path[path.length - 1];
  };

  return (
    <div className='w-full'>
      <div
        className={mergeClasses(classes['tab-container'], 'px-2 sticky top-0')}
      >
        <TabList
          selectedValue={getTabValue()}
          selectTabOnFocus
          onTabSelect={handleChangeTab}
        >
          {_.map(appointmentsTabs, ({ title, value }) => (
            <Tab key={value} value={value}>
              {title}
            </Tab>
          ))}
        </TabList>
      </div>
      <div className='w-full flex-wrap'>
        <Outlet />
      </div>
    </div>
  );
};

export default AppointmentsLayout;
