import { makeStyles, tokens } from '@fluentui/react-components';
import tw from 'twin.macro';

export const useStyles = makeStyles({
  'fixed-user-info': {
    ...tw`w-full border-b flex items-center h-14`,
    'background-color': tokens.colorNeutralBackground4Selected,
    'border-color': tokens.colorNeutralBackground3Pressed,
  },
});
