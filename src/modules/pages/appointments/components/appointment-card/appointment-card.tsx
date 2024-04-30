import {
  Card,
  mergeClasses,
  CardFooter,
  Button,
  ButtonProps,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
} from '@fluentui/react-components';
import {
  CalendarClockRegular,
  CalendarCancelRegular,
  WalletCreditCardRegular,
  MoreVerticalRegular,
} from '@fluentui/react-icons';
import dayjs from 'dayjs';
import _ from 'lodash';

import { useStyles } from './appointment-card.styles';

const AppointmentCard = () => {
  const classes = useStyles();

  const scheduleOptions = [
    { Icon: CalendarClockRegular, title: 'Reprogramar' },
    { Icon: CalendarCancelRegular, title: 'Cancelar' },
    {
      Icon: WalletCreditCardRegular,
      title: 'Pagar cita',
      buttonAppearance: 'primary',
    },
  ];

  return (
    <Card>
      <div
        className={mergeClasses(
          classes['card-content'],
          'p-3 flex flex-col md:flex-row gap-4 md:gap-0'
        )}
      >
        <div className='w-full md:max-w-80 text-2xl font-bold'>
          <p>{_.capitalize(dayjs().format('dddd, DD [de] MMMM'))}</p>
          <p>{dayjs().format('HH:MM a')}</p>
        </div>
        <div className='flex-1'>
          <h3 className='text-xl font-bold'>Consulta ortopedista salud</h3>
          <p className='text-md font-medium'>Jane Doe</p>
          <a href='#'>Centro de salud</a>
        </div>
        <div>
          <span className={classes.pay}>
            <b>Cuota moderadora: $4.500</b>
          </span>
        </div>
      </div>
      <CardFooter className='justify-end'>
        <span className='hidden md:flex gap-3'>
          {_.map(scheduleOptions, ({ Icon, title, buttonAppearance }, idx) => (
            <Button
              key={idx}
              icon={<Icon />}
              appearance={buttonAppearance as ButtonProps['appearance']}
            >
              {title}
            </Button>
          ))}
        </span>
        <span className='flex gap-3 md:hidden'>
          <Button icon={<WalletCreditCardRegular />} appearance='primary'>
            Pagar Cita
          </Button>
          <Menu>
            <MenuTrigger>
              <Button icon={<MoreVerticalRegular />} />
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                {_.map(
                  scheduleOptions.filter((i) => !i.buttonAppearance),
                  ({ Icon, title }, idx) => (
                    <MenuItem key={idx} icon={<Icon />}>
                      {title}
                    </MenuItem>
                  )
                )}
              </MenuList>
            </MenuPopover>
          </Menu>
        </span>
      </CardFooter>
    </Card>
  );
};

export default AppointmentCard;
