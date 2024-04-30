import {
  Button,
  Checkbox,
  Field,
  Input,
  Link,
} from '@fluentui/react-components';
import { BriefcaseMedicalRegular } from '@fluentui/react-icons';

const Login = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div>
        <BriefcaseMedicalRegular fontSize={56} />
        <h1 className='text-5xl font-extrabold'>Iniciar sesión</h1>
        <p>
          <span className='opacity-50'>No tienes cuenta?</span>{' '}
          <Link>Crear cuenta</Link>
        </p>
      </div>
      <Field label='Correo Electrónico'>
        <Input placeholder='correo@correo.com' />
      </Field>
      <Field label='Contraseña'>
        <Input type='password' placeholder='*****' />
      </Field>
      <div className='flex justify-between'>
        <Checkbox className='-ml-2' label='Recuerdame' />
        <Link>¿Olvidaste la contraseña?</Link>
      </div>
      <Button appearance='primary'>Ingresar</Button>
    </div>
  );
};

export default Login;
