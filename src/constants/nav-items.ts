import {
  CalendarRtlFilled,
  CalendarRtlRegular,
  CertificateFilled,
  CertificateRegular,
  ClipboardBulletListLtrFilled,
  ClipboardBulletListLtrRegular,
  FluentIcon,
  HomeFilled,
  HomeRegular,
  PillFilled,
  PillRegular,
} from '@fluentui/react-icons';
import { MainRoutes, Routes } from './routes';

export interface NavItemType {
  Icon: FluentIcon;
  ActiveIcon: FluentIcon;
  title: string;
  route: Routes;
  disabled?: boolean;
}

export const navItems: Record<MainRoutes, NavItemType> = {
  [Routes.HOME]: {
    title: 'Inicio',
    Icon: HomeRegular,
    ActiveIcon: HomeFilled,
    route: Routes.HOME,
    disabled: true,
  },
  [Routes.APPOINTMENTS]: {
    title: 'Citas',
    Icon: CalendarRtlRegular,
    ActiveIcon: CalendarRtlFilled,
    route: Routes.APPOINTMENTS,
    disabled: false,
  },
  [Routes.MEDICAMENTS]: {
    title: 'Medicamentos',
    Icon: PillRegular,
    ActiveIcon: PillFilled,
    route: Routes.MEDICAMENTS,
    disabled: true,
  },
  [Routes.EXAMS]: {
    title: 'Exámenes',
    Icon: CertificateRegular,
    ActiveIcon: CertificateFilled,
    route: Routes.EXAMS,
    disabled: true,
  },
  [Routes.CLINIC_HISTORY]: {
    title: 'Historia Clínica',
    Icon: ClipboardBulletListLtrRegular,
    ActiveIcon: ClipboardBulletListLtrFilled,
    route: Routes.CLINIC_HISTORY,
    disabled: false,
  },
};
