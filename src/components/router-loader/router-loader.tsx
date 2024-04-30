import { Spinner } from '@fluentui/react-components';

const RouterLoader = () => {
  return (
    <div className='min-h-screen h-full flex flex-auto flex-col gap-2 items-center justify-center'>
      <Spinner />
      <p>Cargando...</p>
    </div>
  );
};

export default RouterLoader;
