import {
  mergeClasses,
  Avatar,
  Menu,
  MenuTrigger,
  Button,
  Persona,
  MenuPopover,
  MenuList,
  MenuItem,
} from '@fluentui/react-components';
import { Outlet } from 'react-router-dom';
import {
  ClipboardBulletListLtrRegular,
  ArrowExitFilled,
  PersonRegular,
} from '@fluentui/react-icons';
import { useStyles } from './general.styles';
import { useUser } from 'hooks/user.hook';

const GeneralLayout = () => {
  const user = useUser();

  const classes = useStyles();

  return (
    <main className={classes.layout}>
      <div className={mergeClasses(classes.container, 'flex')}>
        {/* <div className='h-full hidden md:flex'>Sidenav</div> */}
        <div className={mergeClasses(classes.content, 'flex-auto')}>
          <nav className={mergeClasses(classes.navbar, 'w-full max-w-[100vw]')}>
            <aside className='h-full flex items-center gap-3 max-w-[85%]'>
              <Avatar
                size={36}
                color='cornflower'
                icon={
                  <ClipboardBulletListLtrRegular
                    fontSize={24}
                    className='opacity-70'
                  />
                }
              />
              <h1 className={mergeClasses(classes.title, 'truncate')}>
                Historia Clínica
              </h1>
            </aside>
            <aside className='h-full flex'>
              <Menu>
                <MenuTrigger disableButtonEnhancement>
                  <Button appearance='transparent' className='h-full'>
                    <Persona
                      textPosition='before'
                      name={user.name as string}
                      presence={{ status: 'available' }}
                      secondaryText={user.specialization as string}
                      avatar={{ color: 'colorful' }}
                    />
                  </Button>
                </MenuTrigger>
                <MenuPopover>
                  <MenuList>
                    <MenuItem icon={<PersonRegular />} disabled>
                      Perfil
                    </MenuItem>
                    <MenuItem icon={<ArrowExitFilled />}>
                      Cerrar sesión
                    </MenuItem>
                  </MenuList>
                </MenuPopover>
              </Menu>
            </aside>
          </nav>
          <div className='relative overflow-x-hidden h-full'>
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default GeneralLayout;
