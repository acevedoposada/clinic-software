import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';

import { RouterLoader } from 'components';
import { routes } from 'routes';
import ContextEnhancer from 'context';

function App() {
  return (
    <ContextEnhancer>
      <Suspense fallback={<RouterLoader />}>
        <RouterProvider router={routes} />
      </Suspense>
    </ContextEnhancer>
  );
}

export default App;
