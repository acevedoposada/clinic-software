import { createBrowserRouter } from 'react-router-dom';
import React from 'react';

import { ClinicHistoryLayout } from 'modules/layouts';
import { AuthLayout, GeneralLayout, NavigationLayout } from 'layouts';

const LoginPage = React.lazy(
  () => import('modules/pages/auth/pages/login/login.page')
);

const ClinicHistoryDashboardPage = React.lazy(
  () => import('modules/pages/clinic-history/pages/dashboard/dashboard.page')
);
const ClinicHistoryDetailsPage = React.lazy(
  () => import('modules/pages/clinic-history/pages/details/details.page')
);

export const routes = createBrowserRouter([
  {
    path: '/',
    Component: GeneralLayout,
    children: [
      {
        Component: ClinicHistoryLayout,
        children: [{ index: true, Component: ClinicHistoryDashboardPage }],
      },
      {
        Component: NavigationLayout,
        children: [
          { path: ':id/detalles', Component: ClinicHistoryDetailsPage },
        ],
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
