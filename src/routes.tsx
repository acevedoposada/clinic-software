import { Navigate, createBrowserRouter } from 'react-router-dom';
import React from 'react';

import { AppointmentsLayout, ClinicHistoryLayout } from 'modules/layouts';
import { AuthLayout, GeneralLayout, NavigationLayout } from 'layouts';
import { Routes } from 'constants/routes';

const LoginPage = React.lazy(
  () => import('modules/pages/auth/pages/login/login.page')
);

const ClinicHistoryDashboardPage = React.lazy(
  () => import('modules/pages/clinic-history/pages/dashboard/dashboard.page')
);
const ClinicHistoryDetailsPage = React.lazy(
  () => import('modules/pages/clinic-history/pages/details/details.page')
);
const ScheduledAppointmentsPage = React.lazy(
  () => import('modules/pages/appointments/pages/scheduled/scheduled.page')
);
const ScheduleAppointmentPage = React.lazy(
  () => import('modules/pages/appointments/pages/schedule/schedule.page')
);

export const routes = createBrowserRouter([
  {
    path: '/',
    Component: GeneralLayout,
    children: [
      {
        path: Routes.CLINIC_HISTORY,
        Component: ClinicHistoryLayout,
        children: [
          { index: true, Component: ClinicHistoryDashboardPage },
          {
            Component: NavigationLayout,
            children: [
              { path: ':id/detalles', Component: ClinicHistoryDetailsPage },
            ],
          },
        ],
      },
      {
        path: `${Routes.APPOINTMENTS}`,
        Component: AppointmentsLayout,
        children: [
          {
            path: Routes.SCHEDULED_APPOINTMENTS,
            Component: ScheduledAppointmentsPage,
          },
          {
            path: Routes.SCHEDULE_APPOINTMENT,
            Component: ScheduleAppointmentPage,
          },
          {
            index: true,
            path: '',
            Component: () => (
              <Navigate
                to={`/${Routes.APPOINTMENTS}/${Routes.SCHEDULED_APPOINTMENTS}`}
              />
            ),
          },
        ],
      },
      {
        path: '/',
        Component: () => <Navigate to={`/${Routes.CLINIC_HISTORY}`} />,
      },
    ],
  },
  {
    path: 'auth',
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        Component: LoginPage,
      },
    ],
  },
]);
