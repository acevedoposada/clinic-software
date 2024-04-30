import { ChevronLeftRegular } from '@fluentui/react-icons';
import { Link, Outlet } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbButton,
  BreadcrumbDivider,
  mergeClasses,
} from '@fluentui/react-components';

import { useStyles } from './navigation.styles';
import { useLayoutStore } from 'store/layout/layout.store';

const NavigationLayout = () => {
  const classes = useStyles();
  const title = useLayoutStore((state) => state.navigation.title);

  return (
    <div>
      <div
        className={mergeClasses(classes.bar, 'px-4 gap-5 sticky top-0 z-[1]')}
      >
        <Link
          className={mergeClasses(
            classes.link,
            'gap-1 hover:gap-2 transition-all'
          )}
          to='/'
        >
          <ChevronLeftRegular className='w-4 min-w-4' />
          Regresar
        </Link>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbButton>Pacientes</BreadcrumbButton>
          </BreadcrumbItem>
          <BreadcrumbDivider />
          <BreadcrumbItem>
            <BreadcrumbButton current>{title}</BreadcrumbButton>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Outlet />
    </div>
  );
};

export default NavigationLayout;
