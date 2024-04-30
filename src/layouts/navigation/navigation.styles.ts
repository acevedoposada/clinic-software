import { makeStyles, tokens } from '@fluentui/react-components';
import tw from 'twin.macro';

export const useStyles = makeStyles({
  bar: {
    ...tw`w-full h-11 border-b flex items-center`,
    'background-color': tokens.colorNeutralBackground4Selected,
    'border-color': tokens.colorNeutralBackground3Pressed,
  },
  link: {
    ...tw`w-[4.75rem] flex items-center`,
    color: tokens.colorPaletteCornflowerBorderActive,
  },
});
