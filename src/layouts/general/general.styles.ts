import {
  makeStyles,
  tokens,
  typographyStyles,
} from '@fluentui/react-components';
import tw from 'twin.macro';

export const useStyles = makeStyles({
  layout: {
    ...tw`w-full h-screen flex`,
    '@media (pointer:none), (pointer:coarse)': {
      ...tw`h-[-webkit-fill-available]`,
    },
  },
  container: {
    'background-color': tokens.colorNeutralBackground1Selected,
    ...tw`absolute top-0 left-0 pb-16 md:pb-0 h-full w-full`,
  },
  content: {
    ...tw`flex flex-col relative max-w-full`,
    'box-shadow': '0 0 1rem rgba(0, 0, 0, 0.6)',
  },
  navbar: {
    'border-color': tokens.colorNeutralBackground3Pressed,
    ...tw`h-16 min-h-[4rem] flex items-center justify-between px-4 w-full border-b`,
    'background-color': tokens.colorNeutralBackground1Pressed,
  },
  title: {
    ...typographyStyles.subtitle2Stronger,
    'font-size': '1.1rem',
  },
});
