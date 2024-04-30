import { mergeClasses } from '@fluentui/react-components';
import { AddSquareRegular } from '@fluentui/react-icons';

const Title = ({ title, className }: { title: string; className?: string }) => (
  <h3
    className={mergeClasses(
      'font-medium flex items-center gap-2 text-green-600 my-3',
      className
    )}
  >
    <AddSquareRegular fontSize={18} /> {title}
  </h3>
);

export default Title;
