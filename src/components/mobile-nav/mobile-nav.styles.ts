import {
  makeStyles,
  tokens,
  typographyStyles,
} from '@fluentui/react-components';
import tw from 'twin.macro';

const useStyles = makeStyles({
  container: {
    backgroundColor: tokens.colorNeutralBackground4,
    'border-color': tokens.colorNeutralForegroundDisabled,
    ...tw`fixed bottom-0 left-0 w-full h-16 md:hidden border-t flex justify-evenly`,
  },
  button: {
    ...tw`w-[5rem] px-1 flex flex-col items-center justify-center text-center`,
  },
  'button-label': {
    ...typographyStyles.caption1,
    ...tw`w-[5rem] text-center px-1 text-[10px]`,
  },
  'active-button': {
    color: tokens.colorCompoundBrandForeground1,
    ...tw`text-[10px]`,
  },
});

export default useStyles;
