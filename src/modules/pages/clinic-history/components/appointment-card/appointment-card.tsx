import { Button, Tag } from '@fluentui/react-components';
import dayjs from 'dayjs';

interface AppointmentCardProps {
  name: string;
  date: Date | string;
  onClick?: () => void;
}

const AppointmentCard = ({ name, date, onClick }: AppointmentCardProps) => {
  return (
    <div className='bg-white bg-opacity-5 p-4 flex flex-col items-center gap-2 rounded-md w-32 max-w-32'>
      <div className='h-10 flex items-center'>
        <p className='font-semibold text-center overflow-hidden text-ellipsis line-clamp-2'>
          {name}
        </p>
      </div>
      <Tag>{dayjs(date).format('HH:MM a')}</Tag>
      <div className='flex-1' />
      <Button appearance='primary' onClick={onClick}>
        Atender
      </Button>
    </div>
  );
};

export default AppointmentCard;
