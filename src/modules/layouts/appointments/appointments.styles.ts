import { makeStyles, tokens } from '@fluentui/react-components';
import tw from 'twin.macro';

export const useStyles = makeStyles({
  'tab-container': {
    ...tw`border-b z-[1]`,
    'background-color': tokens.colorNeutralBackground4Selected,
    'border-color': tokens.colorNeutralBackground3Pressed,
  },
});
