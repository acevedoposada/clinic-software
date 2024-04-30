import {
  AvatarGroup,
  AvatarGroupItem,
  AvatarGroupPopover,
  Card,
  FluentProvider,
  mergeClasses,
  partitionAvatarGroupItems,
  teamsLightTheme,
} from '@fluentui/react-components';
import { Outlet } from 'react-router-dom';

import { useStyles } from './auth.styles';

const names = [
  'Johnie McConnell',
  'Allan Munger',
  'Erik Nason',
  'Kristin Patterson',
  'Daisy Phillips',
  'Carole Poland',
  'Carlos Slattery',
  'Robert Tolbert',
];

const AuthLayout = () => {
  const classes = useStyles();

  const partitionedItems = partitionAvatarGroupItems({ items: names });

  return (
    <main className={classes.container}>
      <div className={classes.overlay} />
      <Card className={mergeClasses(classes.content, '!p-0 w-full md:w-auto')}>
        <div className='flex flex-col w-full xl:w-auto xl:flex-row items-center h-full'>
          <FluentProvider theme={teamsLightTheme} className='w-full xl:w-auto'>
            <div className={mergeClasses(classes['form-container'], 'p-8')}>
              <Outlet />
            </div>
          </FluentProvider>
          <div
            className={mergeClasses(
              classes['form-banner'],
              'p-12 overflow-hidden flex flex-col gap-6 flex-1 relative'
            )}
          >
            <h3 className='text-4xl font-bold'>Gestión Médica</h3>
            <p className='text-xl opacity-50'>
              Gestiona todos los procesos médicos, medicamentos, citas desde un
              solo sitio.
            </p>
            <AvatarGroup layout='stack'>
              {partitionedItems.inlineItems.map((name) => (
                <AvatarGroupItem name={name} key={name} />
              ))}
              {partitionedItems.overflowItems && (
                <AvatarGroupPopover>
                  {partitionedItems.overflowItems.map((name) => (
                    <AvatarGroupItem name={name} key={name} />
                  ))}
                </AvatarGroupPopover>
              )}
            </AvatarGroup>
          </div>
        </div>
      </Card>
    </main>
  );
};

export default AuthLayout;
