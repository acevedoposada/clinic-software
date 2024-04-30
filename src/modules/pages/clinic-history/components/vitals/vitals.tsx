import {
  DesktopPulseRegular,
  FluentIcon,
  HeartPulseRegular,
  HeartRegular,
  PersonWalkingRegular,
  RulerRegular,
  ScalesRegular,
  TemperatureRegular,
} from '@fluentui/react-icons';
import { useClinicHistoryStore } from 'store/clinic-history/clinic-history.store';

interface VitalItemProps {
  title: string;
  Icon: FluentIcon;
  value: string;
}

const VitalItem = ({ title, Icon, value }: VitalItemProps) => {
  return (
    <div className='flex items-center gap-3'>
      <Icon fontSize={20} />
      <p className='font-medium'>{title}</p>
      <span className='block flex-1' />
      <p className='opacity-70'>{value}</p>
    </div>
  );
};

const Vitals = () => {
  const vitals = useClinicHistoryStore((state) => state.vitals);

  return (
    <div className='flex flex-col gap-3'>
      <VitalItem
        title='Altura'
        Icon={RulerRegular}
        value={`${vitals.height} mts`}
      />
      <VitalItem
        title='Peso'
        Icon={ScalesRegular}
        value={`${vitals.weight} Kg`}
      />
      <VitalItem
        title='Masa Corporal'
        Icon={PersonWalkingRegular}
        value={`${vitals.bodyMass} imc`}
      />
      <VitalItem title='Temperatura' Icon={TemperatureRegular} value='32 °C' />
      <VitalItem
        title='Frecuencia Respiratoria'
        Icon={DesktopPulseRegular}
        value={`${vitals.breathingFrequency} r/m`}
      />
      <VitalItem
        title='Presión Arterial'
        Icon={HeartPulseRegular}
        value={`${vitals.bloodPresure} mmHg`}
      />
      <VitalItem
        title='Frecuencia Cardiaca'
        Icon={HeartRegular}
        value={`${vitals.hearthRate} l/m`}
      />
    </div>
  );
};

export default Vitals;
