import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';

import { RouterLoader } from 'components';
import { routes } from 'routes';

function App() {
  return (
    <Suspense fallback={<RouterLoader />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
}

export default App;
