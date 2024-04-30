import { FluentProvider, teamsDarkTheme } from '@fluentui/react-components';
import ReactDOM from 'react-dom/client';
import * as dayjs from 'dayjs';
import React from 'react';
import 'dayjs/locale/es';

import App from './App.tsx';
import './index.scss';

dayjs.locale('es');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FluentProvider theme={teamsDarkTheme}>
      <App />
    </FluentProvider>
  </React.StrictMode>
);
