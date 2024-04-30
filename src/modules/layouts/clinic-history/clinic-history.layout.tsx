import { Outlet } from 'react-router-dom';
import { useStyles } from './clinic-history.styles';
import { Tab, TabList, mergeClasses } from '@fluentui/react-components';

const ClinicHistoryLayout = () => {
  const classes = useStyles();

  return (
    <div className='w-full h-full'>
      <div
        className={mergeClasses(classes['tab-container'], 'px-2 sticky top-0')}
      >
        <TabList defaultSelectedValue='tab1' selectTabOnFocus>
          <Tab value='tab1'>Pacientes</Tab>
        </TabList>
      </div>
      <div className='w-full flex-wrap h-[calc(100%-3rem)]'>
        <Outlet />
      </div>
    </div>
  );
};

export default ClinicHistoryLayout;
